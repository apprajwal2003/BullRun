import React from "react";

function Hero() {
  return (
    <div className="container border-bottom">
      <div className="row text-center mt-5 p-5" style={{ lineHeight: "3rem" }}>
        <h1>Zerodha Products</h1>
        <h2 className="fs-5 mt-3" style={{ fontWeight: "400" }}>
          Sleek, modern, and intuitive trading platforms
        </h2>
        <p>Check out our investment offerings →</p>
      </div>
    </div>
  );
}

export default Hero;
