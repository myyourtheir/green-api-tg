import { createFileRoute } from "@tanstack/react-router";
import { ChatsPage } from "@/pages/chats-page";

const RouteComponent = () => {
  return <ChatsPage />;
};

export const Route = createFileRoute("/chats")({
  component: RouteComponent,
});
