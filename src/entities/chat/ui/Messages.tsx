import { cn } from "cn";

type MessagesProps = {
  className?: string;
};
export const Messages = ({ className }: MessagesProps) => {
  return <div className={cn(className)}>messages</div>;
};
