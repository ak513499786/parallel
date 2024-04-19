import Image from "next/image";
import style from "@/styles/style.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="px-[80px] flex bg-[#0000000D] top-0 sticky z-30 justify-between pt-[39px] pb-[22px]">
      <Link href={'/'} className="flex gap-[2.74px]">
        <Image
          src="/Frame 96.svg"
          className="py-[7px]"
          width={139.45}
          height={26}
        />
      </Link>
      <ul className="list-none flex gap-[52px]">
        <Link href={'/about'} className="text-[16px] relative leading-[24px] py-[8px]">About</Link>
        <Link href={'/workshops'} className="text-[16px] relative leading-[24px] py-[8px]">
          Workshops
        </Link>
        <Link href={'/courses'} className="text-[16px] relative leading-[24px] py-[8px]">
          Courses
        </Link>
        <Link href={'/fees'} className="text-[16px] relative leading-[24px] py-[8px]">Fees</Link>
        <Link href={'/hire-from-us'} className="text-[16px] relative leading-[24px] py-[8px]">
          Hire from us
        </Link>
        <Link href={'/refer-us'} className="text-[16px] relative leading-[24px] py-[8px]">
          Refer us
        </Link>
        <Link
          href={"/signup"}
          className="text-[16px] relative bg-[#30E29D] text-black py-[8px] px-[24px] rounded-[8px] leading-[24px] py-[8px]"
        >
          Sign up
        </Link>
      </ul>
    </nav>
  );
}
