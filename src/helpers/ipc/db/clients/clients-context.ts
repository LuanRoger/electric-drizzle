import { CreateClient } from "@/lib/db/queries/clients_queries";
import { CREATE_NEW_CLIENT, GET_ALL_CLIENTS } from "./clients-channels";

export function exposeClientsContext() {
    const { contextBridge, ipcRenderer } = window.require("electron");
    contextBridge.exposeInMainWorld("electronWindow", {
        createNewClient: (clientData: CreateClient) => ipcRenderer.invoke(CREATE_NEW_CLIENT, clientData),
        getAllClients: () => ipcRenderer.invoke(GET_ALL_CLIENTS),
    })
}