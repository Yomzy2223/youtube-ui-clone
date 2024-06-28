import { AllVideos, Comments, Player } from "@/features/videoDetails";
import React from "react";

const VideoDetails = ({ params }: { params: { title: string } }) => {
  return (
    <div className="flex flex-col md:max-h-[calc(100vh-56px)] overflow-auto scrollbar-hidden md:flex-row gap-3 bg-background-2 flex-1 px-4 md:px-10 lg:px-[10%] py-6 md:pb-14">
      <div className="md:flex-[1.3] max-h-full overflow-auto sticky scrollbar-hidden top-0">
        <Player title={params.title} />
        <Comments title={params.title} />
      </div>

      <AllVideos title={params.title} />
    </div>
  );
};

export default VideoDetails;
