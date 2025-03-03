import type { FC } from "react";

import { Container } from "@/shared/container";
import { Title } from "@/shared/title";
import { cn } from "@/lib/utils";
import { SvgIcon, TIconName } from "@/icons";

const Services: FC = () => (
  <Container className="my-10 md:my-20">
    <Title type="simple" title={["Our", "Services"]} />

    <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {services.map(({ title, colorClassName, iconName }, index) => (
        <div
          key={index}
          className={cn("flex w-full flex-col items-center gap-4 rounded-md bg-gradient-to-b p-4", colorClassName)}
        >
          <SvgIcon name={iconName} />
          <h2 className="text-center text-lg font-semibold text-white">{title}</h2>
        </div>
      ))}
    </div>
  </Container>
);

// consts
const services: TService[] = [
  {
    title: "Diploma in Nursing & Midwifery",
    colorClassName: "from-primary to-primary-600",
    iconName: "nurse",
  },
  {
    title: "Patient care Attendant / Caregiver",
    colorClassName: "from-secondary-400 to-secondary-600",
    iconName: "careGiver",
  },
  {
    title: "Physiotherapy",
    colorClassName: "from-[#CE6DE9] to-[#C17B4C]",
    iconName: "physiotherapy",
  },
  {
    title: "Baby Care",
    colorClassName: "from-[#E96DC4] to-[#B93B93]",
    iconName: "babyCare",
  },
  {
    title: "School Attendant",
    colorClassName: "from-primary to-primary-600",
    iconName: "schoolAttendant",
  },
  {
    title: "Pregnancy Woman Helping Hand",
    colorClassName: "from-secondary-400 to-secondary-600",
    iconName: "pregnancyWoman",
  },
  {
    title: "Body Spa",
    colorClassName: "from-secondary-400 to-secondary-600",
    iconName: "spaMessage",
  },
  {
    title: "Monthly Combo",
    colorClassName: "from-[#CE6DE9] to-[#C17B4C]",
    iconName: "calendar",
  },
  {
    title: "Nursing One Call",
    colorClassName: "from-primary to-primary-600",
    iconName: "nurseOneCall",
  },
];

// types
type TService = { title: string; colorClassName: string; iconName: TIconName };

export { Services };
