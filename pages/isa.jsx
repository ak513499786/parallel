import Image from "next/image";
import style from "@/styles/style.module.css";
import Navbar from "./navbar";
import Footer from "./footer";
import Upskill from "./upskill";
import Success from "./success";
import Link from "next/link";

export default function Courses() {
  return (
    <>
      <Navbar />
      <div className="absolute w-[100%] h-[100vh] top-0 left-0 overflow-x-hidden">
        <div className={style.backgroundboxworkshop}></div>
      </div>
      <main className="pl-[80.27px] relative z-20 pt-[163px] pb-[186.03px]">
        <h1 className="w-[894.59px] font-['Graphikthin'] text-[127.98px] text-[#E5E5E5] leading-[130.54px] tracking-[-6.35px]">
          ISA that doesn’t feel like a burden.{" "}
        </h1>
        <p className="w-[393.32px] text-[20px] leading-[30px] text-[#E0E0E0] font-['Graphikthin'] mt-[41.97px] opacity-90">
          We understand how precious the salary from your first job feels.
          That’s why our ISA’s terms are kept flexible.
        </p>
      </main>
      <section className="pl-[80px] relative z-20 pt-[96.09px] pb-[159.91px] flex flex-col gap-[57px]">
        <p className="text-[64px] leading-[61.68px] tracking-[-2.56px] text-[#E5E5E5] font-['Graphikthin'] w-[890.53px]">
          The fee is charged only after you get job.{" "}
        </p>
        <p className="text-[64px] leading-[61.68px] w-[818.23px] tracking-[-2.56px] text-[#E5E5E5] font-['Graphikthin'] w-[890.53px]">
          We will pause the ISA if you stop working, and resume once you start
          again.{" "}
        </p>
        <p className="text-[64px] leading-[61.68px] w-[818.23px] tracking-[-2.56px] text-[#E5E5E5] font-['Graphikthin'] w-[890.53px]">
          You can drop out anytime by paying a minimum fee for the time spent on
          our platform.{" "}
        </p>
      </section>
      <div className="pt-[72.24px] relative z-20 pb-[72px] pl-[79.24px] pr-[79.15px]">
        <div className="flex justify-between">
          <p className="w-[890.53px] font-['Graphikthin'] text-[64px] font-light leading-[61.68px] tracking-[-2.56px] text-[#E5E5E5]">
            ISA that works with you, not against you.{" "}
          </p>
        </div>
        <div className="flex gap-[21px] mt-[49.16px]">
          <div
            className={`pl-[28px] w-[33%] h-[434px] pb-[41.87px] pr-[29.85px] border-[1px] pt-[31.57px] rounded-[8px] ${style.bordergradient}`}
          >
            <div className="bg-[#1F1F1F] w-[105px] pt-[26.26px] pb-[26.01px] pl-[26.39px] pr-[26.88px] border-[1px] rounded-[6px] border-[#FFFFFF66] ">
              {" "}
              <Image
                src="/book-reading--book-reading-learning.svg"
                width={51.73}
                height={51.73}
              />
            </div>
            <h1 className="w-[340px] font-['Graphikthin'] font-normal mt-[53.48px] mb-[58.16px] text-[32px] leading-[40.32px] tracking-[-0.32px] text-[#E0E0E0]">
              1 year policy{" "}
            </h1>
            <p className="w-[355.15px] opacity-80 text-[#E0E0E0] text-base">
              If you end up not getting a job within a year after completing the
              course, you will be charged nothing.
            </p>
          </div>
          <div
            className={`pl-[28px] w-[33%] h-[434px] pb-[41.87px] pr-[29.85px] border-[1px] pt-[31.57px] rounded-[8px] ${style.bordergradient}`}
          >
            <div className="bg-[#1F1F1F] w-[105px] px-[26.63px] py-[26.13px] border-[1px] rounded-[6px] border-[#FFFFFF66] ">
              {" "}
              <Image
                src="/bag-suitcase-2--product-business-briefcase.svg"
                width={51.73}
                height={51.73}
              />
            </div>
            <h1 className="w-[340px] font-['Graphikthin'] font-normal mt-[53.48px] mb-[18.16px] text-[32px] leading-[40.32px] tracking-[-0.32px] text-[#E0E0E0]">
              Pay only a small percentage of your CTC{" "}
            </h1>
            <p className="w-[355.15px] opacity-80 text-[#E0E0E0] text-base">
              We only ask 15% of your CTC for 12 months, nothing more. Once the
              you pay the complete fee, the ISA will be terminated
            </p>
          </div>
          <div
            className={`pl-[28px] w-[33%] h-[434px] pb-[41.87px] pr-[29.85px] border-[1px] pt-[31.57px] rounded-[8px] ${style.bordergradient}`}
          >
            <div className="bg-[#1F1F1F] w-[105px] pt-[22.3px] pb-[21.7px] pl-[22.95px] pr-[22.05px] border-[1px] rounded-[6px] border-[#FFFFFF66] ">
              {" "}
              <Image
                src="/Calendar-3--Streamline-Ultimate.svg.svg"
                width={60}
                height={60}
              />
            </div>
            <h1 className="w-[340px] font-['Graphikthin'] font-normal mt-[53.48px] mb-[18.16px] text-[32px] leading-[40.32px] tracking-[-0.32px] text-[#E0E0E0]">
              Stop paying us if you are not working{" "}
            </h1>
            <p className="w-[355.15px] opacity-80 text-[#E0E0E0] text-base">
              If you lose your job due to unfortunate circumstances, your ISA
              will be paused until you get another job.
            </p>
          </div>
        </div>
      </div>
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
      <Success />
      <Upskill />
      <Footer />
    </>
  );
}
