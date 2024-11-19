import { Button } from "./Button";
import { Typography } from "./typography";
import Apple from "../images/apple.png";
import Play from "../images/play.png";
import Hero from "../images/Hero.svg";
function Landing() {
  return (
    <>
        <div className="place-self-center w-[90%] lg:col-span-7 flex flex-col lg:py-32 md:py-3    " >
        <div className="space-y-4">
          <div>
            <Typography
              size={"h1"}
              as={"h1"}
              className="font-abril capitalize font-normal text-black py-3"
            >
              <>
                Discover <span className="text-red">meaningful</span>{" "}
                relationships.
              </>
            </Typography>
          </div>
          <div className="w-4/5">
            <Typography
              size={"lg"}
              as={"h6"}
              className="font-lexend font-medium leading-normal text-gray"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </div>
        </div>
        <div className="flex gap-6 lg:py-6 py-3 ">
          <Button
            text="App Store"
            icon={Apple}
            className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 w-36"
          />
          <Button
            text="Play Store"
            variant={"outline"}
            icon={Play}
            className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 w-36"
          />
        </div>
      </div>
      <div className="flex justify-center  w-full  py-12 bg-[#FFF3F6] rounded-bl-[20%] rounded-br-[20%] ">
        <img src={Hero} className="h-auto w-[90%] lg:w-full" alt="mockup" />
      </div>
    </>
  );
}

export default Landing;
