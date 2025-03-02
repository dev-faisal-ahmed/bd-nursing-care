import type { FC, PropsWithChildren } from "react";

import { Navbar } from "@/components/layout/navbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dock } from "@/layout/dock";

const PublicLayout: FC<PropsWithChildren> = ({ children }) => (
  <main className="flex h-screen flex-col">
    <Navbar />
    <ScrollArea className="grow" fixedLayout>
      {children}
    </ScrollArea>
    <Dock />
  </main>
);

export default PublicLayout;
