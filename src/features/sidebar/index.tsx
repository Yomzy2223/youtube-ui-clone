import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { sidbarFooterLinks, sidebarItems } from "./constants";
import MobileNav from "./mobileNav";
import SidebarSection from "./sidebarSection";

const Sidebar = () => {
  return (
    <>
      {/* MOBILE NAVIGATION BAR */}
      <MobileNav />

      {/*DESKTOP SIDEBAR */}
      <div className="hidden md:block w-64 bg-background-3 max-h-[calc(100vh-56px)] overflow-auto scrollbar-hidden shrink-0">
        {sidebarItems.map((section, i) => (
          <SidebarSection
            key={i}
            title={section.title}
            itemsList={section.itemsList}
            defaultShow={section.defaultShow}
          />
        ))}

        <div className="flex flex-col gap-4 py-4 px-6 mb-10">
          {sidbarFooterLinks.map((section, i) => (
            <div key={i} className="flex flex-wrap gap-2">
              {section.map((link) => (
                <Link
                  key={link.text}
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
