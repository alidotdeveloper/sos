import { Typography } from "../../../components/ui/typography";

import React from "react";

interface Lists {
  image: string;
  heading: string;
  description: string;
}
const FeatureList: React.FC<Lists> = (ListsProps) => {
  return (
    <div className="flex flex-col justify-center py-3 md:py-0 ">
      <div className="w-full justify-center flex ">
        <div className="hexagon justify-center items-center flex ">
          <img
            src={ListsProps.image}
            className=" w-10 h-10 object-contain items-center"
          ></img>
        </div>
      </div>
      <div className="w-full justify-center flex">
        <div className="flex flex-col justify-center items-center gap-1 text-center">
          <div>
            <Typography
              size={"h5"}
              as={"h5"}
              className="font-abril capitalize font-normal text-black py-1 "
            >
              <>{ListsProps.heading}</>
            </Typography>
          </div>
          <div className="text-center">
            <Typography
              size={"lg"}
              className="font-lexend font-normal leading-normal text-gray"
            >
              {ListsProps.description}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureList;
