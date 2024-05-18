import { SectionProps } from "@/types";
import React from "react";

export default function Section({ heading }: SectionProps) {
  return (
    <div className="mx-auto m-4  lg:py-2">
      <h3 className="text-3xl lg:text-4xl font-bold uppercase text-red-600 mb-4">
        {heading}
      </h3>
    </div>
  );
}
