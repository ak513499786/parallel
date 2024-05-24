import Image from "next/image";
import style from "@/styles/style.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Upskill from "../components/upskill";
import Success from "../components/success";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="absolute w-[100vw] h-[822px] top-0 left-0 overflow-hidden">
        <div className={style.fullgrid}></div>
      </div>
      <main className="flex justify-center pt-[190.35px] max-hamburger:pt-[100px] max-md:pt-[80px] max-sm:pt-[50px] px-[80px] max-md:px-[40px] max-sm:px-[20px] max-md:pb-0 pb-[220.65px]">
        <h1 className="w-[1016.16px] font-['Graphikthin'] text-[104.57px] leading-[106.66px] tracking-[-5.2px] text-center max-smalllaptop:tracking-[-2.56px] max-smalllaptop:text-[84px] max-sm:text-[64px] max-smallphone:text-[36px] max-sm:tracking-tight max-smalllaptop:leading-[102%]">
          We want to make upskilling accessible to{" "}
          <span className="font-bold font-['Graphik']">everyone.</span>
        </h1>
      </main>
      <section className="relative">
        <div className="w-[100%] overflow-hidden absolute h-[1459px]">
          <div className={`${style.client}`}></div>
        </div>{" "}
        <section className="py-[241.5px] relative z-20 max-md:py-20 px-[80px] max-sm:px-[20px] max-md:px-[40px] flex justify-center">
          <div className="w-[1081.52px]">
            <p className="text-center text-[20px] leading-[19.28px] text-[#E5E5E5] font-['Graphikthin'] mb-[20px]">
              Our mission
            </p>
            <h1 className="text-[85.04px] max-hamburger:text-[64px] max-sm:text-[45px] max-hamburger:leading-[120%] leading-[81.97px] text-center text-[#E5E5E5] tracking-[-3.4px] font-['Graphikthin']">
              To make quality education as affordable as it gets.
            </h1>
          </div>
        </section>
        <section className="px-[80px] max-sm:px-[20px] max-md:px-[40px] relative py-[100px] flex flex-col justify-center items-center gap-[65px]">
          <div className="w-[813.91px] max-hamburger:w-full">
            <p className="text-center text-[#E5E5E5] font-['Graphikthin'] font-light mb-[20px] text-[20px] leading-[19.28px]">
              Our partners
            </p>
            <h1 className="text-center text-[#E5E5E5] relative z-20 text-[64px] font-['Graphikthin'] leading-[61.68px] font-light tracking-[-2.56px] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%]">
              People helping us achieve our ambitious goal.{" "}
            </h1>
          </div>
          <div className="flex flex-wrap items-center justify-center z-20 gap-x-[22px] gap-y-[27px]">
            <Image
              src="/Frame 1000002729.png"
              className="relative z-20 max-sm:w-[46%]"
              width={193}
              height={82}
            />
            <Image
              src="/Frame 1000002730.png"
              className="relative z-20 max-sm:w-[46%]"
              width={193}
              height={82}
            />
            <Image
              src="/Frame 1000002731.png"
              className="relative z-20 max-sm:w-[46%]"
              width={193}
              height={82}
            />
            <Image
              src="/Frame 1000002732.png"
              className="relative z-20 max-sm:w-[46%]"
              width={193}
              height={82}
            />
            <Image
              src="/Frame 1000002733.png"
              className="relative z-20 max-sm:w-[46%]"
              width={193}
              height={82}
            />
            <Image
              src="/Frame 1000002734.png"
              className="relative z-20 max-sm:w-[46%]"
              width={193}
              height={82}
            />
            <Image
              src="/Frame 1000002729 (1).png"
              className="relative z-20 max-sm:w-[46%]"
              width={193}
              height={82}
            />
            <Image
              src="/Frame 1000002732 (1).png"
              className="relative z-20 max-sm:w-[46%]"
              width={193}
              height={82}
            />
            <Image
              src="/Frame 1000002730 (1).png"
              className="relative z-20 max-sm:w-[46%]"
              width={193}
              height={82}
            />
            <Image
              src="/Frame 1000002731 (1).png"
              className="relative z-20 max-sm:w-[46%]"
              width={193}
              height={82}
            />
          </div>
        </section>
      </section>
      <section className="flex justify-center pt-[122.06px] max-md:py-0 max-sm:px-[20px] max-md:px-[40px] px-[80px] pb-[180.06px]">
        <div className="flex gap-[94px] max-xl:gap-[30px] max-hamburger:flex-col items-center">
          <Image
            src="/Mask group (1).svg"
            className="relative z-20 max-md:w-full"
            width={442.87}
            height={442.87}
          />
          <div>
            <h1 className="text-[20px] leading-[19.28px] text-[#E5E5E5] font-['Graphikthin']">
              About our founder
            </h1>
            <h1 className="mt-[20px] text-[64px] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] leading-[61.68px] tracking-[-2.56px] text-[#E5E5E5] font-['Graphikthin']">
              The man behind the dream.
            </h1>
            <p className="text-base text-[#E5E5E5] opacity-80 max-smalllaptop:w-[400px] max-hamburger:w-full w-[612.68px] mt-[55px] max-md:mt-[40px] font-['Graphikthin']">
              A tech entrepreneur who has scaled up software businesses from
              $100K to $10M in revenue and specializes in building world-class
              tech teams from the ground up. Syed has seen all the sides of
              education.
              <br />
              <br />
              Coming from a humble background, he has experienced a fair share
              of struggles when it comes to education. Hence, is on a mission to
              do his best to make sure the upcoming generations have it better
              than him when it comes to learning.
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
