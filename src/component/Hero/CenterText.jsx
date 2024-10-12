import React from "react";
import SubsHeading from "./SubHeading";
import HeroText from "./HeroText";

const CenterText = () => {
  return (
    <div className=" absolute text-center top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
      <HeroText />
      <SubsHeading />
    </div>
  );
};

export default CenterText;
