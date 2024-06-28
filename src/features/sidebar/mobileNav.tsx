import { normalize } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import slugify from "slugify";
import { TSidebarItem } from "./types";

const MobileNav = ({ itemsList }: { itemsList: TSidebarItem[] }) => {
  const pathname = usePathname();

  return (
    <div className="md:hidden absolute bottom-0 left-0 right-0 flex bg-background z-20">
      {itemsList.map((item, i) => {
        const href = slugify(normalize(item.text));
        const pathActive =
          pathname === "/" && i === 0 ? true : pathname.includes(href);

        return (
          <Link
            key={item.text}
            href={href}
            className="flex flex-col items-center justify-between flex-1 p-2 transition-all"
          >
            <Image
              src={
                pathActive ? item.imgSrc[1] || item.imgSrc[0] : item.imgSrc[0]
              }
              alt={item.text}
              width={24}
              height={24}
            />
            <p className="text-xs font-normal">{item.text}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default MobileNav;
