import React, { useState } from "react";
import { Typography } from "./typography";

interface accordionValues {
  Title: String;
  item1: String;
  item2: String;
}

const Accordion: React.FC<accordionValues> = (accordionValuesProps) => {
  const [isActive, setisActive] = useState(false);
  const handleNavigate = () => {
    setisActive(!isActive);
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center  w-full ">
        <div className=" w-[80%]">
          <div className="flex justify-between py-3" onClick={handleNavigate}>
            <div className="flex">
              <Typography size="h6" className="font-lexend text-white">
                {accordionValuesProps.Title}
              </Typography>
            </div>

            <div className="flex items-center">
              {isActive ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="9"
                  viewBox="0 0 16 9"
                  fill="none"
                >
                  <path
                    d="M15.998 1.41773C15.9985 1.15294 15.9063 0.896329 15.7373 0.69244C15.6422 0.577688 15.5253 0.482832 15.3935 0.413303C15.2616 0.343775 15.1174 0.300942 14.9689 0.287257C14.8205 0.273572 14.6708 0.289304 14.5285 0.333552C14.3861 0.377799 14.2539 0.449693 14.1394 0.545116L8.06511 5.62214L1.97948 0.726439C1.86356 0.632303 1.73018 0.562005 1.587 0.519585C1.44383 0.477165 1.29368 0.463459 1.14519 0.479256C0.996697 0.495053 0.852793 0.54004 0.721746 0.611633C0.590699 0.683225 0.475093 0.780012 0.381573 0.896429C0.278405 1.01368 0.200586 1.151 0.153001 1.29975C0.105417 1.44851 0.0890935 1.60549 0.105055 1.76085C0.121017 1.91622 0.16892 2.0666 0.245758 2.20258C0.322595 2.33855 0.426708 2.45717 0.551563 2.551L7.35116 8.02467C7.55393 8.19135 7.80829 8.28247 8.07078 8.28247C8.33327 8.28247 8.58762 8.19135 8.7904 8.02467L15.59 2.35834C15.7271 2.24465 15.8356 2.10024 15.9064 1.93681C15.9773 1.77338 16.0087 1.59555 15.998 1.41773Z"
                    fill="white"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="9"
                  viewBox="0 0 16 9"
                  fill="none"
                >
                  <path
                    d="M15.998 7.70776C15.9985 7.97255 15.9063 8.22916 15.7373 8.43305C15.6422 8.5478 15.5253 8.64266 15.3935 8.71218C15.2616 8.78171 15.1174 8.82455 14.9689 8.83823C14.8205 8.85192 14.6708 8.83618 14.5285 8.79194C14.3861 8.74769 14.2539 8.6758 14.1394 8.58037L8.06511 3.50334L1.97948 8.39905C1.86356 8.49318 1.73018 8.56348 1.587 8.6059C1.44383 8.64832 1.29368 8.66203 1.14519 8.64623C0.996697 8.63044 0.852793 8.58545 0.721746 8.51386C0.590699 8.44226 0.475093 8.34548 0.381573 8.22906C0.278405 8.11181 0.200586 7.97449 0.153001 7.82574C0.105417 7.67698 0.0890935 7.52 0.105055 7.36463C0.121017 7.20927 0.16892 7.05888 0.245758 6.92291C0.322595 6.78694 0.426708 6.66832 0.551563 6.57449L7.35116 1.10082C7.55393 0.934139 7.80829 0.843018 8.07078 0.843018C8.33327 0.843018 8.58762 0.934139 8.7904 1.10082L15.59 6.76715C15.7271 6.88083 15.8356 7.02525 15.9064 7.18868C15.9773 7.35211 16.0087 7.52994 15.998 7.70776Z"
                    fill="white"
                  />
                </svg>
              )}
            </div>
          </div>

          {isActive && (
            <div className="bg-[#F8F6F6] rounded-md font-medium flex flex-col h-21 py-2 pb-2   ">
              <Typography
                size="lg"
                className="font-lexend text-light-navy px-2 py-1 "
              >
                {accordionValuesProps.item1}
              </Typography>

              <Typography
                size="lg"
                className="font-lexend text-light-navy px-2 py-1 "
              >
                {accordionValuesProps.item2}
              </Typography>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Accordion;
