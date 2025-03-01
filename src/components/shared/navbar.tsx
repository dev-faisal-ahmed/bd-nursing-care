import { FC } from "react";
import { AppLogo } from "./app-logo";
import { Container } from "./container";

const Navbar: FC = () => {
  return (
    <nav className="bg-white py-6">
      <Container className="grid grid-cols-3">
        <AppLogo />
        <div></div>
      </Container>
    </nav>
  );
};

export { Navbar };
