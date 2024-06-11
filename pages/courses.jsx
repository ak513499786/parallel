import Image from "next/image";
import style from "@/styles/style.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Upskill from "../components/upskill";
import Success from "../components/success";
import Link from "next/link";

export default function Courses() {
  return (
    <>
      <Navbar />
      <div className="absolute w-[100vw] h-[822px] top-0 left-0 overflow-hidden">
        <div className={style.fullgrid}></div>
      </div>
      <main className="pt-[190.35px] pb-[1.65px] max-sm:pb-[40px] max-md:pt-[100px] max-sm:pt-[80px] flex justify-center">
        <p className="w-[1016.16px] max-lg:w-full max-lg:px-[80px] max-md:px-[40px] max-sm:px-[20px] max-smalllaptop:tracking-[-2.56px] max-smalllaptop:text-[84px] max-sm:text-[64px] max-smallphone:text-[36px] max-sm:tracking-tight max-smalllaptop:leading-[102%] font-thin leading-[106.66px] tracking-[-5.2px] text-[104.57px] font-['Graphikthin'] text-[#E5E5E5] text-center">
          A plethora of topics to upskill on
        </p>
      </main>
      <div className="px-[80px] max-lg:px-[80px] max-md:px-[40px] max-sm:px-[20px] py-[71px] justify-center mt-[93px] flex flex-wrap gap-x-[94px] gap-y-[84px] max-sm:gap-[20px]">
        <div
          className={`px-[18px] relative card w-[413px] max-biggerscreen:w-[33%] max-md:w-full max-smalllaptop:w-[48.3%] border-white rounded-[10px] py-[20px] ${style.aicardborder}`}
        >
          <div className="bg-black rounded-[9px]">
            <div
              className={`${style.fscardbg} px-[18px] relative rounded-[10px] py-[20px]`}
            >
              <Image
                src="/fullstack.png"
                className="w-[100%] relative z-20 h-auto"
                width={377}
                height={236}
              />
              <h1 className="mt-[20.87px] leading-[31.36px] mb-[17.13px] tracking-[-0.84px] font-['Graphikthin'] text-[#E5E5E5] text-[28px]">
                Full Stack Development{" "}
              </h1>
              <div className="flex gap-[8px]">
                <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base max-sm:text-sm border-[1px] border-[#797979]">
                  Software Development{" "}
                </p>
                <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base max-sm:text-sm border-[1px] border-[#797979]">
                  Beginner friendly{" "}
                </p>
              </div>
              <div className="flex mt-[27.57px] gap-[12px]">
                <p className="text-[#FFFFFF] leading-[28.8px] font-['General Sans'] text-[24px]">
                  ₹29,999
                </p>
                <p className="text-[#FF4747] text-sm">-50%</p>
              </div>
              <p className="line-through mt-[3px] text-[16px] font-['Graphikthin'] leading-[19.2px] opacity-60 text-[#ECECEC]">
                ₹60,000
              </p>
              <Link className="relative z-30" href={"/courses/quick-batch"}>
                <button className="w-[100%] mt-[14.57px] h-[53px] bg-[transparent] rounded-[8px] text-[#30E29D] button transition-all font-semibold border-[1px] border-[#30E29D] text-[16px] font-[19.2px]">
                  Learn more{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`px-[18px] relative card w-[413px] max-biggerscreen:w-[33%] max-md:w-full max-smalllaptop:w-[48.3%] border-white rounded-[10px] py-[20px] ${style.aicardborder}`}
        >
          <div className="bg-black rounded-[9px]">
            <div
              className={`${style.bmcardbg} px-[18px] relative rounded-[10px] py-[20px]`}
            >
              <Image
                src="/backend.png"
                className="w-[100%] relative z-20 h-auto"
                width={377}
                height={236}
              />
              <h1 className="mt-[20.87px] leading-[31.36px] mb-[17.13px] tracking-[-0.84px] font-['Graphikthin'] text-[#E5E5E5] text-[28px]">
                Backend Mastery{" "}
              </h1>
              <div className="flex gap-[8px]">
                <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base max-sm:text-sm border-[1px] border-[#797979]">
                  Software Development{" "}
                </p>
                <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base max-sm:text-sm border-[1px] border-[#797979]">
                  Beginner friendly{" "}
                </p>
              </div>
              <div className="flex mt-[27.57px] gap-[12px]">
                <p className="text-[#FFFFFF] leading-[28.8px] font-['General Sans'] text-[24px]">
                  ₹9,999
                </p>
                <p className="text-[#FF4747] text-sm">-33%</p>
              </div>
              <p className="line-through mt-[3px] text-[16px] font-['Graphikthin'] leading-[19.2px] opacity-60 text-[#ECECEC]">
                ₹15,000
              </p>
              <Link className="relative z-30" href={"/courses/quick-batch"}>
                <button className="w-[100%] mt-[14.57px] h-[53px] bg-[transparent] rounded-[8px] text-[#30E29D] button transition-all font-semibold border-[1px] border-[#30E29D] text-[16px] font-[19.2px]">
                  Learn more{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`px-[18px] relative card w-[413px] max-biggerscreen:w-[33%] max-md:w-full max-smalllaptop:w-[48.3%] border-white rounded-[10px] py-[20px] ${style.aicardborder}`}
        >
          <div className="bg-black rounded-[9px]">
            <div
              className={`${style.fmcardbg} px-[18px] relative rounded-[10px] py-[20px]`}
            >
              <Image
                src="/frontend.png"
                className="w-[100%] relative z-20 h-auto"
                width={377}
                height={236}
              />
              <h1 className="mt-[20.87px] leading-[31.36px] mb-[17.13px] tracking-[-0.84px] font-['Graphikthin'] text-[#E5E5E5] text-[28px]">
                Frontend Mastery
              </h1>
              <div className="flex gap-[8px]">
                <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base max-sm:text-sm border-[1px] border-[#797979]">
                  Software Development{" "}
                </p>
                <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base max-sm:text-sm border-[1px] border-[#797979]">
                  Beginner friendly{" "}
                </p>
              </div>
              <div className="flex mt-[27.57px] gap-[12px]">
                <p className="text-[#FFFFFF] leading-[28.8px] font-['General Sans'] text-[24px]">
                  ₹9,999
                </p>
                <p className="text-[#FF4747] text-sm">-33%</p>
              </div>
              <p className="line-through mt-[3px] text-[16px] font-['Graphikthin'] leading-[19.2px] opacity-60 text-[#ECECEC]">
                ₹15,000
              </p>
              <Link className="relative z-30" href={"/courses/quick-batch"}>
                <button className="w-[100%] mt-[14.57px] h-[53px] bg-[transparent] rounded-[8px] text-[#30E29D] button transition-all font-semibold border-[1px] border-[#30E29D] text-[16px] font-[19.2px]">
                  Learn more{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`px-[18px] card relative max-hamburger:w-[70%] w-[413px] max-biggerscreen:w-[33%] max-md:w-full max-smalllaptop:w-[48.3%] rounded-[10px] py-[20px] ${style.aicardborder}`}
        >
          <div className="bg-black rounded-[9px]">
            <div
              className={`${style.lccardbg} px-[18px] relative rounded-[10px] py-[20px]`}
            >
              <Image
                src="/Frame 46.png"
                className="w-[100%] relative z-20 h-auto"
                width={377}
                height={236}
              />
              <h1 className="mt-[20.87px] leading-[31.36px] mb-[17.13px] tracking-[-0.84px] font-['Graphikthin'] text-[#E5E5E5] text-[28px]">
                No-code, Low-code Development{" "}
              </h1>
              <div className="flex gap-[8px]">
                <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base max-sm:text-sm border-[1px] border-[#797979]">
                  No-code, Low-code{" "}
                </p>
                <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base max-sm:text-sm border-[1px] border-[#797979]">
                  Beginner friendly{" "}
                </p>
              </div>
              <div className="flex justify-between mt-[19px]">
                <h1 className="text-[#ECECEC] leading-[28.8px] text-[24px] font-medium opacity-0">
                  Free
                </h1>
                {/* <p className="text-[#A1A1A1] text-[16px] leading-[19.2px] mt-[10px]">
                &lt; 18 Hours
              </p> */}
              </div>
              {/* <Link
                className="relative z-30"
                href={"/courses/low-code-no-code"}
              > */}
              <button className="relative z-30 w-[100%] mt-[15px] h-[53px] bg-[transparent] rounded-[8px] text-[#30E29D] transition-all button font-semibold border-[1px] border-[#30E29D] text-[16px] font-[19.2px]">
                Coming Soon{" "}
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
        <div
          className={`px-[18px] card relative w-[413px] max-biggerscreen:w-[33%] max-md:w-full max-hamburger:w-[70%] max-smalllaptop:w-[48.3%] rounded-[10px] py-[20px] ${style.aicardborder}`}
        >
          <div className="bg-black rounded-[9px]">
            <div
              className={`${style.aicardbg} px-[18px] relative rounded-[10px] py-[20px]`}
            >
              <Image
                src="/AI.png"
                className="w-[100%] relative z-20 h-auto"
                width={377}
                height={236}
              />
              <h1 className="mt-[20.87px] relative z-20 leading-[31.36px] mb-[17.13px] tracking-[-0.84px] font-['Graphikthin'] text-[#E5E5E5] text-[28px]">
                Artificial Intelligence (AI/ML){" "}
              </h1>
              <div className="flex gap-[8px] relative z-20">
                <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base max-sm:text-sm border-[1px] border-[#797979]">
                  AI{" "}
                </p>
                <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base max-sm:text-sm border-[1px] border-[#797979]">
                  Beginner friendly{" "}
                </p>
              </div>
              <div className="flex justify-between relative z-20 mt-[49px]">
                <h1 className="text-[#ECECEC] leading-[28.8px] text-[24px] font-medium opacity-0">
                  Free
                </h1>
                {/* <p className="text-[#A1A1A1] text-[16px] leading-[19.2px] mt-[10px]">
                &lt; 18 Hours
              </p> */}
              </div>
              {/* 14 w<Link
                className="relative z-30"
                href={"/courses/artificial-intelligence"}
              > */}
              <button className="relative z-30 w-[100%] mt-[15px] h-[53px] bg-[transparent] rounded-[8px] text-[#30E29D] transition-all font-semibold button border-[1px] border-[#30E29D] text-[16px] font-[19.2px]">
                Coming Soon{" "}
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
        <div
          className={`px-[18px] card max-hamburger:w-[70%] relative w-[413px] max-biggerscreen:w-[33%] max-md:w-full max-smalllaptop:w-[48.3%] border-white rounded-[10px] py-[20px] ${style.aicardborder}`}
        >
          <div className="bg-black rounded-[9px]">
            <div
              className={`${style.dacardbg} px-[18px] relative rounded-[10px] py-[20px]`}
            >
              <Image
                src="/data.png"
                className="w-[100%] relative z-20 h-auto"
                width={377}
                height={236}
              />
              <h1 className="mt-[20.87px] leading-[31.36px] mb-[17.13px] tracking-[-0.84px] font-['Graphikthin'] text-[#E5E5E5] text-[28px]">
                Data Analytics{" "}
              </h1>
              <div className="flex gap-[8px]">
                <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base max-sm:text-sm border-[1px] border-[#797979]">
                  Data Analytics{" "}
                </p>
                <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base max-sm:text-sm border-[1px] border-[#797979]">
                  Beginner friendly{" "}
                </p>
              </div>
              <div className="flex justify-between mt-[49px]">
                <h1 className="text-[#ECECEC] leading-[28.8px] text-[24px] font-medium opacity-0">
                  Free
                </h1>
                {/* <p className="text-[#A1A1A1] text-[16px] leading-[19.2px] mt-[10px]">
                &lt; 18 Hours
              </p> */}
              </div>
              {/* <Link className="relative z-30" href={"/courses/data-analytics"}> */}
              <button className="relative z-30 w-[100%] mt-[15px] h-[53px] bg-[transparent] rounded-[8px] text-[#30E29D] transition-all font-semibold button border-[1px] border-[#30E29D] text-[16px] font-[19.2px]">
                Coming Soon{" "}
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
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
      <Upskill />
      <Footer />
    </>
  );
}
