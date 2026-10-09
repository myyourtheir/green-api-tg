import { NewChatOverlay } from "@/features/add-chat";

const DialogProvider = () => {
  return <NewChatOverlay.Overlay />;
};

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <DialogProvider />
    </>
  );
};
