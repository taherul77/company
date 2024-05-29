
"use client";

import Image from "next/image";
import image1 from "@/assests/Business/GIF/settings.gif";
import image2 from "@/assests/Business/GIF/project.gif";
import image3 from "@/assests/Business/GIF/achievements.gif";
import CountUp from "react-countup";

const Glance = () => {
  return (
    <div className="container flex flex-col items-center mx-auto ">
      {/* Wrapper to center and style the content */}
      <div className="flex flex-col w-full justify-center items-center sm:flex-row">
        {/* First statistic block */}
        <div className="flex flex-col w-full justify-center items-center text-center">
          {/* CountUp component to animate the years in business */}
          <CountUp start={0} end={26} delay={0} duration={2.75}>
            {({ countUpRef }) => (
              <h3 className="flex text-2xl uppercase font-bold gap-2">
                <span ref={countUpRef} />
                Years
              </h3>
            )}
          </CountUp>
          <h5 className="text-md lg:text-xl uppercase font-bold">
            In Business
          </h5>
          {/* Image for the first statistic */}
          <Image
            className="h-[200px] w-[200px]"
            height={200}
            width={200}
            alt="Rectangle"
            src={image1}
          />
        </div>

        {/* Second statistic block */}
        <div className="flex flex-col w-full justify-center items-center text-center">
          {/* CountUp component to animate the projects completed */}
          <CountUp start={0} end={500} delay={0} duration={2.75}>
            {({ countUpRef }) => (
              <h3 className="flex text-2xl uppercase font-bold gap-2">
                <span ref={countUpRef} />
              </h3>
            )}
          </CountUp>
          <h5 className="text-md lg:text-xl uppercase font-bold">
            Projects Completed
          </h5>
          {/* Image for the second statistic */}
          <Image
            className="h-[200px] w-[200px]"
            height={200}
            width={200}
            alt="Rectangle"
            src={image2}
          />
        </div>

        {/* Third statistic block */}
        <div className="flex flex-col w-full justify-center items-center text-center">
          {/* CountUp component to animate the achievements */}
          <CountUp start={0} end={10} delay={0} duration={2.75}>
            {({ countUpRef }) => (
              <h3 className="flex text-2xl uppercase font-bold gap-2">
                <span ref={countUpRef} />
              </h3>
            )}
          </CountUp>
          <h5 className="text-md lg:text-xl uppercase font-bold">
            Achievements
          </h5>
          {/* Image for the third statistic */}
          <Image
            className="h-[200px] w-[200px]"
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




















// "use client";

// import Image from "next/image";
// import image1 from "@/assests/Business/GIF/settings.gif";
// import image2 from "@/assests/Business/GIF/project.gif";
// import image3 from "@/assests/Business/GIF/achievements.gif";
// import CountUp from "react-countup";
// const Glance = () => {
//   return (
//     <div className="container flex flex-col items-center mx-auto ">
//       <div className="flex flex-col w-full justify-center items-center sm:flex-row  ">
//         <div className="flex flex-col w-full justify-center items-center text-center ">
//           <CountUp start={0} end={26} delay={0} duration={2.75}>
//             {({ countUpRef }) => (
//               <h3 className="flex text-2xl  uppercase font-bold gap-2">
//                 <span ref={countUpRef} />
//                 Years
//               </h3>
//             )}
//           </CountUp>
//           {/* <CountUp start={0} end={26} duration={2.75}>
//             {({ countUpRef }) => (
//               <h3 className="flex text-2xl  uppercase font-bold gap-2">
//                 <span ref={countUpRef} />
//                 Years
//               </h3>
//             )}
//           </CountUp> */}
//           <h5 className="text-md lg:text-xl uppercase font-bold">
//             In Business
//           </h5>
//           <Image
//             className="h-[200px]  w-[200px]"
//             height={200}
//             width={200}
//             alt="Rectangle"
//             src={image1}
//           />
//         </div>
//         <div className="flex flex-col w-full justify-center items-center text-center ">
//           <CountUp start={0} end={500} delay={0} duration={2.75}>
//             {({ countUpRef }) => (
//               <h3 className="flex text-2xl  uppercase font-bold gap-2">
//                 <span ref={countUpRef} />
//               </h3>
//             )}
//           </CountUp>

//           <h5 className="text-md lg:text-xl uppercase font-bold">
//             Projects Completed
//           </h5>
//           <Image
//             className="h-[200px]  w-[200px]"
//             height={200}
//             width={200}
//             alt="Rectangle"
//             src={image2}
//           />
//         </div>
//         <div className="flex flex-col w-full justify-center items-center text-center ">
//           <CountUp start={0} end={10} delay={0} duration={2.75}>
//             {({ countUpRef }) => (
//               <h3 className="flex text-2xl  uppercase font-bold gap-2">
//                 <span ref={countUpRef} />
//               </h3>
//             )}
//           </CountUp>

//           <h5 className="text-md lg:text-xl uppercase font-bold">
//             Achievements
//           </h5>
//           <Image
//             className="h-[200px]  w-[200px]"
//             height={200}
//             width={200}
//             alt="Rectangle"
//             src={image3}
//           />
//         </div>
//       </div>

  
//     </div>
//   );
// };

// export default Glance;
