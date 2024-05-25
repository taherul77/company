import Image from "next/image";
import logo from "@/assests/footerlogo.png";
import Locationlogo from "@/assests/location.svg";
const Footer = () => {
  return (
    <>
    <hr className="border-gray-600 " />
      <footer className="container mx-auto bg-white ">
        

        <div className="flex flex-col px-2 lg:px-6  py-2 md:py-6 items-center sm:flex-row sm:justify-between">
          <div className="flex justify-center items-center gap-3">
            <Image
              src={logo}
              width={40}
              height={24}
              alt="ATI Limited logo "
              className="object-cover "
            />
            <p className="text-center sm:text-sm lg:text-lg">
              Ati Limited © 2023 – develop by{" "}
              <span className="text-black font-bold">CREATIVE MATTER</span>
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex justify-center items-center  gap-3" >
              <Image
                src={Locationlogo}
                width={40}
              height={24}
                alt="ATI Limited logo "
                className="object-cover"
              />
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
