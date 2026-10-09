import { Dialog, DialogContent } from "@/shared/ui/dialog";
import { createOverlay } from "@/shared/ui/Overlays";
import { NewChatForm } from "./NewChatForm";

export const NewChatOverlay = createOverlay(({ onOpenChange, open }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <NewChatForm onSubmit={NewChatOverlay.handleClose} />
      </DialogContent>
    </Dialog>
  );
});
