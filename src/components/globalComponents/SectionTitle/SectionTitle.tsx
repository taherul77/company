import { SectionTitleProps } from "@/types";
import React from "react";

export default function SectionTitle({
  heading,
  className,
  className2,
  subTitle,
}: SectionTitleProps) {
  return (
    <div className="mx-auto text-center  md:w-4/12 ">
      <h1 >
        <span className={`${className || ""}`}>{heading}</span>{" "}
        <span className={`${className2 || ""}`}>{subTitle}</span>
      </h1>
    </div>
  );
}
