import React, { useEffect, useState } from "react";
import ToggleTheme from "@/components/ToggleTheme";
import { useTranslation } from "react-i18next";
import LangToggle from "@/components/LangToggle";
import { Client } from "@/lib/types/client";
import { deleteClient, getAllClients } from "@/helpers/clients-helpers";
import ClientsTable from "@/components/ClientsTable";
import { ScrollArea } from "@/components/ui/scroll-area";
import NewClientDialog from "@/components/NewClientDialog";
import { useToast } from "@/components/ui/use-toast";

export default function HomePage() {
    const { t } = useTranslation();
    const { toast } = useToast();
    const [clients, setClients] = useState<Client[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchClients() {
            return await getAllClients();
        }

        fetchClients()
            .then((data) => setClients(data))
            .finally(() => setIsLoading(false));
    }, []);

    function deleteClientRequest(clientId: string) {
        setClients((prev) => prev.filter((client) => client.id !== clientId));
        toast({
            title: t("toast:clientDeletedTitle"),
            description: t("toast:clientDeletedDescription"),
        });
        deleteClient(clientId);
    }

    return (
        <div className="space-y-4 px-4">
            <header className="flex flex-row justify-between">
                <aside>
                    <LangToggle />
                </aside>
                <aside>
                    <ToggleTheme />
                </aside>
            </header>
            <div className="flex flex-col gap-4">
                <div className="flex flex-row items-end justify-between">
                    <div>
                        <NewClientDialog
                            onRegisterClient={(newClient) =>
                                setClients((prev) => [...prev, newClient])
                            }
                        />
                    </div>
                    <div>
                        <small> {t("homePage:registeredClients", { count: clients.length })}</small>
                    </div>
                </div>
                <ScrollArea className="h-[26rem]">
                    <ClientsTable clients={clients} onClientDeleteRequest={deleteClientRequest} />
                </ScrollArea>
            </div>
        </div>
    );
}
