"use client";

import * as SheetPrimitive from "@radix-ui/react-dialog";

import type { ComponentProps, FC } from "react";
import { XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const Sheet: FC<ComponentProps<typeof SheetPrimitive.Root>> = ({ ...props }) => (
  <SheetPrimitive.Root data-slot="sheet" {...props} />
);

const SheetTrigger: FC<ComponentProps<typeof SheetPrimitive.Trigger>> = ({ ...props }) => (
  <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
);

const SheetClose: FC<ComponentProps<typeof SheetPrimitive.Close>> = ({ ...props }) => (
  <SheetPrimitive.Close data-slot="sheet-close" {...props} />
);

const SheetPortal: FC<React.ComponentProps<typeof SheetPrimitive.Portal>> = ({ ...props }) => (
  <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
);

const SheetOverlay: FC<React.ComponentProps<typeof SheetPrimitive.Overlay>> = ({ className, ...props }) => (
  <SheetPrimitive.Overlay
    data-slot="sheet-overlay"
    className={cn(
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
      className,
    )}
    {...props}
  />
);

const SheetContent: FC<
  React.ComponentProps<typeof SheetPrimitive.Content> & { side?: "top" | "right" | "bottom" | "left" }
> = ({ className, children, side = "right", ...props }) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      data-slot="sheet-content"
      className={cn(
        "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
        side === "right" &&
          "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
        side === "left" &&
          "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
        side === "top" &&
          "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
        side === "bottom" &&
          "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
        className,
      )}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none">
        <XIcon className="size-4" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
);

const SheetHeader: FC<React.ComponentProps<"div">> = ({ className, ...props }) => (
  <div data-slot="sheet-header" className={cn("flex flex-col gap-1.5 p-4", className)} {...props} />
);

const SheetFooter: FC<React.ComponentProps<"div">> = ({ className, ...props }) => (
  <div data-slot="sheet-footer" className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />
);

const SheetTitle: FC<React.ComponentProps<typeof SheetPrimitive.Title>> = ({ className, ...props }) => (
  <SheetPrimitive.Title data-slot="sheet-title" className={cn("text-foreground font-semibold", className)} {...props} />
);

const SheetDescription: FC<React.ComponentProps<typeof SheetPrimitive.Description>> = ({ className, ...props }) => (
  <SheetPrimitive.Description
    data-slot="sheet-description"
    className={cn("text-muted-foreground text-sm", className)}
    {...props}
  />
);

export { Sheet, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription };
