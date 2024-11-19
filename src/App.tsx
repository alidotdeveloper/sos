import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Promote from "./components/Promote";
import PromoteImg from "./images/promote.svg";
import Group from "./images/Group.svg";
import Discover from "./components/Discover";
import Download from "./components/Download";
import Footer from "./components/Footer";

import Carousel from "./components/Carousel";
import Mobile from "./components/Mobile";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col w-full lg:gap-28 gap-12">
        <Hero />
        <Promote text="flex-col lg:flex-row" img={PromoteImg} />
        <Promote text="flex-col lg:flex-row-reverse" img={Group} />
        <Discover>
          <Mobile />
        </Discover>
        <Carousel />
        <Download />

        <Footer />
      </div>
    </>
  );
}

export default App;
