import { Typography } from "./typography";

interface Value {
  text?: string;
  img?: string;
}
const Promote: React.FC<Value> = (ValueProps) => {
  return (
    <>
      
        <div className=" w-full flex justify-center ">
          <div className="w-[90%] flex items-center justify-center gap-12 ">
            <div
              className={`flex  gap-16 w-[90%] justify-between ${ValueProps.text}`}
            >
              <div className="flex flex-col md:w-[100%] lg:w-[50%] w-full gap-8 ">
                <div className="">
                  <Typography size="h3" className="font-abril capitalize">
                    We promote confidence We promote confidence{" "}
                  </Typography>
                </div>
                <div className="">
                  <Typography
                    size="lg"
                    className="font-lexend text-gray w-[60%]"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.{" "}
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
