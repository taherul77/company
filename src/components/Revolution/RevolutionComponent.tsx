import React from "react";
import RevolutionBanner from "./RevolutionBanner";

const RevolutionComponent = () => {
  const image = "/images/industrialbg.png";
 
  return (
    <>
      <RevolutionBanner  backgroundImage={image} heading={"Industrial Revolution 4.0"} ></RevolutionBanner>
    </>
  );
};

export default RevolutionComponent;
