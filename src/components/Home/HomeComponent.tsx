import React from "react";
import HomeBanner from "./HomeBanner";
import "./traits.css";
import Traits from "./Traits";
import SectionTitle from "../globalComponents/SectionTitle/SectionTitle";
import Wrapper from "../globalComponents/Wrapper/Wrapper";
import Brand from "./Brand";
import Industries from "./Industries";
import SolutionsComponent from "./SolutionsComponent";


export default function HomeComponent() {
  return (
    <>
      <HomeBanner></HomeBanner>
      <div className="traits bg-cover bg-no-repeat">
        <div className="flex flex-col items-center text-white pt-12">
          <Wrapper>
            <SectionTitle
              heading={"SOLUTIONS"}
              className="text-3xl font-bold uppercase text-center text-white sm:text-4xl"
            ></SectionTitle>
          </Wrapper>
        </div>
        <div className="flex flex-col items-center text-white py-10">
        <Wrapper>
          <SolutionsComponent></SolutionsComponent>
        </Wrapper>
    
        </div>
      </div>
      <Industries></Industries>
      <div className="traits bg-center bg-cover bg-no-repeat">
        <Wrapper>
          <SectionTitle
            heading={"OUR TRAITS"}
            className="text-3xl font-bold uppercase text-center text-white sm:text-4xl"
          ></SectionTitle>
          <Wrapper>
            <Traits></Traits>
          </Wrapper>
        </Wrapper>
      </div>
      <Wrapper>
        <Brand></Brand>
      </Wrapper>
     




    
    </>
  );
}
