import { getRouteApi, useRouterState } from "@tanstack/react-router";
import { Chat, ChatsList } from "@/entities/chat";

const routeApi = getRouteApi("/chats");

export const ChatsPage = () => {
  const { chatId } = routeApi.useSearch();

  return (
    <main>
      <ChatsList />
      <Chat chatId={chatId}></Chat>
    </main>
  );
};
