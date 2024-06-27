import { SearchIcon } from "@/assets/icons";
import { UserAvatar, YoutubeLogo } from "@/assets/images";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const MobileHeader = () => {
  return (
    <div className="flex md:hidden flex-1 items-center justify-between mx-4">
      <Image
        src={YoutubeLogo}
        alt="menu"
        width={90}
        height={20}
        className="object-contain"
      />
      <div className="flex items-center">
        <Button variant="ghost2" className="px-3">
          <Image
            src={SearchIcon}
            alt="search"
            width={24}
            height={24}
            className="object-contain"
          />
        </Button>
        <Button variant="ghost2" className="px-3">
          <Avatar className="h-8 w-8">
            <Image src={UserAvatar} alt="mic" className="object-contain" />
          </Avatar>
        </Button>
      </div>
    </div>
  );
};

export default MobileHeader;
