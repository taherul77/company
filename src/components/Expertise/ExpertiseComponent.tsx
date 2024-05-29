import { ExpertiseProps } from "@/types";

import Banner from "../globalComponents/Banner/Banner";

import ExpertiseSection from "./ExpertiseSection";
import ExpertiseSectionImageLeft from "./ExpertiseSectionImageLeft";
import ExpertiseSectionImageRight from "./ExpertiseSectionImageRight";
import ExpertiessWrapper from "./ExpertiessWrapper";
import "./expertise.css";
const ExpertiseComponent = () => {
   // Define image paths for expertise sections
  const images = "/images/expertise1.png";
  const images1 = "/images/image1.jpg";
  const images2 = "/images/image2.jpg";
  const images3 = "/images/image3.jpg";
  const images4 = "/images/image4.jpg";
  const images5 = "/images/image5.jpg";
  const images6 = "/images/image6.jpg";
  const images7 = "/images/image7.jpg";
  const images8 = "/images/image8.jpg";

  return (
    <>
     {/* Banner Component to display the 'Expertise' banner image and heading */}
      <Banner img={images} heading={"Expertise"}></Banner>
       {/* Container div to style the content */}
      <div
        className="content-container bg-center bg-cover bg-no-repeat"
      >
        {/* Wrapper Component to contain expertise sections */}
        <ExpertiessWrapper>
          {/* Expertise sections */}
          {/* Each section consists of a title, subtitle, sub-subtitle, and an image */}
          <div className="flex flex-col md:flex-row gap-10 justify-center items-center  py-8">
            <ExpertiseSectionImageLeft
              img={images1}
            ></ExpertiseSectionImageLeft>

            <ExpertiseSection
              title={"software"}
              subTitle={"development"}
              subSubTitle={
                "creating custom software application for various industries"
              }
            ></ExpertiseSection>
          </div>
          {/* Repeat the above pattern for other expertise sections */}
          <div className="flex flex-col-reverse md:flex-row gap-10 justify-center items-center  py-8 ">
            <ExpertiseSection
              title={"IT"}
              subTitle={"consulting"}
              subSubTitle={
                "Providing strategic advice and solutions to businesses for optimizing their IT infrastructure. "
              }
            ></ExpertiseSection>
            <ExpertiseSectionImageRight
              img={images2}
            ></ExpertiseSectionImageRight>
          </div>
          <div className="flex flex-col md:flex-row  gap-10 justify-center items-center py-8">
            <ExpertiseSectionImageLeft
              img={images3}
            ></ExpertiseSectionImageLeft>

            <ExpertiseSection
              title={"Cyber"}
              subTitle={"security"}
              subSubTitle={
                "Offering services to secure digital assets, protect against cyber threats, and ensure data privacy. "
              }
            ></ExpertiseSection>
          </div>
          <div className="flex flex-col-reverse md:flex-row  gap-10 justify-center items-center py-8 ">
            <ExpertiseSection
              title={"Networking "}
              subTitle={"Solutions"}
              subSubTitle={
                "Designing and implementing network infrastructure for seamless communication. "
              }
            ></ExpertiseSection>
            <ExpertiseSectionImageRight
              img={images4}
            ></ExpertiseSectionImageRight>
          </div>
          <div className="flex flex-col md:flex-row  gap-10 justify-center items-center  py-8">
            <ExpertiseSectionImageLeft
              img={images5}
            ></ExpertiseSectionImageLeft>

            <ExpertiseSection
              title={"Web "}
              subTitle={"Development"}
              subSubTitle={
                "Designing and developing websites and web applications. "
              }
            ></ExpertiseSection>
          </div>
          <div className="flex flex-col-reverse md:flex-row  gap-10 justify-center items-center  py-8">
            <ExpertiseSection
              title={"Mobile App  "}
              subTitle={"Development"}
              subSubTitle={
                "Creating applications for mobile devices on various platforms. "
              }
            ></ExpertiseSection>
            <ExpertiseSectionImageRight
              img={images6}
            ></ExpertiseSectionImageRight>
          </div>
          <div className="flex flex-col md:flex-row gap-10 justify-center items-center  py-8">
            <ExpertiseSectionImageLeft
              img={images7}
            ></ExpertiseSectionImageLeft>

            <ExpertiseSection
              title={"Artificial   "}
              subTitle={"Intelligence & Machine Learning "}
              subSubTitle={
                "Implementing AI and ML solutions for automation and data analysis."
              }
            ></ExpertiseSection>
          </div>
          <div className="flex flex-col-reverse md:flex-row gap-10 justify-center items-center  py-8 ">
            <ExpertiseSection
              title={"Data"}
              subTitle={"Analytics"}
              subSubTitle={
                "Analyzing and interpreting data to help businesses make informed decisions. "
              }
            ></ExpertiseSection>
            <ExpertiseSectionImageRight
              img={images8}
            ></ExpertiseSectionImageRight>
          </div>
        </ExpertiessWrapper>
      </div>
    </>
  );
};

export default ExpertiseComponent;
