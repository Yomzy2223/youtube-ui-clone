import React, { ReactNode } from "react";

const DoChecks = ({
  items,
  children,
  className,
}: {
  items: any[];
  children: ReactNode;
  className?: string;
}) => {
  if (items.length === 0)
    return (
      <div className="flex-1 flex justify-center items-center">
        Search not found !!!
      </div>
    );

  return <div className={className}>{children}</div>;
};

export default DoChecks;
