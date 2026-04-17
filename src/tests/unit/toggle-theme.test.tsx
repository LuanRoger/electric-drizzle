import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import ToggleTheme from "@/components/toggle-theme";

test("renders theme toggle button with moon icon", () => {
  const { getByRole } = render(<ToggleTheme />);
  const button = getByRole("button");
  const icon = button.querySelector("svg");

  expect(button).toBeInTheDocument();
  expect(icon).toBeInTheDocument();
  expect(icon?.classList).toContain("lucide-moon");
});
