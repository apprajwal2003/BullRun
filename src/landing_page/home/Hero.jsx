import React from "react";

function Hero() {
  return (
    <div className="container mt-5">
      <div className="row text-center mb-5">
        <div className="col text-center">
          <img src="media/landing.png" alt="" style={{ width: "65%" }} />
        </div>
      </div>

      <div className="row text-center mt-2">
        <h1>Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          type="button"
          className="btn btn-primary p-2 mt-3"
          style={{
            width: "16%",
            margin: "0 auto",
            fontWeight: "500",
            fontSize: "1.2rem",
            padding: "20px 0",
          }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Hero;
