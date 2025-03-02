import { ContactIcon, HeartCrackIcon, SparkleIcon, UserIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const useLinks = () => {
  const pathName = usePathname();

  const links = useMemo(() => {
    const isActive = (url: string) => pathName.startsWith(url);

    return [
      {
        title: "Services",
        url: "/services",
        icon: HeartCrackIcon,
        isActive: isActive("/services"),
      },
      {
        title: "Nurses",
        url: "/nurses",
        icon: UserIcon,
        isActive: isActive("/nurses"),
      },
      {
        title: "Testimonial",
        url: "/testimonial",
        icon: SparkleIcon,
        isActive: isActive("/testimonial"),
      },
      {
        title: "Contact",
        url: "/contact",
        icon: ContactIcon,
        isActive: isActive("/contact"),
      },
    ];
  }, [pathName]);

  return { links };
};

export { useLinks };
