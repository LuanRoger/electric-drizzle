import { db } from "../db_client";
import { clients } from "@/lib/db/schemas/clients";
import { generateUuid } from "@/lib/cripto";

export interface CreateClient {
    name: string;
    email: string;
}

export async function createNewClient(clientData: CreateClient) {
    const id = generateUuid()
    const result = await db.insert(clients).values([
        {
            id: id,
            name: clientData.name,
            email: clientData.email,
        }
    ]).returning({
        id: clients.id,
        name: clients.name,
        email: clients.email,
    });

    return result[0]
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