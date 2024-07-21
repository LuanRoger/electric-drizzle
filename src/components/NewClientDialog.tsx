import React, { useRef, useState } from "react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { RegisterClientSchemaType, registerClientSchema } from "@/lib/forms/register-client-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import RegisterClientInputs from "./RegisterClientInputs";
import { Form } from "./ui/form";
import SubmitButton from "./SubmitButton";
import { createNewClient } from "@/helpers/clients-helpers";
import { Client } from "@/lib/types/client";
import { useToast } from "./ui/use-toast";

interface NewClientDialogProps {
    onRegisterClient?: ((newClient: Client) => void) | undefined;
}

export default function NewClientDialog({ onRegisterClient }: NewClientDialogProps) {
    const form = useForm<RegisterClientSchemaType>({
        resolver: zodResolver(registerClientSchema),
        defaultValues: {
            name: "",
            email: "",
        },
    });
    const { toast } = useToast();
    const [isPendingRegister, setIsPendingRegister] = useState(false);

    function onClientRegistered(client: Client) {
        form.setFocus("name");
        form.reset();
        
        toast({
            title: "Cliente cadastrado",
            description: `O cliente ${client.name} foi cadastrado com sucesso.`,
        });
        onRegisterClient?.(client);
    }

    function onSubmit(data: RegisterClientSchemaType) {
        setIsPendingRegister(true);
        createNewClient(data)
            .then((client) => {
                if (!client) {
                    return;
                }
                onClientRegistered(client);
            })
            .finally(() => setIsPendingRegister(false));
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Cadastrar novo cliente</Button>
            </DialogTrigger>
            <DialogContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <DialogHeader>
                            <DialogTitle>Cadastrar novo cliente</DialogTitle>
                        </DialogHeader>
                        <RegisterClientInputs control={form.control} />
                        <DialogFooter className="gap-2">
                            <DialogClose>Cancelar</DialogClose>
                            <SubmitButton isLoading={isPendingRegister}>
                                {isPendingRegister ? "Cadastrando..." : "Cadastrar"}
                            </SubmitButton>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
