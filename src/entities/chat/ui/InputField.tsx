import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "cn";
import { SendHorizontal } from "lucide-react";
import { z } from "zod";
import { Button } from "@/shared/ui/button";
import { Loader } from "@/shared/ui/loader";
import { useSendMessage } from "../lib/useSendMessage";
import { useChatContext } from "../model/chat-context";
import { messageScheme } from "../model/messageScheme";
import { useChatsStore } from "../model/useChatsStore";

type FormScheme = z.infer<typeof messageScheme>;

type InputFieldProps = {
  onSendSuccess?: () => void;
};
export const InputField = ({ onSendSuccess }: InputFieldProps) => {
  const { sendMessage, isPending } = useSendMessage();
  const { chatId } = useChatContext();
  const form = useForm<FormScheme>({
    defaultValues: { message: "" },
    resolver: zodResolver(messageScheme),
  });

  const onSubmit = (data: FormScheme) => {
    if (!chatId) return;
    sendMessage({ chatId, message: data.message })
      .then(({ messageId }) => {
        form.setValue("message", "");

        useChatsStore.setState((draft) => {
          const messages = draft.chats[chatId];
          if (!messages) return;
          messages.push({
            type: "outgoing",
            messageId,
            text: data.message,
          });
          return draft;
        });
      })
      .then(() => {
        onSendSuccess?.();
      });
  };

  return (
    <form
      className="flex items-center h-11 w-full min-w-0 rounded-4xl border border-input bg-input/30 pr-1 pl-3 py-1"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <Controller
        control={form.control}
        name="message"
        render={({ field }) => {
          return (
            <input
              {...field}
              type="text"
              className={cn(
                "outline-none placeholder:text-muted-foreground focus-visible:ring-0 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 text-base",
                "flex-1",
              )}
              autoComplete="off"
            />
          );
        }}
      />

      <Button type="submit" size={"icon"} className={"w-10"}>
        {isPending ? <Loader /> : <SendHorizontal />}
      </Button>
    </form>
  );
};
