import { Icon } from "@iconify/react";
import { Button } from "../../ui/Button";
import Logo from "../../../images/logo.png";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../../../data";
import { PathContext } from "../../../context/Path-context";
interface ModelProps {
  setMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Model: React.FC<ModelProps> = (ModelProps) => {
  const { setPath } = useContext(PathContext);
  const handleClose = () => {
    ModelProps.setMode(false);
    setPath("/");
  };
  const handleLink = (itemlink: string) => {
    setPath(itemlink);
    ModelProps.setMode(false);
  };
  const [btnLink, setBtnLink] = useState("");

  const deviceInfo = window.navigator.userAgent;
  useEffect(() => {
    if (deviceInfo.includes("Mac")) {
      setBtnLink("https://www.apple.com/app-store/");
    } else {
      setBtnLink("https://play.google.com/store/games?hl=en&gl=US");
    }
  }, [deviceInfo]);
  return (
    <>
      <div
        className=" md:hidden  h-screen bg-pink overflow-x-hidden w-full fixed z-[999]  py-6 flex justify-center translate-x-0 ease-in-out duration-500  "
        style={{ transition: "all 9.5s cubic-bezier(.68, -0.55, .27, 1.55) " }}
      >
        <div className="flex-row w-[94%] justify-center">
          <div className="flex justify-end ">
            <button>
              <Icon
                onClick={handleClose}
                icon="material-symbols-light:close"
                fontSize={24}
                className="relative top-0"
                style={{ color: "black" }}
              />
            </button>
          </div>
          <div className="text-white  flex flex-row justify-center     ">
            <div></div>
            <div>
              <button onClick={handleClose}>
                <Link to={"/"}>
                  <img src={Logo} className="mr-3 h-10" alt="" />
                </Link>
              </button>
            </div>
          </div>
          <div className="flex flex-col py-6">
            <ul className="font-lexend flex-col  ">
              {data.menuItems.map((items) => {
                return (
                  <li className="text-xl  border-b-2 border-[#d50133] py-2 mb-2 ">
                    {" "}
                    <button onClick={() => handleLink(items.link)}>
                      <Link to={items.link}>{items.menu} </Link>
                    </button>
                  </li>
                );
              }, [])}
            </ul>
            <div className="flex-col py-3">
              <Button
                onClick={()=> window.open(btnLink, '_blank')}
                variant="solid"
                text="Download App"
                className="px-2 text-xl  "
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Model;
