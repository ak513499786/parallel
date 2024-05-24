import Image from "next/image";
import style from "@/styles/style.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";

export default function Workshop() {
  const [Name, setName] = useState("");
  const [College_Name, setCollege_Name] = useState("");
  const [College_Email, setCollege_Email] = useState("");
  const [Designation, setDesignation] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      Name,
      College_Name,
      College_Email,
      Designation,
    };
    try {
      const response = await axios.post("/api/workshop", data);
      console.log("Data sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="absolute w-[100%] h-[100vh] top-0 left-0 overflow-x-hidden">
        <div className={style.backgroundboxworkshop}></div>
      </div>
      <main className="w-[100%]  pl-[80px] pt-[171.5px] max-hamburger:py-[100px] max-md:py-[80px] max-sm:py-[50px] pb-[272.5px] relative max-sm:px-[20px] max-md:px-[40px] max-smalllaptop:h-[1150px] max-hamburger:h-auto max-smalllaptop:overflow-hidden">
        <h1 className="w-[665.36px] z-[2] text-[64px] max-smalllaptop:w-full max-hamburger:text-[48px] max-sm:text-[36px] max-sm:tracking-tight max-hamburger:leading-[120%] leading-[61.68px] font-['Graphikthin'] text-[#E5E5E5] tracking-[-2.56px]">
          Host a skill focused workshop at your college.{" "}
        </h1>
        <div className="flex mt-[49px] gap-[32px]">
          <Link href={"/contact-us"} className="max-md:w-full">
            <button className="w-[165px] max-md:w-full h-[53px] bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] font-[19.2px]">
              Contact Us{" "}
            </button>
          </Link>
        </div>
        <Image
          src="/workshop1.svg"
          className="absolute top-[100.31px] right-[111.75px] max-smalllaptop:top-[50px]  max-smalllaptop:scale-100 max-smalllaptop:right-[-300px] max-xl:scale-75 max-smalllaptop:relative max-hamburger:hidden h-[329.29px] w-[449.44px] z-[10]"
          width={107.16}
          height={107.16}
        />
        <Image
          src="/Saly-1.svg"
          className="absolute max-xl:scale-75  max-smalllaptop:top-[-460px] max-smalllaptop:scale-100 max-smalllaptop:right-[-80px] max-smalllaptop:relative max-hamburger:hidden top-[-79.54px] right-[66.44px] h-[771.56px] w-[771.56px] z-[30]"
          width={107.16}
          height={107.16}
        />
        <Image
          src="/Ellipse 10.svg"
          className="absolute top-[235.91px] max-xl:scale-75 max-smalllaptop:relative max-smalllaptop:top-[-920px]  max-smalllaptop:scale-100 max-smalllaptop:right-[-500px] max-hamburger:hidden right-[31.44px] h-[320.36px] w-[320.36px] z-[20]"
          width={107.16}
          height={107.16}
        />
      </main>
      <section className="pb-[52px] pl-[80px] max-sm:px-[20px] max-md:px-[40px] maxmd:py-[80px] pr-[79px] pt-[118.84px]">
        <h1 className="mb-[80.56px] text-[64px] leading-[61.68px] text-[#E5E5E5] font-['Graphikthin'] tracking-[-2.56px] w-[896px] max-smalllaptop:w-full max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%]">
          Hands-on workshop on using
          <span className="font-bold"> free AI tools </span>
          to cut the competition{" "}
        </h1>
        <p className="text-[20px] leading-[25.2px] tracking-[-0.2px] font-semibold mb-[21.6px]">
          This workshop contains
        </p>
        <div className="flex gap-[84px] max-hamburger:flex-nowrap max-md:flex-wrap-reverse max-smalllaptop:flex-wrap-reverse max-smalllaptop:items-start mb-[80.56px] max-xl:ml-0 max-xl:gap-[32px] items-center">
          <div className="flex py-[31.82px] max-hamburger:h-auto max-hamburger:w-full max-hamburger:flex-col gap-[31.04px] h-[289px] w-[934px] max-xl:w-full bg-[#FFD7071A] px-[18px] max-md:w-full border-l-[#FFD707C4] border-t-[#FFD707C4] rounded-[10px] border-[1px] border-[#99999999]">
            <Image
              src="/workshop01.svg"
              width={107.16}
              className="w-[290.96px] max-hamburger:h-auto max-hamburger:w-full h-[225.36px]"
              height={107.16}
            />
            <div>
              <p className="mt-[9.68px] max-sm:text-[28px] max-sm:leading-[34px] max-hamburger:h-auto max-hamburger:w-full w-[387.05px] text-[36.63px] font-['Graphikthin'] leading-[41.03px] tracking-[-1.1px] mb-[12px] text-[#E5E5E5]">
                Why use AI tools and how they can help.{" "}
              </p>
              <p className="text-white opacity-80 w-[542.5px] max-bigscreen:w-[100%] mb-[32px] text-base font-['Graphikthin']">
                Understand the brief about AI. Familiarize with how people are
                using it to stand out, increase their productivity.{" "}
              </p>
              <div className="flex gap-[8px]">
                <p className="py-[4px] px-[8px] text-[#FFDB06] text-base font-['Graphikthin'] border-[#FFDB06] opacity-60 border-[1px] rounded-[5px]">
                  20 minutes{" "}
                </p>
              </div>
            </div>
          </div>
          <h1 className="text-[276.38px] max-sm:text-[130px] max-sm:leading-[80px] leading-[230px] text-[#262002] font-bold">
            1
          </h1>
        </div>
        <div className="flex ml-[58.09px] max-hamburger:items-start max-hamburger:flex-row gap-[84px] max-md:flex-col max-md:items-end max-smalllaptop:flex-col max-smalllaptop:items-end max-xl:ml-0 max-xl:gap-[32px] max-bigscreen:ml-[30px] my-[80.56px] items-center justify-between">
          <h1 className="text-[276.38px] max-sm:text-[130px] max-sm:leading-[80px] leading-[230px] text-[#022301] font-bold">
            2
          </h1>{" "}
          <div className="flex py-[31.82px] max-hamburger:flex-col max-hamburger:h-auto max-hamburger:w-full gap-[31.04px] h-[289px] w-[934px] max-xl:w-full bg-[#95FF931A] px-[18px] max-md:w-full border-l-[#95FF93C4] border-t-[#95FF93C4] rounded-[10px] border-[1px] border-[#99999999]">
            <Image
              src="/workshop2.svg"
              width={107.16}
              className="w-[290.96px] h-[225.36px] max-hamburger:h-auto max-hamburger:w-full"
              height={107.16}
            />
            <div>
              <p className="mt-[9.68px] w-[489.3px] max-sm:text-[28px] max-sm:leading-[34px] text-[36.63px] max-hamburger:h-auto max-hamburger:w-full font-['Graphikthin'] leading-[41.03px] tracking-[-1.1px] mb-[12px] text-[#E5E5E5]">
                Prompt Engineering 101. Free GenAI tools.{" "}
              </p>
              <p className="text-white opacity-80 w-[542.5px] max-bigscreen:w-[100%] mb-[32px] text-base font-['Graphikthin']">
                Get a hands-on experience on optimizing prompts. Generate images
                exactly how you imagined it in your head.
              </p>
              <div className="flex gap-[8px]">
                <p className="py-[4px] px-[8px] text-[#30FF51] text-base font-['Graphikthin'] border-[#30FF51] opacity-60 border-[1px] rounded-[5px]">
                  1 hour{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-[84px] max-hamburger:items-start max-hamburger:flex-nowrap max-md:flex-wrap-reverse max-md:items-start max-smalllaptop:flex-wrap-reverse max-smalllaptop:items-start my-[80.56px] max-xl:ml-0 max-xl:gap-[32px] items-center justify-between">
          <div className="flex py-[31.82px] max-hamburger:flex-col gap-[31.04px] max-hamburger:h-auto max-hamburger:w-full h-[289px] w-[934px] max-xl:w-full bg-[#07E1FF1A] px-[18px] max-md:w-full border-l-[#07E1FFC4] border-t-[#07E1FFC4] rounded-[10px] border-[1px] border-[#99999999]">
            <Image
              src="/cube.svg"
              width={107.16}
              className="w-[290.96px] max-hamburger:w-full max-hamburger:h-auto h-[225.36px]"
              height={107.16}
            />
            <div>
              <p className="mt-[9.68px] w-[482.94px] max-sm:text-[28px] max-sm:leading-[34px] text-[36.63px] max-hamburger:w-full font-['Graphikthin'] leading-[41.03px] tracking-[-1.1px] mb-[12px] text-[#E5E5E5]">
                Use AI tools to optimize your LinkedIn profile and resume.{" "}
              </p>
              <p className="text-white opacity-80 w-[542.5px] max-bigscreen:w-[100%] mb-[32px] text-base font-['Graphikthin']">
                Learn how people are using AI to increase their visibility on
                LinkedIn. Master the craft of refining your resume through AI.
              </p>
              <div className="flex gap-[8px]">
                <p className="py-[4px] px-[8px] text-[#0CC2FF] text-base font-['Graphikthin'] border-[#0CC2FF] opacity-60 border-[1px] rounded-[5px]">
                  30 minutes{" "}
                </p>
              </div>
            </div>
          </div>
          <h1 className="text-[276.38px] max-sm:text-[130px] max-sm:leading-[80px] leading-[230px] text-[#021E22] font-bold">
            3
          </h1>
        </div>
        <div className="flex ml-[58.09px] max-hamburger:items-start max-hamburger:flex-row max-md:flex-col max-md:items-end max-smalllaptop:flex-col max-smalllaptop:items-end gap-[84px] max-xl:ml-0 max-xl:gap-[32px] max-bigscreen:ml-[30px] my-[80.56px] items-center justify-between">
          <h1 className="text-[276.38px] max-sm:text-[130px] max-sm:leading-[80px] leading-[230px] text-[#210016] font-bold">
            4
          </h1>{" "}
          <div className="flex py-[26.5px] max-hamburger:flex-col max-hamburger:h-auto gap-[31.04px] h-[289px] w-[934px] max-xl:w-full bg-[#FF41D51A] px-[18px] max-md:w-full border-l-[#FF41D5C4] border-t-[#FF41D5C4] rounded-[10px] border-[1px] border-[#99999999]">
            <Image
              src="/workshop4.svg"
              width={107.16}
              className="w-[290.96px] mt-[5.52px] max-hamburger:w-full max-hamburger:h-auto h-[225.36px]"
              height={107.16}
            />
            <div>
              <p className="text-white opacity-80 mb-[8px] text-base font-['Graphikthin']">
                (Tailored to each branch)
              </p>
              <p className="w-[485.22px] text-[36.63px] max-sm:text-[28px] max-sm:leading-[34px] max-hamburger:w-full font-['Graphikthin'] leading-[41.03px] tracking-[-1.1px] mb-[12px] text-[#E5E5E5]">
                Learning a free AI tool to increase productivity.{" "}
              </p>
              <p className="text-white opacity-80 w-[542.5px] max-bigscreen:w-[100%] mb-[32px] text-base font-['Graphikthin']">
                Get to know and use a free AI tool to increase productivity.
                This session will be tailored to each branch.
              </p>
              <div className="flex gap-[8px]">
                <p className="py-[4px] px-[8px] text-[#FF01E6] text-base font-['Graphikthin'] border-[#FF01E6] opacity-60 border-[1px] rounded-[5px]">
                  1 hour{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[107.84px] pb-[56px] max-md:py-[30px] px-[80px] max-md:px-[40px] max-sm:px-[20px]">
        <h1 className="text-[64px] text-center mb-[74.16px] max-hamburger:text-[48px] max-sm:text-[36px] max-sm:tracking-tighter max-hamburger:leading-[120%] leading-[61.68px] font-['Graphikthin'] text-[#E5E5E5] tracking-[-2.56px]">
          What your students will get{" "}
        </h1>
        <div className="flex gap-[21px] flex-wrap">
          <div
            className={`${style.gradientbackgroundcard} relative z-20 overflow-hidden w-[413px] h-[406px] rounded-[8px]`}
          ></div>
          <div
            className={`${style.gradientbackgroundcard} relative z-20 overflow-hidden w-[413px] h-[406px] rounded-[8px]`}
          ></div>
          <div
            className={`${style.gradientbackgroundcard} relative z-20 overflow-hidden w-[413px] h-[406px] rounded-[8px]`}
          ></div>
          <div
            className={`${style.gradientbackgroundcard} relative z-20 overflow-hidden w-[413px] h-[406px] rounded-[8px]`}
          ></div>
          <div
            className={`${style.gradientbackgroundcard} relative z-20 overflow-hidden w-[413px] h-[406px] rounded-[8px]`}
          ></div>
          <div
            className={`${style.gradientbackgroundcard} relative z-20 overflow-hidden w-[413px] h-[406px] rounded-[8px]`}
          ></div>
          <div
            className={`${style.gradientbackgroundcard} relative z-20 overflow-hidden w-[413px] h-[406px] rounded-[8px]`}
          ></div>
          <div
            className={`${style.gradientbackgroundcard} relative z-20 overflow-hidden w-[413px] h-[406px] rounded-[8px]`}
          ></div>
          <div
            className={`${style.gradientbackgroundcard} relative z-20 overflow-hidden w-[413px] h-[406px] rounded-[8px]`}
          ></div>
          <div
            className={`${style.gradientbackgroundcard} relative z-20 overflow-hidden w-[413px] h-[406px] rounded-[8px]`}
          ></div>
        </div>
      </section>
      <section className="flex flex-col items-center pt-[49.9px] pb-[134px] max-md:py-[30px] px-[80px] max-md:px-[40px] max-sm:px-[20px]">
        <h1 className="text-[36px] text-center mb-[50.16px] max-hamburger:text-[28px] max-hamburger:leading-[120%] leading-[41.68px] font-['Graphikthin'] text-[#E5E5E5] tracking-[-1.08px]">
          What your students will get{" "}
        </h1>
        <Image
          src="/workshop5.png"
          width={1063}
          height={632}
          className="max-xl:w-full max-xl:h-auto"
        />
      </section>
      <section className="py-[168.5px] max-md:px-[40px] max-sm:px-[20px] max-md:py-[40px] relative px-[62.74px]">
        <div className="absolute w-[100%] h-[100vh] top-0 left-0 overflow-hidden">
          <div className={style.backgroundboxworkshop}></div>
        </div>
        <p className="text-[48px] leading-[46.26px] w-[554px] max-md:w-full tracking-[-1.92px] max-md:text-[32px] max-md:leading-[120%] text-[#E5E5E5] font-['Graphikthin'] text-[#E5E5E5] mb-[65.09px]">
          <span className="font-bold">3 hours </span>
          of fun and learning. All at a low cost of{" "}
        </p>
        <div className="flex max-smallphone:flex-col items-end">
          <h1 className="text-[257.99px] max-hamburger:text-[187px] max-md:text-[157px] max-hamburger:leading-[90%] max-hamburger:w-auto max-sm:text-[107px] max-sm:pr-[10px] max-smallphone:w-full w-[547px] font-['Graphikthin'] text-[#E5E5E5] max-hamburger:tracking-tighter max-sm:tracking-tight tracking-[-10.35px] leading-[220px]">
            ₹<span className="font-bold font-['Graphik']">199</span>
          </h1>
          <p className="text-[48px] leading-[46.26px] max-sm:text-[28px] max-sm:leading-[32px] tracking-[-1.92px] text-[#E5E5E5] font-['Graphikthin'] text-[#E5E5E5]">
            per student.{" "}
          </p>{" "}
        </div>
        <Link href={"/contact-us"}>
          <button className="w-[165px] max-md:hidden mt-[79px] max-md:mt-[49px] max-sm:mt-[29px] h-[53px] bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] font-[19.2px]">
            Contact Us{" "}
          </button>
        </Link>
      </section>
      <section className="px-[80px] max-md:px-[40px] max-sm:px-[20px] bg-white max-sm:py-0 relative py-[173.5px] flex flex-col justify-center items-center gap-[65px]">
        <h1 className="text-center max-sm:pt-[20px] w-[728.14px] max-hamburger:w-full text-black relative z-20 text-[64px] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] font-['Graphikthin'] leading-[61.68px] font-light max-sm:tracking-[-1.28px] tracking-[-2.56px] ">
          Colleges benefitting from our workshops.{" "}
        </h1>
        <div className="flex flex-wrap max-sm:pb-[20px] items-center justify-center z-20 gap-x-[22px] gap-y-[27px]">
          <Image
            src="/college.png"
            className="relative z-20 max-sm:w-[46%]"
            width={193}
            height={82}
          />
          <Image
            src="/college1.png"
            className="relative z-20 max-sm:w-[46%]"
            width={193}
            height={82}
          />
          <Image
            src="/college2.png"
            className="relative z-20 max-sm:w-[46%]"
            width={193}
            height={82}
          />
          <Image
            src="/college3.png"
            className="relative z-20 max-sm:w-[46%]"
            width={193}
            height={82}
          />
          <Image
            src="/college4.png"
            className="relative z-20 max-sm:w-[46%]"
            width={193}
            height={82}
          />
          <Image
            src="/college5.png"
            className="relative z-20 max-sm:w-[46%]"
            width={193}
            height={82}
          />
          <Image
            src="/college6.png"
            className="relative z-20 max-sm:w-[46%]"
            width={193}
            height={82}
          />
          <Image
            src="/college7.png"
            className="relative z-20 max-sm:w-[46%]"
            width={193}
            height={82}
          />
          <Image
            src="/college8.png"
            className="relative z-20 max-sm:w-[46%]"
            width={193}
            height={82}
          />
          <Image
            src="/college9.png"
            className="relative z-20 max-sm:w-[46%]"
            width={193}
            height={82}
          />
        </div>
      </section>
      <div className="pt-[92.84px] max-sm:py-10 max-sm:px-[20px] max-md:px-[40px]  relative z-20 pb-[95px] pl-[80px] pr-[79px]">
        <div className="flex justify-between">
          <p className="w-[792.98px] font-['Graphikthin'] text-[64px] font-light leading-[61.68px] tracking-[-2.56px] text-[#E5E5E5] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%]">
            Get your students up to date on latest industry trends{" "}
          </p>
        </div>
        <div className="flex gap-[21px] mt-[49.16px] max-md:flex-col max-hamburger:flex-wrap max-hamburger:justify-center">
          <div
            className={`${style.container}  w-[33%] max-hamburger:w-[45%] max-md:w-full`}
          >
            <div
              className={`pl-[28px] max-sm:px-[20px] max-sm:py-[16px] h-[434px] max-md:h-auto pb-[41.87px] pr-[29.85px] pt-[31.57px] rounded-[8px] ${style.bordergradient}`}
            >
              <div className="bg-[#1F1F1F] w-[105px] pt-[26.26px] pb-[26.01px] pl-[26.39px] pr-[26.88px] border-[1px] rounded-[6px] border-[#FFFFFF66] ">
                {" "}
                <Image
                  src="/book-reading--book-reading-learning.svg"
                  width={51.73}
                  height={51.73}
                />
              </div>
              <h1 className="w-[340px] max-bigscreen:w-[310px] max-xl:w-[230px] max-md:w-full max-xl:mt-[30px] font-['Graphikthin'] font-normal mt-[53.05px] mb-[18.16px] text-[32px] max-xl:text-[24px] max-xl:leading-[120%] leading-[40.32px] tracking-[-0.32px]">
                Future-Focused Learning{" "}
              </h1>
              <p className="w-[355.15px] max-bigscreen:w-[310px] max-xl:w-full h-[136.91px] max-xl:h-[165px] max-lg:h-[200px] max-md:h-auto opacity-80 text-[#E0E0E0] text-base">
                Go beyond the trend. We explore the underlying forces shaping
                the job market and identify the skills that will remain relevant
                for years to come.
              </p>
            </div>
          </div>
          <div
            className={`${style.container}  w-[33%] max-hamburger:w-[45%] max-md:w-full`}
          >
            <div
              className={`pl-[28px] max-md:h-auto max-sm:px-[20px] max-sm:py-[16px] h-[434px] pb-[41.87px] pr-[29.85px] pt-[31.57px] rounded-[8px] ${style.bordergradient}`}
            >
              <div className="bg-[#1F1F1F] w-[105px] px-[26.63px] py-[26.13px] border-[1px] rounded-[6px] border-[#FFFFFF66] ">
                {" "}
                <Image
                  src="/bag-suitcase-2--product-business-briefcase.svg"
                  width={51.73}
                  height={51.73}
                />
              </div>
              <h1 className="w-[340px] max-bigscreen:w-[310px] max-xl:w-[230px] max-md:w-full max-xl:mt-[30px] font-['Graphikthin'] font-normal mt-[53.05px] mb-[18.16px] text-[32px] max-xl:text-[24px] max-xl:leading-[120%] leading-[40.32px] tracking-[-0.32px]">
                Actionable Skills Development{" "}
              </h1>
              <p className="w-[355.15px] max-bigscreen:w-[310px] max-xl:w-full h-[136.91px] max-xl:h-[165px] max-lg:h-[200px] max-md:h-auto opacity-80 text-[#E0E0E0] text-base">
                Master in-demand skills through hands-on projects, real-world
                simulations, and expert-led sessions.
              </p>
            </div>
          </div>
          <div
            className={`${style.container}  w-[33%] max-hamburger:w-[45%] max-md:w-full`}
          >
            <div
              className={`pl-[28px] max-md:h-auto max-sm:px-[20px] max-sm:py-[16px] h-[434px] pb-[41.87px] pr-[29.85px] pt-[31.57px] rounded-[8px] ${style.bordergradient}`}
            >
              <div className="bg-[#1F1F1F] w-[105px] pt-[22.3px] pb-[21.7px] pl-[22.95px] pr-[22.05px] border-[1px] rounded-[6px] border-[#FFFFFF66] ">
                {" "}
                <Image
                  src="/Calendar-3--Streamline-Ultimate.svg.svg"
                  width={60}
                  height={60}
                />
              </div>
              <h1 className="w-[340px] max-bigscreen:w-[310px] max-xl:w-[230px] max-md:w-full max-xl:mt-[30px] font-['Graphikthin'] font-normal mt-[53.05px] mb-[18.16px] text-[32px] max-xl:text-[24px] max-xl:leading-[120%] leading-[40.32px] tracking-[-0.32px]">
                Personalized Career Guidance{" "}
              </h1>
              <p className="w-[355.15px] max-bigscreen:w-[310px] max-xl:w-full h-[136.91px] max-xl:h-[165px] max-lg:h-[200px] max-md:h-auto opacity-80 text-[#E0E0E0] text-base">
                Don't just learn skills, use them. Get personalized guidance on
                crafting a strong resume, acing interviews, and building your
                professional network.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="pl-[80px] max-sm:py-10 max-sm:px-[20px] max-md:px-[40px] relative z-20 pr-[79px] pt-[92.84px] pb-[93px]">
        <h1 className="text-[64px] max-hamburger:w-full mb-[49.16px] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] leading-[61.88px] text-[##E5E5E5] opacity-90 tracking-[-2.56px] font-['Graphikthin'] w-[868px]">
          Workshops conducted by passionate industry experts
        </h1>
        <div className="flex gap-[21px] max-md:flex-col mt-[67px] max-hamburger:flex-wrap max-hamburger:justify-center">
          <div
            className={`${style.container}  w-[33%] max-hamburger:w-[45%] max-md:w-full`}
          >
            <div
              className={`pl-[28px] max-sm:px-[20px] max-sm:py-[16px] pb-[41.87px] pr-[29.85px] pt-[32px] rounded-[8px] ${style.bordergradient}`}
            >
              <div className="bg-[#1F1F1F] w-[125.17px] h-[123.97px] px-[28.53px] py-[26.03px] border-[1px] rounded-[6px] border-[#FFFFFF66] ">
                {/* {" "}
              <Image
                src=""
                width={47.94}
                height={51.93}
              /> */}
              </div>
              <h1 className="w-[340px] max-bigscreen:w-[310px] max-xl:w-[250px] max-md:w-full max-xl:mt-[30px] font-['Graphikthin'] font-normal mt-[53.05px] mb-[18.16px] text-[32px] max-xl:text-[24px] max-xl:leading-[120%] leading-[40.32px] tracking-[-0.32px]">
                Buchi Babu Muvva
              </h1>
              <p className="w-[275.15px] max-bigscreen:w-[310px] max-xl:w-full opacity-80 text-[#E0E0E0] text-base">
                Information Technology Expert, PhD. 15+ years of experience
              </p>
            </div>
          </div>
          <div
            className={`${style.container}  w-[33%] max-hamburger:w-[45%] max-md:w-full`}
          >
            <div
              className={`pl-[28px] max-sm:px-[20px] max-sm:py-[16px] pb-[41.87px] pr-[29.85px] pt-[32px] rounded-[8px] ${style.bordergradient}`}
            >
              <div className="bg-[#1F1F1F] w-[125.17px] h-[123.97px] px-[28.53px] py-[26.03px] border-[1px] rounded-[6px] border-[#FFFFFF66] ">
                {/* {" "}
              <Image
                src=""
                width={47.94}
                height={51.93}
              /> */}
              </div>
              <h1 className="w-[340px] max-bigscreen:w-[310px] max-xl:w-[250px] max-md:w-full max-xl:mt-[30px] font-['Graphikthin'] font-normal mt-[53.05px] mb-[18.16px] text-[32px] max-xl:text-[24px] max-xl:leading-[120%] leading-[40.32px] tracking-[-0.32px]">
                Sandeep Ravichandran
              </h1>
              <p className="w-[225.15px] max-bigscreen:w-[310px] max-xl:w-full opacity-80 text-[#E0E0E0] text-base">
                AI and Data Analytics Expert. 15+ years of experience
              </p>
            </div>
          </div>
          <div
            className={`${style.container}  w-[33%] max-hamburger:w-[45%] max-md:w-full`}
          >
            <div
              className={`pl-[28px] max-sm:px-[20px] max-sm:py-[16px] pb-[41.87px] pr-[29.85px] pt-[32px] rounded-[8px] ${style.bordergradient}`}
            >
              <div className="bg-[#1F1F1F] w-[125.17px] h-[123.97px] px-[28.53px] py-[26.03px] border-[1px] rounded-[6px] border-[#FFFFFF66] ">
                {/* {" "}
              <Image
                src=""
                width={47.94}
                height={51.93}
              /> */}
              </div>
              <h1 className="w-[340px] max-bigscreen:w-[310px] max-xl:w-[250px] max-md:w-full max-xl:mt-[30px] font-['Graphikthin'] font-normal mt-[53.05px] mb-[18.16px] text-[32px] max-xl:text-[24px] max-xl:leading-[120%] leading-[40.32px] tracking-[-0.32px]">
                Ajith Jagadish
              </h1>
              <p className="w-[195.15px] max-bigscreen:w-[310px] max-xl:w-full opacity-80 text-[#E0E0E0] text-base">
                Career & Lifestyle Coach. 12+ years of experience
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="py-[70.5px] flex justify-between max-md:flex-col gap-[20px] max-md:gap-[50px] relative z-20 px-[80px] max-sm:px-[20px] max-md:px-[40px]">
        <div className="w-[675.77px] max-md:w-full">
          <p className="text-[64px] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] mb-[41px] leading-[61.88px] text-[#E5E5E5] tracking-[-2.56px] font-['Graphikthin']">
            Have tailored workshops at your institute at a low price of ₹199 per
            student{" "}
          </p>
          <p className="text-[20px] leading-[19.28px] tracking-[-0.2px] text-[#E5E5E5] font-['Graphikthin']">
            Fill out the form or mail us at{" "}
            <a
              href="mailto:hire@parallel.com"
              className="border-b-[1px] border-[white]"
            >
              hello@parallel.com
            </a>
          </p>
        </div>
        <div className="w-[442px] max-md:w-full max-sm:gap-[20px] max-sm:p-[20px] flex flex-col z-20 gap-[32px] h-[605px] max-md:h-auto px-[37px] py-[34px] rounded-[14px] bg-[#FFFFFF1A]">
          <div className="flex flex-col gap-[16px]">
            <p className="text-[16px] leading-[19.2px]">Name</p>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="h-[54px] rounded-[4px] border-[1px] border-white pl-[17.51px] bg-[transparent] placeholder-[#ffffff99] text-white"
            />
          </div>
          <div className="flex flex-col gap-[16px]">
            <p className="text-[16px] leading-[19.2px]">College Name</p>
            <input
              type="text"
              onChange={(e) => setCollege_Name(e.target.value)}
              className="h-[54px] rounded-[4px] border-[1px] border-white pl-[17.51px] bg-[transparent] placeholder-[#ffffff99] text-white"
            />
          </div>
          <div className="flex flex-col gap-[16px]">
            <p className="text-[16px] leading-[19.2px]">College Email</p>
            <input
              type="email"
              onChange={(e) => setCollege_Email(e.target.value)}
              className="h-[54px] rounded-[4px] border-[1px] border-white pl-[17.51px] bg-[transparent] placeholder-[#ffffff99] text-white"
            />
          </div>
          <div className="flex flex-col gap-[16px]">
            <p className="text-[16px] leading-[19.2px]">Designation</p>
            <input
              type="text"
              onChange={(e) => setDesignation(e.target.value)}
              className="h-[54px] rounded-[4px] border-[1px] border-white pl-[17.51px] bg-[transparent] placeholder-[#ffffff99] text-white"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-full h-[53px] bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] font-[19.2px]"
          >
            Talk to our experts{" "}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
