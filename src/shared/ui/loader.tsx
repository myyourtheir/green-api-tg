import type { ComponentProps } from "react";
import { cn } from "cn";

type LoaderProps = ComponentProps<"span">;

const Loader = ({ className, ...props }: LoaderProps) => (
  <span
    aria-hidden="true"
    className={cn(
      "inline-block size-4 shrink-0 animate-spin rounded-full border-2 border-current border-t-transparent",
      className,
    )}
    {...props}
  />
);

export { Loader };
