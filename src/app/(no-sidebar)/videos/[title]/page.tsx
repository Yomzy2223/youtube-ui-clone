import { AllVideos, Comments, Player } from "@/features/videoDetails";
import React from "react";

const VideoDetails = ({ params }: { params: { title: string } }) => {
  return (
    <div className="flex gap-6 bg-background-2 flex-1 px-[10%] py-6">
      <div className="flex-[1.3]">
        <Player title={params.title} />
        <Comments />
      </div>
      <div className="flex-1">
        <AllVideos />
      </div>
    </div>
  );
};

export default VideoDetails;
