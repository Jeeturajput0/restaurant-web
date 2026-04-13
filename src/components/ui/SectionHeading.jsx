import React from "react";

const SectionHeading = ({ eyebrow, title, description, align = "left", className = "" }) => {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-3 ${alignment} ${className}`.trim()}>
      {eyebrow ? <span className="theme-pill">{eyebrow}</span> : null}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">{description}</p>
      ) : null}
    </div>
  );
};

export default SectionHeading;
