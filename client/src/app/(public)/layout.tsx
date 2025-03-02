import { DesktopNavbar } from "@/components/shared/navbar";
import { FC, PropsWithChildren } from "react";

const PublicLayout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <DesktopNavbar />
    {children}
  </>
);

export default PublicLayout;
