import { FC } from "react";

import { NurseIcon } from "./nurse.icon";
import { BabyCareIcon } from "./baby-care.icon";
import { CalenderIcon } from "./calender.icon";
import { CareGiverIcon } from "./care-giver.icon";
import { NursePlusIcon } from "./nurse-plus.icon";
import { NursingOneCall } from "./nursing-one-call.icon";
import { PhysiotherapyIcon } from "./physiotherapy.icon";
import { PregnancyWomanIcon } from "./pregnancy-woman.icon";
import { SchoolAttendantIcon } from "./school-attendant.icon";
import { SpaMessageIcon } from "./spa-message.icon";

const SvgIcon: FC<SvgIconProps> = ({ size = 128, name }) => (
  <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    {icons[name]}
  </svg>
);

const icons = {
  babyCare: <BabyCareIcon />,
  calendar: <CalenderIcon />,
  careGiver: <CareGiverIcon />,
  nursePlus: <NursePlusIcon />,
  nurse: <NurseIcon />,
  nurseOneCall: <NursingOneCall />,
  physiotherapy: <PhysiotherapyIcon />,
  pregnancyWoman: <PregnancyWomanIcon />,
  schoolAttendant: <SchoolAttendantIcon />,
  spaMessage: <SpaMessageIcon />,
} as const;

// types
type TIconName = keyof typeof icons;
type SvgIconProps = { size?: number; name: TIconName };

export { SvgIcon, type TIconName };
