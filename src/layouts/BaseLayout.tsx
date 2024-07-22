import React from "react";
import DragWindowRegion from "@/components/DragWindowRegion";
import { Toaster } from "@/components/ui/toaster";

export default function BaseLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <DragWindowRegion title="electric-drizzle"/>
            <main>{children}</main>
            <Toaster/>
        </>
    );
}
