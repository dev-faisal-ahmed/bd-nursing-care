"use client";

import { cn } from "@/lib/utils";
import { useLinks } from "../use-links";
import type { FC } from "react";

import Link from "next/link";

const DesktopLinks: FC<TDesktopLinksProps> = ({ className }) => {
  const { links } = useLinks();

  return (
    <div className={cn("flex items-center justify-center gap-4", className?.container)}>
      {links.map(({ url, icon: Icon, title, isActive }) => (
        <Link
          href={url}
          key={url}
          className={cn(
            "hover:bg-primary/20 flex items-center gap-1 rounded-full px-4 py-2 font-medium transition-colors",
            isActive && "bg-primary/30",
            className?.item,
          )}
        >
          {title} <Icon className="size-4" />
        </Link>
      ))}
    </div>
  );
};

// type
type TDesktopLinksProps = { className?: { container?: string; item?: string } };

export { DesktopLinks };
