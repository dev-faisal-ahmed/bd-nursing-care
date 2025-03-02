import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { cn } from "@/lib/utils";
import { AppLogo } from "../../shared/app-logo";
import { DesktopLinks } from "./navbar-links";
import { Button, TButtonVariants } from "@/components/ui/button";
import { LogInIcon, MenuIcon, UserPlusIcon } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import type { FC } from "react";
import Link from "next/link";

const Navbar: FC = () => {
  return (
    <nav className="m-3 flex rounded-full bg-white p-3 lg:grid lg:grid-cols-3">
      <div className="flex items-center gap-2">
        <MDScreenNavSheet />
        <AppLogo />
      </div>
      <DesktopLinks className={{ container: "hidden lg:flex" }} />
      <div className="ml-auto hidden items-center gap-3 md:flex">
        <ActionButton type="singup" variant="basic" />
        <ActionButton type="login" variant="basic" />
      </div>
      <MDScreenActionButton />
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

const MDScreenActionButton: FC = () => (
  <DropdownMenu>
    <DropdownMenuTrigger className="bg-primary ml-auto block rounded-full p-2 text-white md:hidden">
      <MenuIcon />
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <ActionButton type="singup" variant="dropdown-item" className="w-full" />
      <ActionButton type="login" variant="dropdown-item" className="w-full" />
    </DropdownMenuContent>
  </DropdownMenu>
);

const ActionButton: FC<TActionButtonProps> = ({ variant, type, className }) => {
  const config = ACTION_BUTTON_CONFIG[type];

  const coreComponent = (
    <Link href={config.href} className="w-full">
      <Button variant={config.variant as TActionButtonVariants} className={cn("rounded-full", className)}>
        {config.title} <config.icon className={cn(variant === "dropdown-item" && config.dropDownItemClassName)} />
      </Button>
    </Link>
  );

  if (variant === "basic") return coreComponent;

  return <DropdownMenuItem>{coreComponent}</DropdownMenuItem>;
};

// config
const ACTION_BUTTON_CONFIG = {
  singup: {
    title: "Singup",
    icon: UserPlusIcon,
    variant: "outline",
    href: "/singup",
    dropDownItemClassName: "text-primary",
  },
  login: { title: "Login", icon: LogInIcon, variant: "default", href: "/login", dropDownItemClassName: "text-white" },
};

// types
type TActionButtonVariants = TButtonVariants["variant"];

type TActionButtonProps = {
  className?: string;
  variant: "dropdown-item" | "basic";
  type: "login" | "singup";
};

export { Navbar };
