import { Link } from "@tanstack/react-router";

type ChatListItemProps = {
  chatId: string;
};
export const ChatListItem = ({ chatId }: ChatListItemProps) => {
  return (
    <li className="h-18 ">
      <Link to={`/chats`} search={{ chatId }} className="h-full flex gap-2">
        <div
          role="img"
          className=" shrink-0 rounded-full border h-14 w-14 flex items-center justify-center"
        >
          img
        </div>
        <div className="flex-1 w-full overflow-hidden">
          <div>{`chatname - ${chatId}`}</div>
          <div className="truncate"> {crypto.randomUUID()} last message </div>
        </div>
      </Link>
    </li>
  );
};
