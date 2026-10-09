export type Message = {
  type: "outgoing" | "incoming";
  messageId: string;
  text: string;
};

export type ChatsStoreState = {
  chats: Record<string, Message[]>;
};
