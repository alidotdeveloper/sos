import { Button } from "../../../components/ui/Button";
import { Typography } from "../../../components/ui/typography";
import Apple from "../../../images/apple.png";
import Play from "../../../images/play.png";
import Hero from "../../../images/Hero.svg";
import { useContext } from "react";
import { PathContext } from "../../../context/Path-context";

function Landing() {
const {appleLink, playLink} = useContext(PathContext);

  return (
    <>
      <div className="max-w-[1140px] lg:w-[94%] w-full  flex-col-reverse  lg:flex-row flex   lg:pt-12 lg:pb-24">
        <div className="place-self-center  flex flex-col w-[94%] lg:w-full  pt-3  ">
          <div className="w-[100%]">
            <div>
              <Typography
                size={"h1"}
                as={"h1"}
                className="py-3 font-normal text-black capitalize font-abril"
              >
                <>
                  Discover <span className="text-red">meaningful</span>{" "}
                  relationships.
                </>
              </Typography>
            </div>
            <div className="w-full  md:w-4/5">
              <Typography
                size={"lg"}
                as={"h6"}
                className="font-normal leading-normal font-lexend text-gray"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </div>
            <div className="flex gap-3 py-6 md:flex-row md:gap-6 ">
              <Button
                onClick={() =>
                  window.open( appleLink, "_blank")
                }
                text="App Store"
                icon={Apple}
                className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 w-36"
              />

              <Button
                text="Play Store"
                onClick={() =>
                  window.open(
                    playLink,
                    "_blank"
                  )
                }
                variant={"outline"}
                icon={Play}
                className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 w-36"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center  w-full  py-12 bg-[#FFF3F6] 2xl:bg-transparent rounded-bl-[20%] rounded-br-[20%] ">
          <img
            src={Hero}
            className="h-auto object-contain lg:w-full md:w-[80%] "
            alt="mockup"
          />
        </div>
      </div>
    </>
  );
}

export default Landing;
