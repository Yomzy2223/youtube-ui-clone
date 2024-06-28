"use client";

import { DropDownIcon } from "@/assets/icons";
import { SubAvatarImg1 } from "@/assets/images";
import CommentCard from "@/components/cards/commentCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  commentsMockData,
  TVideoMockData,
  videosMockData,
} from "@/lib/videosData";
import Image from "next/image";
import React, { useState } from "react";
import slugify from "slugify";
import Analytics from "../player/analytics";
import Introduction from "./introduction";

export const Comments = ({ title }: { title: string }) => {
  const [openOnMobile, setOpenOnMobile] = useState(false);

  const videoData = videosMockData.find(
    (v) => slugify(v.title.toLowerCase()) === title
  ) as TVideoMockData;

  return (
    <div className="flex flex-col gap-6">
      <Introduction videoData={videoData} />

      {/* ANALYTICS FOR MOBILE SCREEN */}
      <Analytics title={title} className="md:hidden" />

      {/* CLICKABLE COMMENT SUMMARY FOR MOBILE SCREEN */}
      <Button
        variant="ghost2"
        size="fit"
        className="flex-col justify-start items-start gap-1 shrink-0 bg-background-3 w-full p-3 md:hidden"
        onClick={() => setOpenOnMobile(!openOnMobile)}
      >
        <p>Comments {commentsMockData?.length}</p>
        <div className="flex items-center gap-2">
          <Image
            src={commentsMockData[0].avatar}
            alt={commentsMockData[0].name}
            width={24}
            height={24}
            className="object-contain"
          />
          <p className="text-xs font-normal">{commentsMockData[0].comment}</p>
        </div>
      </Button>

      {/* COMMENT SUMMARY FOR DESKTOP SCREEN */}
      <div className="hidden md:flex items-center gap-8 font-normal">
        <span>{videoData.totalComments} Comments </span>
        <Button variant="ghost2" size="fit" className="gap-2">
          <Image src={DropDownIcon} alt="thumbnail" width={22} height={22} />
          <span>Sort by</span>
        </Button>
      </div>

      <div
        className={cn("hidden items-center gap-4 md:flex", {
          flex: openOnMobile,
        })}
      >
        <Button variant="ghost2" size="fit" className="shrink-0">
          <Image
            src={SubAvatarImg1}
            alt="thumbnail"
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
          />
        </Button>
        <Input
          placeholder="Add a public comment..."
          className="border-b border-border focus-visible:ring-0 p-0"
        />
      </div>

      <div
        className={cn("hidden flex-col gap-6 py-2 md:flex", {
          flex: openOnMobile,
        })}
      >
        {commentsMockData.map((c) => (
          <CommentCard
            key={c.name}
            name={c.name}
            Avatar={c.avatar}
            comment={c.comment}
            liked={c.liked}
            disliked={c.disliked}
            time={c.time}
          />
        ))}
      </div>
    </div>
  );
};
