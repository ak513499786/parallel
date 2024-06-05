import Image from "next/image";
import style from "@/styles/style.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";

export default function Signup() {
  return (
    <>
      <Navbar />
      <div className="absolute left-0 z-10 top-[-101px] w-[100%] h-[844px]">
        <Image
          src="/Group 25.png"
          className=" w-full h-[844px] object-cover"
          width={139.45}
          height={26}
        />
      </div>
      <div className="w-[100%] flex flex-col gap-[66px] max-md:px-[40px] max-sm:px-[20px] max-lg:px-[80px] items-center z-20 relative font-['Graphikthin'] h-[643px]">
        <h1 className="capitalize w-[966.01px] max-smalllaptop:text-[84px] max-sm:text-[64px] max-smallphone:text-[36px] max-sm:tracking-tight max-smalllaptop:leading-[102%] max-sm:text-left max-lg:w-full mt-[157.5px] max-sm:mt-[80px] text-[#E5E5E5] text-center text-[102.17px] leading-[104.21px] tracking-[-5.1px]">
          Upskill on your favorite topics for free.{" "}
        </h1>
        <div className="flex max-smallphone:flex-col justify-center max-md:justify-between max-md:w-full gap-[18px]">
          <Link
            href={"#"}
            className="w-[140px] max-smallphone:w-full h-[53px] flex justify-center py-[15.4px] relative bg-[#30E29D] rounded-[8px]"
          >
            <p className="text-[16px] font-semibold text-black leading-[19.2px]">Sign up</p>
          </Link>
          <Link
            href={"#"}
            className="text-[16px] max-smallphone:w-full w-[140px] h-[53px] flex justify-center py-[15.4px] font-semibold relative border-[1px] text-[#30E29D] border-[#30E29D] rounded-[8px] leading-[20px]"
          >
            <p className="text-[16px] font-semibold text-[#30E29D] leading-[19.2px] ">Log in </p>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
