import React from "react";

const ComingSoon = ({ pageTitle }: { pageTitle: string }) => {
  return (
    <div className="flex justify-center items-center h-full w-full p-4">
      <div className="flex flex-col justify-center items-center gap-3">
        <p className="text-xl md:text-2xl text-center">Coming Soon!!!</p>
        <span className="text-muted-foreground text-center">
          {pageTitle} is a top priority feature in our backlog. It will be
          rolled out soon. Anticipate! 🫠
        </span>
      </div>
    </div>
  );
};

export default ComingSoon;
