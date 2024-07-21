import { z } from "zod";

export const registerClientSchema = z.object({
    name: z.string().min(3).max(100),
    email: z.string().email().min(5).max(255),
})

export type RegisterClientSchemaType = z.infer<typeof registerClientSchema>;