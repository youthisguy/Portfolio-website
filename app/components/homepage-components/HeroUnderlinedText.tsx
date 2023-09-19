import React from "react";
import UnderlinedText from "../UnderlinedText";

const HeroUnderlinedText = () => {
  return (
    <>
      <div className="relative flex flex-col">
        <UnderlinedText
          text="Frontend"
          header
          additionalStyles="flex mt-2 mb-1.5 md:mt-6 md:mb-5"
        />
        <UnderlinedText
          text="Developer"
          header
          additionalStyles="flex md:mb-6 mt-1.5 mb-2 md:mt-5"
        />
      </div>
    </>
  );
};

export default HeroUnderlinedText;
