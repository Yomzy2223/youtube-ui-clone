"use client";

import React from "react";
import { mobileSidebarItems, sidebarItems } from "./constants";
import MobileNav from "./mobileNav";
import SidebarSection from "./sidebarSection";

const Sidebar = () => {
  return (
    <>
      {/* MOBILE SIDEBAR */}
      <MobileNav itemsList={mobileSidebarItems} />

      {/*DESKTOP SIDEBAR */}
      <div className="hidden md:block w-60 bg-background-2 pr-4 max-h-[calc(100vh-56px)] overflow-auto scrollbar-hidden transition-all">
        {sidebarItems.map((section) => (
          <SidebarSection
            title={section.title}
            itemsList={section.itemsList}
            defaultShow={section.defaultShow}
          />
        ))}
      </div>
    </>
  );
};

export default Sidebar;
