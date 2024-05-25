import React from "react";
import "./solution.css";
import SolutionLeftImage from "./SolutionLeftImage";
import SolutionRightImage from "./SolutionRightImage";
import Wrapper from "../globalComponents/Wrapper/Wrapper";
import SolutionSectionTitle from "./SolutionSectionTitle";
const SolutionComponent = () => {
  const images1 = "/images/Solutions/icon/HMS.svg";
  const images2 = "/images/Solutions/icon/MCMS.svg";
  const images3 = "/images/Solutions/icon/LIS.svg";
  const images4 = "/images/Solutions/icon/RIS.svg";
  const images5 = "/images/Solutions/icon/UMS.svg";
  const images6 = "/images/Solutions/icon/ERP.svg";
  const images7 = "/images/Solutions/icon/HRM.svg";
  const images8 = "/images/Solutions/icon/AIS.svg";
  const images9 = "/images/Solutions/icon/VAT.svg";
  return (
    <>
      <div className="solution bg-center bg-cover bg-no-repeat">
        <div className="pt-16">
          <Wrapper>
            <div className="flex flex-col md:flex-row justify-start items-center gap-2 py-8">
              <SolutionLeftImage img={images1}></SolutionLeftImage>
              <SolutionSectionTitle
                title={"Hospital Management System "}
                className2="flex  text-white"
                translateX={"translateX(200px)"}
                subSubTitle={
                  "The primary goal of an HMS is to enhance the overall efficiency, accuracy, and quality of healthcare delivery."
                }
              ></SolutionSectionTitle>
            </div>
            <div className="flex flex-col-reverse md:flex-row justify-end items-center gap-2 py-8 ">
              <SolutionSectionTitle
                title={"Medical College Management System "}
                className="flex justify-end"
                className2="flex justify-end text-end text-white overflow-hidden"
                translateX={"translateX(-200px)"}
                subSubTitle={
                  "It is a specialized software program made to help medical colleges and other healthcare education institutions organize and manage their clinical, academic, and administrative operations. Improving efficiency, coordination, and regulatory compliance is the main objective of an MCMS."
                }
              ></SolutionSectionTitle>
              <SolutionRightImage img={images2}></SolutionRightImage>
            </div>
            <div className="flex flex-col md:flex-row justify-start items-center gap-2 py-8">
              <SolutionLeftImage img={images3}></SolutionLeftImage>
              <SolutionSectionTitle
                title={"Laboratory Information System"}
                translateX={"translateX(200px)"}
                className2="flex  text-white"
                subSubTitle={
                  "The primary purpose of a LIS is to facilitate the efficient processing of laboratory tests, ensure accurate reporting of results, and enhance overall laboratory management."
                }
              ></SolutionSectionTitle>
            </div>
            <div className="flex justify-end flex-col-reverse flex-col md:flex-row  items-center gap-2 py-8 ">
              <SolutionSectionTitle
                title={"Radiology Information System"}
                className="flex justify-end"
                translateX={"translateX(-200px)"}
                className2="flex justify-end text-end text-white"
                subSubTitle={
                  "This software system is designed to manage and streamline the workflow and operations within a radiology department or imaging center. The purpose is to facilitate the efficient management of radiological data, patient information, and imaging processes."
                }
              ></SolutionSectionTitle>
              <SolutionRightImage img={images4}></SolutionRightImage>
            </div>

            <div className="flex flex-col md:flex-row justify-start items-center gap-2 py-8">
              <SolutionLeftImage img={images5}></SolutionLeftImage>
              <SolutionSectionTitle
                title={"University Management System "}
                className2="flex  text-white"
                translateX={"translateX(200px)"}
                subSubTitle={
                  "A comprehensive software solution designed to manage the various administrative, academic, and financial functions within a university or higher education institution."
                }
              ></SolutionSectionTitle>
            </div>
            <div className="flex justify-end flex-col-reverse md:flex-row  items-center gap-2 py-8 ">
              <SolutionSectionTitle
                title={"Enterprise Resource Planning"}
                className="flex justify-end"
                translateX={"translateX(-200px)"}
                className2="flex justify-end text-end text-white"
                subSubTitle={
                  "This solution is designed to integrate and streamline various business processes and functions across an organization. And main aim is to enhance efficiency, collaboration, and decision-making by providing a centralized and unified platform for managing different aspects of a business."
                }
              ></SolutionSectionTitle>
              <SolutionRightImage img={images6}></SolutionRightImage>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-start gap-2 py-8">
              <SolutionLeftImage img={images7}></SolutionLeftImage>
              <SolutionSectionTitle
                title={"Human Resource Management System"}
                className2="flex  text-white"
                translateX={"translateX(200px)"}
                subSubTitle={
                  "The primary goal of an HMS is to enhance the overall efficiency, accuracy, and quality of healthcare delivery."
                }
              ></SolutionSectionTitle>
            </div>
            <div className="flex justify-end items-center flex-col-reverse md:flex-row  gap-2 py-8 ">
              <SolutionSectionTitle
                title={"Accounts Information System"}
                className="flex justify-end"
                translateX={"translateX(-200px)"}
                className2="flex justify-end text-end text-white"
                subSubTitle={
                  "The primary objective of an AIS is to collect, store, process, and report financial information to support decision making, financial reporting, and compliance with regulatory requirements."
                }
              ></SolutionSectionTitle>
              <SolutionRightImage img={images8}></SolutionRightImage>
            </div>

            <div className="flex flex-col items-center md:flex-row justify-start gap-2 py-8">
              <SolutionLeftImage img={images9}></SolutionLeftImage>
              <SolutionSectionTitle
                title={"Vat Automatic"}
                className2="flex  text-white"
                translateX={"translateX(200px)"}
                subSubTitle={
                  "Specialized tools designed to assist businesses in managing and complying with tax-related obligations. These software solutions help automate various aspects of tax calculation, reporting, and filing, reducing the manual workload and minimizing the risk of errors."
                }
              ></SolutionSectionTitle>
            </div>
          </Wrapper>
        </div>
      </div>
    </>
  );
};

export default SolutionComponent;
