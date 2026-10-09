import { cn } from "cn";
import { Plus } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { NewChatOverlay } from "./NewChatOverlay";

type AddChatButtonProps = {
  className?: string;
};
export const AddChatButton = ({ className }: AddChatButtonProps) => {
  const handleAddChat = () => {
    NewChatOverlay.handleOpen();
  };

  return (
    <Button
      onClick={handleAddChat}
      className={cn("h-12 w-12 rounded-full", className)}
      size={"icon"}
    >
      <Plus />
    </Button>
  );
};
