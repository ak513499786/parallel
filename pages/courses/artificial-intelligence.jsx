import Image from "next/image";
import style from "@/styles/style.module.css";
import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Upskill from "../../components/upskill";
import Success from "../../components/success";

export default function Nocode() {
  return (
    <>
      <Navbar />
      <main className="flex justify-between max-hamburger:flex-col gap-[20px] max-md:px-[40px] max-sm:px-[20px] px-[80px] pb-[229px] max-hamburger:pb-[129px] max-md:pb-[80px] max-sm:pb-[50px] max-hamburger:pt-[100px] max-md:pt-20 max-sm:pt-[50px] pt-[124.86px]">
        <div className="w-[597.58px] max-hamburger:w-full max-hamburger:h-auto h-[374.04px] relative">
          <div className="bg-[#101AF6] blur-[128px] max-sm:right-0 w-[600px] h-[400px] right-[-30px] top-[-30px] absolute rounded-[100%] z-10"></div>
          <Image
            src="/AI.png"
            className="w-[100%] object-fit relative z-20 h-auto"
            width={377}
            height={236}
          />
        </div>
        <div className="w-[640px] max-hamburger:w-full relative z-20 max-bigscreen:w-[550px] pl-[10px] max-hamburger:pl-0:">
          <h1 className="text-[64px] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] leading-[61.68px] tracking-[-2.56px] font-['Graphikthin'] text-[#E5E5E5]">
            Artificial Intelligence (AI/ML){" "}
          </h1>
          <div className="flex mt-[24px] gap-[8px]">
            <p className="py-[4px] px-[8px] max-smallphone:px-[4px] text-[#797979] text-base font-['Graphikthin'] border-[#797979] border-[1px] rounded-[5px] max-smallphone:text-sm">
              Artificial Intelligence (AI/ML){" "}
            </p>
            <p className="py-[4px] px-[8px] max-smallphone:px-[4px] text-[#797979] text-base font-['Graphikthin'] border-[#797979] border-[1px] rounded-[5px] max-smallphone:text-sm">
              Beginner friendly{" "}
            </p>
          </div>
          <p className="mt-[36px] max-bigscreen:w-full w-[612.68px] text-base font-['Graphikthin'] text-[#E5E5E5]">
            Morbi mi amet at consequat pretium urna in elit sed. Volutpat urna
            tortor libero sed tellus massa id. Fermentum pulvinar nibh non vel
            ac adipiscing tortor adipiscing{" "}
          </p>
          <div className="w-[640px]  max-bigscreen:w-full mt-[37.14px] flex gap-[16px] flex-wrap">
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
                250 graduates last month{" "}
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
        <section className="pt-[124.98px] relative px-[80px] max-sm:px-[20px] max-md:px-[40px] pb-[119px]">
          <div className="flex justify-center">
            <h1 className="w-[936.01px] text-[#E5E5E5] text-[102.17px] max-smalllaptop:tracking-[-2.56px] max-smalllaptop:text-[84px] max-sm:text-[64px] max-smalllaptop:leading-[102%] text-center font-['Graphikthin'] leading-[104.21px] tracking-[-5.1px]">
              The only way to beat AI is to use it as a tool{" "}
            </h1>
          </div>
          <div className="absolute w-[100%] h-[1550px] top-0 left-0 overflow-x-hidden">
            <div className={style.backgroundboxworkshop}></div>
          </div>
          <div className="flex max-hamburger:flex-wrap max-hamburger:justify-center gap-[20px] mt-[71.02px]">
            <div
              className={`pl-[28px] max-hamburger:w-[45%] max-md:w-full w-[23.8%] h-[434px] bg-[#FFFFFF0D] border-[1px] pt-[17px] pl-[19.41px] rounded-[8px] ${style.bordergradient}`}
            >
              <div className="bg-[#1F1F1F] w-[124.35px] h-[124.15px] flex justify-center items-center border-[1px] rounded-[6px] border-[#FFFFFF66] ">
                {" "}
                <Image
                  src="/book-reading--book-reading-learning.svg"
                  width={51.73}
                  height={51.73}
                />
              </div>
              <p className="w-full opacity-80 text-[#E0E0E0] text-base mt-[40.35px]">
                Next Cohort
              </p>
              <h1 className="w-[276.87px] max-smalllaptop:leading-[120%] font-['Graphikthin'] font-normal mt-[13px] mb-[58.16px] text-[32px] leading-[40.32px] tracking-[-0.32px] text-[#E0E0E0] max-smalllaptop:text-[28px]">
                16th June{" "}
              </h1>
            </div>
            <div
              className={`pl-[28px] max-hamburger:w-[45%] max-md:w-full w-[23.8%] h-[434px] bg-[#FFFFFF0D] border-[1px]  pt-[17px] pl-[19.41px] rounded-[8px] ${style.bordergradient}`}
            >
              <div className="bg-[#1F1F1F] w-[124.35px] h-[124.15px] flex justify-center items-center border-[1px] rounded-[6px] border-[#FFFFFF66] ">
                {" "}
                <Image
                  src="/book-reading--book-reading-learning.svg"
                  width={51.73}
                  height={51.73}
                />
              </div>
              <p className="w-full opacity-80 text-[#E0E0E0] text-base mt-[40.35px]">
                Duration
              </p>
              <h1 className="w-[276.87px] font-['Graphikthin'] max-smalllaptop:leading-[120%] font-normal mt-[13px] mb-[58.16px] text-[32px] leading-[40.32px] tracking-[-0.32px] text-[#E0E0E0] max-smalllaptop:text-[28px]">
                30 weeks{" "}
              </h1>
            </div>
            <div
              className={`pl-[28px] max-hamburger:w-[45%] max-md:w-full w-[23.8%] h-[434px] bg-[#FFFFFF0D] border-[1px]  pt-[17px] pl-[19.41px] rounded-[8px] ${style.bordergradient}`}
            >
              <div className="bg-[#1F1F1F] w-[124.35px] h-[124.15px] flex justify-center items-center] border-[1px] rounded-[6px] border-[#FFFFFF66] ">
                {" "}
                <Image
                  src="/bag-suitcase-2--product-business-briefcase.svg"
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
              <p className="text-[#E0E0E0]">Monday to Saturday</p>
            </div>
            <div
              className={`pl-[28px] max-hamburger:w-[45%] max-md:w-full w-[23.8%] h-[434px] border-[1px] pt-[17px] pl-[19.41px] bg-[#FFFFFF0D] rounded-[8px] ${style.bordergradient}`}
            >
              <div className="bg-[#1F1F1F] w-[124.35px] h-[124.15px] flex justify-center items-center border-[1px] rounded-[6px] border-[#FFFFFF66] ">
                {" "}
                <Image
                  src="/Calendar-3--Streamline-Ultimate.svg.svg"
                  width={60}
                  height={60}
                />
              </div>
              <p className="w-full opacity-80 text-[#E0E0E0] text-base mt-[40.35px]">
                Eligibility
              </p>
              <h1 className="w-[276.87px] max-smalllaptop:text-[28px] max-smalllaptop:leading-[120%] max-biggerscreen:w-[95%] font-['Graphikthin'] font-normal mt-[13px] mb-[18.16px] text-[32px] leading-[40.32px] tracking-[-0.32px] text-[#E0E0E0]">
                12th pass, Diploma, and College Graduates{" "}
              </h1>
            </div>
          </div>
        </section>
        <section className="pt-[95px] max-md:py-0 relative px-[80px] max-md:px-[40px] max-sm:px-[20px] pb-[37px]">
          <h1 className="w-[630px] text-[#E5E5E5] max-md:w-full text-[64px] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] font-['Graphikthin'] leading-[61.68px] tracking-[-2.56px] mb-[60px]">
            What you will learn in this course.{" "}
          </h1>
          <div className="flex gap-[20px] pl-[2px] max-hamburger:flex-col">
            <div className="max-hamburger:flex flex-wrap">
              <h1 className="text-[20px] max-md:text-base max-sm:text-sm mb-[16px] leading-[25.2px] tracking-[-0.6px] text-[#E0E0E0] font-['Graphikthin'] justify-center flex rounded-[8px] border-[1px] border-[#FFFFFF66] items-center py-[21.5px] text-center w-[303px] max-smalllaptop:w-[200px] max-md:w-[100px] max-md:py-[10px]">
                Week 1 to 5
              </h1>
              <h1 className="text-[20px] max-md:text-base max-sm:text-sm mb-[16px] opacity-80 leading-[25.2px] tracking-[-0.6px] text-[#E0E0E0] font-['Graphikthin'] justify-center flex rounded-[8px] border-[1px] border-[#FFFFFF0D] items-center py-[21.5px] text-center w-[303px] max-smalllaptop:w-[200px] max-md:w-[100px] max-md:py-[10px]">
                Week 6 to 10
              </h1>
              <h1 className="text-[20px] max-md:text-base max-sm:text-sm mb-[16px] opacity-80 leading-[25.2px] tracking-[-0.6px] text-[#E0E0E0] font-['Graphikthin'] justify-center flex rounded-[8px] border-[1px] border-[#FFFFFF0D] items-center py-[21.5px] text-center w-[303px] max-smalllaptop:w-[200px] max-md:w-[100px] max-md:py-[10px]">
                Week 11 to 20{" "}
              </h1>
              <h1 className="text-[20px] max-md:text-base max-sm:text-sm mb-[16px] opacity-80 leading-[25.2px] tracking-[-0.6px] text-[#E0E0E0] font-['Graphikthin'] justify-center flex rounded-[8px] border-[1px] border-[#FFFFFF0D] items-center py-[21.5px] text-center w-[303px] max-smalllaptop:w-[200px] max-md:w-[100px] max-md:py-[10px]">
                Week 21 to 25{" "}
              </h1>
              <h1 className="text-[20px] max-md:text-base max-sm:text-sm mb-[16px] opacity-80 leading-[25.2px] tracking-[-0.6px] text-[#E0E0E0] font-['Graphikthin'] justify-center flex rounded-[8px] border-[1px] border-[#FFFFFF0D] items-center py-[21.5px] text-center w-[303px] max-smalllaptop:w-[200px] max-md:w-[100px] max-md:py-[10px]">
                Week 25 to 30{" "}
              </h1>
            </div>
            <div className="bg-[#FFFFFF0D] overflow-scroll w-[955px] max-hamburger:w-full max-biggerscreen:w-[900px] h-[663px] rounded-[8px] pl-[27px] pr-[57px] max-smalllaptop:px-[20px]">
              <div className="mt-[38.5px] py-[21px] pl-[20.38px] bg-[#FFFFFF0D] rounded-[8px] max-biggerscreen:w-full w-[870px] h-[166px] max-smalllaptop:h-auto">
                <p className="text-[16px] leading-[20.16px] opacity-70 mb-[13px]">
                  Week 01
                </p>
                <h1 className="text-[24px] leading-[30.24px] tracking-[-0.24px] text-[#E0E0E0] font-['Graphikthin']">
                  Understanding Low-Code/No-Code{" "}
                </h1>
                <p className="text-[16px] leading-[20.16px] opacity-70 w-[535.2px] max-smalllaptop:w-[90%] mt-[21px]">
                  The concept of LCNC platforms, benefits, limitations, use
                  cases across industries.
                </p>
              </div>
              <div className="mt-[16px] py-[21px] pl-[20.38px] bg-[#FFFFFF0D] rounded-[8px] w-[870px] h-[166px] max-biggerscreen:w-full max-smalllaptop:h-auto">
                <p className="text-[16px] leading-[20.16px] opacity-70 mb-[13px]">
                  Week 02
                </p>
                <h1 className="text-[24px] leading-[30.24px] tracking-[-0.24px] text-[#E0E0E0] font-['Graphikthin']">
                  Understanding Low-Code/No-Code{" "}
                </h1>
                <p className="text-[16px] leading-[20.16px] opacity-70 w-[535.2px] max-smalllaptop:w-[90%] mt-[21px]">
                  The concept of LCNC platforms, benefits, limitations, use
                  cases across industries.
                </p>
              </div>
              <div className="mt-[16px] py-[21px] pl-[20.38px] bg-[#FFFFFF0D] rounded-[8px] w-[870px] h-[166px] max-biggerscreen:w-full max-smalllaptop:h-auto">
                <p className="text-[16px] leading-[20.16px] opacity-70 mb-[13px]">
                  Week 03
                </p>
                <h1 className="text-[24px] leading-[30.24px] tracking-[-0.24px] text-[#E0E0E0] font-['Graphikthin']">
                  Understanding Low-Code/No-Code{" "}
                </h1>
                <p className="text-[16px] leading-[20.16px] opacity-70 w-[535.2px] max-smalllaptop:w-[90%] mt-[21px]">
                  The concept of LCNC platforms, benefits, limitations, use
                  cases across industries.
                </p>
              </div>
              <div className="mt-[16px] py-[21px] pl-[20.38px] bg-[#FFFFFF0D] rounded-[8px] w-[870px] h-[166px] max-biggerscreen:w-full max-smalllaptop:h-auto">
                <p className="text-[16px] leading-[20.16px] opacity-70 mb-[13px]">
                  Week 04
                </p>
                <h1 className="text-[24px] leading-[30.24px] tracking-[-0.24px] text-[#E0E0E0] font-['Graphikthin']">
                  Understanding Low-Code/No-Code{" "}
                </h1>
                <p className="text-[16px] leading-[20.16px] opacity-70 w-[535.2px] max-smalllaptop:w-[90%] mt-[21px]">
                  The concept of LCNC platforms, benefits, limitations, use
                  cases across industries.
                </p>
              </div>
              <div className="mt-[16px] py-[21px] pl-[20.38px] bg-[#FFFFFF0D] rounded-[8px] w-[870px] h-[166px] max-biggerscreen:w-full max-smalllaptop:h-auto">
                <p className="text-[16px] leading-[20.16px] opacity-70 mb-[13px]">
                  Week 05
                </p>
                <h1 className="text-[24px] leading-[30.24px] tracking-[-0.24px] text-[#E0E0E0] font-['Graphikthin']">
                  Understanding Low-Code/No-Code{" "}
                </h1>
                <p className="text-[16px] leading-[20.16px] opacity-70 w-[535.2px] max-smalllaptop:w-[90%] mt-[21px]">
                  The concept of LCNC platforms, benefits, limitations, use
                  cases across industries.
                </p>
              </div>
              <div className="mt-[16px] py-[21px] pl-[20.38px] bg-[#FFFFFF0D] rounded-[8px] w-[870px] h-[166px] max-biggerscreen:w-full max-smalllaptop:h-auto">
                <p className="text-[16px] leading-[20.16px] opacity-70 mb-[13px]">
                  Week 06
                </p>
                <h1 className="text-[24px] leading-[30.24px] tracking-[-0.24px] text-[#E0E0E0] font-['Graphikthin']">
                  Understanding Low-Code/No-Code{" "}
                </h1>
                <p className="text-[16px] leading-[20.16px] opacity-70 w-[535.2px] max-smalllaptop:w-[90%] mt-[21px]">
                  The concept of LCNC platforms, benefits, limitations, use
                  cases across industries.
                </p>
              </div>
              <div className="mt-[16px] py-[21px] pl-[20.38px] bg-[#FFFFFF0D] rounded-[8px] w-[870px] h-[166px] max-biggerscreen:w-full max-smalllaptop:h-auto">
                <p className="text-[16px] leading-[20.16px] opacity-70 mb-[13px]">
                  Week 07
                </p>
                <h1 className="text-[24px] leading-[30.24px] tracking-[-0.24px] text-[#E0E0E0] font-['Graphikthin']">
                  Understanding Low-Code/No-Code{" "}
                </h1>
                <p className="text-[16px] leading-[20.16px] opacity-70 w-[535.2px] max-smalllaptop:w-[90%] mt-[21px]">
                  The concept of LCNC platforms, benefits, limitations, use
                  cases across industries.
                </p>
              </div>
              <div className="mt-[16px] py-[21px] pl-[20.38px] bg-[#FFFFFF0D] rounded-[8px] w-[870px] h-[166px] max-biggerscreen:w-full max-smalllaptop:h-auto">
                <p className="text-[16px] leading-[20.16px] opacity-70 mb-[13px]">
                  Week 08
                </p>
                <h1 className="text-[24px] leading-[30.24px] tracking-[-0.24px] text-[#E0E0E0] font-['Graphikthin']">
                  Understanding Low-Code/No-Code{" "}
                </h1>
                <p className="text-[16px] leading-[20.16px] opacity-70 w-[535.2px] max-smalllaptop:w-[90%] mt-[21px]">
                  The concept of LCNC platforms, benefits, limitations, use
                  cases across industries.
                </p>
              </div>
              <div className="mt-[16px] py-[21px] pl-[20.38px] bg-[#FFFFFF0D] rounded-[8px] w-[870px] h-[166px] max-biggerscreen:w-full max-smalllaptop:h-auto">
                <p className="text-[16px] leading-[20.16px] opacity-70 mb-[13px]">
                  Week 09
                </p>
                <h1 className="text-[24px] leading-[30.24px] tracking-[-0.24px] text-[#E0E0E0] font-['Graphikthin']">
                  Understanding Low-Code/No-Code{" "}
                </h1>
                <p className="text-[16px] leading-[20.16px] opacity-70 w-[535.2px] max-smalllaptop:w-[90%] mt-[21px]">
                  The concept of LCNC platforms, benefits, limitations, use
                  cases across industries.
                </p>
              </div>
              <div className="mt-[16px] py-[21px] pl-[20.38px] bg-[#FFFFFF0D] rounded-[8px] w-[870px] h-[166px] max-biggerscreen:w-full max-smalllaptop:h-auto">
                <p className="text-[16px] leading-[20.16px] opacity-70 mb-[13px]">
                  Week 10
                </p>
                <h1 className="text-[24px] leading-[30.24px] tracking-[-0.24px] text-[#E0E0E0] font-['Graphikthin']">
                  Understanding Low-Code/No-Code{" "}
                </h1>
                <p className="text-[16px] leading-[20.16px] opacity-70 w-[535.2px] max-smalllaptop:w-[90%] mt-[21px]">
                  The concept of LCNC platforms, benefits, limitations, use
                  cases across industries.
                </p>
              </div>
              <div className="mt-[16px] py-[21px] pl-[20.38px] bg-[#FFFFFF0D] rounded-[8px] w-[870px] h-[166px] max-biggerscreen:w-full max-smalllaptop:h-auto">
                <p className="text-[16px] leading-[20.16px] opacity-70 mb-[13px]">
                  Week 11
                </p>
                <h1 className="text-[24px] leading-[30.24px] tracking-[-0.24px] text-[#E0E0E0] font-['Graphikthin']">
                  Understanding Low-Code/No-Code{" "}
                </h1>
                <p className="text-[16px] leading-[20.16px] opacity-70 w-[535.2px] max-smalllaptop:w-[90%] mt-[21px]">
                  The concept of LCNC platforms, benefits, limitations, use
                  cases across industries.
                </p>
              </div>
              <div className="mt-[16px] py-[21px] pl-[20.38px] bg-[#FFFFFF0D] rounded-[8px] w-[870px] h-[166px] max-biggerscreen:w-full max-smalllaptop:h-auto">
                <p className="text-[16px] leading-[20.16px] opacity-70 mb-[13px]">
                  Week 12
                </p>
                <h1 className="text-[24px] leading-[30.24px] tracking-[-0.24px] text-[#E0E0E0] font-['Graphikthin']">
                  Understanding Low-Code/No-Code{" "}
                </h1>
                <p className="text-[16px] leading-[20.16px] opacity-70 w-[535.2px] max-smalllaptop:w-[90%] mt-[21px]">
                  The concept of LCNC platforms, benefits, limitations, use
                  cases across industries.
                </p>
              </div>
              <div className="mt-[16px] py-[21px] pl-[20.38px] bg-[#FFFFFF0D] rounded-[8px] w-[870px] h-[166px] max-biggerscreen:w-full max-smalllaptop:h-auto">
                <p className="text-[16px] leading-[20.16px] opacity-70 mb-[13px]">
                  Week 13
                </p>
                <h1 className="text-[24px] leading-[30.24px] tracking-[-0.24px] text-[#E0E0E0] font-['Graphikthin']">
                  Understanding Low-Code/No-Code{" "}
                </h1>
                <p className="text-[16px] leading-[20.16px] opacity-70 w-[535.2px] max-smalllaptop:w-[90%] mt-[21px]">
                  The concept of LCNC platforms, benefits, limitations, use
                  cases across industries.
                </p>
              </div>
              <div className="mt-[16px] py-[21px] pl-[20.38px] bg-[#FFFFFF0D] rounded-[8px] w-[870px] h-[166px] max-biggerscreen:w-full max-smalllaptop:h-auto">
                <p className="text-[16px] leading-[20.16px] opacity-70 mb-[13px]">
                  Week 14
                </p>
                <h1 className="text-[24px] leading-[30.24px] tracking-[-0.24px] text-[#E0E0E0] font-['Graphikthin']">
                  Understanding Low-Code/No-Code{" "}
                </h1>
                <p className="text-[16px] leading-[20.16px] opacity-70 w-[535.2px] max-smalllaptop:w-[90%] mt-[21px]">
                  The concept of LCNC platforms, benefits, limitations, use
                  cases across industries.
                </p>
              </div>
              <div className="mt-[16px] py-[21px] pl-[20.38px] bg-[#FFFFFF0D] rounded-[8px] w-[870px] h-[166px] max-biggerscreen:w-full max-smalllaptop:h-auto">
                <p className="text-[16px] leading-[20.16px] opacity-70 mb-[13px]">
                  Week 15
                </p>
                <h1 className="text-[24px] leading-[30.24px] tracking-[-0.24px] text-[#E0E0E0] font-['Graphikthin']">
                  Understanding Low-Code/No-Code{" "}
                </h1>
                <p className="text-[16px] leading-[20.16px] opacity-70 w-[535.2px] max-smalllaptop:w-[90%] mt-[21px]">
                  The concept of LCNC platforms, benefits, limitations, use
                  cases across industries.
                </p>
              </div>
              <div className="mt-[16px] py-[21px] pl-[20.38px] bg-[#FFFFFF0D] rounded-[8px] w-[870px] h-[166px] max-biggerscreen:w-full max-smalllaptop:h-auto">
                <p className="text-[16px] leading-[20.16px] opacity-70 mb-[13px]">
                  Week 16
                </p>
                <h1 className="text-[24px] leading-[30.24px] tracking-[-0.24px] text-[#E0E0E0] font-['Graphikthin']">
                  Understanding Low-Code/No-Code{" "}
                </h1>
                <p className="text-[16px] leading-[20.16px] opacity-70 w-[535.2px] max-smalllaptop:w-[90%] mt-[21px]">
                  The concept of LCNC platforms, benefits, limitations, use
                  cases across industries.
                </p>
              </div>
              <div className="mt-[16px] py-[21px] pl-[20.38px] bg-[#FFFFFF0D] rounded-[8px] w-[870px] h-[166px] max-biggerscreen:w-full max-smalllaptop:h-auto">
                <p className="text-[16px] leading-[20.16px] opacity-70 mb-[13px]">
                  Week 17
                </p>
                <h1 className="text-[24px] leading-[30.24px] tracking-[-0.24px] text-[#E0E0E0] font-['Graphikthin']">
                  Understanding Low-Code/No-Code{" "}
                </h1>
                <p className="text-[16px] leading-[20.16px] opacity-70 w-[535.2px] max-smalllaptop:w-[90%] mt-[21px]">
                  The concept of LCNC platforms, benefits, limitations, use
                  cases across industries.
                </p>
              </div>
              <div className="mt-[16px] py-[21px] pl-[20.38px] bg-[#FFFFFF0D] rounded-[8px] w-[870px] h-[166px] max-biggerscreen:w-full max-smalllaptop:h-auto">
                <p className="text-[16px] leading-[20.16px] opacity-70 mb-[13px]">
                  Week 18
                </p>
                <h1 className="text-[24px] leading-[30.24px] tracking-[-0.24px] text-[#E0E0E0] font-['Graphikthin']">
                  Understanding Low-Code/No-Code{" "}
                </h1>
                <p className="text-[16px] leading-[20.16px] opacity-70 w-[535.2px] max-smalllaptop:w-[90%] mt-[21px]">
                  The concept of LCNC platforms, benefits, limitations, use
                  cases across industries.
                </p>
              </div>
              <div className="mt-[16px] py-[21px] pl-[20.38px] bg-[#FFFFFF0D] rounded-[8px] w-[870px] h-[166px] max-biggerscreen:w-full max-smalllaptop:h-auto">
                <p className="text-[16px] leading-[20.16px] opacity-70 mb-[13px]">
                  Week 19
                </p>
                <h1 className="text-[24px] leading-[30.24px] tracking-[-0.24px] text-[#E0E0E0] font-['Graphikthin']">
                  Understanding Low-Code/No-Code{" "}
                </h1>
                <p className="text-[16px] leading-[20.16px] opacity-70 w-[535.2px] max-smalllaptop:w-[90%] mt-[21px]">
                  The concept of LCNC platforms, benefits, limitations, use
                  cases across industries.
                </p>
              </div>
              <div className="mt-[16px] py-[21px] pl-[20.38px] bg-[#FFFFFF0D] rounded-[8px] w-[870px] h-[166px] max-biggerscreen:w-full max-smalllaptop:h-auto">
                <p className="text-[16px] leading-[20.16px] opacity-70 mb-[13px]">
                  Week 20
                </p>
                <h1 className="text-[24px] leading-[30.24px] tracking-[-0.24px] text-[#E0E0E0] font-['Graphikthin']">
                  Understanding Low-Code/No-Code{" "}
                </h1>
                <p className="text-[16px] leading-[20.16px] opacity-70 w-[535.2px] max-smalllaptop:w-[90%] mt-[21px]">
                  The concept of LCNC platforms, benefits, limitations, use
                  cases across industries.
                </p>
              </div>
              <div className="mt-[16px] py-[21px] pl-[20.38px] bg-[#FFFFFF0D] rounded-[8px] w-[870px] h-[166px] max-biggerscreen:w-full max-smalllaptop:h-auto">
                <p className="text-[16px] leading-[20.16px] opacity-70 mb-[13px]">
                  Week 21
                </p>
                <h1 className="text-[24px] leading-[30.24px] tracking-[-0.24px] text-[#E0E0E0] font-['Graphikthin']">
                  Understanding Low-Code/No-Code{" "}
                </h1>
                <p className="text-[16px] leading-[20.16px] opacity-70 w-[535.2px] max-smalllaptop:w-[90%] mt-[21px]">
                  The concept of LCNC platforms, benefits, limitations, use
                  cases across industries.
                </p>
              </div>
              <div className="mt-[16px] py-[21px] pl-[20.38px] bg-[#FFFFFF0D] rounded-[8px] w-[870px] h-[166px] max-biggerscreen:w-full max-smalllaptop:h-auto">
                <p className="text-[16px] leading-[20.16px] opacity-70 mb-[13px]">
                  Week 22
                </p>
                <h1 className="text-[24px] leading-[30.24px] tracking-[-0.24px] text-[#E0E0E0] font-['Graphikthin']">
                  Understanding Low-Code/No-Code{" "}
                </h1>
                <p className="text-[16px] leading-[20.16px] opacity-70 w-[535.2px] max-smalllaptop:w-[90%] mt-[21px]">
                  The concept of LCNC platforms, benefits, limitations, use
                  cases across industries.
                </p>
              </div>
              <div className="mt-[16px] py-[21px] pl-[20.38px] bg-[#FFFFFF0D] rounded-[8px] w-[870px] h-[166px] max-biggerscreen:w-full max-smalllaptop:h-auto">
                <p className="text-[16px] leading-[20.16px] opacity-70 mb-[13px]">
                  Week 23
                </p>
                <h1 className="text-[24px] leading-[30.24px] tracking-[-0.24px] text-[#E0E0E0] font-['Graphikthin']">
                  Understanding Low-Code/No-Code{" "}
                </h1>
                <p className="text-[16px] leading-[20.16px] opacity-70 w-[535.2px] max-smalllaptop:w-[90%] mt-[21px]">
                  The concept of LCNC platforms, benefits, limitations, use
                  cases across industries.
                </p>
              </div>
              <div className="mt-[16px] py-[21px] pl-[20.38px] bg-[#FFFFFF0D] rounded-[8px] w-[870px] h-[166px] max-biggerscreen:w-full max-smalllaptop:h-auto">
                <p className="text-[16px] leading-[20.16px] opacity-70 mb-[13px]">
                  Week 24
                </p>
                <h1 className="text-[24px] leading-[30.24px] tracking-[-0.24px] text-[#E0E0E0] font-['Graphikthin']">
                  Understanding Low-Code/No-Code{" "}
                </h1>
                <p className="text-[16px] leading-[20.16px] opacity-70 w-[535.2px] max-smalllaptop:w-[90%] mt-[21px]">
                  The concept of LCNC platforms, benefits, limitations, use
                  cases across industries.
                </p>
              </div>
              <div className="mt-[16px] py-[21px] pl-[20.38px] bg-[#FFFFFF0D] rounded-[8px] w-[870px] h-[166px] max-biggerscreen:w-full max-smalllaptop:h-auto">
                <p className="text-[16px] leading-[20.16px] opacity-70 mb-[13px]">
                  Week 25
                </p>
                <h1 className="text-[24px] leading-[30.24px] tracking-[-0.24px] text-[#E0E0E0] font-['Graphikthin']">
                  Understanding Low-Code/No-Code{" "}
                </h1>
                <p className="text-[16px] leading-[20.16px] opacity-70 w-[535.2px] max-smalllaptop:w-[90%] mt-[21px]">
                  The concept of LCNC platforms, benefits, limitations, use
                  cases across industries.
                </p>
              </div>
              <div className="mt-[16px] py-[21px] pl-[20.38px] bg-[#FFFFFF0D] rounded-[8px] w-[870px] h-[166px] max-biggerscreen:w-full max-smalllaptop:h-auto">
                <p className="text-[16px] leading-[20.16px] opacity-70 mb-[13px]">
                  Week 26
                </p>
                <h1 className="text-[24px] leading-[30.24px] tracking-[-0.24px] text-[#E0E0E0] font-['Graphikthin']">
                  Understanding Low-Code/No-Code{" "}
                </h1>
                <p className="text-[16px] leading-[20.16px] opacity-70 w-[535.2px] max-smalllaptop:w-[90%] mt-[21px]">
                  The concept of LCNC platforms, benefits, limitations, use
                  cases across industries.
                </p>
              </div>
              <div className="mt-[16px] py-[21px] pl-[20.38px] bg-[#FFFFFF0D] rounded-[8px] w-[870px] h-[166px] max-biggerscreen:w-full max-smalllaptop:h-auto">
                <p className="text-[16px] leading-[20.16px] opacity-70 mb-[13px]">
                  Week 27
                </p>
                <h1 className="text-[24px] leading-[30.24px] tracking-[-0.24px] text-[#E0E0E0] font-['Graphikthin']">
                  Understanding Low-Code/No-Code{" "}
                </h1>
                <p className="text-[16px] leading-[20.16px] opacity-70 w-[535.2px] max-smalllaptop:w-[90%] mt-[21px]">
                  The concept of LCNC platforms, benefits, limitations, use
                  cases across industries.
                </p>
              </div>
              <div className="mt-[16px] py-[21px] pl-[20.38px] bg-[#FFFFFF0D] rounded-[8px] w-[870px] h-[166px] max-biggerscreen:w-full max-smalllaptop:h-auto">
                <p className="text-[16px] leading-[20.16px] opacity-70 mb-[13px]">
                  Week 28
                </p>
                <h1 className="text-[24px] leading-[30.24px] tracking-[-0.24px] text-[#E0E0E0] font-['Graphikthin']">
                  Understanding Low-Code/No-Code{" "}
                </h1>
                <p className="text-[16px] leading-[20.16px] opacity-70 w-[535.2px] max-smalllaptop:w-[90%] mt-[21px]">
                  The concept of LCNC platforms, benefits, limitations, use
                  cases across industries.
                </p>
              </div>
              <div className="mt-[16px] py-[21px] pl-[20.38px] bg-[#FFFFFF0D] rounded-[8px] w-[870px] h-[166px] max-biggerscreen:w-full max-smalllaptop:h-auto">
                <p className="text-[16px] leading-[20.16px] opacity-70 mb-[13px]">
                  Week 29
                </p>
                <h1 className="text-[24px] leading-[30.24px] tracking-[-0.24px] text-[#E0E0E0] font-['Graphikthin']">
                  Understanding Low-Code/No-Code{" "}
                </h1>
                <p className="text-[16px] leading-[20.16px] opacity-70 w-[535.2px] max-smalllaptop:w-[90%] mt-[21px]">
                  The concept of LCNC platforms, benefits, limitations, use
                  cases across industries.
                </p>
              </div>
              <div className="mt-[16px] pb-[13px] py-[21px] pl-[20.38px] bg-[#FFFFFF0D] rounded-[8px] w-[870px] max-biggerscreen:w-full h-[166px]">
                <p className="text-[16px] leading-[20.16px] opacity-70 mb-[13px]">
                  Week 30
                </p>
                <h1 className="text-[24px] leading-[30.24px] tracking-[-0.24px] text-[#E0E0E0] font-['Graphikthin']">
                  Understanding Low-Code/No-Code{" "}
                </h1>
                <p className="text-[16px] leading-[20.16px] opacity-70 w-[535.2px] max-smalllaptop:w-[90%] mt-[21px]">
                  The concept of LCNC platforms, benefits, limitations, use
                  cases across industries.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-[124.98px] relative px-[80px] max-sm:px-[20px] max-md:px-[40px] max-md:py-20 pb-[119px]">
          <h1 className="w-[630px] max-md:w-full text-[64px] font-['Graphikthin'] text-[#E5E5E5] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] leading-[61.68px] tracking-[-2.56px]">
            What you will need to finish this course.{" "}
          </h1>
          <div className="flex max-hamburger:flex-wrap max-hamburger:justify-center gap-[20px] mt-[71.02px]">
            <div
              className={`pl-[28px] w-[23.8%] h-[363px] max-xl:h-[400px] max-hamburger:w-[45%] max-md:w-full bg-[#FFFFFF0D] border-[1px] pt-[17px] pl-[19.41px] rounded-[8px] ${style.bordergradient}`}
            >
              <div className="bg-[#1F1F1F] w-[124.35px] h-[124.15px] flex justify-center items-center border-[1px] rounded-[6px] border-[#FFFFFF66] ">
                {" "}
                <Image
                  src="/book-reading--book-reading-learning.svg"
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
            <div
              className={`pl-[28px] w-[23.8%] h-[363px] max-xl:h-[400px] max-hamburger:w-[45%] max-md:w-full bg-[#FFFFFF0D] border-[1px]  pt-[17px] pl-[19.41px] rounded-[8px] ${style.bordergradient}`}
            >
              <div className="bg-[#1F1F1F] w-[124.35px] h-[124.15px] flex justify-center items-center border-[1px] rounded-[6px] border-[#FFFFFF66] ">
                {" "}
                <Image
                  src="/book-reading--book-reading-learning.svg"
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
            <div
              className={`pl-[28px] w-[23.8%] h-[363px] max-xl:h-[400px] max-hamburger:w-[45%] max-md:w-full bg-[#FFFFFF0D] border-[1px]  pt-[17px] pl-[19.41px] rounded-[8px] ${style.bordergradient}`}
            >
              <div className="bg-[#1F1F1F] w-[124.35px] h-[124.15px] flex justify-center items-center] border-[1px] rounded-[6px] border-[#FFFFFF66] ">
                {" "}
                <Image
                  src="/bag-suitcase-2--product-business-briefcase.svg"
                  width={51.73}
                  height={51.73}
                />
              </div>
              <p className="w-full opacity-80 text-[#E0E0E0] text-base mt-[40.35px]">
                Verification
              </p>
              <h1 className="max-biggerscreen:w-full w-[263.6px] font-['Graphikthin'] font-normal mt-[13px] mb-[4px] text-[28px] leading-[35.28px] tracking-[-0.96px] text-[#E0E0E0]">
                Any ID that identifies nationality{" "}
              </h1>
              <p className="text-[#E0E0E0]">
                Any ONE of these - Aadhaar, Voter ID, Passport, PAN Card.
              </p>
            </div>
            <div
              className={`pl-[28px] w-[23.8%] h-[363px] max-xl:h-[400px] max-hamburger:w-[45%] max-md:w-full border-[1px] pt-[17px] pl-[19.41px] bg-[#FFFFFF0D] rounded-[8px] ${style.bordergradient}`}
            >
              <div className="bg-[#1F1F1F] w-[124.35px] h-[124.15px] flex justify-center items-center border-[1px] rounded-[6px] border-[#FFFFFF66] ">
                {" "}
                <Image
                  src="/Calendar-3--Streamline-Ultimate.svg.svg"
                  width={60}
                  height={60}
                />
              </div>
              <p className="w-full opacity-80 text-[#E0E0E0] text-base mt-[40.35px]">
                Communication
              </p>
              <h1 className="max-biggerscreen:w-full w-[276.87px] font-['Graphikthin'] font-normal mt-[13px] mb-[18.16px] text-[28px] leading-[35.28px] tracking-[-0.96px] text-[#E0E0E0]">
                Ability to Read, Write, Speak Basic English{" "}
              </h1>
            </div>
          </div>
        </section>
      </div>
      <Success />
      <section className="pt-[161px] max-md:py-20 max-bigscreen:px-[80px] max-md:px-[40px] max-sm:px-[20px]  relative pb-[229px] pl-[172px] pr-[80px] flex justify-between max-hamburger:flex-col max-xl:gap-[50px] items-center">
        <div className="bg-[#101AF6] max-md:w-full max-md:left-0 blur-[128px] w-[453px] z-10 h-[400px] left-[140px] top-[171px] absolute rounded-[100%] z-10"></div>
        <div
          className={`px-[18px] relative max-md:w-full border-[1px] w-[413px] z-20 border-white rounded-[10px] py-[20px] ${style.cardbg}`}
        >
          <Image
            src="/AI.png"
            className="w-[100%] h-auto"
            width={377}
            height={236}
          />
          <h1 className="mt-[20.87px] leading-[31.36px] mb-[17.13px] tracking-[-0.84px] font-['Graphikthin'] text-[#E5E5E5] text-[28px]">
            Artificial Intelligence (AI/ML){" "}
          </h1>
          <div className="flex gap-[8px]">
            <p className="max-sm:text-sm px-[8px] py-[4px] rounded-[5px] text-[#797979] text-base border-[1px] border-[#797979]">
              AI{" "}
            </p>
            <p className="max-sm:text-sm px-[8px] py-[4px] rounded-[5px] text-[#797979] text-base border-[1px] border-[#797979]">
              Beginner friendly{" "}
            </p>
          </div>
          <div className="flex justify-between mt-[49px]">
            <h1 className="text-[#ECECEC] leading-[28.8px] text-[24px] font-medium">
              Free
            </h1>
            <p className="text-[#A1A1A1] text-[16px] leading-[19.2px] mt-[10px]">
              &lt; 18 Hours
            </p>
          </div>
        </div>
        <div className="relative z-20">
          <p className="text-[20px] text-[#E5E5E5] leading-[19.28px] mb-[24px]">
            Artificial Intelligence (AI/ML){" "}
          </p>
          <h1 className="text-[64px] max-hamburger:text-[45px] max-sm:text-[32px] text-[#E5E5E5] max-hamburger:leading-[120%] max-md:w-full w-[630px] max-smalllaptop:w-[450px] max-xl:w-[590px] leading-[61.68px] tracking-[-2.56px] font-['Graphikthin'] text-[#E5E5E5]">
            Start learning now, worry about fees after you get placed.
          </h1>
          <button className="text-[16px] max-md:w-full font-semibold mt-[56px] relative bg-[#30E29D] text-black py-[8px] px-[24px] rounded-[8px] leading-[24px] py-[8px]">
            Start Learning{" "}
          </button>
        </div>
      </section>
      <Upskill />
      <Footer />
    </>
  );
}
