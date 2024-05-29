"use client"; // This directive indicates that this component should be rendered on the client side

import Link from "next/link"; // Importing the Link component from Next.js for client-side navigation
import "./globals.css"; // Importing global CSS styles
import Lottie from "lottie-react";
import Animation from "@/assests/data.json";
export default function NotFound() {
  // Defining and exporting the NotFound component as the default export
  return (
    <html lang="en">
     
      <body>
        <div className="w-full h-[100vh] bg-white text-white bg-cover bg-center bg-no-repeat" >
          <div className="flex justify-center flex-col items-center ">
            <Lottie
              animationData={Animation}
              loop={true}
              style={{ width: 800, height: 500 }}
            />
            <Link
              href="/"
              className="my-5 lg:my-0 px-8 py-2 font-bold rounded rounded-full border border-2 border-[#4FA8FC] text-black hover:bg-gradient-to-r from-[#8AC9F4] to-[##046A89] hover:text-black transition duration-300"
            >
              HOME PAGE
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}

// style={{ backgroundImage: "url('/images/Expertise/expertisedemo.png')" }}

{
  /* <span className="text-[9rem] font-extrabold flex justify-center items-center space-x-5 ">
      
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#061c38] via-[#04507B] to-[#59a2ff]">
                4
              </span>
              <span className="text-transparent animate-bounce bg-clip-text bg-gradient-to-r from-[#061c38] via-[#04507B] to-[#59a2ff]">
                0
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#061c38] via-[#04507B] to-[#59a2ff]">
                4
              </span>
            </span> */
}
{
  /* <div className="md:absolute top-32 flex justify-center saturate-200 items-center text-2xl md:text-5xl font-bold">
              PAGE NOT FOUND
            </div> */
}
