import React from "react";

const variantClasses = {
  h1: "font-bold text-[8.38px]",
  h2: "font-semibold sm:text-[41px] md:text-[47px] text-[55px]",
  h3: "font-semibold text-4xl sm:text-[32px] md:text-[34px]",
  h4: "font-semibold sm:text-2xl md:text-[26px] text-[28px]",
  h5: "font-semibold text-2xl md:text-[22px] sm:text-xl",
  h6: "text-xl",
  body1: "font-normal text-lg",
  body2: "font-normal text-[16.75px]",
  body3: "text-base",
  body4: "text-sm",
  body5: "font-normal text-[13.4px]",
  body6: "font-normal text-xs",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
