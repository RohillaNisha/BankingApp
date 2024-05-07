import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-[20px]",
  circle: "rounded-[50%]",
};
const variants = {
  fill: {
    white_A700: "bg-white-A700 shadow-xs",
    indigo_700: "bg-indigo-700 shadow-xs text-white-A700",
    indigo_600_01: "bg-indigo-600_01 text-white-A700",
    gray_100_04: "bg-gray-100_04",
  },
  outline: {
    green_600: "border-green-600 border-2 border-solid",
    red_700: "border-red-700 border-2 border-solid",
    indigo_600_01: "border-indigo-600_01 border border-solid text-indigo-600_01",
  },
};
const sizes = {
  xs: "h-[21px] text-[17px]",
  xl: "h-[40px] px-4 text-[15px]",
  "2xl": "h-[50px] px-6 text-base",
  "4xl": "h-[55px] px-[13px]",
  sm: "h-[30px] px-[9px]",
  "6xl": "h-[70px] px-5",
  lg: "h-[35px] px-3.5 text-[15px]",
  "3xl": "h-[50px] px-3",
  "5xl": "h-[60px] px-[17px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "3xl",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round", "circle"]),
  size: PropTypes.oneOf(["xs", "xl", "2xl", "4xl", "sm", "6xl", "lg", "3xl", "5xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["white_A700", "indigo_700", "indigo_600_01", "gray_100_04", "green_600", "red_700"]),
};

export { Button };
