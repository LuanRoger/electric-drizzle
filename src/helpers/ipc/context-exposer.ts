import { exposeClientsContext } from "./db/clients/clients-context";
import { exposeThemeContext } from "./theme/theme-context";
import { exposeWindowContext } from "./window/window-context";

export default function exposeContexts() {
    exposeWindowContext();
    exposeThemeContext();
    exposeClientsContext();
}
