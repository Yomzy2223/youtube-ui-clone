"use client";

import {
  commentsMockData,
  TVideoMockData,
  videosMockData,
} from "@/lib/videosData";
import Image from "next/image";
import React, { useState } from "react";
import slugify from "slugify";

export const Comments = ({ title }: { title: string }) => {
  const [openOnMobile, setOpenOnMobile] = useState(false);

  const videoData = videosMockData.find(
    (v) => slugify(v.title.toLowerCase()) === title
  ) as TVideoMockData;

  return <div className="mr-3"></div>;
};
