import { getRouteApi } from "@tanstack/react-router";
import { cn } from "cn";
import { Chat, ChatsList } from "@/entities/chat";
import { Card } from "@/shared/ui/card";

const routeApi = getRouteApi("/chats");

export const ChatsPage = () => {
  const { chatId } = routeApi.useSearch();

  return (
    <main className="flex h-screen">
      <Card
        className={cn(
          {
            hidden: chatId,
          },
          "sm:flex p-0 ring-0 w-full sm:w-90 sm:m-4 sm:ring-1",
        )}
      >
        <ChatsList />
      </Card>
      <div
        className={cn(
          {
            hidden: !chatId,
            flex: chatId,
          },
          "w-full h-full sm:flex justify-center",
        )}
      >
        <Chat className="w-full sm:w-[min(100%,43.5rem)] " chatId={chatId} />
      </div>
    </main>
  );
};
