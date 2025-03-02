import Image from "next/image";

import { FC } from "react";
import { GraduationCapIcon, InfoIcon } from "lucide-react";
import { Container } from "@/shared/container";
import { Button } from "@/ui/button";

const Hero: FC = () => (
  <div className="w-full bg-gradient-to-br from-[#298CE9] from-65% to-[#1D63A5]">
    <Container className="flex items-center gap-20">
      <div className="flex-1">
        <h1 className="text-4xl font-bold text-white">
          Welcome to Our <span className="text-secondary">Home Care</span> System
        </h1>
        <p className="mt-2 text-white/80">
          Get regular 8-10 hours daily 12 hours or 24 hours diploma nurse & brother, Caregiver, Baby Care, Child Care,
          Physiotherapy service at office or home
        </p>
        <div className="mt-8 flex items-center gap-2">
          <InfoIcon className="size-9 text-white" />
          <Button className="rounded-full" variant="secondary">
            Book Now <GraduationCapIcon />
          </Button>
        </div>
      </div>

      <div className="hover-lazy-felix flex-1">
        <Image alt="Hero" src="/images/nurse-hero-min.png" height={700} width={800} />
      </div>
    </Container>
  </div>
);

export { Hero };
