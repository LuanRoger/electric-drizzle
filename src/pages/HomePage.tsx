import React, { useEffect, useState } from "react";
import ToggleTheme from "@/components/ToggleTheme";
import { useTranslation } from "react-i18next";
import LangToggle from "@/components/LangToggle";
import { Client } from "@/lib/types/client";
import { getAllClients } from "@/helpers/clients-helpers";
import ClientsTable from "@/components/ClientsTable";
import { ScrollArea } from "@/components/ui/scroll-area";
import NewClientDialog from "@/components/NewClientDialog";

export default function HomePage() {
    const { t } = useTranslation();
    const [clients, setClients] = useState<Client[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [hasError, setHasError] = useState<boolean>(false);

    useEffect(() => {
        async function fetchClients() {
            return await getAllClients();
        }

        fetchClients()
            .then((data) => setClients(data))
            .catch((_) => setHasError(true))
            .finally(() => setIsLoading(false));
    }, []);

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
                        <small>Clientes cadastrados: {clients.length}</small>
                    </div>
                </div>
                <ScrollArea className="h-[26rem]">
                    <ClientsTable clients={clients} />
                </ScrollArea>
            </div>
        </div>
    );
}
