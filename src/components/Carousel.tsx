import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Reviews from "./Reviews";
import { Typography } from "./typography";
import profile from "../images/profile-img.svg";
import vector from "../images/Vector.svg";
function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className=" flex gap-6 pb-12 ">
      <div className=" w-[0%] md:w-[10%] lg:w-[20%] "></div>
      <div className="slider-container w-[90%] lg:w-[80%]  flex flex-col gap-12 ">
        <div className="">
          <Typography className="font-abril" size="h2">
            Hear from Our Users
          </Typography>
        </div>
        <div>
          <img src={vector}></img>
        </div>
        <Slider {...settings}>
          <div>
            <Reviews
              reviewsText="Slate helps you see how many more days you need 
             to work to reach your financial goal for the month and year."
              profileImage={profile}
              UserName="Jeremy Hoarau"
            />
          </div>
          <div>
            <Reviews
              reviewsText="Slate helps you see how many more days you need 
             to work to reach your financial goal for the month and year."
              profileImage={profile}
              UserName="Jeremy Hoarau"
            />
          </div>
          <div>
            <Reviews
              reviewsText="Slate helps you see how many more days you need 
             to work to reach your financial goal for the month and year."
              profileImage={profile}
              UserName="Jeremy Hoarau"
            />
          </div>
        </Slider>
      </div>
      <div className="w-[20%]"></div>
    </div>
  );
}

export default Carousel;
