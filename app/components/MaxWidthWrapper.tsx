import React from "react";

const MaxWidthWrapper = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="flex w-full justify-center">
      <div className="w-full max-w-7xl">{children}</div>
    </div>
  );
};

export default MaxWidthWrapper;
