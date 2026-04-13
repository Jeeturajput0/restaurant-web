import React from "react";

const variants = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost: "btn-ghost",
};

const Button = ({
  as: Component = "button",
  variant = "primary",
  className = "",
  children,
  ...props
}) => {
  const classes = `${variants[variant] || variants.primary} ${className}`.trim();

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

export default Button;
