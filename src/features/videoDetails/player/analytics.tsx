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
    (v) => slugify(v.title.toLowerCase()) === slugify(title.toLowerCase())
  ) as TVideoMockData;

  const icons = [LikedIcon, DisLikedIcon, ShareIcon, SaveIcon, MoreIcon];

  const analytics = [
    { text: videoData.liked, alt: "title" },
    { text: videoData.disliked, alt: "hd" },
    { text: "SHARE", alt: "theatre" },
    { text: "SAVE", alt: "tv" },
    { alt: "more" },
  ];

  return (
    <div className={cn("flex gap-2", className)}>
      {analytics.map((el, i) => (
        <Button
          key={el.text}
          variant="ghost2"
          size="fit"
          className="p-1.5 gap-1.5 text-sm font-bold"
        >
          <Image src={icons[i]} alt="like" width={20} height={18} />
          {el.text && <span>{el.text}</span>}
        </Button>
      ))}
    </div>
  );
};

export default Analytics;
