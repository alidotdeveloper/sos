import { useEffect, useState } from "react";
import Scroller from "../../../images/scroll.svg";

function Scroll() {
  const [isVisible, setVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const measureScroll = () => {
    let h = 200;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
  

    if (winScroll > h) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", measureScroll);
  }, []);
  return (
    <>
      {isVisible && (
        <div
          className="fixed flex w-full justify-end md:px-12 px-2 bottom-6 transition"
          onClick={scrollToTop}
        >
          <div className="w-10 h-10 off rounded-full bg-red flex justify-center items-center">
            <button className="text-red w-3">
              <img
                src={Scroller}
                className="flex items-center pt-1"
                alt="Scroll to Top"
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Scroll;
