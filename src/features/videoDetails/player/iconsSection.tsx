import {
  FullScreenIcon,
  HDIcon,
  NextIcon,
  PlayIcon,
  SoundIcon,
  TheaterIcon,
  TitlesIcon,
  TVIcon,
} from "@/assets/icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const IconsSection = () => {
  const rightIcons = [
    { src: TitlesIcon, alt: "title" },
    { src: HDIcon, alt: "hd" },
    { src: TheaterIcon, alt: "theatre" },
    { src: TVIcon, alt: "tv" },
    { src: FullScreenIcon, alt: "full screen" },
  ];

  return (
    <div className="flex justify-between gap-4 absolute bottom-2 left-7 right-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost2" size="fit">
          <Image src={PlayIcon} alt="thumbnail" width={22} height={22} />
        </Button>
        <Button variant="ghost2" size="fit">
          <Image src={NextIcon} alt="thumbnail" width={18} height={18} />
        </Button>
        <Button variant="ghost2" size="fit">
          <Image src={SoundIcon} alt="thumbnail" width={18} height={18} />
        </Button>
      </div>

      <div className="flex items-center gap-4">
        {rightIcons?.map((icon) => (
          <Button key={icon.alt + icon.src} variant="ghost2" size="fit">
            <Image src={icon.src} alt={icon.alt} width={20} height={20} />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default IconsSection;
