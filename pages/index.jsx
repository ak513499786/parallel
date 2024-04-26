import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import style from "@/styles/style.module.css";
import Footer from "../components/footer";
import Upskill from "../components/upskill";
import Success from "../components/success";
import Link from "next/link";
import { Linear, gsap } from "gsap";
import axios from "axios";

export default function Home() {
  const [Role, setRole] = useState("Select an option");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phonenumber, setPhonenumber] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const clientanimation = useRef(null);
  const leadinganimation = useRef(null);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionSelect = (option) => {
    setRole(option);
    setIsOpen(false);
  };
  useEffect(() => {
    gsap
      .timeline({ repeat: -1 })
      .fromTo(
        clientanimation.current,
        { x: 50 },
        { ease: Linear.easeNone, x: -1043, duration: 10 }
      );
    let tl = gsap.timeline({ repeat: -1 });
    const width = window.innerWidth;

    if (width > 639) {
      tl.fromTo(
        leadinganimation.current,
        { y: 0 },
        { ease: Linear.easeNone, y: -180, duration: 3 }
      );
    } else if (width < 640) {
      tl.fromTo(
        leadinganimation.current,
        { y: 0 },
        { ease: Linear.easeNone, y: -100, duration: 3 }
      );
    }

    return () => {
      tl.kill();
    };
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      Name,
      Email,
      Phonenumber,
      Role,
    };
    try {
      const response = await axios.post("/api/home", data);
      console.log("Data sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="absolute w-[100%] h-[811px] top-0 left-0 overflow-hidden">
        <div className={style.backgroundcolor}></div>
        <div className={style.backgroundbox}></div>
      </div>
      <main className="px-[80px] max-md:px-[40px] max-sm:px-[20px] max-md:pt-[50px] max-sm:pt-[30px] flex justify-between max-hamburger:items-center max-smalllaptop:gap-[20px] max-hamburger:flex-col pb-[29.5px] pt-[76px]">
        <div className="mt-[23px] max-hamburger:w-full max-md:mt-0">
          <div className="w-[799.41px] max-hamburger:w-[100%] relative z-30 max-smalllaptop:w-[510px] max-bigscreen:w-[676px]">
            <h1 className="text-[104.57px] max-smalllaptop:tracking-[-2.56px] max-smalllaptop:text-[84px] max-sm:text-[64px] max-smalllaptop:leading-[102%] font-light tracking-[-5.22px] leading-[106.66px] text-[#E5E5E5] font-['Graphikthin'] mb-[42px]">
              Upskill and get placed at
              <span className="font-semibold"> ₹0.</span>
            </h1>
            <p className="w-[393.32px] max-sm:w-full text-[16px] leading-[24px] text-[#E0E0E0]">
              Pay us a fraction of your salary only after you get placed through
              our guaranteed placements.
            </p>
          </div>
          <div className="w-[676px] max-hamburger:w-full overflow-hidden mt-[137.5px] max-hamburger:mt-[80px] max-md:mt-[50px] max-smalllaptop:w-[460px] relative z-30">
            <p className="text-[16px] leading-[24px] text-[#E0E0E0]">
              Our placement partners
            </p>
            <div
              ref={clientanimation}
              className="w-[1323.57px] h-[96px] flex gap-[52px]"
            >
              <Image
                src="/Image 56.svg"
                className="pt-[36.77px] pb-[39.23px]"
                width={98.24}
                height={20.89}
              />
              <Image
                src="/Image 57.svg"
                className="pt-[36.77px] pb-[39.23px]"
                width={63.15}
                height={20.89}
              />
              <Image
                src="/TATA_1mg_Logo 1.svg"
                className="pt-[36.77px] pb-[39.23px]"
                width={89.92}
                height={20.89}
              />
              <Image
                src="/shiprocket_logo 1.svg"
                className="pt-[36.77px] pb-[39.23px]"
                width={89.98}
                height={20.89}
              />
              <Image
                src="/image 59.svg"
                className="pt-[30.14px] pb-[32.16px]"
                width={72.14}
                height={20.89}
              />
              <Image
                src="/Clip path group.svg"
                className="pt-[30.14px] pb-[32.16px]"
                width={63.94}
                height={20.89}
              />
              <Image
                src="/image 60.svg"
                className="pt-[30.14px] pb-[32.16px]"
                width={100.57}
                height={20.89}
              />
              <Image
                src="/brand-guidelines-logo2 1.svg"
                className="pt-[36.14px] pb-[39.16px]"
                width={118.32}
                height={20.89}
              />
              <Image
                src="/Image 56.svg"
                className="pt-[36.77px] pb-[39.23px]"
                width={98.24}
                height={20.89}
              />
              <Image
                src="/Image 57.svg"
                className="pt-[36.77px] pb-[39.23px]"
                width={63.15}
                height={20.89}
              />
              <Image
                src="/TATA_1mg_Logo 1.svg"
                className="pt-[36.77px] pb-[39.23px]"
                width={89.92}
                height={20.89}
              />
              <Image
                src="/shiprocket_logo 1.svg"
                className="pt-[36.77px] pb-[39.23px]"
                width={89.98}
                height={20.89}
              />
              <Image
                src="/image 59.svg"
                className="pt-[30.14px] pb-[32.16px]"
                width={72.14}
                height={20.89}
              />
              <Image
                src="/Clip path group.svg"
                className="pt-[30.14px] pb-[32.16px]"
                width={63.94}
                height={20.89}
              />
              <Image
                src="/image 60.svg"
                className="pt-[30.14px] pb-[32.16px]"
                width={100.57}
                height={20.89}
              />
              <Image
                src="/brand-guidelines-logo2 1.svg"
                className="pt-[36.14px] pb-[39.16px]"
                width={118.32}
                height={20.89}
              />
            </div>
          </div>
        </div>
        <div className="w-[442px] max-sm:w-full backdrop-blur-sm max-hamburger:w-[70%] flex flex-col z-20 gap-[32px] max-sm:gap-[20px] max-sm:h-auto h-[605px] px-[37px] max-sm:px-[20px] max-sm:py-[16px] py-[34px] rounded-[14px] bg-[#FFFFFF1A]">
          <div className="flex flex-col gap-[16px]">
            <p className="text-[16px] leading-[19.2px]">Name</p>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="h-[54px] rounded-[4px] border-[1px] border-white pl-[17.51px] bg-[transparent] placeholder-[#ffffff99] text-white"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col gap-[16px]">
            <p className="text-[16px] leading-[19.2px]">Email</p>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="h-[54px] rounded-[4px] border-[1px] border-white pl-[17.51px] bg-[transparent] placeholder-[#ffffff99] text-white"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col gap-[16px]">
            <p className="text-[16px] leading-[19.2px]">Phone number</p>
            <input
              type="number"
              onChange={(e) => setPhonenumber(e.target.value)}
              className="h-[54px] rounded-[4px] border-[1px] border-white pl-[17.51px] bg-[transparent] placeholder-[#ffffff99] text-white"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="flex flex-col relative gap-[16px]">
            <p className="text-[16px] leading-[19.2px]">I am a</p>
            <div
              onClick={() => toggleMenu()}
              className="pl-[17.51px] pr-[18px] flex justify-between h-[54px] bg-[transparent] text-[#ffffff99] cursor-pointer w-full border-[1px] border-white rounded-[6px] py-[16px] text-[17.95px] leading-[21.54px]"
            >
              <p>{Role}</p>
              <Image src="/arrowdown.svg" width={19.98} height={10.75} />
            </div>
            {isOpen && (
              <div className="bg-[#FFFFFFF2] absolute border-[1px] rounded-tl-[4px] rounded-[tr]-[4px] bottom-[54px] z-[22222] cursor-pointer">
                <ul>
                  <li
                    onClick={() => handleOptionSelect("Passed out student")}
                    className="pl-[17.91px] max-sm:px-[10px] max-sm:text-base max-sm:w-full w-[368px] cursor-pointer text-black border-[1px] border-b-[#00000033] py-[16px] text-[17.95px] leading-[21.54px]"
                  >
                    Student enrolled in college{" "}
                  </li>
                  <li
                    onClick={() => handleOptionSelect("Passed out student")}
                    className="pl-[17.91px] max-sm:px-[10px] max-sm:text-base max-sm:w-full w-[368px] cursor-pointer text-black py-[16px] text-[17.95px] border-[1px] border-b-[#00000033] leading-[21.54px]"
                  >
                    Passed out student{" "}
                  </li>
                  <li
                    onClick={() => handleOptionSelect("College Representative")}
                    className="pl-[17.91px] max-sm:px-[10px] max-sm:text-base max-sm:w-full w-[368px] cursor-pointer text-black border-[1px] border-b-[#0000033] py-[16px] text-[17.95px] leading-[21.54px]"
                  >
                    College Representative{" "}
                  </li>
                  <li
                    onClick={() => handleOptionSelect("Recruiter")}
                    className="pl-[17.91px] max-sm:px-[10px] max-sm:text-base max-sm:w-full w-[368px] cursor-pointer text-black border-[1px] border-b-[#00000033] py-[16px] text-[17.95px] leading-[21.54px]"
                  >
                    Recruiter{" "}
                  </li>
                  <li
                    onClick={() => handleOptionSelect("My Role Is Not Listed")}
                    className="pl-[17.91px] max-sm:px-[10px] max-sm:text-base max-sm:w-full w-[368px] cursor-pointer text-black border-[1px] border-b-[#00000033] py-[16px] text-[17.95px] leading-[21.54px]"
                  >
                    My Role Is Not Listed{" "}
                  </li>
                </ul>
              </div>
            )}
          </div>
          <button
            onClick={handleSubmit}
            className="w-full h-[53px] bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] font-[19.2px]"
          >
            Talk To Our Experts
          </button>
        </div>
      </main>
      <div className="absolute w-[100%] h-[100vh] top-[811px] left-0 overflow-x-hidden">
        <div className={style.backgroundcolor2}></div>
        <div className={style.backgroundbox2}></div>
      </div>
      <div className="pt-[102.57px] max-sm:py-20 max-sm:px-[20px] max-md:px-[40px] relative z-20 pb-[62.43px] pl-[80px] pr-[79px]">
        <div className="flex justify-between max-lg:gap-[50px]">
          <p className="w-[817.15px] max-hamburger:w-full font-['Graphikthin'] text-[64px] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] font-light leading-[61.68px] tracking-[-2.56px] text-[#E5E5E5]">
            Be ready with industry relevant skills before you graduate.
          </p>
          <Link href={"/courses"}>
            <button className="w-[205px] max-md:hidden h-[53px] bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] font-[19.2px]">
              Explore courses{" "}
            </button>
          </Link>
        </div>
        <div className="flex gap-[21px] max-md:flex-col mt-[67px] max-hamburger:flex-wrap max-hamburger:justify-center">
          <div
            className={`pl-[28px] max-sm:px-[20px] max-sm:py-[16px] w-[33%] max-hamburger:w-[45%] max-md:w-full pb-[41.87px] pr-[29.85px] border-[1px] pt-[32px] rounded-[8px] ${style.bordergradient}`}
          >
            <div className="bg-[#1F1F1F] w-[105px] px-[28.53px] py-[26.03px] border-[1px] rounded-[6px] border-[#FFFFFF66] ">
              {" "}
              <Image
                src="/bag-rupee--bag-payment-cash-money-finance.svg"
                width={47.94}
                height={51.93}
              />
            </div>
            <h1 className="w-[340px] max-bigscreen:w-[310px] max-xl:w-[250px] max-md:w-full max-xl:mt-[30px] font-['Graphikthin'] font-normal mt-[53.05px] mb-[18.16px] text-[32px] max-xl:text-[24px] max-xl:leading-[120%] leading-[40.32px] tracking-[-0.32px]">
              Pay after getting placed.
            </h1>
            <p className="w-[355.15px] max-bigscreen:w-[310px] max-xl:w-full h-[136.91px] max-xl:h-[165px] max-lg:h-[200px] max-md:h-auto opacity-80 text-[#E0E0E0] text-base">
              Start learning right away without having to worry about finances.
              We believe in making quality education affordable. We ask a small
              percentage of your CTC once you get placed.
            </p>
          </div>
          <div
            className={`pl-[28px] max-sm:px-[20px] max-sm:py-[16px] w-[33%] max-hamburger:w-[45%] max-md:w-full pb-[41.87px] pr-[29.85px] border-[1px] pt-[32px] rounded-[8px] ${style.bordergradient}`}
          >
            <div className="bg-[#1F1F1F] w-[105px] px-[26.53px] py-[26.14px] border-[1px] rounded-[6px] border-[#FFFFFF66] ">
              {" "}
              <Image
                src="/star-badge--ribbon-reward-like-social-rating-media.svg"
                width={51.93}
                height={51.73}
              />
            </div>
            <h1 className="w-[340px] max-bigscreen:w-[310px] max-xl:w-[250px] max-md:w-full max-xl:mt-[30px] font-['Graphikthin'] font-normal mt-[53.05px] mb-[18.16px] text-[32px] max-xl:text-[24px] max-xl:leading-[120%] leading-[40.32px] tracking-[-0.32px]">
              Courses curated by industry experts.{" "}
            </h1>
            <p className="w-[355.15px] max-bigscreen:w-[310px] max-xl:w-full h-[136.91px] max-xl:h-[165px] max-lg:h-[200px] max-md:h-auto opacity-80 text-[#E0E0E0] text-base">
              We brought together a band of industry experts who believe in the
              same cause as we do. Learn from thought leaders with 10+ years of
              experience.
            </p>
          </div>
          <div
            className={`pl-[28px] max-sm:px-[20px] max-sm:py-[16px] w-[33%] max-hamburger:w-[45%] max-md:w-full pb-[41.87px] pr-[29.85px] border-[1px] pt-[32px] rounded-[8px] ${style.bordergradient}`}
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
              Placement support through our partners.{" "}
            </h1>
            <p className="w-[355.15px] max-bigscreen:w-[310px] max-xl:w-full h-[136.91px] max-xl:h-[165px] max-lg:h-[200px] max-md:h-auto opacity-80 text-[#E0E0E0] text-base">
              We help you all the way through from upskilling to getting placed.
              Parallel is partnered with 20+ companies to ease the placement
              process. Get placed in companies that set the trend for the
              future.
            </p>
          </div>
        </div>
        <Link href={"/courses"}>
          <button className="w-full max-md:block hidden mt-[40px] h-[53px] bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] font-[19.2px]">
            Explore courses{" "}
          </button>
        </Link>
      </div>
      <div className="px-[80px] max-sm:py-0 max-md:px-[40px] max-md:flex-col max-md:gap-[40px] max-sm:px-[20px] py-[103px] flex justify-between">
        <div>
          <h1 className="w-[665.36px] max-smalllaptop:w-full font-['Graphikthin'] max-bigscreen:w-[410px] text-[48px] max-sm:text-[32px] max-hamburger:leading-[120%] leading-[56.64px] tracking-[-1.92px] text-[#E5E5E5]">
            Become a college ambassador and get special perks.
          </h1>
          <p className="w-[393.32px] mt-[28.56px] max-md:w-[450px] max-sm:w-full text-base text-[#ffffffcc]">
            Our college ambassadors have minimum responsibilities, perks, and a
            better looking resume.
          </p>
          <Link href={"/contact-us"}>
            <button className="w-[165px] max-md:hidden mt-[46.5px] h-[53px] bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] font-[19.2px]">
              Contact Us{" "}
            </button>
          </Link>
        </div>
        <Image
          src="/Frame 1000002723.png"
          className=" max-lg:w-full max-lg:h-auto max-smalllaptop:hidden max-md:block"
          width={522}
          height={345}
        />
        <Link href={"/contact-us"}>
          <button className="w-full max-md:block hidden h-[53px] bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] font-[19.2px]">
            Contact Us{" "}
          </button>
        </Link>
      </div>
      <div className="pt-[102.57px] max-sm:py-20 max-sm:px-[20px] max-md:px-[40px] relative z-20 pb-[102.43px] pl-[80px] pr-[79px]">
        <div className="flex justify-between max-smalllaptop:gap-[50px]">
          <p className="w-[665px] font-['Graphikthin'] text-[64px] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] font-light leading-[61.68px] tracking-[-2.56px] text-[#E5E5E5]">
            In a career gap and need to brush up your skills?{" "}
          </p>
          <Link href={"/courses"}>
            <button className="w-[205px] max-md:hidden h-[53px] bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] font-[19.2px]">
              Explore courses{" "}
            </button>
          </Link>
        </div>
        <div className="flex gap-[21px] mt-[67px] max-md:flex-col max-hamburger:flex-wrap max-hamburger:justify-center">
          <div
            className={`pl-[28px] w-[33%] max-sm:px-[20px] max-sm:py-[16px] w-[33%] max-hamburger:w-[45%] max-md:w-full pb-[41.87px] pr-[29.85px] border-[1px] pt-[32px] rounded-[8px] ${style.bordergradient}`}
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
              Courses on in-demand skills.{" "}
            </h1>
            <p className="w-[355.15px] max-bigscreen:w-[310px] max-xl:w-full h-[136.91px] max-xl:h-[165px] max-lg:h-[200px] max-md:h-auto opacity-80 text-[#E0E0E0] text-base">
              Choose from a catalogue of future-proof, in-demand skills to
              upskill on. All of the courses are curated keeping future-proofing
              in mind. Learn only what will stay relevant for the next 20 years.
            </p>
          </div>
          <div
            className={`pl-[28px] w-[33%] max-sm:px-[20px] max-sm:py-[16px] w-[33%] max-hamburger:w-[45%] max-md:w-full pb-[41.87px] pr-[29.85px] border-[1px] pt-[32px] rounded-[8px] ${style.bordergradient}`}
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
              100% placement guarantee.{" "}
            </h1>
            <p className="w-[355.15px] max-bigscreen:w-[310px] max-xl:w-full h-[136.91px] max-xl:h-[165px] max-lg:h-[200px] max-md:h-auto opacity-80 text-[#E0E0E0] text-base">
              With our 100% Job Placement Guarantee, we're committed to your
              success. If you don't land a job within a specified timeframe
              after completing the program, we'll continue to work with you
              until you do.
            </p>
          </div>
          <div
            className={`pl-[28px] w-[33%] max-sm:px-[20px] max-sm:py-[16px] w-[33%] max-hamburger:w-[45%] max-md:w-full pb-[41.87px] pr-[29.85px] border-[1px] pt-[32px] rounded-[8px] ${style.bordergradient}`}
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
              Become job ready in 6 months.{" "}
            </h1>
            <p className="w-[355.15px] max-bigscreen:w-[310px] max-xl:w-full h-[136.91px] max-xl:h-[165px] max-lg:h-[200px] max-md:h-auto opacity-80 text-[#E0E0E0] text-base">
              Our courses are designed for individuals who are serious about
              making a quick and impactful career change. We understand the
              urgency, and we're here to deliver.
            </p>
          </div>
        </div>
        <Link href={"/courses"}>
          <button className="w-full max-md:block hidden mt-[40px] h-[53px] bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] font-[19.2px]">
            Explore courses{" "}
          </button>
        </Link>
      </div>
      <div className="px-[80px] pt-[77.94px] pb-[100px] flex justify-between max-sm:py-0 max-md:px-[40px] max-md:flex-col max-md:gap-[40px] max-sm:px-[20px]">
        <div>
          <h1 className="w-[665.36px] max-smalllaptop:w-full font-['Graphikthin'] max-bigscreen:w-[410px] text-[48px] max-sm:text-[32px] max-hamburger:leading-[120%] leading-[56.64px] tracking-[-1.92px] text-[#E5E5E5]">
            Refer us among your friends to get a boost in placement preference{" "}
          </h1>
          <p className="w-[393.32px] mt-[30.06px] text-base text-[#E0E0E0] max-md:w-[450px] max-sm:w-full">
            Upskill together with your friends to our platform, while enjoying
            the special perks as a referrer.
          </p>
          <Link href={"/refer-us"}>
            <button className="w-[228px] mt-[46px] h-[53px] bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] font-[19.2px] max-md:hidden">
              Learn how to refer{" "}
            </button>
          </Link>
        </div>
        <Image
          src="/Frame 1000002723.svg"
          className="mt-[18.06px] max-lg:w-full max-lg:h-auto max-smalllaptop:hidden max-md:block"
          width={522}
          height={345}
        />
        <Link href={"/refer-us"}>
          <button className="w-full max-md:block hidden h-[53px] bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] font-[19.2px]">
            Learn how to refer{" "}
          </button>
        </Link>
      </div>
      <div className="pl-[80px] max-md:px-[40px] max-sm:py-20 max-sm:px-[20px] pr-[79px] pt-[77.57px] pb-[139.43px]">
        <h1 className="w-[665.36px] max-hamburger:w-full text-[#E5E5E5] font-['Graphikthin'] text-[64px] leading-[61.68px] tracking-[-2.56px] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%]">
          Finish a course now. Pay after getting placed.
        </h1>
        <div className="pl-[2px] justify-center mt-[49px] flex flex-wrap gap-[20px]">
          <div
            className={`px-[18px] border-[1px] relative w-[33%] backdrop-blur-lg max-md:w-full max-smalllaptop:w-[48.3%] border-white rounded-[10px] py-[20px] ${style.cardbg}`}
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
              <p className="text-[#A1A1A1] text-[16px] leading-[19.2px] mt-[10px]">
                &lt; 18 Hours
              </p>
            </div>
            <Link className="relative z-30" href={"/courses/low-code-no-code"}>
              <button className="w-[100%] mt-[15px] h-[53px] bg-[transparent] rounded-[8px] text-[#30E29D] hover:text-[#1F1F1F] transition-all font-semibold hover:bg-[#30E29D] border-[1px] border-[#30E29D] text-[16px] font-[19.2px]">
                Learn more{" "}
              </button>
            </Link>
          </div>
          <div
            className={`px-[18px] border-[1px] relative w-[33%] backdrop-blur-sm backdrop-md max-md:w-full max-smalllaptop:w-[48.3%] border-white rounded-[10px] py-[20px] ${style.cardbg}`}
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
              <p className="text-[#A1A1A1] text-[16px] leading-[19.2px] mt-[10px]">
                &lt; 18 Hours
              </p>
            </div>
            <Link className="relative z-30" href={"/courses/artificial-intelligence"}>
              <button className="w-[100%] mt-[15px] h-[53px] bg-[transparent] rounded-[8px] text-[#30E29D] hover:text-[#1F1F1F] transition-all font-semibold hover:bg-[#30E29D] border-[1px] border-[#30E29D] text-[16px] font-[19.2px]">
                Learn more{" "}
              </button>
            </Link>
          </div>
          <div
            className={`px-[18px] border-[1px] relative w-[33%] backdrop-blur-sm max-md:w-full max-smalllaptop:w-[48.3%] border-white rounded-[10px] py-[20px] ${style.cardbg}`}
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
              <p className="text-[#A1A1A1] text-[16px] leading-[19.2px] mt-[10px]">
                &lt; 18 Hours
              </p>
            </div>
            <Link className="relative z-30"  href={"/courses/data-analytics"}>
              <button className="w-[100%] mt-[15px] h-[53px] bg-[transparent] rounded-[8px] text-[#30E29D] hover:text-[#1F1F1F] transition-all font-semibold hover:bg-[#30E29D] border-[1px] border-[#30E29D] text-[16px] font-[19.2px]">
                Learn more{" "}
              </button>
            </Link>
          </div>
          <div
            className={`px-[18px] relative border-[1px] w-[33%] max-md:w-full max-smalllaptop:w-[48.3%] border-white rounded-[10px] py-[20px] backdrop-blur ${style.cardfsbg}`}
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
              <p className="text-[#A1A1A1] text-[16px] leading-[19.2px] mt-[10px]">
                &lt; 18 Hours
              </p>
            </div>
            <Link className="relative z-30"  href={"/courses/full-stack-development"}>
              <button className="w-[100%] mt-[15px] h-[53px] bg-[transparent] rounded-[8px] text-[#30E29D] hover:text-[#1F1F1F] transition-all font-semibold hover:bg-[#30E29D] border-[1px] border-[#30E29D] text-[16px] font-[19.2px]">
                Learn more{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <section className="px-[80px] max-md:px-[40px] max-sm:px-[20px] max-sm:py-0 relative py-[100px] flex flex-col justify-center items-center gap-[65px]">
        <div className="w-[100%] overflow-hidden absolute bottom-[-200px] h-[966.17px]">
          <div className={`${style.circle}`}></div>
        </div>
        <div className="w-[728.14px] max-hamburger:w-full">
          <p className="text-center text-[#E5E5E5] relative z-20 font-['Graphikthin'] font-light mb-[20px] text-[20px] leading-[19.28px]">
            Our partners
          </p>
          <h1 className="text-center text-[#E5E5E5] relative z-20 text-[64px] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] font-['Graphikthin'] leading-[61.68px] font-light tracking-[-2.56px] ">
            Our partners that’ll help you with placements.
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
      <Success />
      <section className="px-20 max-md:px-[40px] max-sm:px-[20px] max-sm:py-0 pt-[45px] pb-[94.24px] flex justify-between max-hamburger:gap-[40px] max-md:flex-col">
        <h1 className="w-[600px] max-hamburger:w-full  max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] text-[64px] leading-[61.68px] font-['Graphikthin'] tracking-[-2.56px] text-[#E5E5E5]">
          Learn from leading industry experts
        </h1>
        <div className="w-[640px] shadow-inner overflow-hidden max-md:w-full h-[530.76px] max-sm:h-[300.76px]">
          <div ref={leadinganimation} className="h-[705px] max-sm:h-auto">
            <div
              className={`w-[630px] max-hamburger:w-full max-md:w-full max-sm:pl-[20px] max-hamburger:gap-[20px] pl-[28.7px] flex gap-[40px] items-center h-[159px] max-sm:h-[80px] rounded-[8px] ${style.learncard}`}
            >
              {" "}
              <Image
                src="/Frame 1000002775.png"
                width={107.16}
                height={107.16}
                className="max-sm:w-[50px]"
              />
              <div>
                <h1 className="text-[#E5E5E5] max-hamburger:text-[24px] max-hamburger:leading-[120%] text-[36px] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  Prashant Hegde
                </h1>
                <p className="text-[#A1A1A1] mt-[4px] max-hamburger:text-sm">
                  Senior Designer, Spotify
                </p>
              </div>
            </div>
            <div
              className={`w-[630px] max-hamburger:w-full max-md:w-full max-sm:pl-[20px] max-hamburger:gap-[20px] mt-[20px] pl-[28.7px] flex gap-[40px] items-center h-[159px] max-sm:h-[80px] rounded-[8px] ${style.learncard}`}
            >
              {" "}
              <Image
                src="/Frame 1000002775.png"
                width={107.16}
                height={107.16}
                className="max-sm:w-[50px]"
              />
              <div>
                <h1 className="text-[#E5E5E5] max-hamburger:text-[24px] max-hamburger:leading-[120%] text-[36px] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  Prashant Hegde
                </h1>
                <p className="text-[#A1A1A1] mt-[4px] max-hamburger:text-sm">
                  Senior Designer, Spotify
                </p>
              </div>
            </div>
            <div
              className={`w-[630px] max-hamburger:w-full max-md:w-full max-sm:pl-[20px] max-hamburger:gap-[20px] mt-[20px] pl-[28.7px] flex gap-[40px] items-center h-[159px] max-sm:h-[80px] rounded-[8px] ${style.learncard}`}
            >
              {" "}
              <Image
                src="/Frame 1000002775.png"
                width={107.16}
                height={107.16}
                className="max-sm:w-[50px]"
              />
              <div>
                <h1 className="text-[#E5E5E5] max-hamburger:text-[24px] max-hamburger:leading-[120%] text-[36px] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  Prashant Hegde
                </h1>
                <p className="text-[#A1A1A1] mt-[4px] max-hamburger:text-sm">
                  Senior Designer, Spotify
                </p>
              </div>
            </div>
            <div
              className={`w-[630px] max-hamburger:w-full max-md:w-full max-sm:pl-[20px] max-hamburger:gap-[20px] mt-[20px] pl-[28.7px] flex gap-[40px] items-center h-[159px] max-sm:h-[80px] rounded-[8px] ${style.learncard}`}
            >
              {" "}
              <Image
                src="/Frame 1000002775.png"
                width={107.16}
                height={107.16}
                className="max-sm:w-[50px]"
              />
              <div>
                <h1 className="text-[#E5E5E5] max-hamburger:text-[24px] max-hamburger:leading-[120%] text-[36px] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  Prashant Hegde
                </h1>
                <p className="text-[#A1A1A1] mt-[4px] max-hamburger:text-sm">
                  Senior Designer, Spotify
                </p>
              </div>
            </div>
            <div
              className={` mt-[20px] max-hamburger:w-full max-md:w-full w-[630px] max-sm:pl-[20px] max-hamburger:gap-[20px] pl-[28.7px] flex gap-[40px] items-center h-[159px] max-sm:h-[80px] rounded-[8px] ${style.learncard}`}
            >
              {" "}
              <Image
                src="/Frame 1000002775.png"
                width={107.16}
                height={107.16}
                className="max-sm:w-[50px]"
              />
              <div>
                <h1 className="text-[#E5E5E5] max-hamburger:text-[24px] max-hamburger:leading-[120%] text-[36px] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  Prashant Hegde
                </h1>
                <p className="text-[#A1A1A1] mt-[4px] max-hamburger:text-sm">
                  Senior Designer, Spotify
                </p>
              </div>
            </div>
            <div
              className={` mt-[20px] max-hamburger:w-full max-md:w-full w-[630px] max-sm:pl-[20px] max-hamburger:gap-[20px] pl-[28.7px] flex gap-[40px] items-center h-[159px] max-sm:h-[80px] rounded-[8px] ${style.learncard}`}
            >
              {" "}
              <Image
                src="/Frame 1000002775.png"
                width={107.16}
                className="max-sm:w-[50px]"
                height={107.16}
              />
              <div>
                <h1 className="text-[#E5E5E5] max-hamburger:text-[24px] max-hamburger:leading-[120%] text-[36px] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  Prashant Hegde
                </h1>
                <p className="text-[#A1A1A1] mt-[4px] max-hamburger:text-sm">
                  Senior Designer, Spotify
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[100%] h-[614px] max-sm:h-auto max-sm:h-[300px] max-sm:mt-10 max-sm:py-10 overflow-hidden flex justify-center items-center relative">
        <Image
          src="/Frame 83.svg"
          className="absolute top-[23.1px] opacity-10 bg-transparent pl-[78.14px] h-[747.06px] w-[100%] pr-[76.27px] z-[1]"
          width={107.16}
          height={107.16}
        />
        <h1 className="w-[405.36px] max-sm:w-full z-20 relative max-sm:px-[20px] font-['Graphikthin'] text-[64px] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] leading-[61.68px] tracking-[-2.56px] text-[#E5E5E5] text-center">
          Choose from 5+ subjects.{" "}
        </h1>
        <div className="w-[100%] z-[2] overflow-hidden absolute bottom-[-200px] h-[966.17px]">
          <div className={`${style.circle2}`}></div>
          <div className={`${style.circle1}`}></div>
        </div>
      </section>
      <section className="w-[100%] max-xl:h-[1150px] max-hamburger:h-auto max-xl:overflow-hidden px-[80px] max-sm:px-[20px] max-md:px-[40px] max-sm:py-20 pt-[143px] pb-[166.13px] relative">
        <p className="text-[#E5E5E5] text-[20px] leading-[19.28px] font-['Graphikthin'] mb-[18px] opacity-90">
          Looking for different ways to engage your students?
        </p>
        <h1 className="w-[665.36px] z-[2] text-[64px] max-smalllaptop:w-full font-['Graphikthin'] text-[64px] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] leading-[61.68px] mb-[32px] font-['Graphikthin'] text-[#E5E5E5] tracking-[-2.56px]">
          Host a skill focused workshop at your college.{" "}
        </h1>
        <p className="text-base max-sm:text-sm w-[258.29px] opacity-60 font-['Graphikthin']">
          Get in touch with our representative for further details.
        </p>
        <div className="flex mt-[32px] max-md:flex-col gap-[32px]">
          <Link href={"/workshops"}>
            <button className="w-[295px] max-md:w-full h-[53px] bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] font-[19.2px]">
              Learn About Our Workshops{" "}
            </button>
          </Link>
          <Link href={"/contact-us"}>
            <button className="w-[165px] max-md:w-full h-[53px] bg-[transparent] rounded-[8px] border-[1px] border-[#30E29D] font-bold text-[#30E29D] text-[16px] font-[19.2px]">
              Contact Us{" "}
            </button>
          </Link>
        </div>
        <Image
          src="/image-from-rawpixel-id-12991629-png 1.svg"
          className="absolute max-smalllaptop:top-[50px]  max-smalllaptop:scale-100 max-smalllaptop:right-[-300px] top-[138.31px] max-xl:scale-75 max-smalllaptop:relative max-hamburger:hidden right-[101.75px] h-[329.29px] w-[449.44px] z-[10]"
          width={107.16}
          height={107.16}
        />
        <Image
          src="/Saly-1.svg"
          className="absolute top-[-42.91px] max-xl:scale-75  max-smalllaptop:top-[-460px] max-smalllaptop:scale-100 max-smalllaptop:right-[-80px] max-smalllaptop:relative max-hamburger:hidden right-[61.44px] h-[771.56px] w-[771.56px] z-[30]"
          width={107.16}
          height={107.16}
        />
        <Image
          src="/Ellipse 10.svg"
          className="absolute top-[255.91px] max-xl:scale-75 max-smalllaptop:relative max-smalllaptop:top-[-920px]  max-smalllaptop:scale-100 max-smalllaptop:right-[-500px] max-hamburger:hidden right-[31.44px] h-[320.36px] w-[320.36px] z-[20]"
          width={107.16}
          height={107.16}
        />
      </section>
      <Upskill />
      <Footer />
    </>
  );
}
