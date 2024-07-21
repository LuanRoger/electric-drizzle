import { randomUUID } from "node:crypto"

export function generateUuid(): string {
    const uuid = randomUUID()
    return uuid
}