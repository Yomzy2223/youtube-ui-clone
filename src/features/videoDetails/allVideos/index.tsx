"use client";

import ThunbnailCard from "@/components/cards/thumbnailCard";
import DoChecks from "@/components/doChecks";
import { Button } from "@/components/ui/button";
import { useDeleteQuery, useSetQuery } from "@/hooks/queryHooks";
import { cn, normalize } from "@/lib/utils";
import { TVideoMockData, videosMockData } from "@/lib/videosData";
import { useSearchParams } from "next/navigation";
import React from "react";
import slugify from "slugify";

export const AllVideos = ({ title }: { title: string }) => {
  const setQuery = useSetQuery();
  const deleteQuery = useDeleteQuery();
  const searchParams = useSearchParams();

  const filterValue = normalize(searchParams.get("filter") || "");

  const videoData = videosMockData.find(
    (v) => slugify(v.title.toLowerCase()) === title
  ) as TVideoMockData;

  const filteredVideoData = videosMockData.filter(
    (video) =>
      slugify(normalize(video.duration)).includes(filterValue) ||
      slugify(normalize(video.fullName)).includes(filterValue) ||
      slugify(normalize(video.posted)).includes(filterValue) ||
      slugify(normalize(video.title)).includes(filterValue) ||
      slugify(normalize(video.description)).includes(filterValue) ||
      slugify(normalize(video.totalComments)).includes(filterValue) ||
      slugify(normalize(video.views)).includes(filterValue)
  );

  return (
    <div className="flex-1 flex flex-col max-h-full overflow-auto sticky top-0 scrollbar-hidden">
      <div className="sticky top-0 z-10 bg-background-2 pb-5">
        <Button
          variant="secondary"
          onClick={() => deleteQuery("filter")}
          className={cn("rounded-[32px] mr-2", {
            "bg-foreground text-background-3": !filterValue,
          })}
        >
          All
        </Button>
        <Button
          variant="secondary"
          onClick={() => setQuery("filter", slugify(videoData.fullName))}
          className={cn("rounded-[32px] snap-start", {
            "bg-foreground text-background-3":
              filterValue === slugify(normalize(videoData.fullName)),
          })}
        >
          {videoData.fullName}
        </Button>
      </div>

      <DoChecks items={filteredVideoData} className="flex flex-col gap-2">
        {filteredVideoData.map((video) => (
          <ThunbnailCard
            key={video.title}
            avatar={video.avatar}
            title={video.title}
            duration={video.duration}
            fullName={video.fullName}
            posted={video.posted}
            thumbnail={video.thumbnail}
            views={video.views}
            variant2
          />
        ))}
      </DoChecks>
    </div>
  );
};
