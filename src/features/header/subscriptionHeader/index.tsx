"use client";

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
import { cn, normalize } from "@/lib/utils";
import { usePathname } from "next/navigation";

const SubscriptionHeader = ({ fullName }: { fullName: string }) => {
  const pathname = usePathname();

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
      <div className="px-4 mt-4 md:px-16 space-y-2">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <Image
              src={videoData.avatar}
              alt="thumbnail"
              className="w-16 h-16 md:w-20 md:h-20 object-contain shrink-0"
            />
            <div>
              <p className="font-normal text-xl md:text-2xl">
                {videoData.fullName}
              </p>
              <p className="text-muted-foreground text-sm">
                {videoData.subscribers} subsribers
              </p>
            </div>
          </div>
          <Button>SUBSCRIBE</Button>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            {navigationItems.map((item, i) => {
              const href = slugify(normalize(item.title));
              const pathActive =
                pathname === `/subscriptions/${fullName}` && i === 0
                  ? true
                  : pathname.includes(href);

              return (
                <NavigationMenuItem key={item.title}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn("", navigationMenuTriggerStyle(), {
                        "border-border": pathActive,
                      })}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default SubscriptionHeader;
