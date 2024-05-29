/* eslint-disable react/no-unescaped-entities */
import React from "react";

import Wrapper from "../globalComponents/Wrapper/Wrapper";
import Section from "../globalComponents/Section/Section";
import Banner from "../globalComponents/Banner/Banner";

export default function AboutComponent() {
  const images = "/images/aboutus.png";

  return (
    <>
      {/* Banner Component to display the 'About Us' banner image and heading */}
      <Banner img={images} heading={"About Us "}></Banner>

      {/* Wrapper Component to group the 'Our History' section */}
      <Wrapper>
        {/* Section Component for the 'Our History' heading */}
        <Section heading={"Our History"}></Section>
        {/* Paragraph describing the history of the company */}
        <p className="text-lg text-black">
          Established in 1998, ATI Limited has evolved into a leading software
          firm, specializing in database programming and multimedia creation.
          As a system integrator, we focus on developing customized software
          solutions and facilitating product-based development for both local
          and international markets.
          <br></br>
          <br></br>
          Our core mission involves providing Advanced Level Computer
          Education & Training, aiming to bridge the gap between the high
          demand for IT professionals and the limited supply in our country.
          Our footprint extends far and wide, locally and globally, as
          evidenced by our ISO certification and strategic partnerships. ATI
          Limited proudly holds the esteemed titles of ORACLE Gold partner,
          Dell Technology Partner, IBM Business Partner, and Microsoft Partner
          Company.
          <br></br>
          <br></br>
          As we celebrate our journey, we remain dedicated to pushing
          boundaries, shaping the future of IT, and contributing to the growth
          and development of our industry and beyond.
        </p>
      </Wrapper>

      {/* Wrapper Component to group the 'Mission' section */}
      <Wrapper>
        {/* Section Component for the 'Mission' heading */}
        <Section heading={"Mission"}></Section>
        {/* Paragraph describing the mission of the company */}
        <p className="text-lg text-black">
          Our commitment extends beyond mere services; we provide
          comprehensive end-to-end solutions, ensuring that every aspect of
          our clients' needs is met with precision and excellence.
          <br></br>
          <br></br>
          Quality and affordability are the pillars of our approach. We go
          beyond industry standards to deliver optimal solutions, coupling
          quality and services at prices that make sense. Customer
          satisfaction isn't just a goal; it's our unwavering priority. We
          cultivate strong relationships with our clients, aiming not only to
          retain existing partnerships but to expand our circle of satisfied
          customers. Join us on the journey to redefine success through
          unparalleled design, development, and unwavering client
          satisfaction.
        </p>
      </Wrapper>

      {/* Wrapper Component to group the 'Vision' section */}
      <Wrapper>
        {/* Section Component for the 'Vision' heading */}
        <Section heading={"VISION"}></Section>
        {/* Paragraph describing the vision of the company */}
        <p className="text-lg text-black">
          Our vision is to be a top-tier IT service provider globally,
          excelling in Web and Software Development. Our professional,
          flexible and integrated process reflects in what we do. We
          invariably try to improve the quality of our products by exploring
          innovative ideas.
        </p>
        {/* Empty Wrapper Component (it could be used for future content or layout purposes) */}
        <Wrapper></Wrapper>
      </Wrapper>
    </>
  );
}
