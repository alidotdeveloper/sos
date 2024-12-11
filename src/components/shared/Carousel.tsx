import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SliderType } from "../../types/index";

const Carousel: React.FC<SliderType> = ({
  children,
  dotsValue,
  slidesNumber,
}) => {
  const settings = {
    dots: !!dotsValue,
    infinite: true,
    speed: 500,
    slidesToShow: slidesNumber as number,
    slidesToScroll: 1,
    autoplay: true,

    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" flex w-full justify-center gap-6 lg:pb-12 pb-0 ">
      <div className="slider-container max-w-[1000px]   w-full flex flex-col lg:gap-6 gap-3  py-6  ">
        <Slider {...settings} className="w-full flex justify-center ">
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
