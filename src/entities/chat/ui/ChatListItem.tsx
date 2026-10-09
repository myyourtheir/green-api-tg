import { useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { ChatImage } from "./ChatImage";

type ChatListItemProps = {
  chatId: string;
};
export const ChatListItem = ({ chatId }: ChatListItemProps) => {
  const random = useMemo(() => crypto.randomUUID(), []);
  return (
    <li className="h-18">
      <Link
        to={`/chats`}
        search={{ chatId }}
        className="h-full p-2 rounded-xl flex items-center gap-2"
        activeProps={{
          className: "bg-accent",
        }}
      >
        <ChatImage />
        <div className="flex-1 w-full overflow-hidden">
          <div className="font-semibold">{`Chat - ${chatId}`}</div>
          <div className="truncate"> {random} last message </div>
        </div>
      </Link>
    </li>
  );
};
