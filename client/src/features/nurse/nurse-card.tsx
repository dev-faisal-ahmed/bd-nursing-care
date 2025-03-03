import Image from "next/image";

import { Card } from "@/components/ui/card";
import { FC } from "react";

const NurseCard: FC<TNurseCardProps> = ({ name, image }) => (
  <Card>
    <Image src={image} width={400} height={400} alt={name} />
  </Card>
);

type TNurseCardProps = { name: string; image: string; designation: string; rating: number };

export { NurseCard };
