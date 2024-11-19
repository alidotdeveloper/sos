import { DiscoverProps } from "../types";

const Discover: React.FC<DiscoverProps> = ({ children, Styling }) => {
  return (
    <>
      <section
        className={`w-full h-[96%] lg:h-full  flex items-center justify-center  lg:bg-[#FFF3F6]  ${Styling} ` } 
      >
        <div className="  flex-col-reverse  flex  lg:flex-row items-center justify-center md:h-full  w-full  lg:w-[80%]"  >
          {children}
        </div>
      </section>
    </>
  );
};

export default Discover;
