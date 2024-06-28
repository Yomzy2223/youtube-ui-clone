import VideosList from "@/components/videosList";
import { Player } from "@/features/videoDetails";
import { TVideoMockData, videosMockData } from "@/lib/videosData";
import React from "react";
import slugify from "slugify";

const SubscriptionHome = ({ params }: { params: { name: string } }) => {
  const videoData = videosMockData.find(
    (v) => slugify(v.fullName.toLowerCase()) === params.name
  ) as TVideoMockData;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-6 border-b border-border pb-6">
        <div className="flex-1 w-1/3 md:max-w-[424px]">
          <Player title={videoData.title} hideInfo />
        </div>

        <div className="hidden lg:flex flex-col gap-5 lg:max-w-[40%]">
          <h2 className="font-normal text-base md:text-lg">
            {videoData.title}
          </h2>
          <div className="flex items-center gap-1 text-muted-foreground text-sm font-bold">
            <span>{videoData.views} views</span>
            {" . "}
            <span>{videoData.datePosted}</span>
          </div>
          <p className="text-sm font-normal">{videoData.description}</p>
        </div>
      </div>

      <VideosList title="Recently" videos={videosMockData.slice(0, 6)} />
      <VideosList title="Last Month" videos={videosMockData.slice(6, 10)} />
      <VideosList title="4 Months Ago" videos={videosMockData.slice(10, 15)} />
      <VideosList
        title="Last Year"
        videos={videosMockData.slice(15)}
        className="border-none"
      />
    </div>
  );
};

export default SubscriptionHome;
