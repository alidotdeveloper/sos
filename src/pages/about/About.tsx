import { Component } from "react";
import { Typography } from "../../components/ui/typography";

import HeroBottom from "../../components/shared/HeroBottom";

import Download from "../../components/shared/Download";
import Everything from "./sections/Everything";
import Action from "./sections/Action";

export class About extends Component {
  render() {
    return (
      <>
        <div className="w-full justify-center flex  ">
          <div className="max-w-[1140px] w-[94%] justify-center flex flex-col lg:gap-12 gap-6">
            <div className="">
              <Typography
                size={"h1"}
                className="flex justify-center  font-abril pt-12"
              >
                About Us
              </Typography>
            </div>
            <Everything />

            <HeroBottom />

            <Action />
            <Download />
          </div>
        </div>
      </>
    );
  }
}
export default About;
