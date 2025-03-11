import React from "react";

function Pricing() {
  return (
    <div className="container p-5">
      <div className="row p-5">
        <div className="col-5">
          <h1 className="mb-4 fs-2">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="ss" style={{ textDecoration: "none", fontWeight: "500" }}>
            See pricing <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
        <div className="col-7">
          <div className="row text-center">
            <div className="col">
              <img
                src="/media/pricing-eq.svg"
                alt=""
                style={{ width: "50%" }}
              />
              <p>Free account opening</p>
            </div>
            <div className="col">
              <img
                src="/media/pricing-eq.svg"
                alt=""
                style={{ width: "50%" }}
              />
              <p>Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col">
              <img
                src="/media/other-trades.svg"
                alt=""
                style={{ width: "50%" }}
              />
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
