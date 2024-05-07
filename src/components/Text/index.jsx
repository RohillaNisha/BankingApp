import React from "react";

const sizes = {
  "5xl": "text-[22px] font-normal",
  xs: "text-xs font-normal",
  lg: "text-[15px] font-normal",
  s: "text-[13px] font-normal",
  "3xl": "text-lg font-medium",
  "4xl": "text-xl font-normal",
  xl: "text-base font-normal",
  md: "text-sm font-normal",
};

const Text = ({ children, className = "", as, size = "xl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-400 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
