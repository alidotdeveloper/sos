import Logo from "../images/logo.png";
import data from "../data";
import { Button } from "./Button";
import { useState } from "react";
import Model from "./Model";

function Header() {
  const [isModelOpen, setIsModelOpen] = useState(false);

  const handleNav = () => {
    setIsModelOpen(true);
  };
  return (
    <>
      {isModelOpen && <Model setMode={setIsModelOpen}  />}

      <header>
        <nav className="bg-white border-gray-200  lg:px-6 py-2.5 white">
          <div className="flex flex-wrap justify-between items-center mx-auto w-[90%]">
            <div className="flex">
              <button
                onClick={handleNav}
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className=" lg:hidden inline-flex items-center p-2  text-sm text-gray-500 rounded-lg "
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <a href="/" className="flex items-center">
                <img src={Logo} className="mr-3 h-6 sm:h-9" alt="" />
              </a>
            </div>

            <div className="flex items-center lg:order-2">
              <Button text="Download App" variant="outline" className="px-3 " />
            </div>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                {data.menuItems.map((item: any, index: number) => {
                  return (
                    <li key={index}>
                      <a
                        href="#"
                        className="block py-2 pr-4 pl-3 font-lexend text-black font-normal rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 "
                        aria-current="page"
                      >
                        {" "}
                        {item.menu}
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
