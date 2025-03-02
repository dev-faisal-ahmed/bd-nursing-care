"use client";

import Link from "next/link";
import { useLinks } from "./use-links";
import type { FC } from "react";

const Dock: FC = () => {
  const { links } = useLinks();

  return (
    <div className="bg-primary m-3 flex items-center justify-around rounded-full py-4 md:hidden">
      {links.map(({ url, icon: Icon }) => (
        <Link key={url} href={url}>
          <Icon className="size-6 text-white" />
        </Link>
      ))}
    </div>
  );
};

export { Dock };
