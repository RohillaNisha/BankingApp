import React from "react";

const sizes = {
  "3xl": "text-[25px] font-semibold md:text-[23px] sm:text-[21px]",
  "2xl": "text-[22px] font-semibold",
  xl: "text-xl font-semibold",
  "4xl": "text-[28px] font-semibold md:text-[26px] sm:text-2xl",
  s: "text-base font-bold",
  md: "text-[17px] font-semibold",
  xs: "text-[15px] font-bold",
};

const Heading = ({ children, className = "", size = "2xl", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue_gray-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
