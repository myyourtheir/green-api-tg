import { cn } from "cn";
import { SendHorizontal } from "lucide-react";
import { Button } from "@/shared/ui/button";

export const InputField = () => {
  return (
    <form className="flex items-center h-11 w-full min-w-0 rounded-4xl border border-input bg-input/30 pr-1 pl-3 py-1">
      <input
        type="text"
        className={cn(
          "outline-none placeholder:text-muted-foreground focus-visible:ring-0 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 text-base",
          "flex-1",
        )}
      />
      <Button size={"icon"} className={"w-10"}>
        <SendHorizontal />
      </Button>
    </form>
  );
};
