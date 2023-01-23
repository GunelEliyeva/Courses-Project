import React from "react";

const SectionThree = () => {
  return (
    <div style={{ display: "flex", padding: "4%", alignItems: "center" }}>
      <div>
        <img
          src="https://preview.colorlib.com/theme/courses/assets/img/gallery/about3.png"
          alt=""
          style={{ width: "629px", height: "439px" }}
        />
      </div>
      <div style={{ margin: "4%" }}>
        <h2 style={{ color: "blue", fontSize: "35px" }}>
          Learner outcomes on courses you will take
        </h2>
        <div style={{ display: "flex" }}>
          <i class="fa-solid fa-check"></i>{" "}
          <p>
            Techniques to engage effectively with vulnerable children and young
            people.
          </p>
        </div>
        <div style={{ display: "flex" }}>
          <i class="fa-solid fa-check"></i>{" "}
          <p>
            Join millions of people from around the world learning together.
          </p>
        </div>
        <div style={{ display: "flex" }}>
          <i class="fa-solid fa-check"></i>{" "}
          <p>
            Join millions of people from around the world learning together.
            Online learning is as easy and natural.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
