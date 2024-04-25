import Image from "next/image";
import style from "@/styles/style.module.css";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Courses() {
  return (
    <>
      <Navbar />
      <main className="pl-[79.85px] max-md:px-[40px] max-sm:px-[20px] pr-[79.03px] pt-[88px] pb-[132px] flex justify-between max-hamburger:flex-col max-hamburger:gap-[30px]">
        <div className="mt-[27.66px]">
          <h1 className="w-[680.41px] max-smalllaptop:w-[580px] max-md:w-full font-['Graphikthin'] text-[104.57px] leading-[102.48px] tracking-[-5.2px] text-[#E5E5E5] font-light  max-smalllaptop:tracking-[-2.56px] max-smalllaptop:text-[84px] max-sm:text-[64px] max-smalllaptop:leading-[102%]">
            Hire the best professio
            <span className="hidden max-smallphone:inline">
              <br />-{" "}
            </span>
            nals at zero cost.{" "}
          </h1>
          <button className="w-[165px] max-hamburger:hidden mt-[49.05px] h-[53px] bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] font-[19.2px]">
            Contact Us{" "}
          </button>
        </div>
        <Image
          src="/hire.png"
          className="object-contain max-md:w-full"
          width={522}
          height={493}
        />
        <button className="max-hamburger:block max-md:w-full w-[165px] hidden mt-[20px] h-[53px] bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] font-[19.2px]">
          Contact Us{" "}
        </button>
      </main>
      <section className="px-[80px] max-md:px-[40px] max-sm:px-[20px] max-sm:py-0 relative pb-[96px] pt-[96.09px] flex flex-col justify-center items-center gap-[59.91px]">
        <div className="w-[890.53px] max-hamburger:w-full">
          <h1 className="text-center text-[#E5E5E5] relative z-20 text-[64px] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] font-['Graphikthin'] leading-[61.68px] font-light tracking-[-2.56px] ">
            Our hiring partners never waste time screening thousands of unready
            candidates.{" "}
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
      <section className="pt-[72.09px] max-sm:py-20 max-sm:px-[20px] max-md:px-[40px] relative z-20 pb-[95px] pl-[79.53px] pr-[78.85px]">
        <div className="flex justify-between max-smalllaptop:gap-[50px]">
          <p className="w-[890.53px] font-['Graphikthin'] text-[64px] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] font-light leading-[61.68px] tracking-[-2.56px] text-[#E5E5E5]">
            Candidates from Parallel have skills tailored to industry needs.{" "}
          </p>
        </div>
        <div className="flex gap-[21px] mt-[50.91px] max-md:flex-col max-hamburger:flex-wrap max-hamburger:justify-center">
          <div
            className={`pl-[28px] w-[33%] h-[466px] max-lg:h-[480px] pb-[41.87px] pr-[29.85px] border-[1px] pt-[31.57px] rounded-[8px] max-sm:px-[20px] max-sm:py-[16px] max-hamburger:w-[45%] max-md:w-full max-md:h-auto ${style.bordergradient}`}
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
              Hire only the top 1% of the candidates{" "}
            </h1>
            <p className="w-[355.15px] opacity-80 text-[#E0E0E0] text-base max-bigscreen:w-[310px] max-xl:w-full">
              Our students are filtered multiple times. We utilize a
              multi-layered screening process that combines in-depth interviews,
              advanced skills testing, and reference checks to identify truly
              exceptional candidates.
            </p>
          </div>
          <div
            className={`pl-[28px] w-[33%] h-[466px] max-lg:h-[480px] pb-[41.87px] pr-[29.85px] border-[1px] pt-[31.57px] rounded-[8px] max-sm:px-[20px] max-sm:py-[16px] max-hamburger:w-[45%] max-md:w-full max-md:h-auto ${style.bordergradient}`}
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
              Get candidates with relevant skills{" "}
            </h1>
            <p className="w-[355.15px] opacity-80 text-[#E0E0E0] text-base max-bigscreen:w-[310px] max-xl:w-full">
              We train our students only on relevant skills. We utilize
              skill-specific tests, portfolio reviews, and reference checks to
              ensure candidates possess the necessary proficiency.
            </p>
          </div>
          <div
            className={`pl-[28px] w-[33%] h-[466px] max-lg:h-[480px] pb-[41.87px] pr-[29.85px] border-[1px] pt-[31.57px] rounded-[8px] max-sm:px-[20px] max-sm:py-[16px] max-hamburger:w-[45%] max-md:w-full max-md:h-auto ${style.bordergradient}`}
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
              Don’t worry about hiring the wrong people{" "}
            </h1>
            <p className="w-[355.15px] opacity-80 text-[#E0E0E0] text-base max-bigscreen:w-[310px] max-xl:w-full">
              We make sure to put our candidates through multiple behavioral
              assessments. With whom you can build a strong, collaborative
              environment where employees feel valued and engaged.
            </p>
          </div>
        </div>
      </section>
      <div className="py-[70.5px] flex justify-between max-md:flex-col gap-[20px] max-md:gap-[50px] relative z-20 px-[80px] max-sm:px-[20px] max-md:px-[40px]">
        <div className="w-[675.77px] max-md:w-full">
          <p className="text-[64px] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] mb-[41px] leading-[61.88px] tracking-[-2.56px] font-['Graphikthin']">
            Don’t settle for anyone other than the best.
          </p>
          <p className="text-[20px] leading-[19.28px] tracking-[-0.2px] text-[#E5E5E5] font-['Graphikthin']">
            Fill out the form or mail us at{" "}
            <a
              href="mailto:hire@parallel.com"
              className="border-b-[1px] border-[white]"
            >
              hire@parallel.com
            </a>
          </p>
        </div>
        <div className="w-[442px] max-md:w-full flex flex-col z-20 gap-[32px] max-md:h-auto max-sm:gap-[20px] max-sm:p-[20px] h-[605px] px-[37px] py-[34px] rounded-[14px] bg-[#FFFFFF1A]">
          <div className="flex flex-col gap-[16px]">
            <p className="text-[16px] leading-[19.2px]">Name</p>
            <input
              type="text"
              className="h-[54px] rounded-[4px] border-[1px] border-white pl-[17.51px] bg-[transparent] placeholder-[#ffffff99]"
            />
          </div>
          <div className="flex flex-col gap-[16px]">
            <p className="text-[16px] leading-[19.2px]">Company Name</p>
            <input
              type="text"
              className="h-[54px] rounded-[4px] border-[1px] border-white pl-[17.51px] bg-[transparent] placeholder-[#ffffff99]"
            />
          </div>
          <div className="flex flex-col gap-[16px]">
            <p className="text-[16px] leading-[19.2px]">Work Email</p>
            <input
              type="email"
              className="h-[54px] rounded-[4px] border-[1px] border-white pl-[17.51px] bg-[transparent] placeholder-[#ffffff99]"
            />
          </div>
          <div className="flex flex-col gap-[16px]">
            <p className="text-[16px] leading-[19.2px]">Designation</p>
            <input
              type="text"
              className="h-[54px] rounded-[4px] border-[1px] border-white pl-[17.51px] bg-[transparent] placeholder-[#ffffff99]"
            />
          </div>
          <button className="w-full h-[53px] bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] font-[19.2px]">
            Hire from us{" "}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
