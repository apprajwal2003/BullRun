import React from "react";
import Awards from "./Awards";
import Pricing from "./Pricing";
import Hero from "./Hero";
import Education from "./Educations";

import OpenAccount from "../OpenAccount";

function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}

export default HomePage;
