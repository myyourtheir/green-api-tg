import { cn } from "cn";
import { Loader } from "@/shared/ui/loader";
import { useGetContactInfo } from "../lib/useGetContactInfo";

type ChatImageProps = {
  className?: string;
  chatId: string | undefined;
};
export const ChatImage = ({ className, chatId }: ChatImageProps) => {
  const { data: contact, isPending } = useGetContactInfo({ chatId });

  return (
    <div
      role="img"
      className={cn(
        "shrink-0 rounded-full border h-full aspect-square flex items-center justify-center font-thin",
        className,
      )}
    >
      {isPending ? (
        <Loader />
      ) : (
        <img
          className="rounded-full"
          src={contact?.avatar ?? ""}
          alt="avatar"
        />
      )}
    </div>
  );
};
