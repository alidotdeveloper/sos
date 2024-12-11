import { Typography } from "../../components/ui/typography";

import { LegalPages } from "../../types/index";
import React from "react";

const Legal: React.FC<LegalPages> = ({ children, title, heading }) => {
  return (
    <div className="w-full flex justify-center items-center pb-6">
      <div className="max-w-[1140px] w-[94%]">
        <div className="md:justify-center flex flex-col lg:py-6 py-2 ">
          <div className="">
            <Typography
              size={"h1"}
              className="flex md:justify-center font-abril pt-12"
            >
              {title}
            </Typography>
          </div>
        </div>
        <div className="flex w-full items-center justify-center  ">
          <div className="flex  flex-col  gap-3 lg:w-[72%] w-full">
            <div>
              <Typography
                size={"h4"}
                as={"h4"}
                className=" font-abril capitalize font-normal text-black py-2 items-center "
              >
                {heading}
              </Typography>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Legal;
