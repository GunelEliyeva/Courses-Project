import React from "react";

const ThreeDiv = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        marginBottom: "11%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
          borderRadius: "10%",
          justifyContent: "center",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        <div>
          <img
            src="	https://preview.colorlib.com/theme/courses/assets/img/icon/icon1.svg"
            style={{ margin: "20px" }}
            alt=""
          />
        </div>
        <div>
          <h2 style={{ color: "blue" }}>60+ UX courses</h2>
          <p style={{ color: "blue" }}>
            The automated process all your website tasks.
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
          borderRadius: "10%",
          justifyContent: "center",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        <div>
          <img
            src="	https://preview.colorlib.com/theme/courses/assets/img/icon/icon2.svg"
            style={{ margin: "20px" }}
            alt=""
          />
        </div>
        <div>
          <h2 style={{ color: "blue" }}>Expert instructors</h2>
          <p style={{ color: "blue" }}>
            The automated process all your website tasks.
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          padding: "10px",
          borderRadius: "10%",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        <div>
          <img
            src="	https://preview.colorlib.com/theme/courses/assets/img/icon/icon3.svg"
            style={{ margin: "20px" }}
            alt=""
          />
        </div>
        <div>
          <h2 style={{ color: "blue" }}>Life time access</h2>
          <p style={{ color: "blue" }}>
            The automated process all your website tasks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThreeDiv;
