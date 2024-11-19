import Discover from "./Discover";
import HeroBottom from "./HeroBottom";

import Landing from "./Landing";
function Hero() {
  return (
    <>
      <div className="flex flex-col  gap-12 w-full items-center">
        <Discover Styling={"rounded-bl-[20%] rounded-br-[20%] sm:rounded-bl-[30%] sm:rounded-br-[30%] "}>
          <Landing />
        </Discover>
        <HeroBottom />
      </div>
    </>
  );
}

export default Hero;
