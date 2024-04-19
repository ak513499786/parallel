import Image from "next/image";
import style from "@/styles/style.module.css";
import Navbar from "./navbar";
import Footer from "./footer";
import Upskill from "./upskill";
import Success from "./success";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="flex justify-center pt-[190.35px] pb-[220.65px]">
        <h1 className="w-[1016.16px] font-['Graphikthin'] text-[104.57px] leading-[106.66px] tracking-[-5.2px] text-center">
          We want to make upskilling accessible to{" "}
          <span className="font-semibold">everyone.</span>
        </h1>
      </main>
      <section className="py-[241.5px] flex justify-center">
        <div className="w-[1081.52px]">
          <p className="text-center text-[20px] leading-[19.28px] text-[#E5E5E5] font-['Graphikthin'] mb-[20px]">
            Our mission
          </p>
          <h1 className="text-[85.04px] leading-[81.97px] text-center text-[#E5E5E5] tracking-[-3.4px] font-['Graphikthin']">
            To make quality education as affordable as it gets.
          </h1>
        </div>
      </section>
      <section className="px-[80px] relative py-[100px] flex flex-col justify-center items-center gap-[65px]">
        <div className="w-[100%] overflow-hidden absolute bottom-[-200px] h-[966.17px]">
          <div className={`${style.circle}`}></div>
        </div>
        <div className="w-[813.91px]">
          <p className="text-center text-[#E5E5E5] font-['Graphikthin'] font-light mb-[20px] text-[20px] leading-[19.28px]">
            Our partners
          </p>
          <h1 className="text-center text-[#E5E5E5] relative z-20 text-[64px] font-['Graphikthin'] leading-[61.68px] font-light tracking-[-2.56px] ">
            People helping us achieve our ambitious goal.{" "}
          </h1>
        </div>
        <div className="flex flex-wrap items-center justify-center z-20 gap-x-[22px] gap-y-[27px]">
          <Image
            src="/Frame 1000002729.png"
            className="relative z-20"
            width={193}
            height={82}
          />
          <Image
            src="/Frame 1000002730.png"
            className="relative z-20"
            width={193}
            height={82}
          />
          <Image
            src="/Frame 1000002731.png"
            className="relative z-20"
            width={193}
            height={82}
          />
          <Image
            src="/Frame 1000002732.png"
            className="relative z-20"
            width={193}
            height={82}
          />
          <Image
            src="/Frame 1000002733.png"
            className="relative z-20"
            width={193}
            height={82}
          />
          <Image
            src="/Frame 1000002734.png"
            className="relative z-20"
            width={193}
            height={82}
          />
          <Image
            src="/Frame 1000002729 (1).png"
            className="relative z-20"
            width={193}
            height={82}
          />
          <Image
            src="/Frame 1000002732 (1).png"
            className="relative z-20"
            width={193}
            height={82}
          />
          <Image
            src="/Frame 1000002730 (1).png"
            className="relative z-20"
            width={193}
            height={82}
          />
          <Image
            src="/Frame 1000002731 (1).png"
            className="relative z-20"
            width={193}
            height={82}
          />
        </div>
      </section>
      <section className="flex justify-center pt-[122.06px] pb-[180.06px]">
        <div className="flex gap-[94px] items-center">
          <Image
            src="/Mask group (1).svg"
            className="relative z-20"
            width={442.87}
            height={442.87}
          />
          <div>
            <h1 className="text-[20px] leading-[19.28px] text-[#E5E5E5] font-['Graphikthin']">
              About our founder
            </h1>
            <h1 className="mt-[20px] text-[64px] leading-[61.68px] tracking-[-2.56px] text-[#E5E5E5] font-['Graphikthin']">
              The man behind the dream.
            </h1>
            <p className="text-base text-[#E5E5E5] w-[612.68px] mt-[55px] font-['Graphikthin']">
              Morbi mi amet at consequat pretium urna in elit sed. Volutpat urna
              tortor libero sed tellus massa id. Fermentum pulvinar nibh non vel
              ac adipiscing tortor adipiscing risus. Urna dignissim consectetur
              eu non sit dignissim sagittis. Ipsum amet pellentesque cras turpis
              dictum lorem. In lacus diam donec elit massa. Accumsan adipiscing
              rhoncus tincidunt pellentesque neque. Pellentesque sodales magna{" "}
            </p>
          </div>
        </div>
      </section>  
      <Success />
      <Upskill />
      <Footer />
    </>
  );
}
