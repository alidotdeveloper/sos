import { FormEvent, useState } from "react";
import { Button } from "../../../components/ui/Button";
import { Typography } from "../../../components/ui/typography";

function DeleteForm() {
  const [values, setvalues] = useState({
    email: '',
    password: '',
    message: ''
  });
  
  const handlesubmit = (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    console.log(values);     
  }
  return (
    <div className="flex  w-full justify-center ">
      <div className=" flex  flex-col py-0 md:pt-12 max-w-[1140px] w-[94%]">
        <div className="w-full flex ">
          <div className="flex flex-col md:flex-row py-6 md:py-0 w-full md:gap-12 gap-0">
            <div className="md:w-[60%] w-full">
              <div className="">
                <div className="py-2">
                <Typography size="h2" className="font-abril w-full capitalize">
                Fill in the form below to remove your SOS account.
                </Typography>
                </div>
               
              </div>
              <div className="py-6">
                <form className="w-full" onSubmit={(e) => handlesubmit(e)} action="">
                  <div className="flex flex-col md:flex-row gap-6 py-6">
                    <div className="md:w-1/2 w-full border-b-2 border-gray">
                      <input
                        type="Email"
                        placeholder="Email"
                        name="Email"
                        value={values.email}
                        onChange={(e) => setvalues({ ...values, email: e.target.value })}
                        className="pb-5 w-[94%] md:w-full font-lexend outline-none font-normal text-black focus:border-0"
                      
                      ></input>
                    </div>
                   
                    <div className="md:w-1/2 w-full border-b-2 border-gray">
                      <input
                        type="text"
                        name="password"
                          required
                        placeholder="Password "
                        onChange={(e) => setvalues({ ...values, password: e.target.value })}
                        className=" pb-5 w-[94%] md:w-full font-lexend outline-none font-normal text-black"
                     
                      ></input>
                    </div>
                  </div>
                  <div className="py-2 w-full border-b-2 border-gray">
                    <textarea
                      cols={44}
                      rows={6}
                      name="message"
                      value={values.message}
                      placeholder="Provide reason... "
                      onChange={(e) => setvalues({ ...values, message: e.target.value })}
                      className=" pb-5 w-[94%] md:w-full font-lexend  outline-none font-normal text-black"
                      required
                    ></textarea>
                  </div>
                  <div className="py-6">
                    <Button
                      variant="solid"
                      text="Request"
                      className="px-4 py-2"
                    />
                  </div>
                 
                </form>
              </div>
            </div>
            <div className="w-full md:w-[40%] flex ">
              <div>
                <div className="flex py-2 ">
                  <Typography
                    size="h3"
                    className="font-abril w-full capitalize"
                  >
                    Need Help?
                  </Typography>
                </div>
                <div className=" justify-center">
                  <Typography
                    size="lg"
                    className="font-lexend font-normal text-gray "
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. sed do
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteForm;
