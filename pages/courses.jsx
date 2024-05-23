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
      <div className="absolute w-[100%] h-[811px] top-0 left-[100px] overflow-hidden">
      <div className={style.backgroundboxworkshop}></div>
      </div>
      <main className="pt-[190.35px] pb-[111.65px] max-sm:pb-[40px] max-md:pt-[100px] max-sm:pt-[80px] flex justify-center">
        <p className="w-[1016.16px] max-lg:w-full max-lg:px-[80px] max-md:px-[40px] max-sm:px-[20px] max-smalllaptop:tracking-[-2.56px] max-smalllaptop:text-[84px] max-sm:text-[64px] max-smallphone:text-[36px] max-sm:tracking-tight max-smalllaptop:leading-[102%] font-thin leading-[106.66px] tracking-[-5.2px] text-[104.57px] font-['Graphikthin'] text-[#E5E5E5] text-center">
          A plethora of topics to upskill on
        </p>
      </main>
      <div className="pl-[2px] py-[91px] justify-center mt-[93px] flex flex-wrap gap-x-[94px] gap-y-[84px] max-sm:gap-[20px]">
        <div
          className={`px-[18px] card border-[1px] relative w-[33%] backdrop-blur-lg max-md:w-full max-smalllaptop:w-[48.3%] border-white rounded-[10px] py-[20px] ${style.cardbg}`}
        >
          <div className="bg-[#0E16F580] absolute blur-3xl z-10 top-0 w-[100%] left-0 h-[350px]"></div>
          <div className="bg-[#1BC45E3D] absolute blur-2xl z-10 bottom-0 w-[100%] left-0 h-[100px]"></div>

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
          <div className="flex justify-between mt-[49px]">
            <h1 className="text-[#ECECEC] leading-[28.8px] text-[24px] font-medium">
              Free
            </h1>
            {/* <p className="text-[#A1A1A1] text-[16px] leading-[19.2px] mt-[10px]">
                &lt; 18 Hours
              </p> */}
          </div>
          <Link className="relative z-30" href={"/courses/low-code-no-code"}>
            <button className="w-[100%] mt-[15px] h-[53px] bg-[transparent] rounded-[8px] text-[#30E29D] transition-all button font-semibold border-[1px] border-[#30E29D] text-[16px] font-[19.2px]">
              Coming Soon{" "}
            </button>
          </Link>
        </div>
        <div
          className={`px-[18px] border-[1px] card relative w-[33%] backdrop-blur-sm backdrop-md max-md:w-full max-smalllaptop:w-[48.3%] border-white rounded-[10px] py-[20px] ${style.cardbg}`}
        >
          <div className="bg-[#7627E880] absolute blur-3xl z-10 top-0 w-[100%] left-0 h-[350px]"></div>
          <div className="bg-[#1BC45E3D] absolute blur-2xl z-10 bottom-0 w-[100%] left-0 h-[100px]"></div>
          <Image
            src="/AI.png"
            className="w-[100%] relative z-20 h-auto"
            width={377}
            height={236}
          />
          <h1 className="mt-[20.87px] leading-[31.36px] mb-[17.13px] tracking-[-0.84px] font-['Graphikthin'] text-[#E5E5E5] text-[28px]">
            Artificial Intelligence (AI/ML){" "}
          </h1>
          <div className="flex gap-[8px]">
            <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base max-sm:text-sm border-[1px] border-[#797979]">
              AI{" "}
            </p>
            <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base max-sm:text-sm border-[1px] border-[#797979]">
              Beginner friendly{" "}
            </p>
          </div>
          <div className="flex justify-between mt-[49px]">
            <h1 className="text-[#ECECEC] leading-[28.8px] text-[24px] font-medium">
              Free
            </h1>
            {/* <p className="text-[#A1A1A1] text-[16px] leading-[19.2px] mt-[10px]">
                &lt; 18 Hours
              </p> */}
          </div>
          <Link
            className="relative z-30"
            href={"/courses/artificial-intelligence"}
          >
            <button className="w-[100%] mt-[15px] h-[53px] bg-[transparent] rounded-[8px] text-[#30E29D] transition-all font-semibold button border-[1px] border-[#30E29D] text-[16px] font-[19.2px]">
              Coming Soon{" "}
            </button>
          </Link>
        </div>
        <div
          className={`px-[18px] border-[1px] card relative w-[33%] backdrop-blur-sm max-md:w-full max-smalllaptop:w-[48.3%] border-white rounded-[10px] py-[20px] ${style.cardbg}`}
        >
          <div className="bg-[#D82F2F45] absolute blur-3xl z-10 top-0 w-[100%] left-0 h-[350px]"></div>
          <div className="bg-[#1BC45E3D] absolute blur-2xl z-10 bottom-0 w-[100%] left-0 h-[100px]"></div>
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
            <h1 className="text-[#ECECEC] leading-[28.8px] text-[24px] font-medium">
              Free
            </h1>
            {/* <p className="text-[#A1A1A1] text-[16px] leading-[19.2px] mt-[10px]">
                &lt; 18 Hours
              </p> */}
          </div>
          <Link className="relative z-30" href={"/courses/data-analytics"}>
            <button className="w-[100%] mt-[15px] h-[53px] bg-[transparent] rounded-[8px] text-[#30E29D] transition-all font-semibold button border-[1px] border-[#30E29D] text-[16px] font-[19.2px]">
              Coming Soon{" "}
            </button>
          </Link>
        </div>
        <div
          className={`px-[18px] relative border-[1px] card w-[33%] max-md:w-full max-smalllaptop:w-[48.3%] border-white rounded-[10px] py-[20px] backdrop-blur ${style.cardfsbg}`}
        >
          <div className="bg-[#1BC45E3D] absolute blur-xl z-10 top-0 w-[100%] left-0 h-[100px]"></div>
          <div className="bg-[#1BC45E3D] absolute blur-3xl z-10 bottom-0 w-[100%] left-0 h-[100px]"></div>
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
          <div className="flex justify-between mt-[49px]">
            <h1 className="text-[#ECECEC] leading-[28.8px] text-[24px] font-medium">
              Free
            </h1>
            {/* <p className="text-[#A1A1A1] text-[16px] leading-[19.2px] mt-[10px]">
                &lt; 18 Hours
              </p> */}
          </div>
          <Link
            className="relative z-30"
            href={"/courses/full-stack-development"}
          >
            <button className="w-[100%] mt-[15px] h-[53px] bg-[transparent] rounded-[8px] text-[#30E29D] button transition-all font-semibold border-[1px] border-[#30E29D] text-[16px] font-[19.2px]">
              Coming Soon{" "}
            </button>
          </Link>
        </div>
      </div>
      <Success />
      <Upskill />
      <Footer />
    </>
  );
}
