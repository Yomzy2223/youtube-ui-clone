import SubscriptionHeader from "@/features/header/subscriptionHeader";
import React, { ReactNode } from "react";

const Layout = ({
  params,
  children,
}: {
  params: { name: string };
  children: ReactNode;
}) => {
  return (
    <div>
      <SubscriptionHeader fullName={params.name} />
      <div className="pt-4 pb-14 px-4 md:px-16 space-y-2">{children}</div>
    </div>
  );
};

export default Layout;
