import { use, useOptimistic, useRef, useState, useTransition } from "react";
import { toast } from "sonner";
import { createTodo, deleteTodoById, updateTodoCheck } from "@/actions/db";
import type { Todo } from "@/types/todos";

type OptimisticTodoAction =
  | {
      todo: Todo;
      type: "create";
    }
  | {
      done: boolean;
      id: number;
      type: "toggle";
    }
  | {
      id: number;
      type: "delete";
    };

function reduceOptimisticTodos(
  currentTodos: Todo[],
  action: OptimisticTodoAction
): Todo[] {
  if (action.type === "create") {
    return [...currentTodos, action.todo];
  }

  if (action.type === "toggle") {
    return currentTodos.map((todo) => {
      if (todo.id !== action.id) {
        return todo;
      }

      return {
        ...todo,
        done: action.done,
      };
    });
  }

  return currentTodos.filter((todo) => todo.id !== action.id);
}

export function useTodos(todosPromise: Promise<Todo[]>) {
  const initialTodos = use(todosPromise);
  const [todos, setTodos] = useState(initialTodos);
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    reduceOptimisticTodos
  );
  const [isPending, startTransition] = useTransition();
  const optimisticIdRef = useRef(0);

  const createOptimisticTodo = (title: string): Todo => {
    optimisticIdRef.current -= 1;

    return {
      done: false,
      id: optimisticIdRef.current,
      title,
    };
  };

  const handleCreateTodo = (title: string) => {
    const optimisticTodo = createOptimisticTodo(title);

    startTransition(async () => {
      addOptimisticTodo({ todo: optimisticTodo, type: "create" });

      try {
        const createdTodo = await createTodo(title);
        setTodos((currentTodos) => [...currentTodos, createdTodo]);
        toast.success("Todo created successfully!");
      } catch {
        toast.error("Failed to create todo. Please try again.");
      }
    });
  };

  const handleToggleTodo = (id: number, done: boolean) => {
    startTransition(async () => {
      addOptimisticTodo({ done, id, type: "toggle" });

      try {
        const updatedTodo = await updateTodoCheck(id, done);
        setTodos((currentTodos) =>
          currentTodos.map((todo) =>
            todo.id === updatedTodo.id ? updatedTodo : todo
          )
        );
      } catch {
        toast.error("Failed to update todo. Please try again.");
      }
    });
  };

  const handleDeleteTodo = (id: number) => {
    startTransition(async () => {
      addOptimisticTodo({ id, type: "delete" });

      try {
        const deletedTodo = await deleteTodoById(id);
        setTodos((currentTodos) =>
          currentTodos.filter((todo) => todo.id !== deletedTodo.id)
        );
        toast.success("Todo deleted successfully!");
      } catch {
        toast.error("Failed to delete todo. Please try again.");
      }
    });
  };

  return {
    isPending,
    handleCreateTodo,
    handleToggleTodo,
    handleDeleteTodo,
    todos: optimisticTodos,
  };
}
