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
import { useTranslation } from "react-i18next";

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
    const { t } = useTranslation();

    return (
        <div>
            <FormField
                control={control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>{t("registerClientDialog:nameField")}</FormLabel>
                        <FormControl>
                            <Input placeholder={t("registerClientDialog:nameField")} {...field} />
                        </FormControl>
                        <FormDescription>
                            {t("registerClientDialog:nameFieldDescription")}
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>{t("registerClientDialog:emailField")}</FormLabel>
                        <FormControl>
                            <Input placeholder={t("registerClientDialog:emailField")} {...field} />
                        </FormControl>
                        <FormDescription>
                            {t("registerClientDialog:emailFieldDescription")}
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
}
