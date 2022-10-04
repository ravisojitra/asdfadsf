import React from "react";
const variantClasses = {
  h1: "font-bold lg:text-[56px] xl:text-[71px] text-[80px] 3xl:text-[96px]",
  h2: "lg:text-[45px] xl:text-[56px] text-[64px] 3xl:text-[76px]",
  h3: "font-extrabold lg:text-[34px] xl:text-[42px] text-[48px] 3xl:text-[57px]",
  h4: "font-bold lg:text-[22px] xl:text-[28px] text-[32px] 3xl:text-[38px]",
  h5: "font-black lg:text-[21px] xl:text-[26px] text-[30px] 3xl:text-[36px]",
  h6: "lg:text-[17px] xl:text-[21px] text-[24px] 3xl:text-[28px]",
  body1:
    "font-normal lg:text-[15px] xl:text-[19px] text-[22px] 3xl:text-[26px]",
  body2: "lg:text-[10px] xl:text-[13px] text-[15px] 3xl:text-[18px]",
  body3:
    "font-semibold xl:text-[12px] text-[14px] 3xl:text-[16px] lg:text-[9px]",
  body4: "xl:text-[11px] text-[13px] 3xl:text-[15px] lg:text-[9px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
