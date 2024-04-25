import Image from "next/image";
import style from "@/styles/style.module.css";
import Navbar from "./navbar";
import Footer from "./footer";
import Upskill from "./upskill";
import Link from "next/link";

export default function Courses() {
  return (
    <>
      <Navbar />
      <main className="pl-[79.39px] max-md:px-[40px] max-sm:px-[20px] pr-[80.1px] pt-[88px] pb-[100px] max-hamburger:flex-col max-hamburger:gap-[30px] flex justify-between">
        <div className="mt-[27.66px] max-sm:mt-0">
          <h1 className="w-[650px] max-hamburger:w-full max-smalllaptop:w-[500px] font-['Graphikthin'] text-[64px] leading-[61.68px] tracking-[-2.56px] text-[#E5E5E5] font-light max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%]">
            Refer us among your friends to get a boost in placement preference{" "}
          </h1>
          <p className="w-[408px] max-sm:w-full max-hamburger:hidden mb-[12px] font-['Graphikthin'] mt-[57.34px] text-base text-[#E0E0E0]">
            Enter the phone number associated with your account
          </p>
          <div className="flex gap-[19px]">
            <input
              type="text"
              name=""
              placeholder="Enter your phone number"
              className="w-[368px] max-hamburger:hidden max-smalllaptop:w-[300px] h-[54px] bg-[#171717] rounded-[8px] pl-[17.51px] outline-0 text-[#ffffff99] text-[17.95px] leading-[21.54px] placeholder-[17.95px] placeholder-[#ffffff99]"
              id=""
            />
            <button className="w-[118px] max-hamburger:hidden h-[53px] bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] font-[19.2px]">
              Next{" "}
            </button>
          </div>
          <p className="mt-[32px] max-md:w-full max-hamburger:hidden text-base font-['Graphikthin'] text-[#E0E0E0]">
            Don’t have an account?{" "}
            <Link
              href={"/signup"}
              className="border-b-[1px] border-[#30E29D] text-[#30E29D]"
            >
              Sign up
            </Link>
          </p>
        </div>
        <Image src="/refer.png" className="object-contain max-md:w-full" width={522} height={493} />
        <div className="hidden max-hamburger:block">
        <p className="w-[408px] max-md:w-full mb-[12px] font-['Graphikthin'] mt-[57.34px] text-base text-[#E0E0E0]">
            Enter the phone number associated with your account
          </p>
          <div className="flex max-sm:flex-col gap-[19px]">
            <input
              type="text"
              name=""
              placeholder="Enter your phone number"
              className="w-[368px] max-sm:w-full max-smalllaptop:w-[300px] h-[54px] bg-[#171717] rounded-[8px] pl-[17.51px] outline-0 text-[#ffffff99] text-[17.95px] leading-[21.54px] placeholder-[17.95px] placeholder-[#ffffff99]"
              id=""
            />
            <button className="w-[118px] max-sm:w-full h-[53px] bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] font-[19.2px]">
              Next{" "}
            </button>
          </div>
          <p className="mt-[32px] max-md:w-full text-base font-['Graphikthin'] text-[#E0E0E0]">
            Don’t have an account?{" "}
            <Link
              href={"/signup"}
              className="border-b-[1px] border-[#30E29D] text-[#30E29D]"
            >
              Sign up
            </Link>
          </p>
        </div>
      </main>
      <section className="pt-[72.08px] max-sm:py-0 relative max-sm:px-[20px] max-md:px-[40px] z-20 pb-[72px] pl-[79.24px] pr-[79px]">
        <div className="flex justify-between">
          <p className="w-[890.53px] max-hamburger-w-full font-['Graphikthin'] text-[64px] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] font-light leading-[61.68px] tracking-[-2.56px] text-[#E5E5E5]">
            Enjoy exclusive perks by referring us to your friends{" "}
          </p>
        </div>
        <div className="flex max-hamburger:flex-wrap max-hamburger:justify-center gap-[21px] mt-[50.91px]">
          <div
            className={`pl-[28px] w-[33%] max-md:w-full max-hamburger:w-[45%] h-[404px] max-bigscreen:h-[440px] max-xl:h-[400px] max-md:h-auto pb-[41.87px] pr-[29.85px] border-[1px] pt-[31.57px] rounded-[8px] ${style.bordergradient}`}
          >
            <div className="bg-[#1F1F1F] w-[105px] pt-[26.26px] pb-[26.01px] pl-[26.39px] pr-[26.88px] border-[1px] rounded-[6px] border-[#FFFFFF66] ">
              {" "}
              <Image
                src="/book-reading--book-reading-learning.svg"
                width={51.73}
                height={51.73}
              />
            </div>
            <h1 className="w-[340px] max-bigscreen:w-[310px] max-xl:w-[250px] max-md:w-full max-xl:mt-[30px] font-['Graphikthin'] font-normal mt-[53.05px] mb-[18.16px] text-[32px] max-xl:text-[24px] max-xl:leading-[120%] leading-[40.32px] tracking-[-0.32px]">
              Make learning more fun with your friends{" "}
            </h1>
            <p className="w-[355.15px] opacity-80 text-[#E0E0E0] text-base max-bigscreen:w-[310px] max-xl:w-full">
              Invite your friends over to the platform. Upskill together at no
              additional costs. Compete in leaderboards with your friends and
              the others.
            </p>
          </div>
          <div
            className={`pl-[28px] w-[33%] max-md:w-full max-hamburger:w-[45%] h-[404px] max-bigscreen:h-[440px] max-xl:h-[400px] max-md:h-auto pb-[41.87px] pr-[29.85px] border-[1px] pt-[31.57px] rounded-[8px] ${style.bordergradient}`}
          >
            <div className="bg-[#1F1F1F] w-[105px] px-[26.63px] py-[26.13px] border-[1px] rounded-[6px] border-[#FFFFFF66] ">
              {" "}
              <Image
                src="/bag-suitcase-2--product-business-briefcase.svg"
                width={51.73}
                height={51.73}
              />
            </div>
            <h1 className="w-[340px] max-bigscreen:w-[310px] max-xl:w-[250px] max-md:w-full max-xl:mt-[30px] font-['Graphikthin'] font-normal mt-[53.05px] mb-[18.16px] text-[32px] max-xl:text-[24px] max-xl:leading-[120%] leading-[40.32px] tracking-[-0.32px]">
              Unlock additional tests that give you an edge{" "}
            </h1>
            <p className="w-[355.15px] opacity-80 text-[#E0E0E0] text-base max-bigscreen:w-[310px] max-xl:w-full">
              A successful referral gives you access to additional tests. This
              is not available to a non-referrer, giving you an edge over the
              others.
            </p>
          </div>
          <div
            className={`pl-[28px] w-[33%] max-md:w-full max-hamburger:w-[45%] h-[404px] max-bigscreen:h-[440px] max-xl:h-[400px] max-md:h-auto pb-[41.87px] pr-[29.85px] border-[1px] pt-[31.57px] rounded-[8px] ${style.bordergradient}`}
          >
            <div className="bg-[#1F1F1F] w-[105px] pt-[22.3px] pb-[21.7px] pl-[22.95px] pr-[22.05px] border-[1px] rounded-[6px] border-[#FFFFFF66] ">
              {" "}
              <Image
                src="/Calendar-3--Streamline-Ultimate.svg.svg"
                width={60}
                height={60}
              />
            </div>
            <h1 className="w-[340px] max-bigscreen:w-[310px] max-xl:w-[250px] max-md:w-full max-xl:mt-[30px] font-['Graphikthin'] font-normal mt-[53.05px] mb-[18.16px] text-[32px] max-xl:text-[24px] max-xl:leading-[120%] leading-[40.32px] tracking-[-0.32px]">
              Get a slight boost in placement preference{" "}
            </h1>
            <p className="w-[355.15px] opacity-80 text-[#E0E0E0] text-base max-bigscreen:w-[310px] max-xl:w-full">
              With a referral you get added to the exclusive club of referrers
              that enjoy a slight boost in placement preference.
            </p>
          </div>
        </div>
      </section>
      <section className="pt-[72.09px] max-sm:px-[20px] max-md:px-[40px ] relative z-20 pb-[72px] pl-[79.02px] pr-[80.37px]">
        <div className="flex justify-between">
          <p className="w-[890.53px] max-hamburger:w-full font-['Graphikthin'] text-[64px] font-light leading-[61.68px] tracking-[-2.56px] text-[#E5E5E5]max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%]">
            Steps to make a valid referral{" "}
          </p>
        </div>
        <div className="flex max-hamburger:flex-wrap max-hamburger:justify-center gap-[21px] mt-[50px]">
          <div
            className={`pl-[28.54px] w-[33%] max-md:w-full max-hamburger:w-[45%] max-md:h-auto h-[242px] max-xl:h-[262px] max-lg:h-[280px] pb-[29.41px] pr-[29.31px] border-[1px] pt-[31.28px] rounded-[8px] ${style.bordergradient}`}
          >
            <h1 className="w-[340px] font-['Graphikthin'] font-normal mt-[] mb-[26.3px] text-[32px] leading-[40.32px] tracking-[-0.32px] text-[#E0E0E0] max-xl:text-[28px] max-xl:leading-[120%] max-bigscreen:w-full">
              Step 1{" "}
            </h1>
            <p className="text-[24px] leading-[36px] w-[355.15px] opacity-80 text-[#E0E0E0] max-bigscreen:w-full">
              Sign up, copy your referral link, and forward it to all of your
              friends.
            </p>
          </div>
          <div
            className={`pl-[28.54px] w-[33%] max-md:w-full max-hamburger:w-[45%] max-md:h-auto h-[242px] max-xl:h-[262px] max-lg:h-[280px] pb-[29.41px] pr-[29.31px] border-[1px] pt-[31.28px] rounded-[8px] ${style.bordergradient}`}
          >
            <h1 className="w-[340px] font-['Graphikthin'] font-normal mt-[] mb-[26.3px] text-[32px] leading-[40.32px] tracking-[-0.32px] text-[#E0E0E0] max-xl:text-[28px] max-xl:leading-[120%] max-bigscreen:w-full">
              Step 2{" "}
            </h1>
            <p className="text-[24px] leading-[36px] w-[355.15px] opacity-80 text-[#E0E0E0] max-bigscreen:w-full">
              Your friends will click on the link, and sign up.
            </p>
          </div>
          <div
            className={`pl-[28.54px] w-[33%] max-md:w-full max-hamburger:w-[45%] max-md:h-auto h-[242px] max-xl:h-[262px] max-lg:h-[280px] max-lg:h-[280px] pb-[29.41px] pr-[29.31px] border-[1px] pt-[31.28px] rounded-[8px] ${style.bordergradient}`}
          >
            <h1 className="w-[340px] font-['Graphikthin'] font-normal mt-[] mb-[26.3px] text-[32px] leading-[40.32px] tracking-[-0.32px] text-[#E0E0E0] max-xl:text-[28px] max-xl:leading-[120%] max-bigscreen:w-full">
              Step 3{" "}
            </h1>
            <p className="text-[24px] leading-[36px] w-[355.15px] opacity-80 text-[#E0E0E0] max-bigscreen:w-full">
              Enjoy the free benefits you earned.
            </p>
          </div>
        </div>
        <div className="mt-[105.91px] max-sm:mt-[50px] flex flex-col items-center">
          <p className="w-[408px] text-center max-sm:w-full font-['Graphikthin'] mb-[12px] mt-[57.34px] text-base text-[#E0E0E0]">
            Enter the phone number associated with your account
          </p>
          <div className="flex justify-center max-sm:w-full max-sm:flex-col gap-[19px]">
            <input
              type="text"
              name=""
              placeholder="Enter your phone number"
              className="w-[368px] max-sm:w-full h-[54px] bg-[#171717] rounded-[8px] pl-[17.51px] outline-0 text-[#ffffff99] text-[17.95px] leading-[21.54px] placeholder-[17.95px] placeholder-[#ffffff99]"
              id=""
            />
            <button className="w-[118px] max-sm:w-full h-[53px] bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] font-[19.2px]">
              Next{" "}
            </button>
          </div>
          <p className="mt-[32px] text-base max-sm:w-full text-center font-['Graphikthin'] text-[#E0E0E0]">
            Don’t have an account?{" "}
            <Link
              href={"/signup"}
              className="border-b-[1px] border-[#30E29D] text-[#30E29D]"
            >
              Sign up
            </Link>
          </p>
        </div>
      </section>
      <Upskill />
      <Footer />
    </>
  );
}
