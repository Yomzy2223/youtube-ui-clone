import SubscriptionHeader from "@/features/header/subscriptionHeader";
import React from "react";

const Layout = ({ params }: { params: { name: string } }) => {
  return (
    <div>
      <SubscriptionHeader fullName={params.name} />
    </div>
  );
};

export default Layout;
