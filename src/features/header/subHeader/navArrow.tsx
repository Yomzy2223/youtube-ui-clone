import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { RefObject } from "react";

const NavArrow = ({
  containerRef,
  left,
  showArrow,
}: {
  containerRef: RefObject<HTMLDivElement>;
  left?: boolean;
  showArrow?: boolean;
}) => {
  return (
    <Button
      variant="ghost2"
      className={cn(
        "hidden md:flex absolute right-0 bottom-0 p-5 bg-[#212121E5] rounded-none h-max duration-500",
        {
          "opacity-0": !showArrow,
          "left-0 right-auto": left,
        }
      )}
      onClick={() =>
        containerRef.current?.scrollBy({
          left: left ? -100 : 100,
          behavior: "smooth",
        })
      }
    >
      {left ? <ChevronLeft /> : <ChevronRight />}
    </Button>
  );
};

export default NavArrow;
