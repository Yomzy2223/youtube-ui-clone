import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TVideoMockData } from "@/lib/videosData";
import Image from "next/image";
import React, { useState } from "react";

const Introduction = ({ videoData }: { videoData: TVideoMockData }) => {
  const [fullDescription, setFullDescription] = useState(false);

  const descriptionArr = videoData.description.split(".");

  return (
    <div className="flex gap-4 md:py-4">
      <Button variant="ghost2" size="fit" className=" shrink-0">
        <Image
          src={videoData.avatar}
          alt={videoData.fullName}
          className="w-8 h-8 md:w-12 md:h-12 object-contain"
        />
      </Button>
      <div className="flex-1">
        <div className="flex items-center justify-between gap-6 md:mb-3">
          <div className="md:my-2">
            <p className="text-sm font-normal">{videoData.fullName}</p>
            <p className="text-xs text-muted-foreground font-normal">
              {videoData.subscribers} subscribers
            </p>
          </div>
          <Button>SUBSCRIBE</Button>
        </div>

        {/* ONLY DISPLAYS ON MOBILE */}
        <Button
          variant="ghost2"
          size="fit"
          onClick={() => setFullDescription(true)}
          className={cn("text-muted-foreground md:hidden", {
            hidden: fullDescription,
          })}
        >
          More...
        </Button>
        <p
          className={cn("hidden md:hidden text-sm font-normal mt-2", {
            block: fullDescription,
          })}
        >
          {videoData.description}
        </p>

        {/* ONLY DISPLAYS ON DESKTOP */}
        <p className="hidden md:block text-sm font-normal mb-2">
          {fullDescription ? videoData.description : descriptionArr[0] + "."}
        </p>
        <Button
          variant="ghost2"
          size="fit"
          onClick={() => setFullDescription(true)}
          className={cn(" text-muted-foreground hidden", {
            "md:flex": descriptionArr.length > 1 && !fullDescription,
          })}
        >
          SHOW MORE
        </Button>
      </div>
    </div>
  );
};

export default Introduction;
