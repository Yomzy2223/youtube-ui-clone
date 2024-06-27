import { useParams } from "next/navigation";
import React from "react";

const SubscriptionAccount = ({ params }: { params: { account: string } }) => {
  return <div>{params.account}</div>;
};

export default SubscriptionAccount;
