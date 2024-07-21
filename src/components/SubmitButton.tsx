import React from "react";
import { Button } from "./ui/button";
import { LoaderCircle } from "lucide-react";

interface SubmitButtonProps {
    children: React.ReactNode;
    isLoading: boolean;
}

export default function SubmitButton({ children, isLoading }: SubmitButtonProps) {
    return (
        <Button type="submit" disabled={isLoading}>
            <span className="flex flex-row gap-2 items-center">
                <LoaderCircle size={16} className={isLoading ? "animate-spin" : "hidden"} />
                {children}
            </span>
        </Button>
    );
}
