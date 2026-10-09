import { Link } from "@tanstack/react-router";
import { useGetContactInfo } from "../lib/useGetContactInfo";
import { ChatImage } from "./ChatImage";

type ChatListItemProps = {
  chatId: string;
};
export const ChatListItem = ({ chatId }: ChatListItemProps) => {
  const { data: contact } = useGetContactInfo({ chatId });

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
        <ChatImage chatId={chatId} />
        <div className="flex-1 w-full overflow-hidden">
          <div className="font-semibold">{contact?.name}</div>
        </div>
      </Link>
    </li>
  );
};
