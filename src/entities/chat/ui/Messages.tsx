import type { Ref } from "react";
import { cn } from "cn";
import { useChatContext } from "../model/chat-context";
import { useChatsStore } from "../model/useChatsStore";

type MessagesProps = {
  className?: string;
  ref: Ref<HTMLDivElement>;
};
export const Messages = ({ className, ref }: MessagesProps) => {
  const { chatId } = useChatContext();

  const messages = useChatsStore((s) => (!chatId ? [] : s.chats[chatId]));

  return (
    <div
      ref={ref}
      className={cn(
        " flex flex-col gap-2 overflow-y-auto p-2 scrollbar-thin",
        className,
      )}
    >
      {messages.map(({ messageId, text, type }) => {
        return (
          <div
            key={messageId}
            className={cn(
              "hyphens-auto whitespace-pre-wrap bg-accent p-1.5 rounded-xl w-fit max-w-3/4",
              {
                "ml-auto bg-zinc-300 ": type === "outgoing",
              },
            )}
          >
            {text}
          </div>
        );
      })}
    </div>
  );
};
