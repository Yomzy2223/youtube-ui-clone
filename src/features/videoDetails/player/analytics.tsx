import {
  DisLikedIcon,
  LikedIcon,
  MoreIcon,
  SaveIcon,
  ShareIcon,
} from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TVideoMockData, videosMockData } from "@/lib/videosData";
import Image from "next/image";
import React from "react";
import slugify from "slugify";

const Analytics = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  const videoData = videosMockData.find(
    (v) => slugify(v.title.toLowerCase()) === title
  ) as TVideoMockData;

  const analytics = [
    { src: LikedIcon, text: videoData.liked, alt: "title" },
    { src: DisLikedIcon, text: videoData.disliked, alt: "hd" },
    { src: ShareIcon, text: "SHARE", alt: "theatre" },
    { src: SaveIcon, text: "SAVE", alt: "tv" },
    { src: MoreIcon, alt: "more" },
  ];

  return (
    <div className={cn("flex gap-2", className)}>
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
  );
};

export default Analytics;
