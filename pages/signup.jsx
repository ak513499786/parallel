import Image from "next/image";
import style from "@/styles/style.module.css";
import Navbar from "./navbar";
import Footer from "./footer";
import Link from "next/link";

export default function Signup() {
  return (
    <>
      <Navbar />
      <div className="absolute left-0 z-10 top-[-101px] w-[100%] h-[calc(100vh-101px)]">
        <Image
          src="/Group 25.png"
          className=" w-full"
          width={139.45}
          height={26}
        />
      </div>
      <div className="w-[100%] flex flex-col gap-[66px] items-center z-20 relative font-['Graphikthin'] h-[calc(100vh-101px)]">
        <h1 className="capitalize w-[966.01px] mt-[157.5px] text-[#E5E5E5] text-center text-[102.17px] leading-[104.21px] tracking-[-5.1px]">
          Upskill on your favorite topics for free.{" "}
        </h1>
        <div className="flex justify-center gap-[18px]">
          <Link
            href={"#"}
            className="text-[16px] w-[140px] h-[53px] flex justify-center items-center font-semibold relative bg-[#30E29D] text-black rounded-[8px] leading-[53px]"
          >
            Sign up
          </Link>
          <Link
            href={"#"}
            className="text-[16px] w-[140px] h-[53px] flex justify-center items-center font-semibold relative border-[1px] text-[#30E29D] border-[#30E29D] rounded-[8px] leading-[16px]"
          >
            Log in{" "}
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
