import React from "react";

function LeftSection({ heading, img, content, link1, link2 }) {
  return (
    <div className="container px-5 section-wrapper">
      <div className="row">
        <div className="col-5 text-center">
          <img src={img} alt="" className="p-5" />
        </div>
        <div className="col-2"></div>
        <div className="col-5 p-5 mt-5">
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
      </div>
    </div>
  );
}

export default LeftSection;
