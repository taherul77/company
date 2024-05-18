import { ExpertiseSectionProps } from "@/types";
import React from "react";

const ExpertiseSection = ({
  title,
  subTitle,
  subSubTitle,
}: ExpertiseSectionProps) => {
  return (
    <div className="flex flex-col px-5">
      <h1 className="uppercase">
        <span className="text-red-700 font-bold text-3xl">{title}</span>{" "}
        <span className="font-bold text-2xl">{subTitle}</span>
      </h1>
      <p className="uppercase text-black ">{subSubTitle}</p>
    </div>
  );
};

export default ExpertiseSection;
