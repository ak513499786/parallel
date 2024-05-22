import Image from "next/image";
import style from "@/styles/style.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pl-[80px] max-md:px-[40px] max-sm:px-[20px] pt-[125.58px] pb-[14px] flex flex-col gap-[100px] max-sm:gap-[80px] relative pr-[76px]">
      <div className="overflow-hidden absolute w-[100%] bottom-[0] left-0 h-[1449.12px]">
        <div
          className={`w-[100%] h-[849.12px] absolute bottom-[275.86px] ${style.footer}`}
        ></div>
      </div>
      <div className="flex justify-between max-sm:flex-col max-hamburger:gap-[50px] z-20">
        <div className="flex w-[390px] max-sm:w-full flex-wrap gap-x-[27px] gap-y-[41.34px]">
          <div className="w-[190px]">
            <h1 className="text-[#E5E5E5] opacity-80 text-base">Address</h1>
            <p className="mt-[12px] text-[#E5E5E5] text-base">
              Wework Galaxy Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka
              560001
            </p>
          </div>
          <div className="w-[76px]">
            <h1 className="text-[#E5E5E5] opacity-80 text-base">Follow us</h1>
            <p className="mt-[12px] text-[#E5E5E5] text-base hover:underline cursor-pointer hover:decoration-solid">
              Instagram
            </p>
            <p className="mt-[4px] text-[#E5E5E5] text-base hover:underline cursor-pointer hover:decoration-solid">
              Linkedin
            </p>
            <p className="mt-[4px] text-[#E5E5E5] text-base hover:underline cursor-pointer hover:decoration-solid">
              YouTube
            </p>
          </div>
          <div className="w-[144px]">
            <h1 className="text-[#E5E5E5] opacity-80 text-base">Contact us</h1>
            <p className="mt-[12px] text-[#E5E5E5] text-base hover:underline cursor-pointer hover:decoration-solid">
              hello@parallel.com
            </p>
            <p className="mt-[4px] text-[#E5E5E5] text-base">
              +91 99838 57373{" "}
            </p>
          </div>
          <div className="opacity-70">
            <p className="mt-[4px] text-[#E5E5E5] text-base">
              Copyright @ Parallel Education. All Rights Reserved{" "}
            </p>
            <div className="flex mt-[5.37px] gap-[13.9px]">
              <p className="text-[#E5E5E5] text-base hover:underline cursor-pointer hover:decoration-solid">
                Privacy Policy
              </p>
              <p className="text-[#E5E5E5] text-base hover:underline cursor-pointer hover:decoration-solid">
                Terms of Service
              </p>
            </div>
          </div>
        </div>
        <div className="flex max-hamburger:gap-[50px] max-md:flex-wrap-reverse gap-[127.27px]">
          <div className="w-[197.73px]  flex flex-col">
            <h1 className="text-[#E5E5E5] opacity-80 text-base">Courses</h1>
            <Link
              href={"/courses/low-code-no-code"}
              className="mt-[4px] hover:underline cursor-pointer hover:decoration-solid text-[#E5E5E5] text-base"
            >
              Low-Code/No-Code Development{" "}
            </Link>
            <Link
              href={"/courses/artificial-intelligence"}
              className="mt-[4px] hover:underline cursor-pointer hover:decoration-solid text-[#E5E5E5] text-base"
            >
              Artificial Intelligence (AI/ML){" "}
            </Link>
            <Link
              href={"/courses/data-analytics"}
              className="mt-[4px] hover:underline cursor-pointer hover:decoration-solid text-[#E5E5E5] text-base"
            >
              Data Analytics{" "}
            </Link>
            <Link
              href={"/courses/full-stack-development"}
              className="mt-[4px] hover:underline cursor-pointer hover:decoration-solid text-[#E5E5E5] text-base"
            >
              Full Stack Development{" "}
            </Link>
          </div>
          <div className="w-[92px] flex flex-col">
            <h1 className="text-[#E5E5E5] opacity-80 text-base">Company</h1>
            <Link
              href={"/about"}
              className="mt-[12px] hover:underline cursor-pointer hover:decoration-solid w-[92px] text-[#E5E5E5] text-base"
            >
              About us
            </Link>
            <Link
              href={"/workshops"}
              className="mt-[4px] hover:underline cursor-pointer hover:decoration-solid w-[92px] text-[#E5E5E5] text-base"
            >
              Workshops
            </Link>
            <Link
              href={"/courses"}
              className="mt-[4px] hover:underline cursor-pointer hover:decoration-solid w-[92px] text-[#E5E5E5] text-base"
            >
              Courses
            </Link>
            <Link
              href={"/fees"}
              className="mt-[4px] hover:underline cursor-pointer hover:decoration-solid w-[92px] text-[#E5E5E5] text-base"
            >
              Fees
            </Link>
            <Link
              href={"/contact-us"}
              className="mt-[4px] text-[#E5E5E5] hover:underline cursor-pointer hover:decoration-solid w-[92px] text-base"
            >
              Contact Us
            </Link>
            <Link
              href={"/isa"}
              className="mt-[4px] hover:underline cursor-pointer hover:decoration-solid w-[92px] text-[#E5E5E5] text-base"
            >
              ISA
            </Link>
            <Link
              href={"/hire-from-us"}
              className="mt-[4px] text-[#E5E5E5] hover:underline cursor-pointer hover:decoration-solid w-[92px] text-base"
            >
              Hire from us
            </Link>
            <Link
              href={"/refer-us"}
              className="mt-[4px] text-[#E5E5E5] hover:underline cursor-pointer hover:decoration-solid w-[92px] text-base"
            >
              Refer us
            </Link>
          </div>
        </div>
      </div>
      <Image
        src="/footerimg.svg"
        className="pl-[0.05px] pr-[3.89px] w-full"
        width={139.45}
        height={26}
      />
    </footer>
  );
}
