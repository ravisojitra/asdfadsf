import React from "react";
import PropTypes from "prop-types";

const shapes = {
  CircleBorder35: "rounded-radius35",
  RoundedBorder8: "rounded-radius8",
  RoundedBorder12: "rounded-radius12",
};
const variants = {
  FillWhiteA700: "bg-white_A700 text-black_900",
  FillBlueA100: "bg-blue_A100 text-blue_50",
  FillGray900: "bg-gray_900 text-white_A700",
  FillYellowA400: "bg-yellow_A400 text-gray_800",
};
const sizes = {
  sm: "lg:p-[4px] xl:p-[6px] p-[7px] 3xl:p-[8px]",
  md: "lg:p-[12px] xl:p-[15px] p-[17px] 3xl:p-[20px]",
  lg: "lg:p-[16px] xl:p-[20px] p-[23px] 3xl:p-[27px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
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
  shape: PropTypes.oneOf([
    "CircleBorder35",
    "RoundedBorder8",
    "RoundedBorder12",
  ]),
  variant: PropTypes.oneOf([
    "FillWhiteA700",
    "FillBlueA100",
    "FillGray900",
    "FillYellowA400",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
Button.defaultProps = {
  className: "",
  shape: "CircleBorder35",
  variant: "FillWhiteA700",
  size: "lg",
};

export { Button };
