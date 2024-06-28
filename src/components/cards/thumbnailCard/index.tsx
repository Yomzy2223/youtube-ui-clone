import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import slugify from "slugify";

type TProps = {
  thumbnail: any;
  duration: string;
  avatar: any;
  title: string;
  fullName: string;
  views: string;
  posted: string;
};

const ThunbnailCard = ({
  thumbnail,
  duration,
  avatar,
  title,
  fullName,
  views,
  posted,
}: TProps) => {
  return (
    <Link href={`/videos/${slugify(title.toLowerCase())}`} className="group">
      <div className="relative mb-3 group-hover:ring-1 group-hover:ring-border">
        <Image
          src={thumbnail}
          alt="thumbnail"
          className="w-full h-auto md:min-w-[276px]"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 transition-all duration-300 bg-transparent group-hover:bg-background-2/10" />
        <p className="bg-background px-1 py-[3px] text-foreground font-normal text-[10px] absolute right-1 bottom-1">
          {duration}
        </p>
      </div>
      <div className="flex gap-3 peer">
        <Avatar className="h-9 w-9">
          <Image src={avatar} alt="mic" className="object-contain" />
        </Avatar>
        <div className="text-xs text-muted-foreground">
          <p className="font-bold mb-1.5">{title}</p>
          <p className="">{fullName}</p>
          <p>
            <span>{views} Views</span>
            {" . "}
            <span>{posted}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ThunbnailCard;
