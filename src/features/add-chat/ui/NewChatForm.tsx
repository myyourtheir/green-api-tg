import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useChatsStore } from "@/entities/chat/model/useChatsStore";
import { Button } from "@/shared/ui/button";
import { Field, FieldError, FieldLabel } from "@/shared/ui/field";
import { Input } from "@/shared/ui/input";
import { useCheckAccount } from "../lib/useCheckAccount";
import { newChatScheme } from "../model/newChatScheme";
import { Loader } from "@/shared/ui/loader";

type FormScheme = z.infer<typeof newChatScheme>;

type NewChatFormProps = {
  onSubmit: (data: FormScheme) => void;
};
export const NewChatForm = ({ onSubmit }: NewChatFormProps) => {
  const { checkAccount, isPending } = useCheckAccount();
  const form = useForm<FormScheme>({
    defaultValues: { phoneNumber: "" },
    resolver: zodResolver(newChatScheme),
  });

  const handleSubmit = async (data: FormScheme) => {
    const resp = await checkAccount(parseInt(data.phoneNumber));
    if (resp.error) {
      form.setError("phoneNumber", { message: resp.error });
      return;
    }

    useChatsStore.setState((state) => {
      state.chats.push(resp.chatId.toString());
    });
    onSubmit(data);
  };

  return (
    <form
      onSubmit={form.handleSubmit(handleSubmit)}
      className="flex flex-col gap-2"
    >
      <Controller
        name="phoneNumber"
        control={form.control}
        render={({ field, fieldState }) => {
          return (
            <Field>
              <FieldLabel htmlFor="form-phoneNumber">Phone number</FieldLabel>
              <Input
                {...field}
                id="form-phoneNumber"
                aria-invalid={fieldState.invalid}
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          );
        }}
      />
      <Button className={"self-end"} type="submit" disabled={isPending}>
        {isPending ? <Loader /> : "Add"}
      </Button>
    </form>
  );
};
