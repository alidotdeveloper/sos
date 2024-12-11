
import { Typography } from "../../components/ui/typography";
import Advantages from "./sections/Advantages";
import FeaturesSlider from "./sections/features-slider";
import Why from "./sections/Why";

Typography;
function Features() {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="max-w-[1140px] w-[94%] justify-center flex flex-col lg:gap-12 gap-6">
          <div className="">
            <Typography
              size={"h1"}
              className="flex justify-center  font-abril pt-12"
            >
              Why SOS?
            </Typography>
          </div>
          <Why />
          <FeaturesSlider />
          <Advantages />
        </div>
      </div>
    </>
  );
}

export default Features;
