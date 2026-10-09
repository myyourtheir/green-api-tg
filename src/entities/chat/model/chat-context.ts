import { createContext, useContext } from "react";

type ChatContextT = {
  chatId: string | undefined;
};
export const ChatContext = createContext<ChatContextT>({ chatId: undefined });

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
};
