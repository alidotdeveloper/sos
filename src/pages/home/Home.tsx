import Discover from "../../components/shared/Discover";
import Download from "../../components/shared/Download";



import PromoteImg from "../../images/promote.svg";
import Group from "../../images/Group.svg";
import Hero from "./sections/Hero";
import Promote from "./sections/Promote";
import Mobile from "./sections/Mobile";
import ReviewCarousel from "./sections/review-slider";



function Home() {
  return (
    <>
      <div className="flex flex-col w-full gap-6 lg:gap-12">
        <Hero />
        <Promote text="flex-col lg:flex-row" img={PromoteImg} />
        <Promote text="flex-col lg:flex-row-reverse pb-12" img={Group} />
        <Discover>
          <Mobile />
        </Discover>
        <ReviewCarousel />

        <Download />
      </div>
    </>
  );
}

export default Home;
