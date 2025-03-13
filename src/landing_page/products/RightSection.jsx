import React from "react";

function RightSection({ heading, img, content, link1, link2 }) {
  return (
    <div className="container px-5 section-wrapper">
      <div className="row align-items-center">
        <div className="col-5 p-5 ">
          <h1 className="fs-2 mb-4">{heading}</h1>
          <p className="fs-5">{content}</p>
          <a
            href="ss"
            style={{
              textDecoration: "none",
              fontWeight: "500",
              marginRight: "50px",
            }}
          >
            {link1} <i className="fa-solid fa-arrow-right-long"></i>
          </a>
          <a href="ss" style={{ textDecoration: "none", fontWeight: "500" }}>
            {link2} <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
        <div className="col-5 text-center">
          <img src={img} alt="" />
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default RightSection;
