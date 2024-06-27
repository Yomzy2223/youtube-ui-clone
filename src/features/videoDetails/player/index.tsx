import { InfoIcon } from "@/assets/icons";
import { normalize } from "@/lib/utils";
import { TVideoData, videosData } from "@/lib/videosData";
import Image from "next/image";
import React from "react";
import IconsSection from "./iconsSection";

export const Player = ({ title }: { title: string }) => {
  const videoData = videosData.find(
    (v) => normalize(v.title) === normalize(title)
  ) as TVideoData;

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0">
        <span>{videoData.title}</span>
        <Image
          src={InfoIcon}
          alt="thumbnail"
          className="w-full h-auto md:min-w-[276px]"
        />
      </div>
      <Image
        src={videoData.thumbnail}
        alt="thumbnail"
        className="w-full h-auto md:min-w-[276px]"
      />
      <div>
        <div className="flex">
          <div className="flex-[1.5] bg-secondary h-0.5" />
          <div className="flex-[0.5] bg-[#EAEAEA80] h-0.5" />
          <div className="flex-[2] bg-[#EAEAEA33] h-0.5" />
        </div>
        <IconsSection />
      </div>
    </div>
  );
};
