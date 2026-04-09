import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { createTodo } from "@/actions/db";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { type TodoCreate, todoCreate } from "@/utils/schemas";
import { Button } from "./ui/button";

export default function CreateTodoForm() {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(todoCreate),
    defaultValues: {
      title: "",
    },
  });
  const [isPending, startAction] = useTransition();

  function onSubmit(data: TodoCreate) {
    const { title } = data;

    startAction(async () => {
      try {
        await createTodo(title);
        toast.success("Todo created successfully!");
      } catch (error) {
        console.log("Error creating todo:", error);
        toast.error("Failed to create todo. Please try again.");
      }
    });
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
              <Input {...field} />
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
      <Button className="self-end" type="submit">
        Create
      </Button>
      {isPending && <p>Creating todo...</p>}
    </form>
  );
}
