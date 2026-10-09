import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NewChatOverlay } from "@/features/add-chat";

const DialogProvider = () => {
  return <NewChatOverlay.Overlay />;
};

const queryClient = new QueryClient();

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <DialogProvider />
    </QueryClientProvider>
  );
};
