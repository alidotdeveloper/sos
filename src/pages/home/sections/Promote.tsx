import { Typography } from "../../../components/ui/typography";

interface Value {
  text?: string;
  img?: string;
}
const Promote: React.FC<Value> = (ValueProps) => {
  return (
    <>
      <div className=" w-full flex justify-center pt-4 lg:pt-16 ">
        <div className="max-w-[1140px] w-[94%]   flex items-center justify-center ">
          <div
            className={`flex  gap-6 lg:gap-16  justify-between ${ValueProps.text}`}
          >
            <div className="flex flex-col md:w-[100%] lg:w-[40%] w-full md:gap-4 gap-4 ">
              <div className="">
                <Typography size="h3" className="font-abril capitalize">
                  We promote confidence We promote confidence{" "}
                </Typography>
              </div>
              <div className="">
                <Typography size="lg" className="font-lexend text-gray w-[60%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.{" "}
                </Typography>
              </div>
            </div>
            <div className="flex  w-full md:w-[100%] lg:w-[50%] h-80  bg-misty-red justify-center ">
              <img src={ValueProps.img} className="" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Promote;
