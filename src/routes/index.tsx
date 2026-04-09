import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import { getTodos } from "@/actions/db";
import CreateTodoForm from "@/components/create-todo-form";
import TodoTable from "@/components/todo-table";

function HomePage() {
  const allTodosPromise = getTodos();

  return (
    <div>
      <CreateTodoForm />
      <Suspense fallback={<div>Loading todos...</div>}>
        <TodoTable todosPromise={allTodosPromise} />
      </Suspense>
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: HomePage,
});
