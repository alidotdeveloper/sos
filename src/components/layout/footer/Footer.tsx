import whiteLogo from "../../../images/white-logo.svg";
import { Typography } from "../../ui/typography";
import { Icon } from "@iconify/react";
import data from "../../../data";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { PathContext } from "../../../context/Path-context";
import Accordion from "./Accordion";
function Footer() {
  
  const { setPath } = useContext(PathContext);

  const handleReload = (itemlink: string) =>{
    setPath(itemlink);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  

  return (
    <>
      <div className=" hidden  w-full h-96 bg-black lg:flex justify-center mt-16  ">
        <div className="max-w-[1140px] w-[94%] flex justify-center items-center">
          <div className="w-1/2 md:w-[60%] xl:w-[50%] flex flex-col gap-6">
            <div>
              <img src={whiteLogo} alt="White Logo" />
            </div>
            <div className="flex flex-row gap-6 items-center">
              <div className="text-white hover:text-red">
                <Icon icon="ic:baseline-facebook" fontSize={26} />
              </div>
              <div className="text-white hover:text-red">
                <Icon icon="hugeicons:instagram" fontSize={26} />
              </div>
              <div className="text-white hover:text-red">
                <Icon icon="mdi:snapchat" fontSize={26} />
              </div>
              <div className="text-white hover:text-red">
                <Icon icon="basil:facebook-messenger-outline" fontSize={26} />
              </div>
            </div>
            <div>
              <Typography size="lg" className="text-white font-lexend">
                Copyright © 2024 SOS
              </Typography>
            </div>
          </div>
          <div className="w-1/2 md:w-[40%] lg:w-[50%] xl:w-[50%] justify-end flex gap-12">
            <div className="flex flex-row gap-24">
              {data.Footer.map((d) => (
                <div className="flex flex-col gap-6" key={d.title}>
                  <Typography size="h6" className="font-lexend text-white ">
                    {d.title}
                  </Typography>
                  <ul className="font-lexend flex flex-col whitespace-nowrap gap-4">
                    {d.navitems &&
                      Object.values(d.navitems).map(
                        (items: any, index: number) => (
                          <li className="text-white" key={index} onClick={()=> handleReload(items.link)} >
                            <Link to={items.link}>
                              {" "}
                              <a href="/">{items.title}</a>{" "}
                            </Link>
                          </li>
                        )
                      )}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col bg-black lg:hidden justify-center mt-12 ">
        <div className="flex flex-col justify-center items-center pt-12">
          <div className="w-full flex flex-col justify-center gap-1">
            <div className="flex justify-center pb-4 ">
              <img src={whiteLogo} alt="White Logo" className="w-36 h-20" />
            </div>

            <div className="flex flex-row gap-6 justify-center whitespace-nowrap">
              <div className="text-white hover:text-red">
                <Icon icon="ic:baseline-facebook" fontSize={30} />
              </div>
              <div className="text-white hover:text-red">
                <Icon icon="hugeicons:instagram" fontSize={30} />
              </div>
              <div className="text-white hover:text-red">
                <Icon icon="mdi:snapchat" fontSize={30} />
              </div>
              <div className="text-white hover:text-red">
                <Icon icon="basil:facebook-messenger-outline" fontSize={30} />
              </div>
            </div>
            <Accordion />
          </div>
          <div className="flex flex-col  pt-6 items-center">
            <div className="w-[100%] flex flex-col flex-wrap md:flex-row py-6 gap-1 text-center justify-center ">
              <div className="h-4     border-white  flex justify-center items-center">
                <Typography
                  size="sm"
                  className="text-white font-lexend flex justify-center py-2  text-center  "
                >
                  Copyright © 2024 SOS
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
