import { FC } from "react";
import { AppLogo } from "../app-logo";
import { DesktopLinks } from "./navbar-links";
import { Button } from "@/components/ui/button";
import { LogInIcon, UserPlusIcon } from "lucide-react";

import Link from "next/link";

const DesktopNavbar: FC = () => {
  return (
    <nav className="m-4 grid grid-cols-3 rounded-full bg-white px-4 py-4">
      <AppLogo />
      <DesktopLinks />
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

export { DesktopNavbar };
