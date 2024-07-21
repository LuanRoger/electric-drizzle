import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Client } from "@/lib/types/client";

interface ClientTableProps {
    clients: Client[];
}

const tempMockClients: Client[] = [
    { id: "asdasd", name: "Test", email: "test@test.com" },
    { id: "asdasd", name: "Test", email: "test@test.com" },
    { id: "asdasd", name: "Test", email: "test@test.com" },
    { id: "asdasd", name: "Test", email: "test@test.com" },
    { id: "asdasd", name: "Test", email: "test@test.com" },
    { id: "asdasd", name: "Test", email: "test@test.com" },
    { id: "asdasd", name: "Test", email: "test@test.com" },
    { id: "asdasd", name: "Test", email: "test@test.com" },
    { id: "asdasd", name: "Test", email: "test@test.com" },
];

export default function ClientsTable({ clients }: ClientTableProps) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Id</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {clients.map((client) => (
                    <TableRow key={client.id}>
                        <TableCell>{client.id}</TableCell>
                        <TableCell>{client.name}</TableCell>
                        <TableCell>{client.email}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
