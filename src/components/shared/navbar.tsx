import { FC } from "react";
import { AppLogo } from "./app-logo";

const Navbar: FC = () => {
  return (
    <nav className="flex items-center gap-4">
      <AppLogo />
    </nav>
  );
};

export { Navbar };
