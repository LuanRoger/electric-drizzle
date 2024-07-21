import { Control } from "react-hook-form";
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import React from "react";

interface RegisterClientInputsProps {
    control: Control<
        {
            name: string;
            email: string;
        },
        any
    >;
}

export default function RegisterClientInputs({ control }: RegisterClientInputsProps) {
    return (
        <div>
            <FormField
                control={control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                            <Input placeholder="Nome" {...field} />
                        </FormControl>
                        <FormDescription>Nome do cliente</FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input placeholder="Email" {...field} />
                        </FormControl>
                        <FormDescription>Email do cliente</FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
}
