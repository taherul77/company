"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import image1 from "@/assests/Business/GIF/settings.gif";
import image2 from "@/assests/Business/GIF/project.gif";
import image3 from "@/assests/Business/GIF/achievements.gif";

const Glance = () => {
  const [yearsCount, setYearsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [achievementsCount, setAchievementsCount] = useState(0);

  useEffect(() => {
    const yearsTarget = 26;
    const projectsTarget = 500;
    const achievementsTarget = 10;
    const totalSteps = 100;
    const duration = 100;

    const yearsInitial = 0;
    const projectsInitial = 0;
    const achievementsInitial = 0;

    const yearsStep = (yearsTarget - yearsInitial) / totalSteps;
    const projectsStep = (projectsTarget - projectsInitial) / totalSteps;
    const achievementsStep =
      (achievementsTarget - achievementsInitial) / totalSteps;

    const interval = setInterval(() => {
      setYearsCount((prevCount) =>
        Math.min(prevCount + yearsStep, yearsTarget)
      );
      setProjectsCount((prevCount) =>
        Math.min(prevCount + projectsStep, projectsTarget)
      );
      setAchievementsCount((prevCount) =>
        Math.min(prevCount + achievementsStep, achievementsTarget)
      );
    }, duration / totalSteps);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container flex flex-col items-center mx-auto ">
      <div className="flex flex-col w-full justify-center items-center sm:flex-row  ">
        <div className="flex flex-col w-full justify-center items-center text-center ">
          <h3 className="text-2xl  uppercase font-bold">{yearsCount} Years</h3>
          <h5 className="text-md lg:text-xl uppercase font-bold">
            In Business
          </h5>
          <Image
            className="h-[200px]  w-[200px]"
            height={200}
            width={200}
            alt="Rectangle"
            src={image1}
          />
        </div>
        <div className="flex flex-col w-full justify-center items-center text-center ">
          <h3 className="text-2xl  uppercase font-bold">{projectsCount}+</h3>
          <h5 className="text-md lg:text-xl uppercase font-bold">
            Projects Completed
          </h5>
          <Image
            className="h-[200px]  w-[200px]"
            height={200}
            width={200}
            alt="Rectangle"
            src={image2}
          />
        </div>
        <div className="flex flex-col w-full justify-center items-center text-center ">
          <h3 className="text-2xl  uppercase font-bold">{achievementsCount}</h3>
          <h5 className="text-md lg:text-xl uppercase font-bold">
            Achievements
          </h5>
          <Image
            className="h-[200px]  w-[200px]"
            height={200}
            width={200}
            alt="Rectangle"
            src={image3}
          />
        </div>
      </div>
    </div>
  );
};

export default Glance;
