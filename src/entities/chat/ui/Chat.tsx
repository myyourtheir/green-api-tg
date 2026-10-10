import { useRef } from "react";
import { cn } from "cn";
import { useReceiveMessage } from "../lib/useReceiveMessage";
import { ChatContext } from "../model/chat-context";
import { ChatHeader } from "./ChatHeader";
import { InputField } from "./InputField";
import { Messages } from "./Messages";

type ChatProps = {
  chatId: string | undefined;
  className?: string;
};
export const Chat = ({ className, chatId }: ChatProps) => {
  const messagesRef = useRef<HTMLDivElement>(null);

  const onMessageAdded = () => {
    messagesRef.current?.scrollTo(0, messagesRef.current?.scrollHeight);
  };

  useReceiveMessage({ onMessageAdded });

  if (!chatId) return null;

  return (
    <ChatContext.Provider value={{ chatId }}>
      <div
        className={cn(
          "flex flex-col gap-2 my-4 mx-2 overflow-hidden",
          className,
        )}
      >
        <ChatHeader />
        <Messages className="grow" ref={messagesRef} />
        <InputField onSendSuccess={onMessageAdded} />
      </div>
    </ChatContext.Provider>
  );
};
