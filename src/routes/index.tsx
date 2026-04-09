import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { createTodo, getTodos } from "@/actions/db";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { type TodoCreate, todoCreate } from "@/utils/schemas";

function HomePage() {
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
      await createTodo(title);
    });
  }

  useEffect(() => {
    console.log("Fetching todos...");
    getTodos()
      .then((todos) => {
        console.log("Fetched todos:", todos);
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  });

  return (
    <div>
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
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: HomePage,
});
