import { ExpertiseSectionProps } from "@/types";
import React from "react";

// Define ExpertiseSection component which accepts title, subTitle, and subSubTitle as props
const ExpertiseSection = ({
  title,
  subTitle,
  subSubTitle,
}: ExpertiseSectionProps) => {
  return (
    // Container div for expertise section with padding
    <div className="flex flex-col px-5">
      {/* Title and Subtitle */}
      <h1 className="uppercase">
        {/* Title with red color and bold font */}
        <span className="text-red-700 font-bold text-3xl">{title}</span>{" "}
        {/* Subtitle with bold font */}
        <span className="font-bold text-2xl">{subTitle}</span>
      </h1>
      {/* SubSubtitle */}
      <p className="uppercase text-black ">{subSubTitle}</p>
    </div>
  );
};

export default ExpertiseSection;
