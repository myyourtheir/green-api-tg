type ChatProps = {
  chatId: string | undefined;
};
export const Chat = ({ chatId }: ChatProps) => {
  if (!chatId) return null;
  return <>Chat</>;
};
