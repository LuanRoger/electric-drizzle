import { Client } from "@/lib/types/client";

interface CreateClient {
    name: string;
    email: string;
}

export async function createNewClient(clientInfo: CreateClient) {
    try {
        await window.dbClients.createNewClient(clientInfo);
        return true;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}

export async function getAllClients(): Promise<Client[]> {
    const result = await window.dbClients.getAllClients();

    return result as Client[];
}
