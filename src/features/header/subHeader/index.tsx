"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { UIEvent, useRef, useState } from "react";
import slugify from "slugify";
import { subHeaderTags } from "./constants";
import NavArrow from "./navArrow";

const SubHeader = () => {
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const tagsRef = useRef<HTMLDivElement>(null);

  const setQuery = (name: string, value: string | number) => {
    router.push(pathname + "?" + name + "=" + value.toString()?.toLowerCase(), {
      scroll: false,
    });
  };

  const handleTagsScroll = (e: UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget?.scrollLeft;
    const offsetWidth = e.currentTarget?.offsetWidth;
    const scrollWidth = e.currentTarget?.scrollWidth;

    if (scrollWidth - (scrollLeft + offsetWidth) < 100)
      setShowRightArrow(false);
    else setShowRightArrow(true);

    if (scrollLeft > 100) setShowLeftArrow(true);
    else setShowLeftArrow(false);
  };

  return (
    <div className="flex px-4 md:pl-6 md:pr-10 py-3 scrollbar-hide border-y border-border w-full relative">
      <NavArrow containerRef={tagsRef} showArrow={showLeftArrow} left />

      <div
        ref={tagsRef}
        className="flex gap-3 overflow-auto scrollbar-hide snap snap-mandatory snap-x"
        onScroll={handleTagsScroll}
      >
        {subHeaderTags.map((tag) => {
          const filterActive =
            searchParams.get("topic") === slugify(tag.toLowerCase());

          return (
            <Button
              variant="secondary"
              key={tag}
              onClick={() => setQuery("topic", slugify(tag))}
              className={cn("rounded-[32px] snap-start", {
                "bg-foreground text-background-3": filterActive,
              })}
            >
              {tag}
            </Button>
          );
        })}
      </div>

      <NavArrow containerRef={tagsRef} showArrow={showRightArrow} />
    </div>
  );
};

export default SubHeader;
