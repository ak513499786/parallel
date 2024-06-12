import Image from "next/image";
import style from "@/styles/style.module.css";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Upskill from "../../components/upskill";
import Success from "../../components/success";
import { useState, useRef } from "react";
import axios from "axios";

export default function Nocode() {
  const [courseSelected, setCourseSelected] = useState("");
  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      Name,
      Email,
      Phone,
      courseSelected
    };
    try {
      const response = await axios.post("/api/quickbatch", data);
      console.log("Data sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };
  return (
    <>
      <Navbar />
      <main className="flex justify-between max-smalllaptop:flex-col gap-[20px] max-md:px-[40px] max-sm:px-[20px] max-smalllaptop:px-[80px] pb-[209px] max-hamburger:pb-[129px] max-md:pb-[80px] max-sm:pb-[50px] max-hamburger:pt-[100px] max-md:pt-20 max-sm:pt-[50px] pt-[131px]">
        <Image
          src="/qball.png"
          className="w-[797px] max-xl:w-[600px] h-auto max-smalllaptop:w-full max-md:w-full z-[2] relative h-auto"
          width={797}
          height={369}
        />
        <div className="w-[630px] max-smalllaptop:static absolute max-biggerscreen:left-[660px] max-xl:left-[520px] max-lg:left-[540px] top-[226px] left-[730px] z-30 max-hamburger:w-full max-biggerscreen:w-[550px]">
          <span className="italic text-base tracking-[-0.32px] font-semibold text-[#30E29D]">
            QUICK BATCH
          </span>
          <h1 className="text-[54px] w-[570px] max-hamburger:w-full max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] leading-[55.08px] tracking-[-1.5px] font-['Graphikthin'] mt-[16px] text-[#E5E5E5]">
            Frontend, Backend, and Full Stack Development
          </h1>
          <p className="mt-[33px] max-bigscreen:w-full opacity-80 w-[417.68px] text-base font-['Graphikthin'] text-[#E5E5E5]">
            Become a master at Frontend, Backend, or Fullstack Development. Get
            placed in 6 months.
          </p>
          <div className="w-[640px] max-bigscreen:w-full mt-[49px] flex gap-[16px] flex-wrap">
            <div className="py-[6px] px-[16px] rounded-[40px] border-[1px] flex gap-[6px] items-center justify-center border-[#FFFFFF] bg-[#FFFFFF30] max-smallphone:px-[10px]">
              <div className="w-[12.51px] h-[12.51px] rounded-[100%] bg-white"></div>
              <h1 className="text-base max-smallphone:text-sm font-['Graphikthin']">
                No tech background required
              </h1>
            </div>
            <div className="py-[6px] px-[16px] rounded-[40px] border-[1px] flex gap-[6px] items-center justify-center border-[#FFFFFF] bg-[#FFFFFF30] max-smallphone:px-[10px]">
              <div className="w-[12.51px] h-[12.51px] rounded-[100%] bg-white"></div>
              <h1 className="text-base font-['Graphikthin'] max-smallphone:text-sm">
                6 months duration{" "}
              </h1>
            </div>
            <div className="py-[6px] px-[16px] rounded-[40px] border-[1px] flex gap-[6px] items-center justify-center border-[#FFFFFF] bg-[#FFFFFF30] max-smallphone:px-[10px]">
              <div className="w-[12.51px] h-[12.51px] rounded-[100%] bg-white"></div>
              <h1 className="text-base font-['Graphikthin']">Future-proof </h1>
            </div>
            <div className="py-[6px] px-[16px] rounded-[40px] border-[1px] flex gap-[6px] items-center justify-center border-[#FFFFFF] bg-[#FFFFFF30] max-smallphone:px-[10px]">
              <div className="w-[12.51px] h-[12.51px] rounded-[100%] bg-white"></div>
              <h1 className="text-base font-['Graphikthin'] max-smallphone:text-sm">
                50 graduates last month{" "}
              </h1>
            </div>
            <div className="py-[6px] px-[16px] rounded-[40px] border-[1px] flex gap-[6px] items-center justify-center border-[#FFFFFF] bg-[#FFFFFF30] max-smallphone:px-[10px]">
              <div className="w-[12.51px] h-[12.51px] rounded-[100%] bg-white"></div>
              <h1 className="text-base font-['Graphikthin'] max-smallphone:text-sm">
                Recruiters from TATA 1mg, Razorpay{" "}
              </h1>
            </div>
          </div>
        </div>
      </main>
      <div className="relative">
        <div className="w-[100%] h-[2550px] absolute overflow-hidden">
          <div className="absolute right-[-241.85px]  top-[986px] h-[1100px] blur-[208px] w-[500px] bg-[#2E2AF3]"></div>
        </div>
        <section className="pt-[124.98px] relative px-[80px] max-sm:px-[20px] max-hamburger:px-[40px] pb-[119px]">
          <div className="flex justify-center">
            <h1 className="w-[990.01px] text-[102.17px] max-smalllaptop:tracking-[-2.56px] max-smalllaptop:text-[84px] max-sm:text-[64px] max-smallphone:text-[36px] max-sm:tracking-tight max-smalllaptop:leading-[102%] text-center font-['Graphikthin'] leading-[104.21px] text-[#E5E5E5] tracking-[-5.1px]">
              Become a master in popular technologies
            </h1>
          </div>
          <div className="absolute w-[100%] h-[1550px] top-0 left-0 overflow-x-hidden">
            <div className={style.fullgrid}></div>
          </div>
          <div className="flex relative z-[2] max-hamburger:flex-wrap justify-center gap-[20px] mt-[71.02px]">
            <div
              className={`${style.container} w-[23.8%] max-hamburger:w-[45%] max-md:w-full h-[363px] max-xl:h-[420px]`}
            >
              <div
                className={`relative h-[363px] bg-[#FFFFFF0D] pt-[17px] pl-[19.41px] rounded-[8px] ${style.bordergradient}`}
              >
                <div className="w-full h-full absolute top-0 left-0 rounded-[8px] blur-[10px] z-[30] bg-[transparent]"></div>
                <div className="bg-[#1F1F1F] z-[31] w-[124.35px] h-[124.15px] flex justify-center items-center border-[1px] rounded-[6px] border-[#FFFFFF66] ">
                  {" "}
                  <Image src="/backpack.svg" width={51.73} height={51.73} />
                </div>
                <p className="w-full opacity-80 relative z-[31] text-[#E0E0E0] text-base mt-[40.35px]">
                  Next Cohort
                </p>
                <h1 className="w-[276.87px] relative z-[31] max-smalllaptop:leading-[120%] font-['Graphikthin'] font-normal mt-[13px] max-hamburger:mb-0 mb-[58.16px] text-[28px] leading-[35.28px] tracking-[-0.84px] text-[#E0E0E0] max-smalllaptop:text-[28px]">
                  20th June{" "}
                </h1>
                <p className="absolute z-[31] relative max-hamburger:relative max-hamburger:mt-[10px] max-hamburger:mb-[28.16px] bottom-[]">
                  Limited seats.{" "}
                  <span className="text-base text-[#FF6C01]">5 left</span>
                </p>
              </div>
            </div>
            {/* <div
              className={`${style.container} w-[23.8%] max-hamburger:w-[45%] max-md:w-full h-[363px] max-xl:h-[420px]`}
            >
              <div
                className={`h-[363px] bg-[#FFFFFF0D] pt-[17px] pl-[19.41px] rounded-[8px] ${style.bordergradient}`}
              >
                <div className="bg-[#1F1F1F] w-[124.35px] h-[124.15px] flex justify-center items-center border-[1px] rounded-[6px] border-[#FFFFFF66] ">
                  {" "}
                  <Image
                    src="/Calendar-3--Streamline-Ultimate.svg.svg"
                    width={51.73}
                    height={51.73}
                  />
                </div>
                <p className="w-full opacity-80 text-[#E0E0E0] text-base mt-[40.35px]">
                  Duration
                </p>
                <h1 className="w-[276.87px] font-['Graphikthin'] max-smalllaptop:leading-[120%] font-normal mt-[13px] mb-[58.16px] text-[28px] leading-[35.28px] tracking-[-0.84px] text-[#E0E0E0] max-smalllaptop:text-[28px]">
                  24 weeks{" "}
                </h1>
              </div>
            </div> */}
            <div
              className={`${style.container} w-[23.8%] max-hamburger:w-[45%] max-md:w-full h-[363px] max-xl:h-[420px]`}
            >
              <div
                className={`h-[363px] bg-[#FFFFFF0D] pt-[17px] pl-[19.41px] rounded-[8px] ${style.bordergradient}`}
              >
                <div className="bg-[#1F1F1F] w-[124.35px] h-[124.15px] flex justify-center items-center] border-[1px] rounded-[6px] border-[#FFFFFF66] ">
                  {" "}
                  <Image
                    src="/Circle-Clock--Streamline-Core.svg.svg"
                    width={51.73}
                    height={51.73}
                  />
                </div>
                <p className="w-full opacity-80 text-[#E0E0E0] text-base mt-[40.35px]">
                  Timings
                </p>
                <h1 className="w-[276.87px] font-['Graphikthin'] font-normal mt-[13px] mb-[4px] text-[32px] max-smalllaptop:leading-[120%] max-smalllaptop:text-[28px] leading-[40.32px] tracking-[-0.32px] text-[#E0E0E0]">
                  10am to 7pm{" "}
                </h1>
                <p className="text-[#E0E0E0] max-sm:mb-[10px]">
                  Monday to Saturday
                </p>
              </div>
            </div>
            <div
              className={`${style.container} w-[23.8%] max-hamburger:w-[45%] max-md:w-full h-[363px] max-xl:h-[420px]`}
            >
              <div
                className={`h-[363px] pt-[17px] pl-[19.41px] bg-[#FFFFFF0D] rounded-[8px] ${style.bordergradient}`}
              >
                <div className="bg-[#1F1F1F] w-[124.35px] h-[124.15px] flex justify-center items-center border-[1px] rounded-[6px] border-[#FFFFFF66] ">
                  {" "}
                  <Image src="/profile.svg" width={60} height={60} />
                </div>
                <p className="w-full opacity-80 text-[#E0E0E0] text-base mt-[40.35px]">
                  Eligibility
                </p>
                <h1 className="w-[270.87px] max-smalllaptop:text-[28px] max-smalllaptop:leading-[120%] max-biggerscreen:w-[95%] font-['Graphikthin'] font-normal mt-[13px] mb-[18.16px] text-[28px] leading-[35.28px] tracking-[-0.84px] text-[#E0E0E0]">
                  12th pass, Diploma, and College Graduates{" "}
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-[124.98px] z-10 relative px-[80px] max-sm:px-[20px] max-hamburger:px-[40px] max-md:py-20 pb-[119px]">
          <h1 className="w-[630px] text-[#E5E5E5] max-md:w-full text-[64px] font-['Graphikthin'] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] leading-[61.68px] tracking-[-2.56px]">
            What you will need to finish this course.{" "}
          </h1>
          <div className="flex max-hamburger:flex-wrap z-20 relative max-hamburger:justify-center gap-[20px] mt-[71.02px]">
            <div
              className={`${style.container} w-[23.8%] max-hamburger:w-[45%] max-md:w-full h-[363px] max-xl:h-[420px]`}
            >
              <div
                className={`pl-[28px] h-[363px] max-xl:h-[400px] bg-[#FFFFFF0D] pt-[17px] pl-[19.41px] rounded-[8px] ${style.bordergradient}`}
              >
                <div className="bg-[#1F1F1F] w-[124.35px] h-[124.15px] flex justify-center items-center border-[1px] rounded-[6px] border-[#FFFFFF66] ">
                  {" "}
                  <Image
                    src="/Shield-Check--Streamline-Core.svg.svg"
                    width={51.73}
                    height={51.73}
                  />
                </div>
                <p className="w-full opacity-80 text-[#E0E0E0] text-base mt-[40.35px]">
                  Certificate{" "}
                </p>
                <h1 className="max-biggerscreen:w-full w-[276.87px] font-['Graphikthin'] font-normal mt-[13px] mb-[58.16px] text-[28px] leading-[35.28px] tracking-[-0.96px] text-[#E0E0E0]">
                  12th pass, Diploma, and College Graduates{" "}
                </h1>
              </div>
            </div>
            <div
              className={`${style.container} w-[23.8%] max-hamburger:w-[45%] max-md:w-full h-[363px] max-xl:h-[420px]`}
            >
              <div
                className={`pl-[28px] h-[363px] max-xl:h-[400px] bg-[#FFFFFF0D] pt-[17px] pl-[19.41px] rounded-[8px] ${style.bordergradient}`}
              >
                <div className="bg-[#1F1F1F] w-[124.35px] h-[124.15px] flex justify-center items-center border-[1px] rounded-[6px] border-[#FFFFFF66]">
                  {" "}
                  <Image
                    src="/Web--Streamline-Core.svg.svg"
                    width={51.73}
                    height={51.73}
                  />
                </div>
                <p className="w-full opacity-80 text-[#E0E0E0] text-base mt-[40.35px]">
                  Workstation
                </p>
                <h1 className="max-biggerscreen:w-full w-[254.38px] font-['Graphikthin'] font-normal mt-[13px] mb-[58.16px] text-[28px] leading-[35.28px] tracking-[-0.96px] text-[#E0E0E0]">
                  A laptop/desktop with internet connectivity.{" "}
                </h1>
              </div>
            </div>
            <div
              className={`${style.container} w-[23.8%] max-hamburger:w-[45%] max-md:w-full h-[363px] max-xl:h-[420px]`}
            >
              <div
                className={`pl-[28px] h-[363px] max-xl:h-[400px] bg-[#FFFFFF0D] pt-[17px] pl-[19.41px] rounded-[8px] ${style.bordergradient}`}
              >
                <div className="bg-[#1F1F1F] w-[124.35px] h-[124.15px] flex justify-center items-center] border-[1px] rounded-[6px] border-[#FFFFFF66] ">
                  {" "}
                  <Image src="/profile.svg" width={51.73} height={51.73} />
                </div>
                <p className="w-full opacity-80 text-[#E0E0E0] text-base mt-[40.35px]">
                  Verification
                </p>
                <h1 className="max-biggerscreen:w-full w-[263.6px] font-['Graphikthin'] font-normal mt-[13px] mb-[4px] text-[28px] leading-[35.28px] tracking-[-0.96px] text-[#E0E0E0]">
                  Any ID that identifies nationality{" "}
                </h1>
                <p className="text-[#919191] max-sm:mb-[10px]">
                  Any ONE of these - Aadhaar, Voter ID, Passport, PAN Card.
                </p>
              </div>
            </div>
            <div
              className={`${style.container} w-[23.8%] max-hamburger:w-[45%] max-md:w-full h-[363px] max-xl:h-[420px]`}
            >
              <div
                className={`pl-[28px] h-[363px] max-xl:h-[400px] pt-[17px] pl-[19.41px] bg-[#FFFFFF0D] rounded-[8px] ${style.bordergradient}`}
              >
                <div className="bg-[#1F1F1F] w-[124.35px] h-[124.15px] flex justify-center items-center border-[1px] rounded-[6px] border-[#FFFFFF66] ">
                  {" "}
                  <p className="text-[48px] leading-[60px] tracking-[-1.44px] font-['Graphikthinner'] font-semibold text-[#E0E0E0]">
                    Aa
                  </p>
                </div>
                <p className="w-full opacity-80 text-[#E0E0E0] text-base mt-[40.35px]">
                  Communication
                </p>
                <h1 className="max-biggerscreen:w-full w-[276.87px] font-['Graphikthin'] font-normal mt-[13px] mb-[18.16px] text-[28px] leading-[35.28px] tracking-[-0.96px] text-[#E0E0E0]">
                  Ability to Read, Write, Speak Basic English{" "}
                </h1>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="relative z-20 py-[80px]">
        <p className="text-[20px] pl-20 max-md:px-[40px] max-sm:px-[20px] leading-[19.28px] text-[#E5E5E5] opacity-80 font-['Graphikthin'] font-light mb-[20px]">
          Success stories
        </p>
        <h1 className="w-[813.91px] max-hamburger:w-full ml-20 max-hamburger:px-20 max-hamburger:ml-0 max-md:px-[40px] max-sm:px-[20px] text-[64px] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] max-hamburger:tracking-normal leading-[61.68px] font-['Graphikthin'] font-light text-[#E5E5E5] mb-[58px] max-sm:mb-[50px] tracking-[-2.56px]">
          People benefitting from our new age method of learning.{" "}
        </h1>
        <Success />
      </section>{" "}
      <section className="pt-[84px] pb-[123px] max-md:py-20 max-sm:py-10 px-[80px] max-md:px-[40px] max-sm:px-[20px]">
        <h1 className="w-full text-center mb-[54px] max-md:mb-[32px] max-sm:mb-[24px] text-[#E5E5E5] text-[64px] font-['Graphikthin'] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] text-[64px] leading-[61.68px] tracking-[-2.56px]">
          Courses we offer
        </h1>
        <div className="flex justify-center max-smalllaptop:flex-wrap max-md:flex-col max-md:gap-[50px] gap-[21px]">
          <div className="w-[413px] max-biggerscreen:w-[33%] max-md:w-full max-smalllaptop:w-[48.3%]">
            <div
              className={`pl-[17.7px] pr-[18.3px] border-[1px] border-[#FF11114D] rounded-[12px] pb-[21px] pt-[20px]`}
            >
              <Image
                src="/frontend.png"
                className="w-[100%] relative z-20 h-auto"
                width={377}
                height={236}
              />
              <h1 className="mt-[27px] leading-[40.32px] mb-[19px] tracking-[-0.84px] font-['Graphikthin'] text-[#E5E5E5] text-[36px] max-sm:text-[24px] max-sm:leading-[120%]">
                Frontend
                <br className="max-bigscreen:block hidden max-smalllaptop:hidden" />{" "}
                Mastery
              </h1>
              <div className="flex justify-between max-smalllaptop:flex-col max-smalllaptop:gap-[12px]">
                <div>
                  <div className="flex gap-[12px]">
                    <p className="text-[#FFFFFF] leading-[28.8px] font-['General Sans'] text-[24px]">
                      ₹9,999
                    </p>
                    <p className="text-[#FF4747] text-sm">-33%</p>
                  </div>
                  <p className="line-through mt-[3px] text-[16px] font-['Graphikthin'] leading-[19.2px] opacity-60 text-[#ECECEC]">
                    ₹15,000
                  </p>
                </div>
                <p className="text-[24px] leading-[28.8px]">12 Weeks</p>
              </div>
              <a href='#form-section' className="relative z-30">
                <button className="w-[100%] mt-[16px] h-[53px] bg-[transparent] rounded-[8px] text-[#30E29D] font-semibold border-[1px] border-[#30E29D] text-[16px] font-[19.2px]">
                  Contact us
                </button>
              </a>
            </div>
            <p className="mt-[29px] mb-[20px] text-[16px] leading-[19.2px] text-[#FFFFFF99]">
              This course includes
            </p>
            <div className="flex flex-col gap-[12px]">
              <div className="flex gap-[4px]">
                <Image src="/greencheck.svg" width={24} height={24} />
                <p className="text-[20px] leading-[24px] text-[#FFFFFFCC]">
                  Introduction to Web Development
                </p>
              </div>
              <div className="flex gap-[4px]">
                <Image src="/greencheck.svg" width={24} height={24} />
                <p className="text-[20px] leading-[24px] text-[#FFFFFFCC]">
                  CSS, Tailwind CSS and Bootstrap
                </p>
              </div>
              <div className="flex gap-[4px]">
                <Image src="/greencheck.svg" width={24} height={24} />
                <p className="text-[20px] leading-[24px] text-[#FFFFFFCC]">
                  Fundamentals of Coding
                </p>
              </div>
              <div className="flex gap-[4px]">
                <Image src="/greencheck.svg" width={24} height={24} />
                <p className="text-[20px] leading-[24px] text-[#FFFFFFCC]">
                  Introduction to React.js
                </p>
              </div>
              <div className="flex gap-[4px]">
                <Image src="/greencheck.svg" width={24} height={24} />
                <p className="text-[20px] leading-[24px] text-[#FFFFFFCC]">
                  Advanced React.js
                </p>
              </div>
              <div className="flex gap-[4px]">
                <Image src="/greencheck.svg" width={24} height={24} />
                <p className="text-[20px] leading-[24px] text-[#FFFFFFCC]">
                  Material-UI
                </p>
              </div>
              <div className="flex gap-[4px]">
                <Image src="/greencheck.svg" width={24} height={24} />
                <p className="text-[20px] leading-[24px] text-[#FFFFFFCC]">
                  GSAP
                </p>
              </div>
              <div className="flex gap-[4px]">
                <Image src="/greencheck.svg" width={24} height={24} />
                <p className="text-[20px] leading-[24px] text-[#FFFFFFCC]">
                  Swiper.js
                </p>
              </div>
              <div className="flex gap-[4px]">
                <Image src="/greencheck.svg" width={24} height={24} />
                <p className="text-[20px] leading-[24px] text-[#FFFFFFCC]">
                  Advanced CSS Framework Integration
                </p>
              </div>
              <div className="flex gap-[4px]">
                <Image src="/greencheck.svg" width={24} height={24} />
                <p className="text-[20px] leading-[24px] text-[#FFFFFFCC]">
                  Introduction to Redux
                </p>
              </div>
              <div className="flex gap-[4px]">
                <Image src="/greencheck.svg" width={24} height={24} />
                <p className="text-[20px] leading-[24px] text-[#FFFFFFCC]">
                  React with TypeScript
                </p>
              </div>
              <div className="flex gap-[4px]">
                <Image src="/greencheck.svg" width={24} height={24} />
                <p className="text-[20px] leading-[24px] text-[#FFFFFFCC]">
                  Introduction to Next.js
                </p>
              </div>
              <div className="flex gap-[4px]">
                <Image src="/greencheck.svg" width={24} height={24} />
                <p className="text-[20px] leading-[24px] text-[#FFFFFFCC]">
                  Advanced Next.js
                </p>
              </div>
              <div className="flex gap-[4px]">
                <Image src="/greencheck.svg" width={24} height={24} />
                <p className="text-[20px] leading-[24px] text-[#FFFFFFCC]">
                  3 Unique Projects
                </p>
              </div>
              <div className="flex gap-[4px]">
                <Image src="/greencheck.svg" width={24} height={24} />
                <p className="text-[20px] leading-[24px] text-[#FFFFFFCC]">
                  Interview Preparation
                </p>
              </div>
              <div className="flex gap-[4px]">
                <Image src="/greencheck.svg" width={24} height={24} />
                <p className="text-[20px] leading-[24px] text-[#FFFFFFCC]">
                  Resume optimization and LinkedIn profile building
                </p>
              </div>
            </div>
          </div>
          <div className="w-[413px] max-biggerscreen:w-[33%] max-md:w-full max-smalllaptop:w-[48.3%]">
            <div
              className={`pl-[17.7px] pr-[18.3px] border-[1px] border-[#555CFF4D] rounded-[12px] pb-[21px] pt-[20px]`}
            >
              <Image
                src="/backend.png"
                className="w-[100%] relative z-20 h-auto"
                width={377}
                height={236}
              />
              <h1 className="mt-[27px] leading-[40.32px] mb-[19px] tracking-[-0.84px] font-['Graphikthin'] text-[#E5E5E5] text-[36px] max-sm:text-[24px] max-sm:leading-[120%]">
                Backend
                <br className="max-bigscreen:block hidden max-smalllaptop:hidden" />{" "}
                Mastery
              </h1>
              <div className="flex justify-between max-smalllaptop:flex-col max-smalllaptop:gap-[12px]">
                <div>
                  <div className="flex gap-[12px]">
                    <p className="text-[#FFFFFF] leading-[28.8px] font-['General Sans'] text-[24px]">
                      ₹9,999
                    </p>
                    <p className="text-[#FF4747] text-sm">-33%</p>
                  </div>
                  <p className="line-through mt-[3px] text-[16px] font-['Graphikthin'] leading-[19.2px] opacity-60 text-[#ECECEC]">
                    ₹15,000
                  </p>
                </div>
                <p className="text-[24px] leading-[28.8px]">12 Weeks</p>
              </div>
              <a href='#form-section' className="relative z-30">
                <button className="w-[100%] mt-[16px] h-[53px] bg-[transparent] rounded-[8px] text-[#30E29D] font-semibold border-[1px] border-[#30E29D] text-[16px] font-[19.2px]">
                  Contact us
                </button>
              </a>
            </div>
            <p className="mt-[29px] mb-[20px] text-[16px] leading-[19.2px] text-[#FFFFFF99]">
              This course includes
            </p>
            <div className="flex flex-col gap-[12px]">
              <div className="flex gap-[4px]">
                <Image src="/greencheck.svg" width={24} height={24} />
                <p className="text-[20px] leading-[24px] text-[#FFFFFFCC]">
                  Fundamentals of Coding
                </p>
              </div>
              <div className="flex gap-[4px]">
                <Image src="/greencheck.svg" width={24} height={24} />
                <p className="text-[20px] leading-[24px] text-[#FFFFFFCC]">
                  Backend Dev with Node and Express
                </p>
              </div>
              <div className="flex gap-[4px]">
                <Image src="/greencheck.svg" width={24} height={24} />
                <p className="text-[20px] leading-[24px] text-[#FFFFFFCC]">
                  Starting with Express Framework
                </p>
              </div>
              <div className="flex gap-[4px]">
                <Image src="/greencheck.svg" width={24} height={24} />
                <p className="text-[20px] leading-[24px] text-[#FFFFFFCC]">
                  SQL Databases and Full-Stack Applications
                </p>
              </div>
              <div className="flex gap-[4px]">
                <Image src="/greencheck.svg" width={24} height={24} />
                <p className="text-[20px] leading-[24px] text-[#FFFFFFCC]">
                  MongoDB with Node.js and TypeScript
                </p>
              </div>
              <div className="flex gap-[4px]">
                <Image src="/greencheck.svg" width={24} height={24} />
                <p className="text-[20px] leading-[24px] text-[#FFFFFFCC]">
                  Security and Best Practices
                </p>
              </div>
              <div className="flex gap-[4px]">
                <Image src="/greencheck.svg" width={24} height={24} />
                <p className="text-[20px] leading-[24px] text-[#FFFFFFCC]">
                  Performance Optimization
                </p>
              </div>
              <div className="flex gap-[4px]">
                <Image src="/greencheck.svg" width={24} height={24} />
                <p className="text-[20px] leading-[24px] text-[#FFFFFFCC]">
                  Real-time Applications
                </p>
              </div>
              <div className="flex gap-[4px]">
                <Image src="/greencheck.svg" width={24} height={24} />
                <p className="text-[20px] leading-[24px] text-[#FFFFFFCC]">
                  GraphQL
                </p>
              </div>
              <div className="flex gap-[4px]">
                <Image src="/greencheck.svg" width={24} height={24} />
                <p className="text-[20px] leading-[24px] text-[#FFFFFFCC]">
                  Project Development using RestfulAPI
                </p>
              </div>
              <div className="flex gap-[4px]">
                <Image src="/greencheck.svg" width={24} height={24} />
                <p className="text-[20px] leading-[24px] text-[#FFFFFFCC]">
                  Deep Dives and Enhancements
                </p>
              </div>
              <div className="flex gap-[4px]">
                <Image src="/greencheck.svg" width={24} height={24} />
                <p className="text-[20px] leading-[24px] text-[#FFFFFFCC]">
                  3 Unique Projects
                </p>
              </div>
              <div className="flex gap-[4px]">
                <Image src="/greencheck.svg" width={24} height={24} />
                <p className="text-[20px] leading-[24px] text-[#FFFFFFCC]">
                  Interview Preparation
                </p>
              </div>
              <div className="flex gap-[4px]">
                <Image src="/greencheck.svg" width={24} height={24} />
                <p className="text-[20px] leading-[24px] text-[#FFFFFFCC]">
                  Resume optimization and LinkedIn profile building
                </p>
              </div>
            </div>
          </div>
          <div className="w-[413px] max-biggerscreen:w-[33%] max-md:w-full max-smalllaptop:w-[48.3%]">
            <div
              className={`pl-[17.7px] pr-[18.3px] border-[1px] border-[#26F6724D] rounded-[12px] pb-[21px] pt-[20px]`}
            >
              <Image
                src="/fullstack.png"
                className="w-[100%] relative z-20 h-auto"
                width={377}
                height={236}
              />
              <h1 className="mt-[27px] leading-[40.32px] mb-[19px] tracking-[-0.84px] font-['Graphikthin'] text-[#E5E5E5] text-[36px] max-sm:text-[24px] max-sm:leading-[120%]">
                Fullstack Development
              </h1>
              <div className="flex justify-between max-smalllaptop:flex-col max-smalllaptop:gap-[12px]">
                <div>
                  <div className="flex gap-[12px]">
                    <p className="text-[#FFFFFF] leading-[28.8px] font-['General Sans'] text-[24px]">
                      ₹29,999
                    </p>
                    <p className="text-[#FF4747] text-sm">-50%</p>
                  </div>
                  <p className="line-through mt-[3px] text-[16px] font-['Graphikthin'] leading-[19.2px] opacity-60 text-[#ECECEC]">
                    ₹60,000
                  </p>
                </div>
                <p className="text-[24px] leading-[28.8px]">24 Weeks</p>
              </div>
              <a href='#form-section' className="relative z-30">
                <button className="w-[100%] mt-[16px] h-[53px] bg-[transparent] rounded-[8px] text-[#30E29D] font-semibold border-[1px] border-[#30E29D] text-[16px] font-[19.2px]">
                  Contact us
                </button>
              </a>
            </div>
            <p className="mt-[29px] mb-[20px] text-[16px] leading-[19.2px] text-[#FFFFFF99]">
              This course includes
            </p>
            <div className="flex flex-col gap-[12px]">
              <div className="flex gap-[4px]">
                <Image src="/greencheck.svg" width={24} height={24} />
                <p className="text-[20px] leading-[24px] text-[#FFFFFFCC]">
                  Everything covered in Frontend Mastery Course
                </p>
              </div>
              <div className="flex gap-[4px]">
                <Image src="/greencheck.svg" width={24} height={24} />
                <p className="text-[20px] leading-[24px] text-[#FFFFFFCC]">
                  Everything covered in Backend Mastery Course
                </p>
              </div>
              <div className="flex gap-[4px]">
                <Image src="/greencheck.svg" width={24} height={24} />
                <p className="text-[20px] leading-[24px] text-[#FFFFFFCC]">
                  Introduction to OOP in JavaScript
                </p>
              </div>
              <div className="flex gap-[4px]">
                <Image src="/greencheck.svg" width={24} height={24} />
                <p className="text-[20px] leading-[24px] text-[#FFFFFFCC]">
                  Advanced OOP Concepts
                </p>
              </div>
              <div className="flex gap-[4px]">
                <Image src="/greencheck.svg" width={24} height={24} />
                <p className="text-[20px] leading-[24px] text-[#FFFFFFCC]">
                  Introduction to DSA
                </p>
              </div>
              <div className="flex gap-[4px]">
                <Image src="/greencheck.svg" width={24} height={24} />
                <p className="text-[20px] leading-[24px] text-[#FFFFFFCC]">
                  Intermediate Data Structures and Algorithms
                </p>
              </div>
              <div className="flex gap-[4px]">
                <Image src="/greencheck.svg" width={24} height={24} />
                <p className="text-[20px] leading-[24px] text-[#FFFFFFCC]">
                  Problem Solving and Practice
                </p>
              </div>
              <div className="flex gap-[4px]">
                <Image src="/greencheck.svg" width={24} height={24} />
                <p className="text-[20px] leading-[24px] text-[#FFFFFFCC]">
                  3 Unique Projects
                </p>
              </div>
              <div className="flex gap-[4px]">
                <Image src="/greencheck.svg" width={24} height={24} />
                <p className="text-[20px] leading-[24px] text-[#FFFFFFCC]">
                  Interview Preparation
                </p>
              </div>
              <div className="flex gap-[4px]">
                <Image src="/greencheck.svg" width={24} height={24} />
                <p className="text-[20px] leading-[24px] text-[#FFFFFFCC]">
                  Resume optimization and LinkedIn profile building
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="form-section"
        className={`pt-[97.5px] pb-[88px] flex justify-center gap-[131px] relative z-20 px-[80px] max-md:flex-col max-md:gap-[50px] max-sm:px-[20px] max-md:px-[40px] ${style.fsbg}`}
      >
        <div className="w-[507.08px] max-md:w-full">
          <span className="italic text-base tracking-[-0.32px] font-semibold text-[#30E29D]">
            QUICK BATCH{" "}
          </span>
          <p className="text-[54px] max-sm:text-[32px] leading-[100%] mb-[40px] mt-[12px] text-[#E5E5E5] tracking-[-1.62px] font-['Graphikthin']">
            Get trained placed within 6 months
          </p>
          <p className="text-[#FFFFFF99] leading-[28px] text-[20px]">
            Start learning new age, and future-proof technologies at an
            unbeatable price.
          </p>
        </div>
        <div className="w-[442px] max-md:w-full max-sm:gap-20px max-sm:p-[20px] z-20 h-[684px] px-[37px] py-[28px] max-md:h-auto rounded-[14px] bg-[#FFFFFF1A]">
          <p className="mb-[20px] text-[20px] leading-[25.4px]">
            Fill out this form to enroll{" "}
          </p>
          <div className="flex flex-col z-20 gap-[32px]">
            <div className="flex flex-col gap-[16px]">
              <p className="text-[16px] leading-[19.2px]">Name</p>
              <input
                type="text"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
                className="h-[54px] rounded-[4px] border-[1px] border-white pl-[17.51px] bg-[transparent] placeholder-[#ffffff99] text-white"
              />
            </div>
            <div className="flex flex-col gap-[16px]">
              <p className="text-[16px] leading-[19.2px]">Email</p>
              <input
                type="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                className="h-[54px] rounded-[4px] border-[1px] border-white pl-[17.51px] bg-[transparent] placeholder-[#ffffff99] text-white"
              />
            </div>
            <div className="flex flex-col gap-[16px]">
              <p className="text-[16px] leading-[19.2px]">Phone Number</p>
              <input
                type="text"
                placeholder="Enter your phone number"
                onChange={(e) => setPhone(e.target.value)}
                className="h-[54px] rounded-[4px] border-[1px] border-white pl-[17.51px] bg-[transparent] placeholder-[#ffffff99] text-white"
              />
            </div>
            <div className="flex flex-col gap-[16px]">
              <p className="text-[16px] leading-[19.2px]">Course</p>
              <div className="flex gap-[16px] flex-wrap">
                <p
                  onClick={() => setCourseSelected("Frontend Mastery")}
                  className={
                    courseSelected === "Frontend Mastery"
                      ? "px-[12px] max-sm:px-[6px] py-[10px] rounded-[7px] text-[#30E29D] text-[17.95px] max-sm:text-base border-[1px] border-[#30E29D] leading-[21.54px] max-smallphone:text-sm cursor-pointer"
                      : "px-[12px] max-sm:px-[6px] py-[10px] rounded-[7px] text-[#FFFFFF99] text-[17.95px] max-sm:text-base border-[1px] border-[#FFFFFF99] leading-[21.54px] max-smallphone:text-sm cursor-pointer"
                  }
                >
                  Frontend Mastery
                </p>
                <p
                  onClick={() => setCourseSelected("Backend Mastery")}
                  className={
                    courseSelected === "Backend Mastery"
                      ? "px-[12px] max-sm:px-[6px] py-[10px] rounded-[7px] text-[#30E29D] text-[17.95px] max-sm:text-base border-[1px] border-[#30E29D] leading-[21.54px] max-smallphone:text-sm cursor-pointer"
                      : "px-[12px] max-sm:px-[6px] py-[10px] rounded-[7px] text-[#FFFFFF99] text-[17.95px] max-sm:text-base border-[1px] border-[#FFFFFF99] leading-[21.54px] max-smallphone:text-sm cursor-pointer"
                  }
                >
                  Backend Mastery
                </p>
                <p
                  onClick={() => setCourseSelected("Fullstack Development")}
                  className={
                    courseSelected === "Fullstack Development"
                      ? "px-[12px] max-sm:px-[6px] py-[10px] rounded-[7px] text-[#30E29D] text-[17.95px] max-sm:text-base border-[1px] border-[#30E29D] leading-[21.54px] max-smallphone:text-sm cursor-pointer"
                      : "px-[12px] max-sm:px-[6px] py-[10px] rounded-[7px] text-[#FFFFFF99] text-[17.95px] max-sm:text-base border-[1px] border-[#FFFFFF99] leading-[21.54px] max-smallphone:text-sm cursor-pointer"
                  }
                >
                  Fullstack Development
                </p>
              </div>
            </div>
            <button onClick={handleSubmit} className="w-full h-[53px] bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] font-[19.2px]">
              Enroll now
            </button>
          </div>
        </div>
      </div>
      <Upskill />
      <Footer />
    </>
  );
}
