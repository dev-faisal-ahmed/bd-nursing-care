"use client";

import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import type { ComponentProps, FC } from "react";
import { cn } from "@/lib/utils";

const ScrollArea: FC<TScrollAreaProps> = ({ className, children, fixedLayout, disableScrollbar, ...props }) => {
  return (
    <ScrollAreaPrimitive.Root data-slot="scroll-area" className={cn("relative overflow-hidden", className)} {...props}>
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className={cn(
          "[&>div]:h-ful h-full w-full rounded-[inherit]",
          fixedLayout && "[&>div]:w-full [&>div]:table-fixed",
        )}
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      {!disableScrollbar && <ScrollBar />}

      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
};

const ScrollBar: React.FC<TScrollBarProps> = ({ className, orientation = "vertical", ...props }) => {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        "flex touch-none p-px transition-colors select-none",
        orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        className,
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className="bg-border relative flex-1 rounded-full"
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
};

// types
type TScrollAreaProps = ComponentProps<typeof ScrollAreaPrimitive.Root> & {
  disableScrollbar?: boolean;
  fixedLayout?: boolean;
};

type TScrollBarProps = ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>;

export { ScrollArea, ScrollBar };
