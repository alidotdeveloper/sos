import { Typography } from "../../../components/ui/typography";

function Why() {
  return (
    <div>
      <div className=" w-full   flex-col-reverse  lg:flex-row flex   lg:pb-0  ">
        <div className="place-self-center  flex flex-col   lg:py-6   ">
          <div className="lg:pb-6 lg:flex lg:flex-row items-center lg:items-start flex-col gap-12 ">
            <div className=" flex lg:w-[60%]">
              <Typography
                size={"h3"}
                as={"h3"}
                className="font-abril capitalize font-normal text-black py-1  "
              >
                <>Building a More Connected world</>
              </Typography>
            </div>
            <div className="flex  lg:w-1/2 w-full  ">
              <Typography
                size={"lg"}
                as={"h6"}
                className="font-lexend font-normal leading-normal text-gray  lg:whitespace-normal"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
