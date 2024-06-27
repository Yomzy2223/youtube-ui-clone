import { InfoIcon } from "@/assets/icons";
import Image from "next/image";
import React from "react";

const IconsSection = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 flex justify-between gap-4">
      <div>
        <Image
          src={InfoIcon}
          alt="thumbnail"
          className="w-full h-auto md:min-w-[276px]"
        />
        <Image
          src={InfoIcon}
          alt="thumbnail"
          className="w-full h-auto md:min-w-[276px]"
        />
        <Image
          src={InfoIcon}
          alt="thumbnail"
          className="w-full h-auto md:min-w-[276px]"
        />
        <div></div>
      </div>
      <div>
        <Image
          src={InfoIcon}
          alt="thumbnail"
          className="w-full h-auto md:min-w-[276px]"
        />
        <Image
          src={InfoIcon}
          alt="thumbnail"
          className="w-full h-auto md:min-w-[276px]"
        />
        <Image
          src={InfoIcon}
          alt="thumbnail"
          className="w-full h-auto md:min-w-[276px]"
        />
        <Image
          src={InfoIcon}
          alt="thumbnail"
          className="w-full h-auto md:min-w-[276px]"
        />
        <Image
          src={InfoIcon}
          alt="thumbnail"
          className="w-full h-auto md:min-w-[276px]"
        />
        <Image
          src={InfoIcon}
          alt="thumbnail"
          className="w-full h-auto md:min-w-[276px]"
        />
      </div>
    </div>
  );
};

export default IconsSection;
