import { z } from "zod";
import type { authScheme } from "./schemes";

export type AuthStoreState = z.infer<typeof authScheme>;
