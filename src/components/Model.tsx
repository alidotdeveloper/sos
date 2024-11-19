import { Icon } from "@iconify/react";
import { Button } from "./Button";
import Logo from "../images/logo.png";
import React from "react";

interface ModelProps {
    setMode: React.Dispatch<React.SetStateAction<boolean>>
}

const Model: React.FC<ModelProps> = (ModelProps) => {
    const handleClose = () => {
        ModelProps.setMode(false);
  };
  return (
    <>
      <div className="h-screen bg-pink overflow-x-hidden w-full fixed z-[999]  py-6 flex justify-center translate-x-0 ease-in-out duration-500  " style={{transition: "all 9.5s cubic-bezier(.68, -0.55, .27, 1.55) "}}>
        <div className="flex-row w-[80%] justify-center">
          <div className="text-white  flex flex-row justify-between     ">
            <div></div>
            <div>
              <img src={Logo} className="mr-3 h-10" alt="" />
            </div>
            <div>
              <Icon
                onClick={handleClose}
                icon="material-symbols-light:close"
                fontSize={34}
                style={{ color: "black" }}
              />
            </div>
          </div>
          <div className="flex flex-col py-6">
            <ul className="font-lexend flex-col  ">
              <li className="text-2xl border-b-2 border-[#d50133] pb-3 mb-2 ">
                {" "}
                <button>Home</button>
              </li>
              <li className="text-2xl border-b-2 border-[#d50133] pb-3 mb-2 ">
                {" "}
                <button>About Us</button>
              </li>
              <li className="text-2xl border-b-2 border-[#d50133] pb-3 mb-2 ">
                {" "}
                <button>Features</button>
              </li>
              <li className="text-2xl border-b-2 border-[#d50133] pb-3 mb-2 ">
                {" "}
                <button>Contact Us</button>
              </li>
            </ul>
            <div className="flex-col py-3">
              <Button
                variant="solid"
                text="Download App"
                className="px-3 "
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Model;
