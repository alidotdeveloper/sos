import { Button } from "../ui/Button";
import { Typography } from "../ui/typography";
import Apple from "../../images/apple.png";
import Play from "../../images/play.png";
import downloadImage from "../../images/mobile 1.png";
import { useContext } from "react";
import { PathContext } from "../../context/Path-context";

function Download() {
  
  const {appleLink, playLink} = useContext(PathContext);
  return (
    <div className="w-full flex justify-center gap-4 md:gap-6 pt-6  lg:pt-12">
      <div className="flex flex-col  lg:flex-row max-w-[1140px] lg:w-full w-[94%] pb-6 py-0 lg:py-0 bg-blue rounded-xl justify-center items-center gap-4 md:gap-6">
        <div className="w-[90%] h-[59%]  md:w-[70%] lg:w-[50%]  lg:flex justify-center items-center relative ">
          <div className="lg:w-full h-[42%] md:h-auto lg:absolute xl:-bottom-[203.5px] lg:-bottom-[193px]  ">
            <img
              src={downloadImage}
              alt="Download SOS Mobile App"
              className="  object-contain md:object-contain  mt-[2rem] lg:mt-[-4rem]"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 px-4  pb-12 h-[22%] md:h-[27%] md:py-4 sm:py-6 w-full md:w-[90%] lg:w-[40%] lg:justify-center lg:items-start justify-center items-center">
          <div className="hidden lg:block h-1"></div>

          <div className="flex justify-center">
            <Typography
              size="h6"
              className="font-lexend font-normal text-xl md:text-2xl text-center lg:text-left"
            >
              Over 500+ Downloads
            </Typography>
          </div>

          <div className="flex">
            <Typography
              size="h2"
              className="font-abril font-normal text-center lg:text-left leading-[3rem]"
            >
              Download SOS Mobile App
            </Typography>
          </div>

          <div className="flex">
            <Typography
              size="lg"
              className="font-lexend font-normal text-gray text-center lg:text-left"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </Typography>
          </div>

          <div className="flex gap-4 items-center md:flex-row w-full justify-center lg:justify-start">
            <Button
              onClick={() =>
                window.open( appleLink, "_blank")
              }
              text="App Store"
              icon={Apple}
              className="inline-flex  items-center justify-center py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700  w-36"
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
              className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700  w-36"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download;
