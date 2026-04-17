import type React from "react";
import DragWindowRegion from "@/components/drag-window-region";
import { Toaster } from "@/components/ui/sonner";

interface BaseLayoutProps {
  children: React.ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <>
      <DragWindowRegion title="electron-shadcn" />
      <main className="h-screen p-2 pb-20">{children}</main>
      <Toaster />
    </>
  );
}
