import { Trash2Icon } from "lucide-react";
import type { Todo } from "@/types/todos";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

interface TodoTableProps {
  isPending: boolean;
  onDeleteTodo: (id: number) => void;
  onToggleDone: (id: number, done: boolean) => void;
  todos: Todo[];
}

export default function TodoTable({
  isPending,
  onDeleteTodo,
  onToggleDone,
  todos,
}: TodoTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Done</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.length === 0 ? (
          <TableRow>
            <TableCell className="text-muted-foreground" colSpan={4}>
              No todos yet.
            </TableCell>
          </TableRow>
        ) : (
          todos.map((todo) => (
            <TableRow key={`todo-table-row-${todo.id}`}>
              <TableCell>{todo.id}</TableCell>
              <TableCell>{todo.title}</TableCell>
              <TableCell>
                <Checkbox
                  checked={todo.done}
                  disabled={isPending}
                  onCheckedChange={(checked) => {
                    onToggleDone(todo.id, checked === true);
                  }}
                />
              </TableCell>
              <TableCell>
                <Button
                  aria-label={`Delete todo "${todo.title}"`}
                  disabled={isPending}
                  onClick={() => {
                    onDeleteTodo(todo.id);
                  }}
                  size="icon"
                  variant="ghost"
                >
                  <Trash2Icon />
                </Button>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}
