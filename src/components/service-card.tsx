import Image from "next/image";
import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <li className="bg-primary p-5 md:p-[30px] rounded-[14px] shadow-lg md:flex md:items-start md:gap-[18px]">
      <div className="mb-[10px] md:mb-0 md:mt-[5px] flex justify-center">
        <Image
          src={service.icon}
          alt={service.title}
          width={40}
          height={40}
          className="md:w-auto md:h-auto"
        />
      </div>
      <div className="text-center md:text-left">
        <h4 className="text-[16px] font-medium text-foreground mb-[7px]">
          {service.title}
        </h4>
        <p className="text-[14px] md:text-[15px] font-light text-muted-foreground leading-relaxed">
          {service.description}
        </p>
      </div>
    </li>
  );
}
