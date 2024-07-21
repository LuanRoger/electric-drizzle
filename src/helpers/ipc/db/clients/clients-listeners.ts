import { CreateClient, createNewClient, getAllClients } from "@/lib/db/queries/clients_queries";
import { ipcMain } from "electron";
import { CREATE_NEW_CLIENT, GET_ALL_CLIENTS } from "./clients-channels";
import { Client } from "@/lib/types/client";

export function addClientsEventListeners() {
    ipcMain.handle(
        CREATE_NEW_CLIENT,
        async (_, clientData: CreateClient) => await createNewClientEvent(clientData)
    );
    ipcMain.handle(GET_ALL_CLIENTS, async (_) => await getAllClientsEvent());
}

function createNewClientEvent(clientData: CreateClient) {
    return createNewClient(clientData);
}

async function getAllClientsEvent(): Promise<Client[]> {
    const allClients = await getAllClients();

    return allClients;
}
