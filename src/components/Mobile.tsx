import { Typography } from ".//typography";
import { Button } from "./Button";
import Apple from "../images/apple.png";
import Play from "../images/play.png";
import Bg from "../images/mobile.svg";
import Like from "../images/Like.svg";
import Heart from "../images/Heart.svg";
import Purple from "../images/Purple.svg";

function Mobile() {
  return (
    <>
      <div className="bg-[#fff3f6] w-full flex flex-col-reverse lg:flex-row gap-6 pb-6 lg:p-0">
        <div className="place-self-center  flex flex-col   space-y-12 ">
        <div className="hidden lg:block">
              <img src={Like} className="relative right-40" alt="mockup" />
            </div>
          <div className="gap-3 flex flex-col  align-center text-center items-center lg:text-start lg:items-start">
            
            <div className="w-12 h-12 inline-flex gap-4 font-bnormal text-4xl md:text-4xl font-abril items-center justify-center rounded-full bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <path
                  d="M16.3125 29.1445H11.5C10.7707 29.1445 10.0712 28.8548 9.55546 28.3391C9.03973 27.8233 8.75 27.1239 8.75 26.3945V7.14453C8.75 6.41519 9.03973 5.71571 9.55546 5.19999C10.0712 4.68426 10.7707 4.39453 11.5 4.39453H22.5C23.2293 4.39453 23.9288 4.68426 24.4445 5.19999C24.9603 5.71571 25.25 6.41519 25.25 7.14453V15.3945M15.625 5.76953H18.375"
                  stroke="#D50133"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M25.25 30.5195L29.8563 26.004C30.1387 25.7299 30.3634 25.402 30.5171 25.0396C30.6707 24.6773 30.7502 24.2878 30.7509 23.8942C30.7515 23.5006 30.6733 23.1108 30.5208 22.748C30.3683 22.3851 30.1447 22.0564 29.8631 21.7814C29.2889 21.2189 28.5175 20.9031 27.7136 20.9015C26.9098 20.9 26.1371 21.2128 25.5608 21.7732L25.2528 22.0757L24.9461 21.7732C24.372 21.211 23.6009 20.8955 22.7973 20.894C21.9938 20.8924 21.2215 21.205 20.6451 21.7649C20.3626 22.0389 20.1378 22.3668 19.984 22.7291C19.8302 23.0914 19.7506 23.4809 19.7499 23.8745C19.7491 24.2681 19.8272 24.6578 19.9795 25.0208C20.1319 25.3837 20.3554 25.7124 20.6369 25.9875L25.25 30.5195Z"
                  stroke="#D50133"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>
              <Typography
                size={"h3"}
                as={"h3"}
                className="font-abril capitalize font-normal text-black"
              >
                <>Mobile Interface</>
              </Typography>
            </div>
            <div className="w-4/5">
              <Typography
                size={"lg"}
                as={"h6"}
                className="font-lexend font-medium leading-normal text-gray "
              >
                On the tram, in a corner cafe or en how this might change you.
                Love risk
              </Typography>
            </div>
          </div>
          <div className="flex gap-6 justify-center lg:justify-start">
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
          <div className="hidden lg:block">
            {" "}
            <img
              src={Purple}
              className="relative -bottom-6 -right-52"
              alt="mockup"
            />{" "}
          </div>
        </div>
        <div className="lg:col-span-5 w-full lg:flex max-w-4xl  ">
            <div className=" w-full flex justify-center ">
            <img src={Heart} className="relative -top-44 right-34 hidden lg:block " alt="mockup" />
            <img src={Bg} className="object-contain object-top justify-center w-[80%] lg:w-[90%]" alt="mockup" />
            </div>
           
            
        </div>
      </div>
    </>
  );
}

export default Mobile;
