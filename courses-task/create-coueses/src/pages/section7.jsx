import React from "react";
import Featureds from "./featureds/featureds";
import ThreeDiv from "./threediv";

const SectionSeven = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          position: "absolute",
          zIndex: "1",
          color: "white",
          margin: "7%",
          flexDirection: "column",
        }}
      >
        <h1>Online Learning</h1>

        <h1>Platform</h1>
        <p style={{ fontSize: "25px" }}>
          {" "}
          "Build skills with courses, certificates, and degrees online from
          world-
        </p>
        <p style={{ fontSize: "25px" }}>class universities and companies"</p>
        <button className="button_slide">Join For Free</button>
      </div>
      <img
        className="sectionimg"
        src="https://preview.colorlib.com/theme/courses/assets/img/hero/h1_hero.png.webp"
        alt=""
      />
      {/* <Featureds/> */}
    </div>
  );
};

export default SectionSeven;
