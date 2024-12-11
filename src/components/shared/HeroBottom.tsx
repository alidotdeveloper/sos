import { Typography } from "../ui/typography";

function HeroBottom() {
  return (
    <>
      <div className="w-full justify-center flex">
        <section className=" max-w-[1140px] lg:w-full w-[94%]    flex justify-center py-6 ">
          <div className="flex flex-col sm:flex-row items-center   sm:w-full lg:w-[90%] justify-between gap-6  lg:pt-0 ">
            <div className="flex gap-2 items-center ">
              <div className=" lg:w-36 lg:h-36 w-24 h-24  inline-flex gap-4 font-normal text-4xl md:text-4xl font-abril items-center justify-center rounded-full bg-misty-red text-black ">
                2M
              </div>
              <div className="flex flex-col px-1">
                <Typography className="font-lexend text-gray" size="lg">
                  2 Millon
                </Typography>
                <Typography className="font-lexend text-gray">
                  Active Users
                </Typography>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <div className=" lg:w-36 lg:h-36 w-24 h-24   inline-flex gap-4 font-normal text-4xl font-abril items-center justify-center rounded-full bg-misty-red text-black ">
                29
              </div>
              <div className="flex flex-col">
                <Typography className="font-lexend text-gray" size="lg">
                  Experienced
                </Typography>
                <Typography className="font-lexend text-gray">
                  Employess
                </Typography>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <div className=" lg:w-36 lg:h-36 w-24 h-24   inline-flex gap-4 font-normal text-4xl font-abril items-center justify-center rounded-full bg-misty-red text-black ">
                6+
              </div>
              <div className="flex flex-col">
                <Typography className="font-lexend text-gray" size="lg">
                  6 Years
                </Typography>
                <Typography className="font-lexend text-gray">
                  Experience
                </Typography>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HeroBottom;
