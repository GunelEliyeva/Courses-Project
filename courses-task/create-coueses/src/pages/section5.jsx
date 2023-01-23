import React from "react";

const SectionFive = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ margin: "4%", width: "50%" }}>
        <h2 style={{ color: "blue", fontSize: "35px" }}>
          Learn new skills online with top educators
        </h2>
        <p>
          The automated process all your website tasks. Discover tools and
          techniques to engage effectively with vulnerable children and young
          people.
        </p>
        <div style={{ display: "flex", color: "blue" }}>
          <i class="fa-solid fa-check"></i>{" "}
          <p>
            Techniques to engage effectively with vulnerable children and young
            people.
          </p>
        </div>
        <div style={{ display: "flex", color: "blue" }}>
          <i class="fa-solid fa-check"></i>{" "}
          <p>
            Join millions of people from around the world learning together.
          </p>
        </div>
        <div style={{ display: "flex", color: "blue" }}>
          <i class="fa-solid fa-check"></i>{" "}
          <p>
            Join millions of people from around the world learning together.
            Online learning is as easy and natural.
          </p>
        </div>
      </div>
      <div style={{ margin: "4%", width: "50%" }}>
        <a href="https://youtu.be/up68UAfH0d0">
          {" "}
          <img
            src="https://icones.pro/wp-content/uploads/2021/02/youtube-logo-icone-orange.png"
            style={{ width: "100px", height: "90px", paddingLeft: "53%" }}
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default SectionFive;
