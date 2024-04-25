import Image from "next/image";
import style from "@/styles/style.module.css";
import Navbar from "./navbar";
import Footer from "./footer";
import Upskill from "./upskill";
import Success from "./success";

export default function Courses() {
  return (
    <>
      <Navbar />
      <main className="pt-[190.35px] pb-[111.65px] max-md:pt-[100px] max-sm:pt-[80px] flex justify-center">
        <p className="w-[1016.16px] max-lg:w-full max-lg:px-[80px] max-md:px-[40px] max-sm:px-[20px] max-smalllaptop:tracking-[-2.56px] max-smalllaptop:text-[84px] max-sm:text-[64px] max-smalllaptop:leading-[102%] font-thin leading-[106.66px] tracking-[-5.2px] text-[104.57px] font-['Graphikthin'] text-[#E5E5E5] text-center">
          A plethora of topics to upskill on
        </p>
      </main>
      <section className="py-[71px] max-md:px-[40px] max-sm:px-[20px] max-smalllaptop:px-[80px] max-smalllaptop:gap-[22px] flex justify-center flex-wrap gap-[84px] px-[100px]">
        <div
          className={`px-[18px] max-sm:px-[20px] max-sm:py-[16px] w-[33%] max-lg:w-[48%] max-md:w-full border-[1px] w-[413px] border-white rounded-[10px] py-[20px] ${style.cardbg}`}
        >
          <Image
            src="/Frame 46.png"
            className="w-[100%] h-auto"
            width={377}
            height={236}
          />
          <h1 className="mt-[20.87px] leading-[31.36px] mb-[17.13px] tracking-[-0.84px] font-['Graphikthin'] text-[#E5E5E5] text-[28px]">
            Product Design Mastery
          </h1>
          <div className="flex gap-[8px]">
              <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base max-sm:text-sm border-[1px] border-[#797979]">
              UI/UX design{" "}
            </p>
              <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base max-sm:text-sm border-[1px] border-[#797979]">
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
          <button className="w-[100%] mt-[15px] h-[53px] bg-[transparent] rounded-[8px] text-[#30E29D] border-[1px] border-[#30E29D] text-[16px] font-[19.2px]">
            Learn more{" "}
          </button>
        </div>
        <div
          className={`px-[18px] max-sm:px-[20px] max-sm:py-[16px] w-[33%] max-lg:w-[48%] max-md:w-full border-[1px] w-[413px] border-white rounded-[10px] py-[20px] ${style.cardbg}`}
        >
          <Image
            src="/Frame 46.png"
            className="w-[100%] h-auto"
            width={377}
            height={236}
          />
          <h1 className="mt-[20.87px] leading-[31.36px] mb-[17.13px] tracking-[-0.84px] font-['Graphikthin'] text-[#E5E5E5] text-[28px]">
            Product Design Mastery
          </h1>
          <div className="flex gap-[8px]">
              <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base max-sm:text-sm border-[1px] border-[#797979]">
              UI/UX design{" "}
            </p>
              <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base max-sm:text-sm border-[1px] border-[#797979]">
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
          <button className="w-[100%] mt-[15px] h-[53px] bg-[transparent] rounded-[8px] text-[#30E29D] border-[1px] border-[#30E29D] text-[16px] font-[19.2px]">
            Learn more{" "}
          </button>
        </div>
        <div
          className={`px-[18px] max-sm:px-[20px] max-sm:py-[16px] w-[33%] max-lg:w-[48%] max-md:w-full border-[1px] w-[413px] border-white rounded-[10px] py-[20px] ${style.cardbg}`}
        >
          <Image
            src="/Frame 46.png"
            className="w-[100%] h-auto"
            width={377}
            height={236}
          />
          <h1 className="mt-[20.87px] leading-[31.36px] mb-[17.13px] tracking-[-0.84px] font-['Graphikthin'] text-[#E5E5E5] text-[28px]">
            Product Design Mastery
          </h1>
          <div className="flex gap-[8px]">
              <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base max-sm:text-sm border-[1px] border-[#797979]">
              UI/UX design{" "}
            </p>
              <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base max-sm:text-sm border-[1px] border-[#797979]">
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
          <button className="w-[100%] mt-[15px] h-[53px] bg-[transparent] rounded-[8px] text-[#30E29D] border-[1px] border-[#30E29D] text-[16px] font-[19.2px]">
            Learn more{" "}
          </button>
        </div>
        <div
          className={`px-[18px] max-sm:px-[20px] max-sm:py-[16px] w-[33%] max-lg:w-[48%] max-md:w-full border-[1px] w-[413px] border-white rounded-[10px] py-[20px] ${style.cardbg}`}
        >
          <Image
            src="/Frame 46.png"
            className="w-[100%] h-auto"
            width={377}
            height={236}
          />
          <h1 className="mt-[20.87px] leading-[31.36px] mb-[17.13px] tracking-[-0.84px] font-['Graphikthin'] text-[#E5E5E5] text-[28px]">
            Product Design Mastery
          </h1>
          <div className="flex gap-[8px]">
              <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base max-sm:text-sm border-[1px] border-[#797979]">
              UI/UX design{" "}
            </p>
              <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base max-sm:text-sm border-[1px] border-[#797979]">
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
          <button className="w-[100%] mt-[15px] h-[53px] bg-[transparent] rounded-[8px] text-[#30E29D] border-[1px] border-[#30E29D] text-[16px] font-[19.2px]">
            Learn more{" "}
          </button>
        </div>
      </section>
      <Success />
      <Upskill />
      <Footer />
    </>
  );
}
