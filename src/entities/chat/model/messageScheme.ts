import { z } from "zod";

export const messageScheme = z.object({
  message: z.string().min(1),
});
