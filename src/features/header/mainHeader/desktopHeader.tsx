"use client";

import {
  AppsIcon,
  CreateIcon,
  HamburgerIcon,
  MicIcon,
  NotificationsIcon,
  SearchIcon,
} from "@/assets/icons";
import { UserAvatar, YoutubeLogo } from "@/assets/images";
import { Avatar } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useDeleteQuery, useSetQuery } from "@/hooks/queryHooks";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { ChangeEvent } from "react";

const DesktopHeader = () => {
  const setQuery = useSetQuery();
  const deleteQuery = useDeleteQuery();

  const searchParams = useSearchParams();
  const searchValue = searchParams.get("search") || "";

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    value ? setQuery("search", value) : deleteQuery("search");
  };

  return (
    <div className="hidden md:flex flex-1 justify-between items-center px-6">
      <div className="flex">
        <Button size="fit" variant="ghost2" className="">
          <Image
            src={HamburgerIcon}
            alt="menu"
            width={24}
            height={24}
            className="mx-2"
          />
        </Button>
        <Link
          href="/"
          className={buttonVariants({ size: "fit", variant: "ghost2" })}
        >
          <Image
            src={YoutubeLogo}
            alt="menu"
            width={90}
            height={20}
            className="object-contain mx-4"
          />
        </Link>
      </div>

      <div className="flex">
        <Input
          placeholder="Search..."
          className="peer w-80"
          value={searchValue}
          onChange={handleChange}
        />
        <Button className="px-5 py-2 mr-1 rounded-none bg-accent">
          <Image
            src={SearchIcon}
            alt="search"
            width={24}
            height={24}
            className="object-contain"
          />
        </Button>
        <Button className="p-2 rounded-full bg-background">
          <Image
            src={MicIcon}
            alt="mic"
            width={24}
            height={24}
            className="object-contain"
          />
        </Button>
      </div>

      <div className="flex gap-2">
        {[CreateIcon, AppsIcon, NotificationsIcon].map((icon, i) => (
          <Button key={i} variant="ghost" className="p-2">
            <Image
              src={icon}
              alt="mic"
              width={24}
              height={24}
              className="object-contain"
            />
          </Button>
        ))}
        <Button variant="ghost2" className="px-3">
          <Avatar className="h-8 w-8">
            <Image src={UserAvatar} alt="mic" className="object-contain" />
          </Avatar>
        </Button>
      </div>
    </div>
  );
};

export default DesktopHeader;
