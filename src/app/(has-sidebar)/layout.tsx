import Sidebar from "@/features/sidebar";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Sidebar />
      <div className="overflow-x-hidden scrollbar-hidden">{children}</div>
    </>
  );
};

export default Layout;
