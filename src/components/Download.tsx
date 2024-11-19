import { Button } from "./Button";
import { Typography } from "./typography";
import Apple from "../images/apple.png";
import Play from "../images/play.png";
import downloadImage from "../images/download-img.svg";

function Download() {
    return (
        <>
            <div className="w-full">
                <div className="flex justify-center gap-6">
                    <div className="flex flex-col  lg:flex-row w-[90%] bg-blue rounded-xl justify-center items-center gap-4 ">
                       
                        <div className="w-full md:w-[85%] lg:w-[45%] flex relative ">
                            <div className="lg:absolute bottom-0 w-full h-[80%] lg:h-[400px] lg:bottom-[-145px] ">
                            <img src={downloadImage} className ="items-center  "></img>
                            </div>
                            </div>
                        <div className="flex flex-col gap-6 w-[90%] lg:w-[40%]   h-[35%] lg:h-[80%] lg:pt-12 lg:justify-start lg:items-start justify-center items-center   ">
                            <div className=" h-1"></div>
                            <div className="flex">
                                <Typography size="h6" className="font-lexend font-normal">
                                    Over 500+ Downloads
                                </Typography>
                            </div>
                            <div className="flex ">
                                <Typography size="h2" className="font-abril font-normal text-center lg:text-start">
                                    Download SOS Mobile App
                                </Typography>
                            </div>
                            <div className="flex">
                                <Typography
                                    size="lg"
                                    className="font-lexend font-normal text-gray text-center lg:text-start"
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt.
                                </Typography>
                            </div>
                            <div className="flex gap-4 flex-row w-full justify-center lg:justify-start">
                                <div className="">
                                    <Button
                                        text="App Store"
                                        icon={Apple}
                                        className="inline-flex  w-36 justify-center text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                                    />
                                </div>
                                <div className="">
                                    <Button
                                        text="Play Store"
                                        variant={"outline"}
                                        icon={Play}
                                        className="inline-flex items-center w-36 justify-center py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700"
                                    />
                                </div>
                            </div>
                             <div className="lg:h-24 h-0"></div>
                          
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Download;
