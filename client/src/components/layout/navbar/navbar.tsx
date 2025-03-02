import type { FC } from "react";
import { AppLogo } from "../../shared/app-logo";
import { DesktopLinks } from "./navbar-links";
import { Button } from "@/components/ui/button";
import { LogInIcon, MenuIcon, UserPlusIcon } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import Link from "next/link";

const Navbar: FC = () => {
  return (
    <nav className="m-3 grid grid-cols-2 rounded-full bg-white p-3 lg:grid-cols-3">
      <div className="flex items-center gap-2">
        <MDScreenNavSheet />
        <AppLogo />
      </div>
      <DesktopLinks className={{ container: "hidden lg:flex" }} />
      <div className="flex items-center justify-end gap-3">
        <Link href="/singup">
          <Button variant="outline" className="rounded-full">
            Sign Up <UserPlusIcon />
          </Button>
        </Link>
        <Link href="/login">
          <Button className="rounded-full">
            Login <LogInIcon />
          </Button>
        </Link>
      </div>
    </nav>
  );
};

const MDScreenNavSheet: FC = () => (
  <Sheet>
    <SheetTrigger className="bg-primary hidden rounded-full p-2 text-white sm:block lg:hidden">
      <MenuIcon />
    </SheetTrigger>
    <SheetContent side="left" className="p-2">
      <SheetTitle className="sr-only">Responsive Links</SheetTitle>
      <SheetDescription className="sr-only">It can be seen only medium sized devices</SheetDescription>
      <AppLogo />
      <DesktopLinks className={{ container: "flex-col gap-0", item: "w-full px-4 py-1" }} />
    </SheetContent>
  </Sheet>
);

export { Navbar };
