"use client";

import React from "react";
import DesktopHeader from "./desktopHeader";
import MobileHeader from "./mobileHeader";

const AppHeader = () => {
  return (
    <div className="flex items-center h-14 bg-background-3 md:grid sticky top-0 left-0 z-50">
      <DesktopHeader />
      <MobileHeader />
    </div>
  );
};

export default AppHeader;
