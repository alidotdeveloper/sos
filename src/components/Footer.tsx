import whiteLogo from "../images/white-logo.svg";
import { Typography } from "./typography";
import { Icon } from "@iconify/react";
import Logo from "../images/footer-logo.svg";
import Accordion from "./Accordion";
function Footer() {
  return (
    <>
      <div className=" hidden  w-full h-96 bg-black lg:flex justify-center">
        <div className="w-[90%] flex justify-center items-center">
          <div className="w-1/2 flex flex-col gap-12">
            <div>
              <img src={whiteLogo} alt="White Logo" />
            </div>
            <div className="flex flex-row gap-6 items-center">
              <div className="text-white hover:text-red">
                <Icon icon="ic:baseline-facebook" fontSize={36} />
              </div>
              <div className="text-white hover:text-red">
                <Icon icon="hugeicons:instagram" fontSize={36} />
              </div>
              <div className="text-white hover:text-red">
                <Icon icon="mdi:snapchat" fontSize={36} />
              </div>
              <div className="text-white hover:text-red">
                <Icon icon="basil:facebook-messenger-outline" fontSize={36} />
              </div>
            </div>
            <div>
              <Typography size="lg" className="text-white font-lexend">
                Copyright © 2024 SOS
              </Typography>
            </div>
          </div>
          <div className="w-1/2 flex gap-12">
            <div className="flex flex-row gap-24">
              <div className="flex flex-col gap-6">
                <Typography
                  size="h6"
                  className="font-lexend font-bold text-white"
                >
                  Index
                </Typography>
                <ul className="font-lexend flex flex-col gap-4">
                  <li className="text-white">
                    <a href="/">About Us</a>
                  </li>
                  <li className="text-white">
                    <a href="/">Features</a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-6">
                <Typography size="h6" className="font-lexend text-white">
                  Resources
                </Typography>
                <ul className="font-lexend flex flex-col gap-4">
                  <li className="text-white">
                    <a href="/">FAQ</a>
                  </li>
                  <li className="text-white">
                    <a href="/">Trust & Saftey</a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-6">
                <Typography size="h6" className="font-lexend text-white">
                  Legal
                </Typography>
                <ul className="font-lexend flex flex-col gap-4">
                  <li className="text-white">Security</li>
                  <li className="text-white">
                    <a href="/">Terms</a>
                  </li>
                  <li className="text-white">
                    <a href="/">Privacy </a>
                  </li>
                  <li className="text-white">
                    <a href="/">Cookie Policy</a>
                  </li>
                  <li className="text-white">
                    <a href="/">Development</a>
                  </li>
                  <li className="text-white">
                    <a href="/">SEO</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="  w-full flex flex-col  bg-[#232846] lg:hidden justify-center">
        <div className=" flex flex-col  justify-center items-center py-12">
          <div className="w-full flex flex-col justify-center gap-6">
            <div className="flex justify-center">
              <img src={Logo} alt="White Logo" />
            </div>
            <div className="flex justify-center">
              <Typography title="xl" className="text-white font-lexend">
                {" "}
                Make Connections In Real Life{" "}
              </Typography>
            </div>
            <div className="flex flex-row gap-6 justify-center">
              <div className="text-white hover:text-red">
                <Icon icon="ic:baseline-facebook" fontSize={36} />
              </div>
              <div className="text-white hover:text-red">
                <Icon icon="hugeicons:instagram" fontSize={36} />
              </div>
              <div className="text-white hover:text-red">
                <Icon icon="mdi:snapchat" fontSize={36} />
              </div>
              <div className="text-white hover:text-red">
                <Icon icon="basil:facebook-messenger-outline" fontSize={36} />
              </div>
            </div>
            <Accordion
              Title="Index"
              item1="About us"
              item2="Features"
            ></Accordion>
            <Accordion
              Title="Company"
              item1="About us"
              item2="Features"
            ></Accordion>
            <Accordion
              Title="Service"
              item1="About us"
              item2="Features"
            ></Accordion>

           
          </div>
          <div className="flex flex-col  py-6 items-center">
          <div>
              <Typography
                size="h6"
                className="text-white font-lexend flex justify-center"
              >
                Subscribe
              </Typography>
          </div>
         
            <div className="w-[90%] flex flex-col justify-center  ">
              <div className="flex py-2">
            <Typography
              size="md"
              className="text-white font-light font-lexend text-center pb-2"
            >
              For training and events, new products, industry news, and
              technical tips.
                </Typography>
                </div>
              <div className=" flex justify-center">
                <div className="flex flex-col w-[70%]">
                  <input type="text" placeholder="Enter your email address" className="text-md h-6 text-lexend ps-2" />
                  </div>

              </div>
            </div>
            <div className="w-[90%] flex flex-col flex-wrap md:flex-row py-6 ">
              <div className="h-8 md:h-4  md:border-r-2   border-white  flex justify-center items-center">
              <Typography
                size="md"
                className="text-white font-lexend flex justify-center py-3 px-2 ps-1  "
              >
               Copyright © 2024 SOS  
              </Typography>
              </div>
              <div className="h-8 md:h-4  md:border-r-2 md:border-white  flex justify-center items-center">
              <Typography
                size="md"
                className="text-white font-lexend flex justify-center py-3 px-2 ps-1  "
              >
               Terms & Conditions  
              </Typography>
              </div>
              <div className="h-8 md:h-4 
              flex justify-center items-center">
              <Typography
                size="md"
                className="text-white font-lexend flex justify-center py-3 ps-1 "
              >
               Privacy Policy
              </Typography>
              </div>
            </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
