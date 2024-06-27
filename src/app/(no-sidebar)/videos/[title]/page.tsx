import { Player } from "@/features/videoDetails";
import React from "react";

const VideoDetails = ({ params }: { params: { title: string } }) => {
  const title = params.title.split("-").join(" ");

  return (
    <div className="flex">
      <div className="flex-[1.2]">
        <Player title={title} />
      </div>
      <div className="flex-1"></div>
    </div>
  );
};

export default VideoDetails;
