import React from "react";

function OpenAccount() {
  return (
    <div className="container">
      <div className="row text-center mt-5">
        <h1>Open a Zerodha account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
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

export default OpenAccount;
