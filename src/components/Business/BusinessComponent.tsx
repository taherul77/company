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
      <Banner img={images} heading={"Business Divisions"}></Banner>
      <Wrapper>
        <div className="py-5">
          <SectionTitle
            heading={"ATI"}
            className="text-3xl font-bold text-red-700 uppercase text-center sm:text-4xl pr-2"
            className2="text-3xl font-bold text-center sm:text-4xl pr-2"
            subTitle={"at a Glance"}
          ></SectionTitle>
          </div>
          <Wrapper>
          <Glance></Glance>
        </Wrapper>
        <CompanyComponent></CompanyComponent>
      </Wrapper>
    </>
  );
};

export default BusinessComponent;
