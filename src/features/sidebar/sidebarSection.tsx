import { ArrowBottomIcon } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { TSidebarSectionProps } from "./types";

const SidebarSection = ({
  title,
  itemsList,
  defaultShow,
}: TSidebarSectionProps) => {
  const [show, setShow] = useState(defaultShow || itemsList.length);
  const showMoreButton = itemsList.length > show;

  const pathname = usePathname();

  return (
    <div className="py-3 border-b border-border bg-background-3 transition-all mr-2">
      {title && (
        <h3 className="text-accent-foreground px-6 py-2 uppercase text-sm font-bold">
          {title}
        </h3>
      )}

      {itemsList.slice(0, show).map((item, i) => {
        const pathActive =
          pathname === "/" && item.default
            ? true
            : pathname.includes(item.href);

        return (
          <Link
            key={item.text + item.href}
            href={item.href}
            className={cn("flex items-center gap-6 p-2 pl-6 transition-all", {
              "bg-muted": pathActive,
            })}
          >
            <Image
              src={
                pathActive ? item.imgSrc[1] || item.imgSrc[0] : item.imgSrc[0]
              }
              alt={item.text}
              width={24}
              height={24}
            />
            <p className="text-sm font-normal">{item.text}</p>
          </Link>
        );
      })}

      {showMoreButton && (
        <Button
          variant="ghost2"
          className="justify-start gap-6 p-2 pl-6 w-full"
          onClick={() => setShow(itemsList.length)}
        >
          <Image src={ArrowBottomIcon} alt="show more" width={24} height={24} />
          <span>Show {itemsList.length - show} More</span>
        </Button>
      )}
    </div>
  );
};

export default SidebarSection;
