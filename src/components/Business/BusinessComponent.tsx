import React from "react";
import Banner from "../globalComponents/Banner/Banner";
import SectionTitle from "../globalComponents/SectionTitle/SectionTitle";
import Wrapper from "../globalComponents/Wrapper/Wrapper";

import Glance from "./Glance";
import CompanyComponent from "./CompanyComponent";

const BusinessComponent = () => {
  const images = "/images/business.png";

  return (
    <>
      {/* Banner Component to display the 'Business Divisions' banner image and heading */}
      <Banner img={images} heading={"Business Divisions"}></Banner>
      
      {/* Wrapper Component to group the main content of the business divisions page */}
      <Wrapper>
        <div className="py-5">
          {/* SectionTitle Component for the 'ATI at a Glance' heading and subtitle */}
          <SectionTitle
            heading={"ATI"}
            className="text-3xl font-bold text-red-700 uppercase text-center sm:text-4xl pr-2"
            className2="text-3xl font-bold text-center sm:text-4xl pr-2"
            subTitle={"at a Glance"}
          ></SectionTitle>
        </div>

        {/* Nested Wrapper Component to group the Glance section */}
        <Wrapper>
          {/* Glance Component to display the 'ATI at a Glance' content */}
          <Glance></Glance>
        </Wrapper>
        
        {/* CompanyComponent to display the company-specific content */}
        <CompanyComponent></CompanyComponent>
      </Wrapper>
    </>
  );
};

export default BusinessComponent;
