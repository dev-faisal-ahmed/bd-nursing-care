import {
  BabyCareIcon,
  CareGiverIcon,
  NurseIcon,
  NursingOneCall,
  PhysiotherapyIcon,
  PregnancyWomanIcon,
  SchoolAttendantIcon,
  SpaMessageIcon,
} from "@/icons";

import type { FC } from "react";
import { Container } from "@/shared/container";
import { Title } from "@/shared/title";
import { cn } from "@/lib/utils";

const Services: FC = () => (
  <Container className="my-20">
    <Title type="simple" title={["Our", "Services"]} />

    <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
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
    title: "Diploma in Nursing & Midwifery",
    colorClassName: "from-primary to-primary-600",
    icon: <NurseIcon />,
  },
  {
    title: "Patient care Attendant / Caregiver",
    colorClassName: "from-secondary-400 to-secondary-600",
    icon: <CareGiverIcon />,
  },
  {
    title: "Physiotherapy",
    colorClassName: "from-[#CE6DE9] to-[#C17B4C]",
    icon: <PhysiotherapyIcon />,
  },
  {
    title: "Baby Care",
    colorClassName: "from-[#E96DC4] to-[#B93B93]",
    icon: <BabyCareIcon />,
  },
  {
    title: "School Attendant",
    colorClassName: "from-primary to-primary-600",
    icon: <SchoolAttendantIcon />,
  },
  {
    title: "Pregnancy Woman Helping Hand",
    colorClassName: "from-secondary-400 to-secondary-600",
    icon: <PregnancyWomanIcon />,
  },
  {
    title: "Body Spa",
    colorClassName: "from-secondary-400 to-secondary-600",
    icon: <SpaMessageIcon />,
  },
  {
    title: "Monthly Combo",
    colorClassName: "from-[#CE6DE9] to-[#C17B4C]",
    icon: <SpaMessageIcon />,
  },
  {
    title: "Nursing One Call",
    colorClassName: "from-primary to-primary-600",
    icon: <NursingOneCall />,
  },
];

export { Services };
