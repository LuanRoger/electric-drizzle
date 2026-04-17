import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { type TodoCreate, todoCreate } from "@/utils/schemas";
import { Button } from "./ui/button";

interface CreateTodoFormProps {
  isPending: boolean;
  onCreateTodo: (title: string) => void;
}

export default function CreateTodoForm({
  isPending,
  onCreateTodo,
}: CreateTodoFormProps) {
  const { control, handleSubmit, reset } = useForm<TodoCreate>({
    resolver: zodResolver(todoCreate),
    defaultValues: {
      title: "",
    },
  });

  function onSubmit(data: TodoCreate) {
    onCreateTodo(data.title);
    reset();
  }

  return (
    <form
      className="flex flex-col rounded-md border border-muted p-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        control={control}
        name="title"
        render={({ field, fieldState }) => {
          return (
            <Field>
              <FieldLabel>Title</FieldLabel>
              <Input {...field} disabled={isPending} />
              <FieldDescription>
                This is the title of your todo item.
              </FieldDescription>
              {fieldState.error && (
                <FieldError>{fieldState.error.message}</FieldError>
              )}
            </Field>
          );
        }}
      />
      <Button className="self-end" disabled={isPending} type="submit">
        {isPending ? "Saving..." : "Create"}
      </Button>
    </form>
  );
}
