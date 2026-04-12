import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import { getTodos } from "@/actions/db";
import CreateTodoForm from "@/components/create-todo-form";
import TodoTable from "@/components/todo-table";
import { useTodos } from "@/hooks/use-todos";
import type { Todo } from "@/types/todos";

interface HomePageContentProps {
  todosPromise: Promise<Todo[]>;
}

function HomePageContent({ todosPromise }: HomePageContentProps) {
  const {
    isPending,
    handleCreateTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todos,
  } = useTodos(todosPromise);

  return (
    <div className="space-y-4">
      <CreateTodoForm isPending={isPending} onCreateTodo={handleCreateTodo} />
      <TodoTable
        isPending={isPending}
        onDeleteTodo={handleDeleteTodo}
        onToggleDone={handleToggleTodo}
        todos={todos}
      />
    </div>
  );
}

function HomePage() {
  const allTodosPromise = getTodos();

  return (
    <Suspense fallback={<div>Loading todos...</div>}>
      <HomePageContent todosPromise={allTodosPromise} />
    </Suspense>
  );
}

export const Route = createFileRoute("/")({
  component: HomePage,
});
