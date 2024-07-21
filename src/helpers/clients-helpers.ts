import { Client } from "@/lib/types/client";

interface CreateClient {
    name: string;
    email: string;
}

export async function createNewClient(clientInfo: CreateClient) {
    //Delay to simulate a request
    await new Promise((resolve) => setTimeout(resolve, 1000));
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
