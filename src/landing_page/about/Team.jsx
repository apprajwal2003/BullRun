import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row text-center">
        <h1>People</h1>
      </div>
      <div className="row mt-5">
        <div className="col-6 text-center">
          <img
            src="/media/nithin-kamath.jpg"
            alt=""
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <div>
            <h3>Nithin Kamath</h3>
            <p>Founder & CEO</p>
          </div>
        </div>
        <div className="col-6">
          <h1 className="fs-2 mb-4">Free and open market education</h1>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p className="mt-5">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on Homepage / TradingQnA / Twitter</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
