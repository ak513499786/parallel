import Image from "next/image";
import style from "@/styles/style.module.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";

export default function Workshop() {
  const [Name, setName] = useState("");
  const [College_Name, setCollege_Name] = useState("");
  const [College_Email, setCollege_Email] = useState("");
  const [Designation, setDesignation] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      Name,
      College_Name,
      College_Email,
      Designation,
    };
    try {
      const response = await axios.post("/api/workshop", data);
      console.log("Data sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="absolute w-[100%] h-[100vh] top-0 left-0 overflow-x-hidden">
        <div className={style.backgroundboxworkshop}></div>
      </div>
      <main className="w-[100%]  pl-[80px] pt-[171.5px] max-hamburger:py-[100px] max-md:py-[80px] max-sm:py-[50px] pb-[272.5px] relative max-sm:px-[20px] max-md:px-[40px] max-smalllaptop:h-[1150px] max-hamburger:h-auto max-smalllaptop:overflow-hidden">
        <h1 className="w-[665.36px] z-[2] text-[64px] max-smalllaptop:w-full max-hamburger:text-[48px] max-hamburger:leading-[120%] leading-[61.68px] font-['Graphikthin'] text-[#E5E5E5] tracking-[-2.56px]">
          Host a skill focused workshop at your college.{" "}
        </h1>
        <div className="flex mt-[49px] gap-[32px]">
          <Link href={"/contact-us"} className="max-md:w-full">
            <button className="w-[165px] max-md:w-full h-[53px] bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] font-[19.2px]">
              Contact Us{" "}
            </button>
          </Link>
        </div>
        <Image
          src="/image-from-rawpixel-id-12991629-png 1.svg"
          className="absolute top-[100.31px] right-[111.75px] max-smalllaptop:top-[50px]  max-smalllaptop:scale-100 max-smalllaptop:right-[-300px] max-xl:scale-75 max-smalllaptop:relative max-hamburger:hidden h-[329.29px] w-[449.44px] z-[10]"
          width={107.16}
          height={107.16}
        />
        <Image
          src="/Saly-1.svg"
          className="absolute max-xl:scale-75  max-smalllaptop:top-[-460px] max-smalllaptop:scale-100 max-smalllaptop:right-[-80px] max-smalllaptop:relative max-hamburger:hidden top-[-79.54px] right-[66.44px] h-[771.56px] w-[771.56px] z-[30]"
          width={107.16}
          height={107.16}
        />
        <Image
          src="/Ellipse 10.svg"
          className="absolute top-[235.91px] max-xl:scale-75 max-smalllaptop:relative max-smalllaptop:top-[-920px]  max-smalllaptop:scale-100 max-smalllaptop:right-[-500px] max-hamburger:hidden right-[31.44px] h-[320.36px] w-[320.36px] z-[20]"
          width={107.16}
          height={107.16}
        />
      </main>
      <section className="pb-[52px] pl-[80px] max-sm:px-[20px] max-md:px-[40px] maxmd:py-[80px] pr-[79px] pt-[118.84px]">
        <h1 className="mb-[75.16px] text-[64px] leading-[61.68px] text-[#E5E5E5] font-['Graphikthin'] tracking-[-2.56px] w-[738px] max-smalllaptop:w-full max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%]">
          One-day workshops on a wide variety of topics
        </h1>
        <div className="flex flex-wrap gap-x-[21px] max-xl:justify-center gap-y-[24px]">
          <div className="pt-[20px] px-[18px] pb-[36px] w-[32%] max-xl:w-[30%] max-hamburger:w-[45%] max-md:w-full bg-[#02455333] rounded-[10px] border-[1px] border-[#00C2FFA8]">
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
          <div className="pt-[20px] px-[18px] pb-[36px] w-[32%] max-xl:w-[30%] max-hamburger:w-[45%] max-md:w-full bg-[#02455333] rounded-[10px] border-[1px] border-[#00C2FFA8]">
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
          <div className="pt-[20px] px-[18px] pb-[36px] w-[32%] max-xl:w-[30%] max-hamburger:w-[45%] max-md:w-full bg-[#02455333] rounded-[10px] border-[1px] border-[#00C2FFA8]">
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
          <div className="pt-[20px] px-[18px] pb-[36px] w-[32%] max-xl:w-[30%] max-hamburger:w-[45%] max-md:w-full bg-[#02455333] rounded-[10px] border-[1px] border-[#00C2FFA8]">
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
          <div className="pt-[20px] px-[18px] pb-[36px] w-[32%] max-xl:w-[30%] max-hamburger:w-[45%] max-md:w-full bg-[#02455333] rounded-[10px] border-[1px] border-[#00C2FFA8]">
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
          <div className="pt-[20px] px-[18px] pb-[36px] w-[32%] max-xl:w-[30%] max-hamburger:w-[45%] max-md:w-full bg-[#02455333] rounded-[10px] border-[1px] border-[#00C2FFA8]">
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
      <section className="pt-[47.84px] max-md:px-[40px] max-sm:px-[20px] max-md:py-[40px] relative px-[80px] pb-[184.07px]">
        <div className="absolute w-[100%] h-[100vh] top-0 left-0 overflow-hidden">
          <div className={style.backgroundboxworkshop}></div>
        </div>
        <p className="text-[48px] leading-[46.26px] tracking-[-1.92px] max-md:text-[32px] max-md:leading-[120%] text-[#E5E5E5] font-['Graphikthin'] text-[#E5E5E5] mb-[65.09px]">
          All at a low cost of
        </p>
        <div className="flex max-smallphone:flex-col items-end">
          <h1 className="text-[257.99px] max-hamburger:text-[187px] max-md:text-[157px] max-hamburger:leading-[90%] max-hamburger:w-auto max-sm:text-[107px] max-sm:pr-[10px] max-smallphone:w-full w-[547px] font-['Graphikthin'] text-[#E5E5E5] tracking-[-10.35px] leading-[220px]">
            ₹<span className="font-bold font-['Graphik']">100</span>
          </h1>
          <p className="text-[48px] leading-[46.26px] max-sm:text-[28px] max-sm:leading-[32px] tracking-[-1.92px] text-[#E5E5E5] font-['Graphikthin'] text-[#E5E5E5]">
            per student.{" "}
          </p>{" "}
        </div>
      </section>
      <div className="pt-[92.84px] max-sm:py-10 max-sm:px-[20px] max-md:px-[40px]  relative z-20 pb-[95px] pl-[80px] pr-[79px]">
        <div className="flex justify-between">
          <p className="w-[792.98px] font-['Graphikthin'] text-[64px] font-light leading-[61.68px] tracking-[-2.56px] text-[#E5E5E5] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%]">
            Get your students up to date on latest industry trends{" "}
          </p>
        </div>
        <div className="flex gap-[21px] mt-[49.16px] max-md:flex-col max-hamburger:flex-wrap max-hamburger:justify-center">
          <div
            className={`pl-[28px] max-sm:px-[20px] max-sm:py-[16px] w-[33%] max-hamburger:w-[45%] max-md:w-full h-[434px] max-md:h-auto pb-[41.87px] pr-[29.85px] border-[1px] pt-[31.57px] rounded-[8px] ${style.bordergradient}`}
          >
            <div className="bg-[#1F1F1F] w-[105px] pt-[26.26px] pb-[26.01px] pl-[26.39px] pr-[26.88px] border-[1px] rounded-[6px] border-[#FFFFFF66] ">
              {" "}
              <Image
                src="/book-reading--book-reading-learning.svg"
                width={51.73}
                height={51.73}
              />
            </div>
            <h1 className="w-[340px] max-bigscreen:w-[310px] max-xl:w-[230px] max-md:w-full max-xl:mt-[30px] font-['Graphikthin'] font-normal mt-[53.05px] mb-[18.16px] text-[32px] max-xl:text-[24px] max-xl:leading-[120%] leading-[40.32px] tracking-[-0.32px]">
              Future-Focused Learning{" "}
            </h1>
            <p className="w-[355.15px] max-bigscreen:w-[310px] max-xl:w-full h-[136.91px] max-xl:h-[165px] max-lg:h-[200px] max-md:h-auto opacity-80 text-[#E0E0E0] text-base">
              Go beyond the trend. We explore the underlying forces shaping the
              job market and identify the skills that will remain relevant for
              years to come.
            </p>
          </div>
          <div
            className={`pl-[28px] max-md:h-auto max-sm:px-[20px] max-sm:py-[16px] w-[33%] max-hamburger:w-[45%] max-md:w-full h-[434px] pb-[41.87px] pr-[29.85px] border-[1px] pt-[31.57px] rounded-[8px] ${style.bordergradient}`}
          >
            <div className="bg-[#1F1F1F] w-[105px] px-[26.63px] py-[26.13px] border-[1px] rounded-[6px] border-[#FFFFFF66] ">
              {" "}
              <Image
                src="/bag-suitcase-2--product-business-briefcase.svg"
                width={51.73}
                height={51.73}
              />
            </div>
            <h1 className="w-[340px] max-bigscreen:w-[310px] max-xl:w-[230px] max-md:w-full max-xl:mt-[30px] font-['Graphikthin'] font-normal mt-[53.05px] mb-[18.16px] text-[32px] max-xl:text-[24px] max-xl:leading-[120%] leading-[40.32px] tracking-[-0.32px]">
              Actionable Skills Development{" "}
            </h1>
            <p className="w-[355.15px] max-bigscreen:w-[310px] max-xl:w-full h-[136.91px] max-xl:h-[165px] max-lg:h-[200px] max-md:h-auto opacity-80 text-[#E0E0E0] text-base">
              Master in-demand skills through hands-on projects, real-world
              simulations, and expert-led sessions.
            </p>
          </div>
          <div
            className={`pl-[28px] max-md:h-auto max-sm:px-[20px] max-sm:py-[16px] w-[33%] max-hamburger:w-[45%] max-md:w-full h-[434px] pb-[41.87px] pr-[29.85px] border-[1px] pt-[31.57px] rounded-[8px] ${style.bordergradient}`}
          >
            <div className="bg-[#1F1F1F] w-[105px] pt-[22.3px] pb-[21.7px] pl-[22.95px] pr-[22.05px] border-[1px] rounded-[6px] border-[#FFFFFF66] ">
              {" "}
              <Image
                src="/Calendar-3--Streamline-Ultimate.svg.svg"
                width={60}
                height={60}
              />
            </div>
            <h1 className="w-[340px] max-bigscreen:w-[310px] max-xl:w-[230px] max-md:w-full max-xl:mt-[30px] font-['Graphikthin'] font-normal mt-[53.05px] mb-[18.16px] text-[32px] max-xl:text-[24px] max-xl:leading-[120%] leading-[40.32px] tracking-[-0.32px]">
              Personalized Career Guidance{" "}
            </h1>
            <p className="w-[355.15px] max-bigscreen:w-[310px] max-xl:w-full h-[136.91px] max-xl:h-[165px] max-lg:h-[200px] max-md:h-auto opacity-80 text-[#E0E0E0] text-base">
              Don't just learn skills, use them. Get personalized guidance on
              crafting a strong resume, acing interviews, and building your
              professional network.
            </p>
          </div>
        </div>
      </div>
      <section className="pl-[80px] max-sm:py-10 max-sm:px-[20px] max-md:px-[40px] pr-[79px] pt-[92.84px] pb-[93px]">
        <h1 className="text-[64px] max-hamburger:w-full mb-[49.16px] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] leading-[61.88px] text-[##E5E5E5] opacity-90 tracking-[-2.56px] font-['Graphikthin'] w-[868px]">
          Workshops conducted by many passionate industry experts
        </h1>
        <div className="flex flex-wrap gap-x-[21px] gap-y-[24px]">
          <div className="flex border-[1px] border-[#FFFFFFB0] gap-[33.93px] items-center w-[413px] pr-[51px] pb-[41.93px] rounded-[5px] pl-[20.08px] pt-[36.08px] h-[161px] max-biggerscreen:w-[32%] max-xl:px-[20px] max-xl:w-[31%] max-smalllaptop:w-[48%] max-md:w-full max-smalllaptop:p-[20px] max-smalllaptop:h-auto max-smallphone:p-[10px] max-hamburger:gap-[20px]">
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
          <div className="flex border-[1px] border-[#FFFFFFB0] gap-[33.93px] items-center w-[413px] pr-[51px] pb-[41.93px] rounded-[5px] pl-[20.08px] pt-[36.08px] h-[161px] max-biggerscreen:w-[32%] max-xl:px-[20px] max-xl:w-[31%] max-smalllaptop:w-[48%] max-md:w-full max-smalllaptop:p-[20px] max-smalllaptop:h-auto max-smallphone:p-[10px] max-hamburger:gap-[20px]">
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
          <div className="flex border-[1px] border-[#FFFFFFB0] gap-[33.93px] items-center w-[413px] pr-[51px] pb-[41.93px] rounded-[5px] pl-[20.08px] pt-[36.08px] h-[161px] max-biggerscreen:w-[32%] max-xl:px-[20px] max-xl:w-[31%] max-smalllaptop:w-[48%] max-md:w-full max-smalllaptop:p-[20px] max-smalllaptop:h-auto max-smallphone:p-[10px] max-hamburger:gap-[20px]">
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
          <div className="flex border-[1px] border-[#FFFFFFB0] gap-[33.93px] items-center w-[413px] pr-[51px] pb-[41.93px] rounded-[5px] pl-[20.08px] pt-[36.08px] h-[161px] max-biggerscreen:w-[32%] max-xl:px-[20px] max-xl:w-[31%] max-smalllaptop:w-[48%] max-md:w-full max-smalllaptop:p-[20px] max-smalllaptop:h-auto max-smallphone:p-[10px] max-hamburger:gap-[20px]">
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
          <div className="flex border-[1px] border-[#FFFFFFB0] gap-[33.93px] items-center w-[413px] pr-[51px] pb-[41.93px] rounded-[5px] pl-[20.08px] pt-[36.08px] h-[161px] max-biggerscreen:w-[32%] max-xl:px-[20px] max-xl:w-[31%] max-smalllaptop:w-[48%] max-md:w-full max-smalllaptop:p-[20px] max-smalllaptop:h-auto max-smallphone:p-[10px] max-hamburger:gap-[20px]">
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
          <div className="flex border-[1px] border-[#FFFFFFB0] gap-[33.93px] items-center w-[413px] pr-[51px] pb-[41.93px] rounded-[5px] pl-[20.08px] pt-[36.08px] h-[161px] max-biggerscreen:w-[32%] max-xl:px-[20px] max-xl:w-[31%] max-smalllaptop:w-[48%] max-md:w-full max-smalllaptop:p-[20px] max-smalllaptop:h-auto max-smallphone:p-[10px] max-hamburger:gap-[20px]">
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
          <div className="flex border-[1px] border-[#FFFFFFB0] gap-[33.93px] items-center w-[413px] pr-[51px] pb-[41.93px] rounded-[5px] pl-[20.08px] pt-[36.08px] h-[161px] max-biggerscreen:w-[32%] max-xl:px-[20px] max-xl:w-[31%] max-smalllaptop:w-[48%] max-md:w-full max-smalllaptop:p-[20px] max-smalllaptop:h-auto max-smallphone:p-[10px] max-hamburger:gap-[20px]">
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
          <div className="flex border-[1px] border-[#FFFFFFB0] gap-[33.93px] items-center w-[413px] pr-[51px] pb-[41.93px] rounded-[5px] pl-[20.08px] pt-[36.08px] h-[161px] max-biggerscreen:w-[32%] max-xl:px-[20px] max-xl:w-[31%] max-smalllaptop:w-[48%] max-md:w-full max-smalllaptop:p-[20px] max-smalllaptop:h-auto max-smallphone:p-[10px] max-hamburger:gap-[20px]">
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
          <div className="flex max-smalllaptop:hidden border-[1px] border-[#FFFFFFB0] gap-[33.93px] items-center w-[413px] pr-[51px] pb-[41.93px] rounded-[5px] pl-[20.08px] pt-[36.08px] h-[161px] max-biggerscreen:w-[32%] max-xl:px-[20px] max-xl:w-[31%] max-smalllaptop:w-[48%] max-md:w-full max-smalllaptop:p-[20px] max-smalllaptop:h-auto max-smallphone:p-[10px]">
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
      <div className="py-[70.5px] flex justify-between max-md:flex-col gap-[20px] max-md:gap-[50px] relative z-20 px-[80px] max-sm:px-[20px] max-md:px-[40px]">
        <div className="w-[675.77px] max-md:w-full">
          <p className="text-[64px] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] mb-[41px] leading-[61.88px] text-[#E5E5E5] tracking-[-2.56px] font-['Graphikthin']">
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
        <div className="w-[442px] max-md:w-full max-sm:gap-[20px] max-sm:p-[20px] flex flex-col z-20 gap-[32px] h-[605px] max-md:h-auto px-[37px] py-[34px] rounded-[14px] bg-[#FFFFFF1A]">
          <div className="flex flex-col gap-[16px]">
            <p className="text-[16px] leading-[19.2px]">Name</p>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="h-[54px] rounded-[4px] border-[1px] border-white pl-[17.51px] bg-[transparent] placeholder-[#ffffff99] text-white"
            />
          </div>
          <div className="flex flex-col gap-[16px]">
            <p className="text-[16px] leading-[19.2px]">College Name</p>
            <input
              type="text"
              onChange={(e) => setCollege_Name(e.target.value)}
              className="h-[54px] rounded-[4px] border-[1px] border-white pl-[17.51px] bg-[transparent] placeholder-[#ffffff99] text-white"
            />
          </div>
          <div className="flex flex-col gap-[16px]">
            <p className="text-[16px] leading-[19.2px]">College Email</p>
            <input
              type="email"
              onChange={(e) => setCollege_Email(e.target.value)}
              className="h-[54px] rounded-[4px] border-[1px] border-white pl-[17.51px] bg-[transparent] placeholder-[#ffffff99] text-white"
            />
          </div>
          <div className="flex flex-col gap-[16px]">
            <p className="text-[16px] leading-[19.2px]">Designation</p>
            <input
              type="text"
              onChange={(e) => setDesignation(e.target.value)}
              className="h-[54px] rounded-[4px] border-[1px] border-white pl-[17.51px] bg-[transparent] placeholder-[#ffffff99] text-white"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-full h-[53px] bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] font-[19.2px]"
          >
            Talk to our experts{" "}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
