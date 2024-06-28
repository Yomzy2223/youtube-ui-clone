import { InfoIcon } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TVideoMockData, videosMockData } from "@/lib/videosData";
import Image from "next/image";
import React from "react";
import slugify from "slugify";
import Analytics from "./analytics";
import IconsSection from "./iconsSection";

export const Player = ({
  title,
  hideInfo,
}: {
  title: string;
  hideInfo?: boolean;
}) => {
  const videoData = videosMockData.find(
    (v) => slugify(v.title.toLowerCase()) === slugify(title.toLowerCase())
  ) as TVideoMockData;

  // WOULD HAVE USED VIDEO TAG IF THERE WAS A VIDEO
  return (
    <div className="md:mr-3 sticky top-0">
      <div className="relative cursor-pointer">
        <div className="flex justify-between px-4 py-3 absolute top-0 left-0 right-0 z-10">
          <span className="font-normal text-sm">{videoData.title}</span>
          <Button variant="ghost2" size="fit">
            <Image src={InfoIcon} alt="thumbnail" width={20} height={20} />
          </Button>
        </div>
        <Image
          src={videoData.thumbnail}
          alt="thumbnail"
          className="w-full h-auto md:min-w-[276px]"
        />
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="flex w-full mb-10">
            <div className="flex-[1.5] bg-primary h-0.5" />
            <div className="flex-[0.5] bg-[#EAEAEA80] h-0.5" />
            <div className="flex-[2] bg-[#EAEAEA33] h-0.5" />
          </div>
          <IconsSection />
        </div>
      </div>
    </div>
  );
};
