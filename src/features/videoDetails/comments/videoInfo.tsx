import { TVideoMockData } from "@/lib/videosData";
import React from "react";
import Analytics from "../player/analytics";

const VideoInfo = ({
  videoData,
  title,
}: {
  videoData: TVideoMockData;
  title: string;
}) => {
  return (
    <div className="pt-5 pb-2">
      <h2 className="font-normal text-base md:text-lg">{videoData.title}</h2>
      <div className="flex items-center justify-between gap-4 py-2">
        <div className="flex items-center gap-1 text-muted-foreground text-sm font-bold">
          <span>{videoData.views} views</span>
          {" . "}
          <span>{videoData.datePosted}</span>
        </div>

        {/* ANALYTICS FOR DESKTOP SCREEN */}
        <Analytics title={title} className="hidden md:flex" />
      </div>
    </div>
  );
};

export default VideoInfo;
