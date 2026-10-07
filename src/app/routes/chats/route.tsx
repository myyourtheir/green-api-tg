import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { ChatsPage } from "@/pages/chats-page";

const RouteComponent = () => {
  return <ChatsPage />;
};

const searchParams = z.object({
  chatId: z.union([z.string()]).optional(),
});

export const Route = createFileRoute("/chats")({
  component: RouteComponent,
  validateSearch: searchParams,
});
