import { cn } from "@/lib/utils";
import { FC, PropsWithChildren } from "react";

const Container: FC<ContainerProps> = ({ children, className }) => (
  <div className={cn("container px-6", className)}>{children}</div>
);

type ContainerProps = PropsWithChildren<{ className?: string }>;

export { Container };
