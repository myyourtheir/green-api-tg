import { cn } from "cn";
import { useChatsStore } from "../model/useChatsStore";
import { ChatListItem } from "./ChatListItem";

type ChatsListProps = {
  className?: string;
};
export const ChatsList = ({ className }: ChatsListProps) => {
  const chats = useChatsStore((state) => state.chats);
  return (
    <ul className={cn("p-2 overflow-auto select-none", className)}>
      {!chats.length ? (
        <div className="text-center">Your chats will be here</div>
      ) : (
        chats.map((chatId, index) => {
          return <ChatListItem key={index} chatId={chatId} />;
        })
      )}
    </ul>
  );
};
