import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        heading="Kite"
        img={"/media/products-kite.png"}
        content={
          "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        }
        link1={"Try Demo"}
        link2={"Learn More"}
      />
      <RightSection
        heading="Console"
        img={"/media/products-console.png"}
        content={
          "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        }
        link1={"Try Demo"}
        link2={"Learn More"}
      />
      <LeftSection
        heading="Coin"
        img={"/media/products-coin.png"}
        content={
          "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        }
        link1={"Coin"}
        link2={"Learn More"}
      />
      <RightSection
        heading="Kite Connect API"
        img={"/media/products-kiteconnect.png"}
        content={
          "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        }
        link1={"Kite Connect "}
        link2={"Learn More"}
      />
      <LeftSection
        heading="Varsity mobile"
        img={"/media/varsity-products.png"}
        content={
          "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        }
        link1={"Google Play"}
        link2={"App Store"}
      />
    </>
  );
}

export default ProductPage;
