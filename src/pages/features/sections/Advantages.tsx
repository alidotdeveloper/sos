import { Typography } from "../../../components/ui/typography";
import phone from "../../../images/phone-call.png";
import message from "../../../images/message.png";
import fly from "../../../images/fly.png";
import chat from "../../../images/chat.png";

import Download from "../../../components/shared/Download";
import FeatureList from "./FeatureList";


function Advantages() {
  return (
    <div className="w-full justify-center">
      <div className="flex justify-center">
        <Typography
          size={"h2"}
          as={"h2"}
          className="font-abril capitalize font-normal text-black py-1"
        >
          <>Features Of SOS</>
        </Typography>
      </div>

      <div className="flex justify-center">
        <div className="grid md:grid-cols-3 py-6 md:py-12 grid-col-1  ">
          <FeatureList
            image={phone}
            heading="Love can happen anywhere"
            description="On the tram, in a corner cafe or en how this might change you. Love risk"
          />
          <FeatureList
            image={fly}
            heading="Everything At A Glance"
            description="On the tram, in a corner cafe or en how this might change you. Love risk"
          />
          <FeatureList
            image={chat}
            heading="Get Chatting"
            description="On the tram, in a corner cafe or en how this might change you. Love risk"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 grid-col-1 pb-12 md:pt-0 lg:pb-24 lg:px-32">
          <FeatureList
            image={message}
            heading="Love can happen anywhere"
            description="On the tram, in a corner cafe or en how this might change you. Love risk"
          />
          <FeatureList
            image={fly}
            heading="Everything At A Glance"
            description="On the tram, in a corner cafe or en how this might change you. Love risk"
          />
        </div>
      </div>

      <Download />
    </div>
  );
}

export default Advantages;
