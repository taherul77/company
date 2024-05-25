import React from "react";
import BrandImage from "./BrandImage";
import BrandTopSection from "./BrandTopSection";
import Wrapper from "../globalComponents/Wrapper/Wrapper";

const Brand = () => {
  const images = [
    { normalImage: "/images/Home/Logo/IFC-02.svg", hoverImage: "/images/Home/Logo/ifc.svg" },
    { normalImage: "/images/Home/Logo/UNICEF Bangladesh-02.svg", hoverImage: "/images/Home/Logo/UNICEF.svg" },
    { normalImage: "/images/Home/Logo/UNDP-02.svg", hoverImage: "/images/Home/Logo/UNDP.svg" },
    { normalImage: "/images/Home/Logo/Drug International-02.svg", hoverImage: "/images/Home/Logo/DrugInternational.svg" },
    { normalImage: "/images/Home/Logo/govt-02.svg", hoverImage: "/images/Home/Logo/govt.svg" },
    { normalImage: "/images/Home/Logo/Bangladesh Navy-02.svg", hoverImage: "/images/Home/Logo/BangladeshNavy.svg" },
    { normalImage: "/images/Home/Logo/BangladeshArmy-02.svg", hoverImage: "/images/Home/Logo/bangladeshArmy.svg" },
    { normalImage: "/images/Home/Logo/Dhaka cantonment-02.png", hoverImage: "/images/Home/Logo/Dhakacantonment.png" },
    { normalImage: "/images/Home/Logo/GP-02.svg", hoverImage: "/images/Home/Logo/GP.svg" },
    { normalImage: "/images/Home/Logo/BSMMU-02.svg", hoverImage: "/images/Home/Logo/BSMMU.svg" },
    { normalImage: "/images/Home/Logo/UGC-02.svg", hoverImage: "/images/Home/Logo/UGC.svg" },
    { normalImage: "/images/Home/Logo/KYAMCH-02.svg", hoverImage: "/images/Home/Logo/KYAMCH.svg" },
    { normalImage: "/images/Home/Logo/Bangladesh Diabetic Association-02.svg", hoverImage: "/images/Home/Logo/BangladeshDiabeticAssociation.svg" },
    { normalImage: "/images/Home/Logo/GPH ispat-02.svg", hoverImage: "/images/Home/Logo/GPHispat.svg" },
    { normalImage: "/images/Home/Logo/FAO-02.svg", hoverImage: "/images/Home/Logo/FAO.svg" },
    { normalImage: "/images/Home/Logo/Ramathibodi Hospital University-02.svg", hoverImage: "/images/Home/Logo/RamathibodiHospitalUniversity.svg" },
    { normalImage: "/images/Home/Logo/LS Cable-02.svg", hoverImage: "/images/Home/Logo/LSCable.svg" },
    { normalImage: "/images/Home/Logo/Universal Medical  College & Hospital-02.svg", hoverImage: "/images/Home/Logo/UniversalMedicalCollegeHospital.svg" },
  ];

  return (
    <>
      <BrandTopSection />
      
      <div className="flex flex-wrap justify-center">
        {images.map((image, index) => (
          <BrandImage
            key={index}
            normalImage={image.normalImage}
            hoverImage={image.hoverImage}
          />
        ))}
      </div>
      
     
    </>
  );
};

export default Brand;
