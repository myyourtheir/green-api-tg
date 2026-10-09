import { cn } from "cn";
import { ChatContext } from "../model/chat-context";
import { ChatHeader } from "./ChatHeader";
import { InputField } from "./InputField";
import { Messages } from "./Messages";

type ChatProps = {
  chatId: string | undefined;
  className?: string;
};
export const Chat = ({ className, chatId }: ChatProps) => {
  if (!chatId) return null;
  return (
    <ChatContext.Provider value={{ chatId }}>
      <div className={cn("flex flex-col gap-2 my-4 mx-2 ", className)}>
        <ChatHeader />
        <Messages className="grow" />
        <InputField />
      </div>
    </ChatContext.Provider>
  );
};
