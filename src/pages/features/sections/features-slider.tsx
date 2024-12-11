import Carousel from "../../../components/shared/Carousel";
import { Typography } from "../../../components/ui/typography";

function FeaturesSlider() {
  return (
    <>
      <div className="  lg:flex flex-col lg:flex-row lg:py-6  gap-12 ">
        <div className="flex flex-col gap-24 lg:w-[50%] ">
          <div className=" flex  w-full   ">
            <div>
              <Typography
                size={"h3"}
                as={"h3"}
                className="font-abril capitalize font-normal text-black py-2"
              >
                <>Meet Someone Special Where You Love to Be</>
              </Typography>
              <div className="flex  w-full max-w-[450px]">
                <Typography
                  size={"h7"}
                  className="font-lexend font-normal leading-normal text-gray"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </Typography>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-24 lg:w-[50%] items-center sm:items-start">
          <div className=" flex w-full  md:w-[900px] 2xl:w-[800px]   ">
            <Carousel dotsValue={false} slidesNumber={3}>
              <div className="px-2">
                <div className="flex gap-3">
                  <div
                    className="relative  rounded-xl bg-cover bg-center bg-opacity bg-black h-[250px] flex justify-center items-center w-[400px] object-cover "
                    style={{
                      backgroundImage:
                        "url('https://s3-alpha-sig.figma.com/img/ba71/9b5e/fc25e7b2057ae8e03919303a0f5f754a?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TgJc17z55wZR~XH0ucDAcUd2k6E9EJm6Z5X3uAhuM5CoHISxPYqdTB-hc5pd6dqM-rZh2tDLwCg~yNpX6dChUHlxou1JWh-fdhcMOscIbLzz34lLcvlHe-L97qKhQ7gaA2Aux6JEv-IL7g9EUzhLqjXzzmXzimOfUqG56ZUiddAvuA-orvvCPDVmI8VsDPlImo5nKGuMoiUbwEIp17GydOCvWwVsjTIDfTltS1GNt2WjMwmeRbtbvIjHeeiwIdWL6KQ6LqM4bnjdOTiEoREQcn3MIRH6CvxC60J3NlSLdbreFKWbifmpN5RQwVbZGdCSz3e~Ipw9SABjwaT~mDM1uQ__')",
                    }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
                    <Typography className=" relative font-abril text-white items-center ">
                      Clubs
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="px-2">
                <div className="flex gap-3 ">
                  <div
                    className="relative  rounded-xl bg-cover bg-center bg-opacity bg-black h-[250px] flex justify-center items-center w-[400px] object-cover "
                    style={{
                      backgroundImage:
                        "url('https://s3-alpha-sig.figma.com/img/a195/ec5c/10ac7dd0dfc1a3557d47cac31b27db16?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZlT7IPr9MLqeCD9pI56lt3oCyim261IIcOHOgLo6VKz48eaGOXnNO29qOLchB1QAr5TIDUm6x11u4Xg33y0pS3Q-3awJlE54hj5RfobrvmXuxJ35~Rm3KbmBgtYVYu~zsEl62bGoWdqO0tfq1LMuWLBAMBA06GBcezgFb~XARvX1sQJ8qCkqDhHYXbEpuKW7EXrV0r01T~D5RM289~MptA8qIU~hW5puGYabU-jswf3Tq7uWjVoHxWFgacI1QLRWNg~T5MXnJds2HXKPJdp8MBdhJbl1dM~zKEyVnuy48DWuRnFYLZyL5sGeLi-ccuoUrcmTtF9Cc0kLxtFWa~aCyw__')",
                    }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
                    <Typography className=" relative font-abril text-white items-center ">
                      Resturents
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="px-2">
                <div className="flex gap-3 ">
                  <div
                    className="relative  rounded-2xl bg-cover bg-center bg-opacity bg-black h-[250px] flex justify-center items-center w-[400px] object-cover "
                    style={{
                      backgroundImage:
                        "url('https://s3-alpha-sig.figma.com/img/ba71/9b5e/fc25e7b2057ae8e03919303a0f5f754a?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TgJc17z55wZR~XH0ucDAcUd2k6E9EJm6Z5X3uAhuM5CoHISxPYqdTB-hc5pd6dqM-rZh2tDLwCg~yNpX6dChUHlxou1JWh-fdhcMOscIbLzz34lLcvlHe-L97qKhQ7gaA2Aux6JEv-IL7g9EUzhLqjXzzmXzimOfUqG56ZUiddAvuA-orvvCPDVmI8VsDPlImo5nKGuMoiUbwEIp17GydOCvWwVsjTIDfTltS1GNt2WjMwmeRbtbvIjHeeiwIdWL6KQ6LqM4bnjdOTiEoREQcn3MIRH6CvxC60J3NlSLdbreFKWbifmpN5RQwVbZGdCSz3e~Ipw9SABjwaT~mDM1uQ__')",
                    }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
                    <Typography className=" relative font-abril text-white items-center ">
                      Clubs
                    </Typography>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturesSlider;
