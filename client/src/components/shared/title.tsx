import type { FC, ReactNode } from "react";

const Title: FC<TTitleProps> = (props) => {
  const isWithChildren = isTitleWithChildren(props);

  if (!isWithChildren)
    return (
      <h2 className="text-center text-2xl font-semibold">
        <span className="text-primary-700">{props.title[0]}</span>{" "}
        <span className="text-secondary-500">{props.title[1]}</span>
      </h2>
    );
};

// type guard function
const isTitleWithChildren = (data: TTitleProps): data is TTitleWIthChildrenProps => data.type === "with-children";
// type
type TTitleSimpleProps = { type: "simple"; title: [string, string] };
type TTitleWIthChildrenProps = { type: "with-children"; title: [string, string]; children: ReactNode };
type TTitleProps = TTitleSimpleProps | TTitleWIthChildrenProps;

export { Title };
