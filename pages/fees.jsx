import Image from "next/image";
import style from "@/styles/style.module.css";
import Navbar from "./navbar";
import Footer from "./footer";
import Upskill from "./upskill";
import Success from "./success";
import Link from "next/link";

export default function Fees() {
  return (
    <>
      <Navbar />
      <div className="absolute w-[100%] h-[100vh] top-0 left-0 overflow-x-hidden">
        <div className={style.backgroundcolor}></div>
        <div className={style.backgroundbox}></div>
      </div>
      <div className="absolute w-[100%] h-[100vh] top-[100vh] left-0 overflow-x-hidden">
        <div className={style.backgroundcolor2}></div>
        <div className={style.backgroundbox2}></div>
      </div>
      <main className="pl-[80px] relative z-20 pt-[117.42px] pb-[211.58px]">
        <h1 className="w-[894.59px] font-['Graphikthin'] text-[127.98px] text-[#E5E5E5] leading-[130.54px] tracking-[-6.35px]">
          We charge you<span className="font-semibold"> ₹0 </span>upfront.
        </h1>
      </main>
      <section className="pl-[80px] relative z-20 pt-[96.09px] pb-[95.91px] flex flex-col gap-[57px]">
        <p className="text-[64px] leading-[61.68px] tracking-[-2.56px] text-[#E5E5E5] font-['Graphikthin'] w-[890.53px]">
          Because we believe that education should never be behind a paywall.
        </p>
        <p className="text-[64px] w-[818.23px] leading-[61.68px] tracking-[-2.56px] text-[#E5E5E5] font-['Graphikthin'] w-[890.53px]">
          We’ll help you upskill, get placed, and charge you only 15% of your
          CTC for 12 months.
        </p>
        <p className="text-[64px] leading-[61.68px] w-[818.23px] tracking-[-2.56px] text-[#E5E5E5] font-['Graphikthin'] w-[890.53px]">
          We will not charge you until you get placed.
        </p>
      </section>
      <Success />
      <section className="py-[120.5px] pl-[80px] flex flex-col gap-[51px]">
        <p className="text-[#E5E5E5] text-[64px] font-['Graphikthin'] leading-[61.68px] tracking-[-2.56px]">
          What you will be paying us
        </p>
        <h1 className="w-[1172px] text-[147.6px] font-['Graphikthin'] leading-[142.26px] text-[#E5E5E5] tracking-[-5.9px]">
          <span className="font-semibold">15%</span> of your CTC for{" "}
          <span className="font-semibold">12 months.</span>
        </h1>
      </section>
      <section className="pt-[37.08px] pb-[74.31px] flex flex-col items-center gap-[131.61px]">
        <div className="flex flex-col items-center">
          <p className="text-[20px] text-center leading-[19.28px] text-[#E5E5E5] font-['Graphikthin']">
            Drop out policy
          </p>
          <h1 className="w-[890.53px] mt-[39px] text-[64px] leading-[61.68px] text-center tracking-[-2.56px] text-[#E5E5E5] font-['Graphikthin']">
            Pay a fixed fee and drop out anytime
          </h1>
          <table className="w-[826px] mt-[51px] font-['Graphikthin'] text-[32px] leading-[30.84px] font-light text-[#E5E5E5] tracking-[-0.64px] text-left h-[336px]">
            <tr>
              <th className="w-[413px] h-[112px] pl-[32.76px] border-[1px] border-white">
                Week 1 - 5
              </th>
              <th className="w-[413px] h-[112px] pl-[32.76px] border-[1px] border-white">
                No Payment
              </th>
            </tr>
            <tr>
              <th className="w-[413px] h-[112px] pl-[32.76px] border-[1px] border-white">
                Week 6 - 15
              </th>
              <th className="w-[413px] h-[112px] pl-[32.76px] border-[1px] border-white">
                ₹20,000
              </th>
            </tr>
            <tr>
              <th className="w-[413px] h-[112px] pl-[32.76px] border-[1px] border-white">
                Week 15 - 20
              </th>
              <th className="w-[413px] h-[112px] pl-[32.76px] border-[1px] border-white">
                ₹45,000
              </th>
            </tr>
          </table>
        </div>
        <div className="flex flex-col items-center gap-[24px]">
          <p className="text-[32px] leading-[30.84px] tracking-[-0.64px] text-center text-[#E5E5E5] font-['Graphikthin']">
            Have doubts on fee policy?
          </p>
          <Link
            href={"/contact-us"}
            className="w-[165px] flex justify-center items-center h-[53px] bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] font-[19.2px]"
          >
            Contact us{" "}
          </Link>
        </div>
      </section>
      <div className="pt-[87.5px] pb-[88px] flex justify-between relative z-20 px-[80px]">
        <div className="w-[675.77px]">
          <p className="text-[64px] mb-[41px] leading-[61.88px] text-[#E5E5E5] tracking-[-2.56px] font-['Graphikthin']">
            Never let high fees be the excuse.{" "}
          </p>
          <p className="text-base w-[393.32px] text-[#E5E5E5] font-['Graphikthin']">
            Thousands of students have gotten placed through Parallel. What are
            you waiting for?
          </p>
        </div>
        <div className="w-[442px] flex flex-col z-20 gap-[32px] h-[484px] px-[37px] py-[34px] rounded-[14px] bg-[#FFFFFF1A]">
          <div className="flex flex-col gap-[16px]">
            <p className="text-[16px] leading-[19.2px]">Name</p>
            <input
              type="text"
              placeholder="Enter your name"
              className="h-[54px] rounded-[4px] border-[1px] border-white pl-[17.51px] bg-[transparent] placeholder-[#ffffff99]"
            />
          </div>
          <div className="flex flex-col gap-[16px]">
            <p className="text-[16px] leading-[19.2px]">Email</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="h-[54px] rounded-[4px] border-[1px] border-white pl-[17.51px] bg-[transparent] placeholder-[#ffffff99]"
            />
          </div>
          <div className="flex flex-col gap-[16px]">
            <p className="text-[16px] leading-[19.2px]">Phone Number</p>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="h-[54px] rounded-[4px] border-[1px] border-white pl-[17.51px] bg-[transparent] placeholder-[#ffffff99]"
            />
          </div>
          <button className="w-full h-[53px] bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] font-[19.2px]">
            Talk to our experts{" "}
          </button>
        </div>
      </div>
      <Upskill />
      <Footer />
    </>
  );
}
