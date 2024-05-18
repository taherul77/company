import Image from 'next/image';
import React from 'react'
import "./solutioncomponent.css"
const SolutionsComponent = () => {
    const solutions = [
        {
          src: "/images/Home/Icon/HMS.svg",
          alt: "Laboratory Information System",
          label: "Laboratory Information System",
        },
        {
          src: "/images/Home/Icon/HRM.svg",
          alt: "Laboratory Information System",
          label: "Laboratory Information System",
        },
        {
          src: "/images/Home/Icon/HRM.svg",
          alt: "Laboratory Information System",
          label: "Laboratory Information System",
        },
       
      ];
  return (
   
      <div className="relative flex flex-wrap justify-center items-center max-w-screen-lg">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="hexagon m-4 flex flex-col items-center justify-center p-4 absulute"
          >
            <Image src={solution.src} alt={solution.alt} width={80} height={80} />
            <span className="text-center mt-2">{solution.label}</span>
          </div>
        ))}
      </div>

  )
}

export default SolutionsComponent