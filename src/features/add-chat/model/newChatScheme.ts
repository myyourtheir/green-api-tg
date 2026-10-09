import { z } from "zod";

export const newChatScheme = z.object({
  phoneNumber: z.e164({ error: "Invalid phone number" }),
});
