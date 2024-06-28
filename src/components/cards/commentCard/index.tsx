import { DisLikedIcon, LikedIcon } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const CommentCard = ({
  name,
  Avatar,
  comment,
  liked,
  disliked,
  time,
}: {
  name: string;
  Avatar: any;
  comment: string;
  liked: string;
  disliked: string;
  time: string;
}) => {
  return (
    <div className="flex gap-4">
      <Button variant="ghost2" size="fit" className="shrink-0">
        <Image
          src={Avatar}
          alt="thumbnail"
          className="w-8 h-8 md:w-10 md:h-10 object-contain"
        />
      </Button>
      <div>
        <p className="text-xs mb-1">
          <span className="font-bold mr-1">{name}</span>
          <span className="font-normal text-muted-foreground">{time}</span>
        </p>
        <p className="font-normal text-sm mb-3">{comment}</p>
        <div className="flex items-center gap-4">
          <Button variant="ghost2" size="fit" className="gap-2">
            <Image src={LikedIcon} alt="liked" width={16} height={16} />
            <span>{liked}</span>
          </Button>
          <Button variant="ghost2" size="fit" className="gap-2">
            <Image src={DisLikedIcon} alt="disliked" width={16} height={16} />
            <span>{disliked}</span>
          </Button>
          <Button
            variant="ghost2"
            size="fit"
            className="text-muted-foreground ml-2"
          >
            REPLY
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
