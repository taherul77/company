import React from "react";
import RevolutionBanner from "./RevolutionBanner";

const RevolutionComponent = () => {
  const image = "/images/industrialbg.png";
  const images= "/images/Industrial/GIF/astronot.gif"
  return (
    <>
      <RevolutionBanner img={images} backgroundImage={image} heading={"Industrial Revolution 4.0"} ></RevolutionBanner>
    </>
  );
};

export default RevolutionComponent;
