import { Client } from "@/lib/types/client";

interface CreateClient {
    name: string;
    email: string;
}

export async function createNewClient(clientInfo: CreateClient) {
    try {
        const result = await window.dbClients.createNewClient(clientInfo);
        return result as Client;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function getAllClients(): Promise<Client[]> {
    const result = await window.dbClients.getAllClients();

    return result as Client[];
}

export async function deleteClient(clientId: string) {
    const result = await window.dbClients.deleteClient(clientId);

    return result as string;
}