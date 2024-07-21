import { Client } from "@/lib/types/client";

export interface CreateClient {
    name: string;
    email: string;
}

export async function createNewClient(clientInfo: CreateClient) {
    try {
        await window.clientsContext.createNewClient(clientInfo);
        return true;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}

export async function getAllClients(): Promise<Client[]> {
    const result = await window.clientsContext.getAllClients();

    return result as Client[];
}
