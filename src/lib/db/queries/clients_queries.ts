import { db } from "../db_client";
import { clients } from "@/lib/db/schemas/clients_schema";
import { generateUuid } from "@/lib/cripto";

export interface CreateClient {
    name: string;
    email: string;
}

export async function createNewClient(clientData: CreateClient) {
    const id = generateUuid()
    await db.insert(clients).values([
        {
            id: id,
            name: clientData.name,
            email: clientData.email,
        }
    ]);
}

export async function getAllClients() {
    const result = await db.query.clients.findMany({
        columns: {
            id: true,
            name: true,
            email: true,
        }
    })

    return result
}