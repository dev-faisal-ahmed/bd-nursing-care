import { FlowerIcon } from "lucide-react";
import { FC } from "react";

const AppLogo: FC = () => {
  return (
    <div className="flex items-center gap-2">
      <span className="bg-primary rounded-full p-2 text-white">
        <FlowerIcon />
      </span>
      <span className="text-lg font-bold">Bd Nursing Care</span>
    </div>
  );
};

export { AppLogo };
