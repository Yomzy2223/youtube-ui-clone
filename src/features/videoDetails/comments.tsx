"use client";

import { DropDownIcon } from "@/assets/icons";
import { SubAvatarImg1 } from "@/assets/images";
import CommentCard from "@/components/cards/commentCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  commentsMockData,
  TVideoMockData,
  videosMockData,
} from "@/lib/videosData";
import Image from "next/image";
import React, { useState } from "react";
import slugify from "slugify";

export const Comments = ({ title }: { title: string }) => {
  const [fullDescription, setFullDescription] = useState(false);

  const videoData = videosMockData.find(
    (v) => slugify(v.title.toLowerCase()) === title
  ) as TVideoMockData;

  const descriptionArr = videoData.description.split(".");

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-4 py-4">
        <Button variant="ghost2" size="fit" className=" shrink-0">
          <Image
            src={videoData.avatar}
            alt={videoData.fullName}
            className="w-8 h-8 md:w-12 md:h-12 object-contain"
          />
        </Button>
        <div>
          <div className="flex items-center justify-between gap-6 mb-3">
            <div className="my-2">
              <p className="text-sm font-normal">{videoData.fullName}</p>
              <p className="text-xs text-muted-foreground font-normal">
                {videoData.subscribers} subscribers
              </p>
            </div>
            <Button>SUBSCRIBE</Button>
          </div>
          <p className="text-sm font-normal mb-2">
            {fullDescription ? videoData.description : descriptionArr[0] + "."}
          </p>
          {descriptionArr.length > 1 && !fullDescription && (
            <Button
              variant="ghost2"
              size="fit"
              onClick={() => setFullDescription(true)}
              className="text-muted-foreground"
            >
              SHOW MORE
            </Button>
          )}
        </div>
      </div>

      <div className="flex items-center gap-8 font-normal">
        <span>{videoData.totalComments} Comments </span>
        <Button variant="ghost2" size="fit" className="gap-2">
          <Image src={DropDownIcon} alt="thumbnail" width={22} height={22} />
          <span>Sort by</span>
        </Button>
      </div>

      <div className="flex items-center gap-4">
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

      <div className="flex flex-col gap-6 py-2">
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
