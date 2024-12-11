import { Typography } from "../../../components/ui/typography";
import core from "../../../images/core.png";

function Action() {
  return (
    <div>
      <div className=" w-full  flex-col-reverse  lg:flex-row flex justify-center   ">
        <div className="  flex flex-col  xl:w-full justify-center   ">
          <div className="flex flex-col lg:flex-row lg:py-12 py-0 items-center justify-center gap-6 lg:gap-24">
            <div className="flex flex-col justify-center  gap-24  w-full ">
              <div className=" flex  w-full   ">
                <div className="flex flex-col lg:py-6 py-2 ">
                  <Typography
                    size={"h3"}
                    as={"h3"}
                    className="font-abril capitalize font-normal text-black py-2"
                  >
                    <>At the core of our actions are strong relationships.</>
                  </Typography>
                  <div className="flex  w-full lg:max-w-[450px]">
                    <Typography
                      size={"h7"}
                      className="font-lexend font-normal leading-normal text-gray"
                    >
                      Relationships are at the core of everything we do, and not
                      just the romantic kind. We know that achieving big things
                      requires collaboration, so we make strong relationships
                      the foundation of our teamwork.
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex  md:bg-white-dark rounded-lg  md:py-12  w-[90%] md:w-[60%] lg:w-full">
              <div className="">
                <img
                  src={core}
                  className="   lg:w-full  relative md:-left-12 left-0 "
                  alt="mockup"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Action;
