import { useChatsStore } from "../model/useChatsStore";
import { ChatListItem } from "./ChatListItem";

export const ChatsList = () => {
  const chats = useChatsStore((state) => state.chats);
  return (
    <ul className="p-4">
      {chats.map((chatId, index) => {
        return <ChatListItem key={index} chatId={chatId} />;
      })}
    </ul>
  );
};
