import { Button } from "@/components/ui/button";
import { TVideoMockData, videosMockData } from "@/lib/videosData";
import Image from "next/image";
import React from "react";
import slugify from "slugify";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ChannelCover } from "@/assets/images";

const SubscriptionHeader = ({ fullName }: { fullName: string }) => {
  const videoData = videosMockData.find(
    (v) => slugify(v.fullName.toLowerCase()) === fullName
  ) as TVideoMockData;

  const navigationItems: { title: string; href: string }[] = [
    {
      title: "Home",
      href: `/subscriptions/${fullName}`,
    },
    {
      title: "Videos",
      href: `/subscriptions/${fullName}/videos`,
    },
    {
      title: "Playlists",
      href: `/subscriptions/${fullName}/playlists`,
    },
    {
      title: "Community",
      href: `/subscriptions/${fullName}/community`,
    },
    {
      title: "Channels",
      href: `/subscriptions/${fullName}/channels`,
    },
    {
      title: "About",
      href: `/subscriptions/${fullName}/about`,
    },
  ];

  return (
    <div>
      <Image
        src={ChannelCover}
        alt="thumbnail"
        className="w-full h-auto object-cover"
      />
      <div>
        <div>
          <Image
            src={videoData.avatar}
            alt="thumbnail"
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
          />
          <div>
            <p>{videoData.fullName}</p>
            <p>{videoData.subscribers} subsribers</p>
          </div>
        </div>
        <Button>SUBSCRIBE</Button>
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          {navigationItems.map((item) => (
            <NavigationMenuItem key={item.title}>
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default SubscriptionHeader;
