import { z } from "zod";

export const authScheme = z.object({
  idInstance: z.string().min(1, { error: "Must be at least 1 character" }),
  apiTokenInstance: z
    .string()
    .min(1, { error: "Must be at least 1 character" }),
});
