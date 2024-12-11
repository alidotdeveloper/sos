import React from "react";
import { Typography } from "../ui/typography";
interface BannnerText{
  name: String;
}
const Banner : React.FC<BannnerText> = (BannerProps)=> {
  return (
    <>
      <div className="flex w-full justify-center items-center   bg-cover lg:h-full bg-no-repeat lg:bg-center  sm:bg-[url('./images/contact-banner.svg')] bg-[url('./images/bg-mobile.svg')] ">
        <div className=" flex flex-col justify-center lg:py-32 md:py-24 py-10">
          <div className="flex">
            <div className="flex justify-center">
              <Typography size="h1" className="font-abril">
               {BannerProps.name}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
