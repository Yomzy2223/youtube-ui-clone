import Sidebar from "@/features/sidebar";
import React, { ReactNode, Suspense } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-1 sticky top-0">
      <Sidebar />
      <div className="sticky top-0 max-h-[calc(100vh-56px)] w-full overflow-auto overflow-x-hidden scrollbar-hidden">
        {children}
      </div>
    </div>
  );
};

export default Layout;
