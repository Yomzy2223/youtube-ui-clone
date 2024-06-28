import { PlayIcon } from "@/assets/icons";
import { cn } from "@/lib/utils";
import { TVideoMockData } from "@/lib/videosData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import slugify from "slugify";
import ThunbnailCard from "../cards/thumbnailCard";
import { buttonVariants } from "../ui/button";

const VideosList = ({
  title,
  videos,
  className,
}: {
  title: string;
  videos: TVideoMockData[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 border-b border-border pb-6",
        className
      )}
    >
      <div className="flex items-center gap-6">
        <h2 className="font-bold">{title}</h2>
        <Link
          href={`/videos/${slugify(videos[0].title)}`}
          className={cn(
            buttonVariants({ variant: "ghost2", size: "fit" }),
            "text-muted-foreground"
          )}
        >
          <Image
            src={PlayIcon}
            alt="play"
            width={24}
            height={24}
            color="hsl(--var(text-muted-foreground))"
          />
          <span className="ml-2 font-bold text-muted-foreground">PLAY ALL</span>
        </Link>
      </div>

      <div className="hidden md:grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-x-2 gap-y-4">
        {videos.map((v) => (
          <ThunbnailCard
            key={v.title}
            avatar={v.avatar}
            title={v.title}
            duration={v.duration}
            fullName={v.fullName}
            posted={v.posted}
            thumbnail={v.thumbnail}
            views={v.views}
            hideAvatar
            small
          />
        ))}
      </div>
      <div className="flex flex-col gap-y-4 md:hidden">
        {videos.map((v) => (
          <ThunbnailCard
            key={v.title}
            avatar={v.avatar}
            title={v.title}
            duration={v.duration}
            fullName={v.fullName}
            posted={v.posted}
            thumbnail={v.thumbnail}
            views={v.views}
            hideAvatar
            variant2
          />
        ))}
      </div>
    </div>
  );
};

export default VideosList;
