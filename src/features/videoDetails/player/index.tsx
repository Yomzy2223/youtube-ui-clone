import {
  DisLikedIcon,
  InfoIcon,
  LikedIcon,
  MoreIcon,
  SaveIcon,
  ShareIcon,
} from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { TVideoMockData, videosMockData } from "@/lib/videosData";
import Image from "next/image";
import React from "react";
import slugify from "slugify";
import IconsSection from "./iconsSection";

export const Player = ({ title }: { title: string }) => {
  const videoData = videosMockData.find(
    (v) => slugify(v.title.toLowerCase()) === title
  ) as TVideoMockData;

  console.log(videoData);

  const analytics = [
    { src: LikedIcon, text: videoData.liked, alt: "title" },
    { src: DisLikedIcon, text: videoData.disliked, alt: "hd" },
    { src: ShareIcon, text: "SHARE", alt: "theatre" },
    { src: SaveIcon, text: "SAVE", alt: "tv" },
    { src: MoreIcon, alt: "more" },
  ];

  // WOULD HAVE USED VIDEO TAG IF THERE WAS A VIDEO
  return (
    <div>
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

      <div className="pt-5 pb-2">
        <h2 className="font-normal text-base md:text-lg">{videoData.title}</h2>
        <div className="flex items-center justify-between gap-4 py-2">
          <div className="flex items-center gap-1 text-muted-foreground text-sm font-bold">
            <span>{videoData.views} views</span>
            {" . "}
            <span>{videoData.datePosted}</span>
          </div>
          <div className="flex gap-2">
            {analytics.map((el) => (
              <Button
                key={el.text}
                variant="ghost2"
                size="fit"
                className="p-1.5 gap-1.5 text-sm font-bold"
              >
                <Image src={el.src} alt="like" width={20} height={18} />
                {el.text && <span>{el.text}</span>}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
