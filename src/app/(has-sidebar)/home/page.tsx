"use client";

import ThunbnailCard from "@/components/cards/thumbnailCard";
import DoChecks from "@/components/doChecks";
import SubHeader from "@/features/header/subHeader";
import { normalize } from "@/lib/utils";
import { videosMockData } from "@/lib/videosData";
import { useSearchParams } from "next/navigation";
import React from "react";

const Home = () => {
  const searchParams = useSearchParams();

  const searchValue = normalize(searchParams.get("search") || "");

  const filteredVideoData = videosMockData.filter(
    (video) =>
      normalize(video.duration).includes(searchValue) ||
      normalize(video.fullName).includes(searchValue) ||
      normalize(video.posted).includes(searchValue) ||
      normalize(video.title).includes(searchValue) ||
      normalize(video.views).includes(searchValue)
  );

  return (
    <div className="flex flex-col h-full top-0 overflow-auto scrollbar-hidden">
      <SubHeader />
      <DoChecks
        items={filteredVideoData}
        className="grid grid-cols-[repeat(auto-fit,minmax(276px,1fr))] gap-x-4 gap-y-10 p-6 pb-20 md:pb-14"
      >
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
          />
        ))}
      </DoChecks>
    </div>
  );
};

export default Home;
