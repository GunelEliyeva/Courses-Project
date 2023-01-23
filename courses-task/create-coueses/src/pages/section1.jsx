import React from "react";

const SectionOne = () => {
  return (
    <div style={{ display: "flex", padding: "4%" }}>
      <div>
        <img
          src="https://preview.colorlib.com/theme/courses/assets/img/gallery/about2.png.webp"
          alt=""
          style={{ width: "609px", height: "453px" }}
        />
      </div>
      <div style={{ margin: "4%" }}>
        <h2 style={{ color: "blue", fontSize: "40px" }}>
          Take the next step toward your personal and professional goals with
          us.
        </h2>
        <p style={{ fontSize: "20px" }}>
          The automated process all your website tasks. Discover tools and
          techniques to engage effectively with vulnerable children and young
          people.
        </p>
        <button className="button_slide">Join Now For Free</button>
      </div>
    </div>
  );
};

export default SectionOne;
