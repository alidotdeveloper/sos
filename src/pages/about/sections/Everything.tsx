import { Typography } from "../../../components/ui/typography";
import EverthingImage from "../../../images/Everything.png";

function Everything() {
  return (
    <div>
      <div className=" w-full  flex-col-reverse  lg:flex-row flex  pb-6 lg:pb-0  ">
        <div className="place-self-center  flex flex-col      ">
          <div className=" hidden  pb-6 lg:flex items-center lg:items-start flex-col ">
            <div className="">
              <Typography
                size={"h2"}
                as={"h2"}
                className="font-abril capitalize font-normal text-black py-1  "
              >
                <>Everything we do is rooted in</>
              </Typography>
            </div>
            <div>
              <Typography
                size={"h2"}
                as={"h2"}
                className="font-abril capitalize font-normal text-red py-1 lg:ps-64 "
              >
                <>meaningful connections</>
              </Typography>
            </div>
          </div>
          <div className="  w-full pb-3 lg:hidden flex  lg:items-start flex-col justify-center ">
            <div className="flex  w-full">
              <Typography
                size={"h2"}
                as={"h2"}
                className="font-abril capitalize font-normal text-black py-1  "
              >
                <>
                  Everything we do is rooted in{" "}
                  <span className="text-red">meaningful connections </span>
                </>
              </Typography>
            </div>
          </div>
          <div className=" hidden lg:flex flex-col lg:flex-row lg:py-6 gap-12 ">
            <div className="flex flex-col gap-24 lg:w-[50%] ">
              <div className="flex    w-full  ">
                <Typography
                  size={"lg"}
                  as={"h6"}
                  className="font-lexend font-normal leading-normal text-gray whitespace-nowrap lg:whitespace-normal"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </Typography>
              </div>

              <div className=" flex  w-full  ">
                <div>
                  <Typography
                    size={"h3"}
                    as={"h3"}
                    className="font-abril capitalize font-normal text-black py-2"
                  >
                    <>We live our values every day</>
                  </Typography>
                  <div className="flex  w-full ">
                    <Typography
                      size={"h7"}
                      className="font-lexend font-normal leading-normal text-gray"
                    >
                      We make decisions with our values at the forefront, guided
                      by our principles
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center  w-[50%]  ">
              <img
                src={EverthingImage}
                className="h-auto  lg:w-full md:w-[80%] "
                alt="mockup"
              />
            </div>
          </div>
          <div className="lg:hidden flex flex-col lg:flex-row lg:py-6 items-center ">
            <div className="flex flex-col gap-6 lg:w-[50%] ">
              <div className="flex  w-full lg:max-w-[450px] ">
                <Typography
                  size={"lg"}
                  as={"h6"}
                  className="font-lexend font-normal leading-normal text-gray"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </Typography>
              </div>

              <div className="flex justify-center  w-full  ">
                <img
                  src={EverthingImage}
                  className="h-auto  lg:w-full md:w-[100%] "
                  alt="mockup"
                />
              </div>

              <div className=" flex  w-full gap-12   ">
                <div className="items-center">
                  <Typography
                    size={"h2"}
                    as={"h2"}
                    className="font-abril capitalize font-normal text-black py-2"
                  >
                    <>We live our values every day</>
                  </Typography>
                  <div className="flex  w-full ">
                    <Typography
                      size={"h7"}
                      className="font-lexend font-normal leading-normal text-gray"
                    >
                      We make decisions with our values at the forefront, guided
                      by our principles
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Everything;
