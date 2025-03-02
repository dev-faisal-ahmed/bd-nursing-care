"use client";

import { ContactIcon, HeartCrackIcon, SparkleIcon, UserIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { FC } from "react";

import Link from "next/link";

const DesktopLinks: FC = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-center gap-1">
      {navLinks.map(({ url, icon, title }) => (
        <Link
          href={url}
          key={url}
          className={cn(
            "hover:bg-primary/20 flex items-center gap-1 rounded-full px-4 py-2 font-medium transition-colors",
            pathname.startsWith(url) && "bg-primary/30",
          )}
        >
          {title} {icon}
        </Link>
      ))}
    </div>
  );
};

// const
const navLinks = [
  { title: "Services", url: "/services", icon: <HeartCrackIcon className="size-4" /> },
  { title: "Nurses", url: "/nurses", icon: <UserIcon className="size-4" /> },
  { title: "Testimonial", url: "/testimonial", icon: <SparkleIcon className="size-4" /> },
  { title: "Contact", url: "/contact", icon: <ContactIcon className="size-4" /> },
];

export { DesktopLinks };
