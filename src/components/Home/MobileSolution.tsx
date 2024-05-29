import React from 'react'
import ExpertiessWrapper from '../Expertise/ExpertiessWrapper'
import SolutionMobile from './SolutionMobile'
import SolutionTitleMobile from './SolutionTitleMobile'
import SolutionMobileRight from './SolutionMobileRight'

const MobileSolution = () => {
    const images9 = "/images/Home/Icon/HRM.svg";
    const images1 = "/images/Home/Icon/AIS.0.svg";
    const images2 = "/images/Home/Icon/ERP.svg";
    const images3 = "/images/Home/Icon/LIS.svg";
    const images4 = "/images/Home/Icon/RIS.svg";
    const images5 = "/images/Home/Icon/VAT.svg";
    const images6 = "/images/Home/Icon/MCMS.svg";
    const images8 = "/images/Home/Icon/UMS.svg";
    const images7 = "/images/Home/Icon/HMS.svg";
  return (
    <div className="flex lg:hidden px-8">
        <ExpertiessWrapper>
          <div className="flex flex-col md:flex-row gap-10 justify-center  items-center  py-8">
            <SolutionMobile img={images9}></SolutionMobile>

            <SolutionTitleMobile
              title={"Human Resource"}
              subTitle={"Management System"}
              subSubTitle={
                "The primary goal of an HMS is to enhance the overall efficiency, accuracy, and quality of healthcare delivery."
              }
            ></SolutionTitleMobile>
          </div>
          <div className="flex flex-col-reverse md:flex-row gap-10 justify-center  items-center  py-8 ">
            <SolutionTitleMobile
              title={"Accounts"}
              subTitle={" Information System"}
              subSubTitle={
                "The primary objective of an AIS is to collect, store, process, and report financial information to support decision making, financial reporting, and compliance with regulatory requirements."
              }
            ></SolutionTitleMobile>
            <SolutionMobileRight img={images1}></SolutionMobileRight>
          </div>
          <div className="flex flex-col md:flex-row gap-10 justify-center  items-center py-8">
            <SolutionMobile img={images2}></SolutionMobile>

            <SolutionTitleMobile
              title={"Enterprise"}
              subTitle={" Resource Planning"}
              subSubTitle={
                "This solution is designed to integrate and streamline various business processes and functions across an organization. And main aim is to enhance efficiency, collaboration, and decision-making by providing a centralized and unified platform for managing different aspects of a business."
              }
            ></SolutionTitleMobile>
          </div>
          <div className="flex flex-col-reverse md:flex-row  gap-10 justify-center  items-center py-8 ">
            <SolutionTitleMobile
              title={"Laboratory "}
              subTitle={"Information System"}
              subSubTitle={
                "The primary purpose of a LIS is to facilitate the efficient processing of laboratory tests, ensure accurate reporting of results, and enhance overall laboratory management."
              }
            ></SolutionTitleMobile>
            <SolutionMobileRight img={images3}></SolutionMobileRight>
          </div>
          <div className="flex flex-col md:flex-row gap-10 justify-center  items-center  py-8">
            <SolutionMobile img={images4}></SolutionMobile>

            <SolutionTitleMobile
              title={"Radiology "}
              subTitle={"Information System"}
              subSubTitle={
                "This software system is designed to manage and streamline the workflow and operations within a radiology department or imaging center. The purpose is to facilitate the efficient management of radiological data, patient information, and imaging processes."
              }
            ></SolutionTitleMobile>
          </div>
          <div className="flex flex-col-reverse md:flex-row  gap-10 justify-center  items-center  py-8">
            <SolutionTitleMobile
              title={"Vat  "}
              subTitle={"Automatic"}
              subSubTitle={
                "Specialized tools designed to assist businesses in managing and complying with tax-related obligations. These software solutions help automate various aspects of tax calculation, reporting, and filing, reducing the manual workload and minimizing the risk of errors."
              }
            ></SolutionTitleMobile>
            <SolutionMobileRight img={images5}></SolutionMobileRight>
          </div>
          <div className="flex flex-col md:flex-row gap-10 justify-center  items-center  py-8">
            <SolutionMobile img={images6}></SolutionMobile>

            <SolutionTitleMobile
              title={" Medical College   "}
              subTitle={"Management System "}
              subSubTitle={
                "It is a specialized software program made to help medical colleges and other healthcare education institutions organize and manage their clinical, academic, and administrative operations. Improving efficiency, coordination, and regulatory compliance is the main objective of an MCMS."
              }
            ></SolutionTitleMobile>
          </div>
          <div className="flex flex-col-reverse md:flex-row gap-10 justify-center  items-center  py-8 ">
            <SolutionTitleMobile
              title={"Hospital"}
              subTitle={"Management System"}
              subSubTitle={
                "The primary goal of an HMS is to enhance the overall efficiency, accuracy, and quality of healthcare delivery."
              }
            ></SolutionTitleMobile>
            <SolutionMobileRight img={images7}></SolutionMobileRight>
          </div>
          <div className="flex flex-col md:flex-row gap-10 justify-center  items-center  py-8">
            <SolutionMobile img={images8}></SolutionMobile>

            <SolutionTitleMobile
              title={"University   "}
              subTitle={" Management System "}
              subSubTitle={
                "A comprehensive software solution designed to manage the various administrative, academic, and financial functions within a university or higher education institution."
              }
            ></SolutionTitleMobile>
          </div>
        </ExpertiessWrapper>
      </div>
  )
}

export default MobileSolution