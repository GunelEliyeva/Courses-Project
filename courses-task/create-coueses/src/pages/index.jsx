import React from "react";
import Featureds from "./featureds/featureds";
import SectionFive from "./sectionfive";
import SectionOne from "./sectionone";
import SectionSeven from "./sectionseven";
import SectionSix from "./sectionsix";
import SectionThree from "./sectionthree";
import ThreeDiv from "./threediv";

const HomePage = () => {
  return (
    <div>
      <Featureds />
      <SectionSeven />
      <ThreeDiv />
      <SectionSix />
      <SectionFive />
      <SectionThree />
      <SectionOne />
    </div>
  );
};

export default HomePage;
