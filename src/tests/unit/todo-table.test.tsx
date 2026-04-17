import { render } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import TodoTable from "@/components/todo-table";

test("renders todo table empty state", () => {
  const { getByText } = render(
    <TodoTable
      isPending={false}
      onDeleteTodo={vi.fn()}
      onToggleDone={vi.fn()}
      todos={[]}
    />
  );

  expect(getByText("No todos yet.")).toBeInTheDocument();
  expect(getByText("Title")).toBeInTheDocument();
});
