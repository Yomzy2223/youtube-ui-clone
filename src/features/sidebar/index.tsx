"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import {
  mobileSidebarItems,
  sidbarFooterLinks,
  sidebarItems,
} from "./constants";
import MobileNav from "./mobileNav";
import SidebarSection from "./sidebarSection";

const Sidebar = () => {
  return (
    <>
      {/* MOBILE SIDEBAR */}
      <MobileNav itemsList={mobileSidebarItems} />

      {/*DESKTOP SIDEBAR */}
      <div className="hidden md:block w-64 bg-background-2 max-h-[calc(100vh-56px)] overflow-auto scrollbar-hidden transition-all">
        {sidebarItems.map((section) => (
          <SidebarSection
            title={section.title}
            itemsList={section.itemsList}
            defaultShow={section.defaultShow}
          />
        ))}

        <div className="flex flex-col gap-4 py-4 px-6 mb-10">
          {sidbarFooterLinks.map((section) => (
            <div className="flex flex-wrap gap-2">
              {section.map((link) => (
                <Link
                  href={link.url}
                  className={cn(
                    buttonVariants({ variant: "ghost2", size: "fit" }),
                    "text-xs font-bold text-accent-foreground"
                  )}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          ))}
          <p className="text-xs font-bold text-accent-foreground">
            © 2021 Google LLC
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
