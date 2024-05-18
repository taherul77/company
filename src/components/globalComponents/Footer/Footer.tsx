import Image from "next/image";
import logo from "@/assests/logo.png";
import Locationlogo from "@/assests/locationview.png";
const Footer = () => {
  return (
    <>
      <footer className="bg-white ">
        <div className="container px-6  mx-auto">
          <hr className="border-gray-200 " />
          <div className="flex flex-col py-8 items-center sm:flex-row sm:justify-between">
            <div className="flex justify-center gap-1">
              <Image
                src={logo}
                width={26}
                height={20}
                alt="ATI Limited logo "
                className="object-cover "
              />
              <p className="text-center text-md">
                Ati Limited © 2023 – develop by{" "}
                <span className="text-black">CREATIVE MATTER</span>
              </p>
            </div>

            <div className="flex justify-center gap-1">
              <Image
                src={Locationlogo}
                width={24}
                height={20}
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
