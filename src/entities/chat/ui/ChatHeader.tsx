import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { useGetContactInfo } from "../lib/useGetContactInfo";
import { useChatContext } from "../model/chat-context";
import { ChatImage } from "./ChatImage";

export const ChatHeader = () => {
  const { chatId } = useChatContext();
  const { data: contact, isPending } = useGetContactInfo({ chatId });

  return (
    <div className="flex gap-2 items-center p-0.5 h-11 rounded-4xl border border-input font-semibold">
      <Link to="/chats" search={{ chatId: undefined }} className="sm:hidden">
        <Button variant="ghost" size={"icon"}>
          <ArrowLeft />
        </Button>
      </Link>

      <ChatImage chatId={chatId} />
      {isPending ? null : contact?.name}
    </div>
  );
};
