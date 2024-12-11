import { DiscoverProps } from "../../types/index";

const Discover: React.FC<DiscoverProps> = ({ children, Styling }) => {
  return (
    <>
      <section
        className={`w-full h-[96%] lg:h-full  flex items-center justify-center  lg:bg-[#FFF3F6]  sm:bg-transparent  ${Styling}  `}
      >
        <div className="    flex  lg:flex-row items-center justify-center md:h-full  w-full  ">
          {children}
        </div>
      </section>
    </>
  );
};

export default Discover;
