import React from "react";

function Education() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-4 text-center">
          <img src="/media/index-education.svg" alt="" />
        </div>
        <div className="col-2"></div>
        <div className="col-5">
          <h1 className="fs-2 mb-4">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="ss" style={{ textDecoration: "none", fontWeight: "500" }}>
            Varsity <i className="fa-solid fa-arrow-right-long"></i>
          </a>
          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="ss" style={{ textDecoration: "none", fontWeight: "500" }}>
            TradingQ&A <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
