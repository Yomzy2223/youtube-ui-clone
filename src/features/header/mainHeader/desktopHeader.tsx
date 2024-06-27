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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

const DesktopHeader = () => {
  return (
    <div className="hidden md:flex flex-1 justify-between items-center px-6">
      <div className="flex">
        <Image
          src={HamburgerIcon}
          alt="menu"
          width={24}
          height={24}
          className="mx-2"
        />
        <Image
          src={YoutubeLogo}
          alt="menu"
          width={90}
          height={20}
          className="object-contain mx-4"
        />
      </div>

      <div className="flex">
        <Input placeholder="Search..." className="peer w-80" />
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
