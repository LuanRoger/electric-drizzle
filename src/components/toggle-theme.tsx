import { Moon } from "lucide-react";
import { toggleTheme } from "@/actions/theme";
import { Button } from "@/components/ui/button";

export default function ToggleTheme({ className }: { className?: string }) {
  return (
    <Button className={className} onClick={toggleTheme} size="icon">
      <Moon size={16} />
    </Button>
  );
}
