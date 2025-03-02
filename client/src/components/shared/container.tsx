import { cn } from "@/lib/utils";
import { FC, PropsWithChildren } from "react";

const Container: FC<TContainerProps> = ({ children, className }) => (
  <div className={cn("container px-6", className)}>{children}</div>
);

type TContainerProps = PropsWithChildren<{ className?: string }>;

export { Container };
