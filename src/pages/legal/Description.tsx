import { Typography } from "../../components/ui/typography";
import { LegalPagesDescription } from "../../types/index";

const Description: React.FC<LegalPagesDescription> = (LegalPages) => {
  return (
    <>
      <div className="flex ">
        <div className="flex w-full items-center justify-center py-2  ">
          <div className="flex  flex-col items-center gap-3 lg:w-[72%] w-full ">
            <div>
              <Typography
                size="lg"
                className="font-lexend text-gray w-[60%]  lg:w-full "
              >
                {LegalPages.content}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
