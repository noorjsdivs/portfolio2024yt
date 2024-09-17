import React from "react";
import { twMerge } from "tailwind-merge";

const SectionTitle = ({ no, title, className }) => {
  return (
    <p
      className={twMerge(
        "text-redBg uppercase font-semibold text-lg flex items-start gap-1",
        className
      )}
    >
      {no} <span className=" tracking-widest px-1">//</span>{" "}
      <span className="text-white font-medium">{title}</span>
    </p>
  );
};

export default SectionTitle;
