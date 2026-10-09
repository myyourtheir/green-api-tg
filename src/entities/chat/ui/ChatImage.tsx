import { cn } from "cn";

type ChatImageProps = {
  className?: string;
};
export const ChatImage = ({ className }: ChatImageProps) => {
  return (
    <div
      role="img"
      className={cn(
        "shrink-0 rounded-full border h-full aspect-square flex items-center justify-center font-thin",
        className,
      )}
    >
      img
    </div>
  );
};
