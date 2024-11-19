import { Typography } from "./typography";
import stars from "../images/stars.svg";


interface Reviews{
    reviewsText: string;
    profileImage: string;
    UserName: String;
}
const Reviews: React.FC<Reviews> = (ReviewsProps)=> {
  return (
    <>
      <div className="flex flex-col gap-12 ">
        <div>
          <img src={stars}></img>
        </div>
        <div>
          <Typography className="text-gray font-lexend">
           {ReviewsProps.reviewsText}
          </Typography>
        </div>
        <div className="flex gap-4 ">
          <div>
            <img src={ReviewsProps.profileImage} className="w-32"></img>
          </div>
          <div className="flex items-center">
            <Typography className="font-lexend text-black ">
            {ReviewsProps.UserName}
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews;
