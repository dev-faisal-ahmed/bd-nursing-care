import { CareGiverIcon } from "@/icons/care-giver.icon";
import { NurseIcon } from "@/icons/nurse.icon";
import { Container } from "@/shared/container";
import { Title } from "@/shared/title";
import { cn } from "@/lib/utils";

import type { FC } from "react";

const Services: FC = () => (
  <Container className="my-20">
    <Title type="simple" title={["Our", "Services"]} />

    <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
      {services.map(({ title, colorClassName, icon }, index) => (
        <div
          key={index}
          className={cn("flex w-full flex-col items-center gap-4 rounded-md bg-gradient-to-b p-4", colorClassName)}
        >
          {icon}
          <h2 className="text-center text-lg font-semibold text-white">{title}</h2>
        </div>
      ))}
    </div>
  </Container>
);

// consts
const services = [
  {
    title: "Diploma in Nursing & Midwifery Service",
    colorClassName: "from-primary to-primary-600",
    icon: <NurseIcon />,
  },
  {
    title: "Patient care Attendant / Caregiver Service",
    colorClassName: "from-secondary-400 to-secondary-600",
    icon: <CareGiverIcon />,
  },
];

export { Services };
