import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { router } from "@/shared/router";
import { Button } from "@/shared/ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/shared/ui/field";
import { Input } from "@/shared/ui/input";
import { authScheme } from "../model/schemes";
import { useAuthStore } from "../model/useAuthStore";

type FormData = z.infer<typeof authScheme>;

export const LoginForm = () => {
  const form = useForm<FormData>({
    defaultValues: {
      idInstance: "",
      apiTokenInstance: "",
    },
    resolver: zodResolver(authScheme),
  });

  const onSubmit = (data: FormData) => {
    useAuthStore.setState(data);
    router.navigate({ to: "/chats" });
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
      <FieldGroup>
        <Controller
          name="idInstance"
          control={form.control}
          render={({ field, fieldState }) => {
            return (
              <Field>
                <FieldLabel htmlFor="form-idInstance">ID Instance</FieldLabel>
                <Input
                  {...field}
                  id="form-idInstance"
                  aria-invalid={fieldState.invalid}
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            );
          }}
        />
        <Controller
          name="apiTokenInstance"
          control={form.control}
          render={({ field, fieldState }) => {
            return (
              <Field>
                <FieldLabel htmlFor="form-apiTokenInstance">
                  API Token Instance
                </FieldLabel>
                <Input
                  {...field}
                  id="form-apiTokenInstance"
                  aria-invalid={fieldState.invalid}
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            );
          }}
        />
        <Button type="submit">Login</Button>
      </FieldGroup>
    </form>
  );
};
