import React from "react";
import DesktopHeader from "./desktopHeader";
import MobileHeader from "./mobileHeader";

const AppHeader = () => {
  return (
    <div className="flex items-center h-14 bg-background-2">
      <DesktopHeader />
      <MobileHeader />
    </div>
  );
};

export default AppHeader;
