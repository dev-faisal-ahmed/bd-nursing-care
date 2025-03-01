import { Navbar } from "@/components/shared/navbar";
import { FC, PropsWithChildren } from "react";

const PublicLayout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

export default PublicLayout;
