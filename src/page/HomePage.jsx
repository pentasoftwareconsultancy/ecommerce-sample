import React from "react";
import Card from "../components/Home/Card/Card";
import BrandWest from "../components/Home/Brands/BrandWest/BrandWest";
import Heritage from "../components/Home/Brands/Heritage/Heritage";
import Men from "../components/Home/Brands/Men/Men";
import Global from "../components/Home/Brands/Global/Global";
import NextGen from "../components/Home/Brands/NextGen/NextGen";
import Happy from "../components/Home/Brands/Happy/Happy";
import Gadget from "../components/Home/Brands/Gadget/Gadget";
import Chase from "../components/Home/Brands/Chase/Chase";
import Perfectly from "../components/Home/Brands/Perfectly/Perfectly";
import Trinket from "../components/Home/Brands/Trinket/Trinket";
import ImageSlider from "../components/Home/Hero/ImageSlider";
import Brands from "../components/Home/Brands/Brands";
function HomePage() {
  return (
    <>
      <div className="App">
        <ImageSlider interval={3000} />
      </div>
      <Card />
      <Brands />
      <BrandWest />
      <Heritage />
      <Men />
      <Global />
      <NextGen />
      <Happy />
      <Gadget />
      <Chase />
      <Perfectly />
      <Trinket />
    </>
  );
}

export default HomePage;
