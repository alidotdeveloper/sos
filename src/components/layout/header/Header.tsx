import Logo from "../../../images/logo.png";
import data from "../../../data";
import { Button } from "../../ui/Button";
import { useContext, useEffect, useState } from "react";
import HumbergerIcon from "../../../images/navbar.svg";
import { NavLink } from "react-router-dom";
import { PathContext } from "../../../context/Path-context";
import Model from "./Model";

function Header() {
  const { setPath } = useContext(PathContext);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [btnLink, setBtnLink] = useState("");
  const handleNav = () => {
    setIsModelOpen(true);
  };
  const handleLink = (itemlink: string) => {
    setPath(itemlink);
  };
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
      {isModelOpen && <Model setMode={setIsModelOpen} />}

      <header>
        <nav className="bg-white border-gray-200  flex justify-center py-2.5 white">
          <div className="flex flex-wrap justify-between items-center  max-w-[1140px] w-[94%]  ">
            <div className="flex">
              <button
                onClick={handleNav}
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className=" md:hidden inline-flex items-center   text-sm text-gray-500 rounded-lg "
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <img src={HumbergerIcon} className=" "></img>
              </button>
              <a href="/" className="md:flex sm:flex items-center hidden ">
                <img
                  src={Logo}
                  className="mr-3 h-6 sm:h-7 md:h-9 px-2 "
                  alt=""
                />
              </a>
            </div>

            <div className="flex items-center md:order-2 ">
              <Button
                onClick={() => window.open(btnLink, "_blank")}
                text="Download App"
                variant="outline"
                className="px-6 text-lg"
              />
            </div>
            <div
              className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0 ">
                {data.menuItems.map((item: any, index: number) => {
                  return (
                    <li key={index}>
                      <a
                        onClick={() => handleLink(item.link)}
                        className="block py-2 pr-4 pl-3 font-lexend text-black font-normal rounded bg-primary-700 md:bg-transparent md:text-primary-700 md:p-0 hover:text-red  "
                        aria-current="page"
                      >
                        <NavLink to={item.link} className="active:text-red">
                          {item.menu}
                        </NavLink>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
