import React from "react";

const Colorshower = ({ color1, color2, color3, color4, color5 }) => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <div
        className="row d-flex justify-content-center align-items-center"
        style={{
          height: "20vh",
          background: color1.color,
        }}
      >
        <div className="bg-white text-black">{color1.color}</div>
      </div>
      <div
        className="row d-flex justify-content-center align-items-center"
        style={{
          height: "20vh",
          background: color2.color,
        }}
      >
        <div className="bg-white text-black">{color2.color}</div>
      </div>
      <div
        className="row d-flex justify-content-center align-items-center"
        style={{
          height: "20vh",
          background: color3.color,
        }}
      >
        <div className="bg-white text-black">{color3.color}</div>
      </div>
      <div
        className="row d-flex justify-content-center align-items-center"
        style={{
          height: "20vh",
          background: color4.color,
        }}
      >
        <div className="bg-white text-black">{color4.color}</div>
      </div>
      <div
        className="row d-flex justify-content-center align-items-center"
        style={{
          height: "20vh",
          background: color5.color,
        }}
      >
        <div className="bg-white text-black">{color5.color}</div>
      </div>
    </div>
  );
};

export default Colorshower;
