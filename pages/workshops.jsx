import Image from "next/image";
import style from "@/styles/style.module.css";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Workshop() {
  return (
    <>
      <Navbar />
      <div className="absolute w-[100%] h-[100vh] top-0 left-0 overflow-x-hidden">
        <div className={style.backgroundboxworkshop}></div>
      </div>
      <main className="w-[100%]  pl-[80px] pt-[171.5px] pb-[272.5px] relative">
        <Image
          src="/image-from-rawpixel-id-12991629-png 1.svg"
          className="absolute top-[100.31px] right-[111.75px] h-[329.29px] w-[449.44px] z-[10]"
          width={107.16}
          height={107.16}
        />
        <Image
          src="/Saly-1.svg"
          className="absolute top-[-79.54px] right-[66.44px] h-[771.56px] w-[771.56px] z-[30]"
          width={107.16}
          height={107.16}
        />
        <Image
          src="/Ellipse 10.svg"
          className="absolute top-[235.91px] right-[31.44px] h-[320.36px] w-[320.36px] z-[20]"
          width={107.16}
          height={107.16}
        />
        <h1 className="w-[665.36px] z-[2] text-[64px] leading-[61.68px] font-['Graphikthin'] text-[#E5E5E5] tracking-[-2.56px]">
          Host a skill focused workshop at your college.{" "}
        </h1>
        <div className="flex mt-[49px] gap-[32px]">
          <button className="w-[165px] h-[53px] bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] font-[19.2px]">
            Contact Us{" "}
          </button>
        </div>
      </main>
      <section className="pb-[52px] pl-[80px] pr-[79px] pt-[118.84px]">
        <h1 className="mb-[75.16px] text-[64px] leading-[61.68px] text-[#E5E5E5] font-['Graphikthin'] tracking-[-2.56px] w-[738px]">
          One-day workshops on a wide variety of topics
        </h1>
        <div className="flex flex-wrap gap-x-[21px] gap-y-[24px]">
          <div className="pt-[20px] px-[18px] pb-[36px] w-[32.3%] bg-[#02455333] rounded-[10px] border-[1px] border-[#00C2FFA8]">
            <Image
              src="/cube.svg"
              width={107.16}
              className="w-[100%]"
              height={107.16}
            />
            <p className="mt-[37.81px] text-[28px] font-['Graphikthin'] leading-[31.36px] tracking-[-0.84px] mb-[17.91px] text-[#E5E5E5]">
              Product Design Mastery
            </p>
            <div className="flex gap-[8px]">
              <p className="py-[4px] px-[8px] text-[#797979] text-base font-['Graphikthin'] border-[#797979] border-[1px] rounded-[5px]">
                Product Design
              </p>
              <p className="py-[4px] px-[8px] text-[#797979] text-base font-['Graphikthin'] border-[#797979] border-[1px] rounded-[5px]">
                4 hours
              </p>
            </div>
          </div>
          <div className="pt-[20px] px-[18px] pb-[36px] w-[32.3%] bg-[#02455333] rounded-[10px] border-[1px] border-[#00C2FFA8]">
            <Image
              src="/cube.svg"
              width={107.16}
              className="w-[100%]"
              height={107.16}
            />
            <p className="mt-[37.81px] text-[28px] font-['Graphikthin'] leading-[31.36px] tracking-[-0.84px] mb-[17.91px] text-[#E5E5E5]">
              Product Design Mastery
            </p>
            <div className="flex gap-[8px]">
              <p className="py-[4px] px-[8px] text-[#797979] text-base font-['Graphikthin'] border-[#797979] border-[1px] rounded-[5px]">
                Product Design
              </p>
              <p className="py-[4px] px-[8px] text-[#797979] text-base font-['Graphikthin'] border-[#797979] border-[1px] rounded-[5px]">
                4 hours
              </p>
            </div>
          </div>
          <div className="pt-[20px] px-[18px] pb-[36px] w-[32.3%] bg-[#02455333] rounded-[10px] border-[1px] border-[#00C2FFA8]">
            <Image
              src="/cube.svg"
              width={107.16}
              className="w-[100%]"
              height={107.16}
            />
            <p className="mt-[37.81px] text-[28px] font-['Graphikthin'] leading-[31.36px] tracking-[-0.84px] mb-[17.91px] text-[#E5E5E5]">
              Product Design Mastery
            </p>
            <div className="flex gap-[8px]">
              <p className="py-[4px] px-[8px] text-[#797979] text-base font-['Graphikthin'] border-[#797979] border-[1px] rounded-[5px]">
                Product Design
              </p>
              <p className="py-[4px] px-[8px] text-[#797979] text-base font-['Graphikthin'] border-[#797979] border-[1px] rounded-[5px]">
                4 hours
              </p>
            </div>
          </div>
          <div className="pt-[20px] px-[18px] pb-[36px] w-[32.3%] bg-[#02455333] rounded-[10px] border-[1px] border-[#00C2FFA8]">
            <Image
              src="/cube.svg"
              width={107.16}
              className="w-[100%]"
              height={107.16}
            />
            <p className="mt-[37.81px] text-[28px] font-['Graphikthin'] leading-[31.36px] tracking-[-0.84px] mb-[17.91px] text-[#E5E5E5]">
              Product Design Mastery
            </p>
            <div className="flex gap-[8px]">
              <p className="py-[4px] px-[8px] text-[#797979] text-base font-['Graphikthin'] border-[#797979] border-[1px] rounded-[5px]">
                Product Design
              </p>
              <p className="py-[4px] px-[8px] text-[#797979] text-base font-['Graphikthin'] border-[#797979] border-[1px] rounded-[5px]">
                4 hours
              </p>
            </div>
          </div>
          <div className="pt-[20px] px-[18px] pb-[36px] w-[32.3%] bg-[#02455333] rounded-[10px] border-[1px] border-[#00C2FFA8]">
            <Image
              src="/cube.svg"
              width={107.16}
              className="w-[100%]"
              height={107.16}
            />
            <p className="mt-[37.81px] text-[28px] font-['Graphikthin'] leading-[31.36px] tracking-[-0.84px] mb-[17.91px] text-[#E5E5E5]">
              Product Design Mastery
            </p>
            <div className="flex gap-[8px]">
              <p className="py-[4px] px-[8px] text-[#797979] text-base font-['Graphikthin'] border-[#797979] border-[1px] rounded-[5px]">
                Product Design
              </p>
              <p className="py-[4px] px-[8px] text-[#797979] text-base font-['Graphikthin'] border-[#797979] border-[1px] rounded-[5px]">
                4 hours
              </p>
            </div>
          </div>
          <div className="pt-[20px] px-[18px] pb-[36px] w-[32.3%] bg-[#02455333] rounded-[10px] border-[1px] border-[#00C2FFA8]">
            <Image
              src="/cube.svg"
              width={107.16}
              className="w-[100%]"
              height={107.16}
            />
            <p className="mt-[37.81px] text-[28px] font-['Graphikthin'] leading-[31.36px] tracking-[-0.84px] mb-[17.91px] text-[#E5E5E5]">
              Product Design Mastery
            </p>
            <div className="flex gap-[8px]">
              <p className="py-[4px] px-[8px] text-[#797979] text-base font-['Graphikthin'] border-[#797979] border-[1px] rounded-[5px]">
                Product Design
              </p>
              <p className="py-[4px] px-[8px] text-[#797979] text-base font-['Graphikthin'] border-[#797979] border-[1px] rounded-[5px]">
                4 hours
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[47.84px] relative px-[80px] pb-[184.07px]">
        <div className="absolute w-[100%] h-[100vh] top-0 left-0 overflow-hidden">
          <div className={style.backgroundboxworkshop}></div>
        </div>
        <p className="text-[48px] leading-[46.26px] tracking-[-1.92px] text-[#E5E5E5] font-['Graphikthin'] text-[#E5E5E5] mb-[65.09px]">
          All at a low cost of
        </p>
        <div className="flex items-end">
          <h1 className="text-[257.99px] w-[547px] font-['Graphikthin'] font-semibold text-[#E5E5E5] tracking-[-10.35px] leading-[220px]">
            ₹100
          </h1>
          <p className="text-[48px] leading-[46.26px] tracking-[-1.92px] text-[#E5E5E5] font-['Graphikthin'] text-[#E5E5E5]">
            per student.{" "}
          </p>{" "}
        </div>
      </section>
      <div className="pt-[92.84px] relative z-20 pb-[95px] pl-[80px] pr-[79px]">
        <div className="flex justify-between">
          <p className="w-[792.98px] font-['Graphikthin'] text-[64px] font-light leading-[61.68px] tracking-[-2.56px] text-[#E5E5E5]">
            Get your students up to date on latest industry trends{" "}
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
            <h1 className="w-[340px] font-['Graphikthin'] font-normal mt-[53.48px] mb-[18.16px] text-[32px] leading-[40.32px] tracking-[-0.32px] text-[#E0E0E0]">
              Future-Focused Learning{" "}
            </h1>
            <p className="w-[355.15px] opacity-80 text-[#E0E0E0] text-base">
              Go beyond the trend. We explore the underlying forces shaping the
              job market and identify the skills that will remain relevant for
              years to come.
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
              Actionable Skills Development{" "}
            </h1>
            <p className="w-[355.15px] opacity-80 text-[#E0E0E0] text-base">
              Master in-demand skills through hands-on projects, real-world
              simulations, and expert-led sessions.
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
              Personalized Career Guidance{" "}
            </h1>
            <p className="w-[355.15px] opacity-80 text-[#E0E0E0] text-base">
              Don't just learn skills, use them. Get personalized guidance on
              crafting a strong resume, acing interviews, and building your
              professional network.
            </p>
          </div>
        </div>
      </div>
      <section className="pl-[80px] pr-[79px] pt-[92.84px] pb-[93px]">
        <h1 className="text-[64px] mb-[49.16px] leading-[61.88px] text-[##E5E5E5] opacity-90 tracking-[-2.56px] font-['Graphikthin'] w-[868px]">
          Workshops conducted by many passionate industry experts
        </h1>
        <div className="flex flex-wrap gap-x-[21px] gap-y-[24px]">
          <div className="flex border-[1px] border-[#FFFFFFB0] gap-[33.93px] items-center w-[413px] pr-[51px] pb-[41.93px] rounded-[5px] pl-[20.08px] pt-[36.08px] h-[161px]">
            <Image src="/Frame 1000002775.png" width={80.99} height={80.99} />
            <div>
              <h1 className="text-[#E5E5E5] text-[20px] leading-[22.4px] font-['Graphikthin']">
                Prashant Hegde
              </h1>
              <p className="text-[#A1A1A1] text-[20px] font-['Graphikthin'] leading-[24px] mt-[8px]">
                Senior Designer, Spotify
              </p>
            </div>
          </div>
          <div className="flex border-[1px] border-[#FFFFFFB0] gap-[33.93px] items-center w-[413px] pr-[51px] pb-[41.93px] rounded-[5px] pl-[20.08px] pt-[36.08px] h-[161px]">
            <Image src="/Frame 1000002775.png" width={80.99} height={80.99} />
            <div>
              <h1 className="text-[#E5E5E5] text-[20px] leading-[22.4px] font-['Graphikthin']">
                Prashant Hegde
              </h1>
              <p className="text-[#A1A1A1] text-[20px] font-['Graphikthin'] leading-[24px] mt-[8px]">
                Senior Designer, Spotify
              </p>
            </div>
          </div>
          <div className="flex border-[1px] border-[#FFFFFFB0] gap-[33.93px] items-center w-[413px] pr-[51px] pb-[41.93px] rounded-[5px] pl-[20.08px] pt-[36.08px] h-[161px]">
            <Image src="/Frame 1000002775.png" width={80.99} height={80.99} />
            <div>
              <h1 className="text-[#E5E5E5] text-[20px] leading-[22.4px] font-['Graphikthin']">
                Prashant Hegde
              </h1>
              <p className="text-[#A1A1A1] text-[20px] font-['Graphikthin'] leading-[24px] mt-[8px]">
                Senior Designer, Spotify
              </p>
            </div>
          </div>
          <div className="flex border-[1px] border-[#FFFFFFB0] gap-[33.93px] items-center w-[413px] pr-[51px] pb-[41.93px] rounded-[5px] pl-[20.08px] pt-[36.08px] h-[161px]">
            <Image src="/Frame 1000002775.png" width={80.99} height={80.99} />
            <div>
              <h1 className="text-[#E5E5E5] text-[20px] leading-[22.4px] font-['Graphikthin']">
                Prashant Hegde
              </h1>
              <p className="text-[#A1A1A1] text-[20px] font-['Graphikthin'] leading-[24px] mt-[8px]">
                Senior Designer, Spotify
              </p>
            </div>
          </div>
          <div className="flex border-[1px] border-[#FFFFFFB0] gap-[33.93px] items-center w-[413px] pr-[51px] pb-[41.93px] rounded-[5px] pl-[20.08px] pt-[36.08px] h-[161px]">
            <Image src="/Frame 1000002775.png" width={80.99} height={80.99} />
            <div>
              <h1 className="text-[#E5E5E5] text-[20px] leading-[22.4px] font-['Graphikthin']">
                Prashant Hegde
              </h1>
              <p className="text-[#A1A1A1] text-[20px] font-['Graphikthin'] leading-[24px] mt-[8px]">
                Senior Designer, Spotify
              </p>
            </div>
          </div>
          <div className="flex border-[1px] border-[#FFFFFFB0] gap-[33.93px] items-center w-[413px] pr-[51px] pb-[41.93px] rounded-[5px] pl-[20.08px] pt-[36.08px] h-[161px]">
            <Image src="/Frame 1000002775.png" width={80.99} height={80.99} />
            <div>
              <h1 className="text-[#E5E5E5] text-[20px] leading-[22.4px] font-['Graphikthin']">
                Prashant Hegde
              </h1>
              <p className="text-[#A1A1A1] text-[20px] font-['Graphikthin'] leading-[24px] mt-[8px]">
                Senior Designer, Spotify
              </p>
            </div>
          </div>
          <div className="flex border-[1px] border-[#FFFFFFB0] gap-[33.93px] items-center w-[413px] pr-[51px] pb-[41.93px] rounded-[5px] pl-[20.08px] pt-[36.08px] h-[161px]">
            <Image src="/Frame 1000002775.png" width={80.99} height={80.99} />
            <div>
              <h1 className="text-[#E5E5E5] text-[20px] leading-[22.4px] font-['Graphikthin']">
                Prashant Hegde
              </h1>
              <p className="text-[#A1A1A1] text-[20px] font-['Graphikthin'] leading-[24px] mt-[8px]">
                Senior Designer, Spotify
              </p>
            </div>
          </div>
          <div className="flex border-[1px] border-[#FFFFFFB0] gap-[33.93px] items-center w-[413px] pr-[51px] pb-[41.93px] rounded-[5px] pl-[20.08px] pt-[36.08px] h-[161px]">
            <Image src="/Frame 1000002775.png" width={80.99} height={80.99} />
            <div>
              <h1 className="text-[#E5E5E5] text-[20px] leading-[22.4px] font-['Graphikthin']">
                Prashant Hegde
              </h1>
              <p className="text-[#A1A1A1] text-[20px] font-['Graphikthin'] leading-[24px] mt-[8px]">
                Senior Designer, Spotify
              </p>
            </div>
          </div>
          <div className="flex border-[1px] border-[#FFFFFFB0] gap-[33.93px] items-center w-[413px] pr-[51px] pb-[41.93px] rounded-[5px] pl-[20.08px] pt-[36.08px] h-[161px]">
            <Image src="/Frame 1000002775.png" width={80.99} height={80.99} />
            <div>
              <h1 className="text-[#E5E5E5] text-[20px] leading-[22.4px] font-['Graphikthin']">
                Prashant Hegde
              </h1>
              <p className="text-[#A1A1A1] text-[20px] font-['Graphikthin'] leading-[24px] mt-[8px]">
                Senior Designer, Spotify
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="py-[70.5px] flex justify-between relative z-20 px-[80px]">
        <div className="w-[675.77px]">
          <p className="text-[64px] mb-[41px] leading-[61.88px] text-[#E5E5E5] tracking-[-2.56px] font-['Graphikthin']">
            Have tailored workshops at your institute at a low price of ₹100 per
            student{" "}
          </p>
          <p className="text-[20px] leading-[19.28px] tracking-[-0.2px] text-[#E5E5E5] font-['Graphikthin']">
            Fill out the form or mail us at{" "}
            <a
              href="mailto:hire@parallel.com"
              className="border-b-[1px] border-[white]"
            >
              hello@parallel.com
            </a>
          </p>
        </div>
        <div className="w-[442px] flex flex-col z-20 gap-[32px] h-[605px] px-[37px] py-[34px] rounded-[14px] bg-[#FFFFFF1A]">
          <div className="flex flex-col gap-[16px]">
            <p className="text-[16px] leading-[19.2px]">Name</p>
            <input
              type="text"
              className="h-[54px] rounded-[4px] border-[1px] border-white pl-[17.51px] bg-[transparent] placeholder-[#ffffff99]"
            />
          </div>
          <div className="flex flex-col gap-[16px]">
            <p className="text-[16px] leading-[19.2px]">College Name</p>
            <input
              type="text"
              className="h-[54px] rounded-[4px] border-[1px] border-white pl-[17.51px] bg-[transparent] placeholder-[#ffffff99]"
            />
          </div>
          <div className="flex flex-col gap-[16px]">
            <p className="text-[16px] leading-[19.2px]">College Email</p>
            <input
              type="email"
              className="h-[54px] rounded-[4px] border-[1px] border-white pl-[17.51px] bg-[transparent] placeholder-[#ffffff99]"
            />
          </div>
          <div className="flex flex-col gap-[16px]">
            <p className="text-[16px] leading-[19.2px]">Destination</p>
            <input
              type="text"
              className="h-[54px] rounded-[4px] border-[1px] border-white pl-[17.51px] bg-[transparent] placeholder-[#ffffff99]"
            />
          </div>
          <button className="w-full h-[53px] bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] font-[19.2px]">
            Talk to our experts{" "}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
