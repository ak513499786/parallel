import Image from "next/image";
import style from "@/styles/style.module.css";
import Link from "next/link";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";

export default function Navbar() {
  const [openHamburger, setOpenHamburger] = useState(false);
  let [width, setWidth] = useState();
  const Hamburger = useRef(null);
  const Menu = useRef(null);
  const Cross = useRef(null);
  const Background = useRef(null);
  const handleHamburger = () => {
    setOpenHamburger(true);
    console.log(openHamburger);
  };
  const handleHamburgerClose = () => {
    setOpenHamburger(false);
    console.log(openHamburger);
  };
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    if (width <= 980) {
      if (openHamburger === true) {
        gsap.to(Hamburger.current, 0, { display: "none" });
        gsap.to(Cross.current, 0, { display: "block" });
        gsap.to(Menu.current, 0.8, { display: "flex", opacity: 1 });
        gsap.to(Background.current, 0.8, { display: "block", opacity: 1 });
      } else {
        gsap.to(Hamburger.current, 0, { display: "block" });
        gsap.to(Cross.current, 0, { display: "none" });
        gsap.to(Menu.current, 0.8, { display: "none", opacity: 0 });
        gsap.to(Background.current, 0.8, { display: "none", opacity: 0 });
      }
    }
  }, [openHamburger]);

  return (
    <nav className="px-[80px] flex bg-[#0000000D] max-md:px-[40px] max-sm:px-[20px] max-hamburger:items-center top-0 sticky z-50 justify-between pt-[39px] pb-[22px]">
      <Link href={"/"} className="flex gap-[2.74px]">
        <Image
          src="/Frame 96.svg"
          className="py-[7px]"
          width={139.45}
          height={26}
        />
      </Link>
      <div
        ref={Hamburger}
        onClick={handleHamburger}
        className="h-[20px] w-[80px] border-t-[2px] border-b-[2px] hidden max-hamburger:block border-white curser-pointer"
      ></div>
      <div
        ref={Cross}
        onClick={handleHamburgerClose}
        className="w-[40px] text-3xl z-50 invert text-right font-['Graphikthin'] hidden border-white curser-pointer"
      >
        {" "}
        <Image src="/close.svg" width={36} height={36} />
      </div>
      <div
        ref={Background}
        className="flex bg-[#ffffff] max-hamburger:opacity-0 blur-[620px] absolute hidden w-[100%] h-[100vh] top-0 left-0"
      ></div>
      <ul
        ref={Menu}
        className="list-none flex gap-[52px] max-hamburger:opacity-0 max-xl:gap-[40px] max-hamburger:hidden max-lg:gap-[30px] max-sm:gap-[20px] max-sm:top-[101px] max-sm:h-[calc(100vh-121px)] max-hamburger:flex-col max-hamburger:absolute max-sm:h-[calc(100vh-181px)] max-hamburger:top-[150px] max-hamburger:text-right max-hamburger:w-[calc(100%-160px)] max-md:w-[calc(100%-80px)] max-sm:w-[calc(100%-40px)]"
      >
        <Link
          href={"/about"}
          className="text-[16px] relative leading-[24px] py-[8px] max-hamburger:text-3xl"
        >
          About
        </Link>
        <Link
          href={"/workshops"}
          className="text-[16px] relative leading-[24px] py-[8px] max-hamburger:text-3xl"
        >
          Workshops
        </Link>
        <Link
          href={"/courses"}
          className="text-[16px] relative leading-[24px] py-[8px] max-hamburger:text-3xl"
        >
          Courses
        </Link>
        <Link
          href={"/fees"}
          className="text-[16px] relative leading-[24px] py-[8px] max-hamburger:text-3xl"
        >
          Fees
        </Link>
        <Link
          href={"/hire-from-us"}
          className="text-[16px] relative leading-[24px] py-[8px] max-hamburger:text-3xl"
        >
          Hire from us
        </Link>
        <Link
          href={"/refer-us"}
          className="text-[16px] relative leading-[24px] py-[8px] max-hamburger:text-3xl"
        >
          Refer us
        </Link>
        <Link
          href={"/signup"}
          className="text-[16px] relative bg-[#30E29D] max-hamburger:bottom-0 max-sm:w-full max-hamburger:text-center max-hamburger:w-[300px] max-hamburger:absolute text-black py-[8px] px-[24px] rounded-[8px] leading-[24px] py-[8px] max-hamburger:text-3xl"
        >
          Sign up
        </Link>
      </ul>
    </nav>
  );
}
