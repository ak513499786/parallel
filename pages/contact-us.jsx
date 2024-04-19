import { useState, useEffect } from "react";
import Navbar from "@/pages/navbar";
import Image from "next/image";
import style from "@/styles/style.module.css";
import Footer from "./footer";

export default function Contact() {
  const [iam, setiam] = useState("Select an option");
  const [help, sethelp] = useState("Select an option");
  const [iamOpen, setIamOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionSelect = (option) => {
    sethelp(option);
    setIsOpen(false);
  };
  const toggleIamMenu = () => {
    setIamOpen(!iamOpen);
  };
  const handleIamOptionSelect = (option) => {
    setiam(option);
    setIamOpen(false);
  };
  return (
    <>
      <Navbar />
      <div className="absolute w-[100%] h-[100vh] top-0 left-0 overflow-x-hidden">
        <div className={style.backgroundcolor}></div>
        <div className={style.backgroundbox}></div>
      </div>
      <main className="px-[80px] flex justify-center pb-[79.28px] z-20 relative pt-[130.71px]">
        <h1 className="text-[104.57px] leading-[106.66px] tracking-[-5.2px] font-['Graphikthin'] text-center text-[#E5E5E5] w-[799.41px]">
          Never let high fees be the excuse.
        </h1>
      </main>
      <div className="absolute w-[100%] h-[70vh] top-[100vh] left-0 overflow-x-hidden">
        <div className={style.backgroundcolor2}></div>
        <div className={style.backgroundbox2}></div>
      </div>
      <div className="py-[68.1px] relative z-20 pl-[80px] gap-[34px] flex-col items-center flex pr-[79px]">
        <h1 className="text-center text-[32px] leading-[37.76px] font-['Graphikthin'] tracking-[-0.64px] text-[#E5E5E5]">
          Get in touch with us
        </h1>
        <div className="w-[842px] bg-[#FFFFFF1A] rounded-[14px] h-[707px] px-[37px] py-[34px] flex flex-col gap-[32px]">
          <div className="flex gap-[32px]">
            <div>
              <p className="text-[16px] leading-[19.2px] text-[#FFFFFF] mb-[16px]">
                Name
              </p>
              <input
                type="text"
                placeholder="Enter your name"
                className="py-[16px] pl-[17.51px] rounded-[4px] border-[1px] border-white w-[368px] bg-transparent text-[white] placeholder-[#ffffff99]"
              />
            </div>
            <div>
              <p className="text-[16px] leading-[19.2px] text-[#FFFFFF] mb-[16px]">
                Email
              </p>
              <input
                type="text"
                placeholder="Enter your email"
                className="py-[16px] pl-[17.51px] rounded-[4px] border-[1px] border-white w-[368px] bg-transparent text-[white] placeholder-[#ffffff99]"
              />
            </div>
          </div>
          <div className="flex gap-[32px]">
            <div>
              <p className="text-[16px] leading-[19.2px] text-[#FFFFFF] mb-[16px]">
                Phone Number
              </p>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="py-[16px] pl-[17.51px] rounded-[4px] border-[1px] border-white w-[368px] bg-transparent text-[white] placeholder-[#ffffff99]"
              />
            </div>
          </div>
          <div className="flex gap-[22px]">
            <div className="flex flex-col relative gap-[16px]">
              <p className="text-[16px] leading-[19.2px]">I am a</p>
              <div
                onClick={() => toggleIamMenu()}
                className="pl-[17.51px] pr-[18px] flex justify-between h-[54px] bg-[transparent] text-[#ffffff99] cursor-pointer w-[368px] border-[1px] border-white rounded-[6px] py-[16px] text-[17.95px] leading-[21.54px]"
              >
                <p>{iam}</p>
                <Image src="/arrowdown.svg" width={19.98} height={10.75} />
              </div>
              {iamOpen && (
                <div className="bg-[#FFFFFFF2] absolute border-[1px] rounded-tl-[4px] rounded-[tr]-[4px] top-[89px] z-[22222] cursor-pointer">
                  <ul>
                    <li
                      onClick={() =>
                        handleIamOptionSelect("Passed out student")
                      }
                      className="pl-[17.91px] w-[368px] cursor-pointer text-black border-[1px] border-b-[#00000033] py-[16px] text-[17.95px] leading-[21.54px]"
                    >
                      Student enrolled in college{" "}
                    </li>
                    <li
                      onClick={() =>
                        handleIamOptionSelect("Passed out student")
                      }
                      className="pl-[17.91px] w-[368px] cursor-pointer text-black py-[16px] text-[17.95px] border-[1px] border-b-[#00000033] leading-[21.54px]"
                    >
                      Passed out student{" "}
                    </li>
                    <li
                      onClick={() =>
                        handleIamOptionSelect("College Representative")
                      }
                      className="pl-[17.91px] w-[368px] cursor-pointer text-black border-[1px] border-b-[#0000033] py-[16px] text-[17.95px] leading-[21.54px]"
                    >
                      College Representative{" "}
                    </li>
                    <li
                      onClick={() => handleIamOptionSelect("Recruiter")}
                      className="pl-[17.91px] w-[368px] cursor-pointer text-black border-[1px] border-b-[#00000033] py-[16px] text-[17.95px] leading-[21.54px]"
                    >
                      Recruiter{" "}
                    </li>
                    <li
                      onClick={() =>
                        handleIamOptionSelect("My Role Is Not Listed")
                      }
                      className="pl-[17.91px] w-[368px] cursor-pointer text-black border-[1px] border-b-[#00000033] py-[16px] text-[17.95px] leading-[21.54px]"
                    >
                      My role is not listed{" "}
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="flex flex-col relative gap-[16px]">
              <p className="text-[16px] leading-[19.2px]">I am a</p>
              <div
                onClick={() => toggleMenu()}
                className="pl-[17.51px] pr-[18px] flex justify-between h-[54px] bg-[transparent] text-[#ffffff99] cursor-pointer w-[368px] border-[1px] border-white rounded-[6px] py-[16px] text-[17.95px] leading-[21.54px]"
              >
                <p>{help}</p>
                <Image src="/arrowdown.svg" width={19.98} height={10.75} />
              </div>
              {isOpen && (
                <div className="bg-[#FFFFFFF2] absolute border-[1px] rounded-tl-[4px] rounded-[tr]-[4px] top-[89px] z-[22222] cursor-pointer">
                  <ul>
                    <li
                      onClick={() => handleOptionSelect("Passed out student")}
                      className="pl-[17.91px] w-[368px] cursor-pointer text-black border-[1px] border-b-[#00000033] py-[16px] text-[17.95px] leading-[21.54px]"
                    >
                      Choosing the right course{" "}
                    </li>
                    <li
                      onClick={() =>
                        handleOptionSelect("More details on a course")
                      }
                      className="pl-[17.91px] w-[368px] cursor-pointer text-black py-[16px] text-[17.95px] border-[1px] border-b-[#00000033] leading-[21.54px]"
                    >
                      More details on a course{" "}
                    </li>
                    <li
                      onClick={() => handleOptionSelect("Hiring candidates")}
                      className="pl-[17.91px] w-[368px] cursor-pointer text-black border-[1px] border-b-[#0000033] py-[16px] text-[17.95px] leading-[21.54px]"
                    >
                      Hiring candidates{" "}
                    </li>
                    <li
                      onClick={() => handleOptionSelect("Conducting workshops")}
                      className="pl-[17.91px] w-[368px] cursor-pointer text-black border-[1px] border-b-[#00000033] py-[16px] text-[17.95px] leading-[21.54px]"
                    >
                      Conducting workshops{" "}
                    </li>
                    <li
                      onClick={() => handleOptionSelect("Placements")}
                      className="pl-[17.91px] w-[368px] cursor-pointer text-black border-[1px] border-b-[#00000033] py-[16px] text-[17.95px] leading-[21.54px]"
                    >
                      Placements{" "}
                    </li>
                    <li
                      onClick={() =>
                        handleOptionSelect("My query is not listed")
                      }
                      className="pl-[17.91px] w-[368px] cursor-pointer text-black border-[1px] border-b-[#00000033] py-[16px] text-[17.95px] leading-[21.54px]"
                    >
                      My query is not listed{" "}
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-[32px]">
            <div>
              <p className="text-[16px] leading-[19.2px] text-[#FFFFFF] mb-[16px]">
                Enter your message{" "}
              </p>
              <textarea
                type="text"
                placeholder="Message"
                className="py-[16px] resize-none px-[17.51px] rounded-[4px] h-[156px] border-[1px] border-white w-[755px] bg-transparent text-[white] placeholder-[#ffffff99]"
              ></textarea>
            </div>
          </div>
          <button className="text-[16px] w-[755px] h-[53px] flex justify-center items-center font-semibold relative bg-[#30E29D] text-black rounded-[8px] leading-[53px]">
            Contact us{" "}
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-[28.01px] z-20 relative items-center pt-[96.09px] pb-[121.9px]">
        <h1 className="text-center text-[32px] leading-[30.84px] tracking-[-1.28px] font-['Graphikthin']">
          We love to see new mails in our inbox.
        </h1>
        <div className="w-[294.22px] text-center relative z-[20]">
          <span className="text-[16px] leading-[24px] text-white z-[20]">
            Mail us at{" "}
          </span>
          <a
            href="mailto:hello@parallel.com"
            className="text-[#30E29D] text-[16px] leading-[24px] z-[20] border-b-[0.5px] border-[#30E29D]"
          >
            hello@parallel.com
          </a>
          <p className="text-[#E5E5E5] text-[16px] leading-[24px] font-['Graphikthin']">We will get back to you within 2 hours during working hours.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
