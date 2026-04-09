import { Trash2Icon } from "lucide-react";
import { use } from "react";
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
  todosPromise: Promise<Todo[]>;
}

export default function TodoTable({ todosPromise }: TodoTableProps) {
  const todos = use(todosPromise);

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
        {todos.map((todo) => (
          <TableRow key={`todo-table-row-${todo.id}`}>
            <TableCell>{todo.id}</TableCell>
            <TableCell>{todo.title}</TableCell>
            <TableCell>
              <Checkbox checked={todo.done} />
            </TableCell>
            <TableCell>
              <Button size="icon" variant="ghost">
                <Trash2Icon />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
