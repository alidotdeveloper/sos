import { Typography } from "./typography";

function HeroBottom() {
  return (
    <>
      <section className=" w-[55%] md:w-[90%] lg:w-[80%]">
        <div className="flex flex-col md:flex-row  w-[90%] justify-between gap-6">
          <div className="flex gap-3 items-center ">
            <div className=" w-24 h-24 inline-flex gap-4 font-bnormal text-4xl md:text-4xl font-abril items-center justify-center rounded-full bg-misty-red text-black ">
              2M
            </div>
            <div className="flex flex-col">
              <Typography className="font-lexend text-gray" size="lg">
                2 Millon
              </Typography>
              <Typography className="font-lexend text-gray">
                Active Users
              </Typography>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className=" w-24 h-24 inline-flex gap-4 font-bnormal text-4xl font-abril items-center justify-center rounded-full bg-misty-red text-black ">
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
            <div className=" w-24 h-24 inline-flex gap-4 font-bnormal text-4xl font-abril items-center justify-center rounded-full bg-misty-red text-black ">
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
    </>
  );
}

export default HeroBottom;
