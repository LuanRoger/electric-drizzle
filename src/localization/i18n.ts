import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    fallbackLng: "en",
    resources: {
        en: {
            homePage: {
                registerNewClientButton: "Register new client",
                idTableColumn: "ID",
                nameTableColumn: "Name",
                emailTableColumn: "Email",
                actionTableColumn: "Action",
                registeredClients: "Registered clients: {{count}}",
            },
            registerClientDialog: {
                registerClient: "Register client",
                nameField: "Name",
                emailField: "Email",
                nameFieldDescription: "Client's name",
                emailFieldDescription: "Client's email",
                cancelButton: "Cancel",
                submitButton: "Register",
                submitButtonLoading: "Registering...",
            },
            toast: {
                clientDeletedTitle: "Client deleted",
                clientRegisteredTitle: "Client registered",
                clientDeletedDescription: "The client was successfully removed.",
                clientRegisteredDescription: "The client {{name}} was successfully registered."
            }
        },
        "pt-BR": {
            homePage: {
                registerNewClientButton: "Cadastrar novo cliente",
                idTableColumn: "ID",
                nameTableColumn: "Nome",
                emailTableColumn: "Email",
                actionTableColumn: "Ação",
                registeredClients: "Clientes cadastrados: {{count}}",
            },
            registerClientDialog: {
                registerClient: "Cadastrar cliente",
                nameField: "Nome",
                emailField: "Email",
                nameFieldDescription: "Nome do cliente",
                emailFieldDescription: "Email do cliente",
                cancelButton: "Cancelar",
                submitButton: "Cadastrar",
                submitButtonLoading: "Cadastrando...",
            },
            toast: {
                clientDeletedTitle: "Cliente deletado",
                clientRegisteredTitle: "Cliente cadastrado",
                clientDeletedDescription: "O cliente foi removido com sucesso.",
                clientRegisteredDescription: "O cliente {{name}} foi cadastrado com sucesso."
            }
        },
    },
});
