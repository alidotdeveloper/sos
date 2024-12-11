import "./App.css";
import Header from "./components/layout/header/Header";
import { BrowserRouter } from "react-router-dom";

import Footer from "./components/layout/footer/Footer";
import Router from "./Router";
import { useContext, useEffect, useState } from "react";
import { PathContext } from "./context/Path-context";
import Loader from "./components/ui/Loader/sos loader.json";
import Lottie from "lottie-react";
import { Typography } from "./components/ui/typography";
import Scroll from "./components/layout/scroll/Scroll";

const App = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Loader,

    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { isPath } = useContext(PathContext);
  const [Loading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timeout);
  }, [isPath]);
  return (
    <>
      {Loading ? (
        <div className="flex w-max-[1140px] md:w-full  flex-col justify-center lg:h-[500px] md:h-[500px] h-[500px] items-center  ">
          <div className="flex md:mr-20 mr-12  ">
            <Lottie
              className="flex justify-center  md:w-full w-[600px] "
              animationData={defaultOptions.animationData}
              loop={defaultOptions.loop}
              autoplay={defaultOptions.autoplay}
              rendererSettings={defaultOptions.rendererSettings}
            />
          </div>

          <div className="md:-mt-[80px] -mt-[80px] lg:mr-6 md:mr-6 -mr-0 justify-center flex items-center w-full">
            <Typography size="lg" className="font-lexend">Loading...</Typography>
          </div>
        </div>
      ) : (
        <BrowserRouter>
          <Header />
          <Router />
          <Scroll />
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
