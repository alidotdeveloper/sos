import profile from "../../../images/profile-img.svg";
import Carousel from "../../../components/shared/Carousel";
import { Typography } from "../../../components/ui/typography";
import vector from "../../..//images/Vector.svg";
import Reviews from "./Reviews";
function ReviewCarousel() {
  return (
    <div className="flex w-full justify-center gap-6 pb-12 lg:pb-0 ">
      <div className="max-w-[1000px] w-[94%] lg:w-[94%] xl:w-full ">
        <div className="py-3">
          <Typography className="font-abril" size="h2">
            Hear from Our Users
          </Typography>
        </div>
        <div className="py-3">
          <img src={vector}></img>
        </div>
        <Carousel dotsValue={true} slidesNumber={1}>
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
        </Carousel>
      </div>
    </div>
  );
}

export default ReviewCarousel;
