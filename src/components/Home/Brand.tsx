import React from "react";
import BrandImage from "./BrandImage";
import BrandTopSection from "./BrandTopSection";

const Brand = () => {
  const images = [
    "/images/Home/Logo/ifc.svg",
    "/images/Home/Logo/UNICEF.svg",
    "/images/Home/Logo/UNDP.svg",
    "/images/Home/Logo/DrugInternational.svg",
    "/images/Home/Logo/govt.svg",
    "/images/Home/Logo/BangladeshNavy.svg",
    "/images/Home/Logo/bangladeshArmy.svg",
    "/images/Home/Logo/Dhakacantonment.png",
    "/images/Home/Logo/GP.svg",
    "/images/Home/Logo/BSMMU.svg",
    "/images/Home/Logo/UGC.svg",
    "/images/Home/Logo/KYAMCH.svg",
    "/images/Home/Logo/BangladeshDiabeticAssociation.svg",
    "/images/Home/Logo/GPHispat.svg",
  ];
  const images2 = [
    "/images/Home/Logo/FAO.svg",
    "/images/Home/Logo/RamathibodiHospitalUniversity.svg",
    "/images/Home/Logo/LSCable.svg",
    "/images/Home/Logo/UniversalMedicalCollegeHospital.svg",
  ];
  return (
    <>
      <BrandTopSection></BrandTopSection>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7">
          {images.map((image, index) => (
            <BrandImage key={index} image={image} />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        {images2.map((image, index) => (
          <BrandImage key={index} image={image} />
        ))}
      </div>
    </>
  );
};

export default Brand;
