import React from "react";

const baseInputClass = "theme-input";

const Field = ({
  label,
  as = "input",
  className = "",
  wrapperClassName = "",
  ...props
}) => {
  const Component = as;

  return (
    <label className={`flex flex-col gap-2 ${wrapperClassName}`.trim()}>
      {label ? (
        <span className="text-sm font-medium text-slate-700">{label}</span>
      ) : null}
      <Component className={`${baseInputClass} ${className}`.trim()} {...props} />
    </label>
  );
};

export default Field;
