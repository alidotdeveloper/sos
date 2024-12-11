import { Typography } from "../../../components/ui/typography";
import { Button } from "../../../components/ui/Button";
import Apple from "../../../images/apple.png";
import Play from "../../../images/play.png";
import Bg from "../../../images/mobile-section.png";
import Like from "../../../images/Like.svg";
import Heart from "../../../images/Heart.svg";
import Purple from "../../../images/Purple.svg";
import { useContext } from "react";
import { PathContext } from "../../../context/Path-context";

function Mobile() {
  const {appleLink, playLink} = useContext(PathContext);
  
  return (
    <>
      <div className="bg-[#fff3f6]  w-full  flex justify-center overflow-hidden ">
        <div className="max-w-[1140px] w-[94%] flex flex-col-reverse lg:flex-row gap-12  ">
          <div className="flex flex-col gap-6 pb-3 place-self-center md:pb-6 lg:pb-0 ">
            <div className="hidden md:block ">
              <img
                src={Like}
                className="hidden lg:block absolute right-40 left-0 h-20  top-[113rem] lg:top-[117rem]  "
                alt="mockup"
              />
            </div>
            <div className="flex flex-col items-center gap-3 text-center  align-center lg:text-start lg:items-start">
              <div className="inline-flex items-center justify-center w-12 h-12 gap-4 text-4xl bg-white rounded-full font-bnormal md:text-4xl font-abril">
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
                  className="font-normal text-black capitalize font-abril"
                >
                  <>Mobile Interface</>
                </Typography>
              </div>
              <div className="w-4/5">
                <Typography
                  size={"lg"}
                  as={"h6"}
                  className="font-normal leading-normal font-lexend text-gray "
                >
                  On the tram, in a corner cafe or en how this might change you.
                  Love risk
                </Typography>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-3 pb-6 lg:pb-0 lg:py-0 md:flex-row lg:justify-start">
              <Button
                onClick={() =>
                  window.open(appleLink, "_blank")
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
            <div className="hidden lg:block lg:relative ">
              {" "}
              <img
                src={Purple}
                className="absolute -bottom-[7rem] right-[20rem] h-20 lg:-bottom-[6rem]      "
                alt="mockup"
              />{" "}
            </div>
          </div>
          <div className="lg:col-span-5  lg:flex lg:w-[50%] w-full  ">
            <div className="relative flex justify-center w-full ">
              <img
                src={Heart}
                className="absolute -top-44 hidden h-20 lg:flex md:top-8 lg:-right-[2rem] md:-right-[2rem]  "
                alt="mockup"
              />
              <img
                src={Bg}
                className="object-contain object-top justify-cente -mb-6 r  w-[80%] sm:w-[50%] md:w-[50%] lg:w-[100%] "
                alt="mockup"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mobile;
