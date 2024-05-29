import { ExpertiseSectionProps } from "@/types";
import { useLocale } from "next-intl";
import Link from "next/link";
import React from "react";

const SolutionTitleMobile = ({
  title,
  subTitle,
  subSubTitle,
}: ExpertiseSectionProps) => {
  const locale = useLocale();
  return (
    <>
      <Link href={`/${locale}/solutions`}>
        <div className="flex flex-col justify-center items-center px-5 ">
          <h1 className="uppercase pb-4">
            <span className="text-red-700 font-bold text-3xl">{title}</span>{" "}
            <span className="font-bold text-2xl">{subTitle}</span>
          </h1>
          <p className="uppercase text-justify text-white line-clamp-6">
            {subSubTitle}
          </p>
        </div>
      </Link>
    </>
  );
};

export default SolutionTitleMobile;
