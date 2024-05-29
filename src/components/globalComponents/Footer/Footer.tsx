import Image from "next/image";
import logo from "@/assests/footerlogo.png"; // Importing footer logo
import Locationlogo from "@/assests/location.svg"; // Importing location logo

const Footer = () => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <>
    {/* Horizontal line to separate footer from content */}
    <hr className="border-gray-600 " />
      {/* Footer section */}
      <footer className="container mx-auto bg-white ">
        
        {/* Footer content */}
        <div className="flex flex-col px-2 lg:px-6  py-2 md:py-6 items-center sm:flex-row-reverse lg:flex-row sm:justify-between">
          {/* Left section containing logo and attribution */}
          <div className="flex justify-center items-center gap-3">
            {/* Logo */}
            <Image
              src={logo}
              width={40}
              height={24}
              alt="ATI Limited logo "
              className="object-cover "
            />
            {/* Attribution */}
            <p className="text-center sm:text-sm lg:text-lg">
              Ati Limited © {currentYear} – develop by{" "}
              <span className="text-black font-bold">CREATIVE MATTER</span>
            </p>
          </div>

          {/* Right section containing address */}
          <div className="flex flex-col justify-center">
            <div className="flex justify-center items-center  gap-3" >
              {/* Location logo */}
              <Image
                src={Locationlogo}
                width={40}
                height={24}
                alt="ATI Limited logo "
                className="object-cover"
              />
              {/* Address */}
              <p className="text-center sm:text-sm lg:text-lg">
                ATI Center, House # 7 Gareeb-e-Nawaz Ave, Dhaka 1230
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
