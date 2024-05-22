import Image from "next/image";
import { useRef, useEffect } from "react";
import { Linear, gsap } from "gsap";

export default function Success() {
  const successanimation = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline({ repeat: -1 });
    const width = window.innerWidth;

    if (width > 639) {
      gsap
        .timeline({ repeat: -1 })
        .fromTo(
          successanimation.current,
          { x: -150 },
          { ease: Linear.easeNone, x: -2103, duration: 10 }
        );
    } else if (width < 640) {
      gsap
        .timeline({ repeat: -1 })
        .fromTo(
          successanimation.current,
          { x: -150 },
          { ease: Linear.easeNone, x: -1508, duration: 10 }
        );
    }
    return () => {
      tl.kill();
    };
  });
  return (
    <section className="relative z-20 py-[80px]">
      <p className="text-[20px] pl-20 max-md:px-[40px] max-sm:px-[20px] leading-[19.28px] text-[#E5E5E5] opacity-80 font-['Graphikthin'] font-light mb-[20px]">
        Success stories
      </p>
      <h1 className="w-[813.91px] max-hamburger:w-full ml-20 max-hamburger:px-20 max-hamburger:ml-0 max-md:px-[40px] max-sm:px-[20px] text-[64px] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] leading-[61.68px] font-['Graphikthin'] font-light text-[#E5E5E5] mb-[58px] max-sm:mb-[50px] tracking-[-2.56px]">
        People benefitting from our new age method of learning.{" "}
      </h1>
      <div className="overflow-x-hidden w-full">
        <div
          ref={successanimation}
          className="flex gap-[20px] ml-20 max-sm:ml-[25px] max-md:ml-[50px] w-[5880px]"
        >
          <div className="w-[468px] max-sm:w-[320px] max-sm:p-[20px] border-[1px] border-[#FFFFFFBF] rounded-[6px] pl-[27.94px] pt-[33.07px] pr-[24.8px] pb-[39.11px] h-[282px] max-sm:h-auto">
            <div className="flex gap-[28.36px]">
              <Image
                src="/Frame 1000002775.png"
                className="max-sm:w-[80px] max-sm:h-[80px]"
                width={93.71}
                height={93.71}
              />
              <div>
                <h1 className="text-[36px] max-sm:text-[24px] max-sm:leading-[120%] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  Ravi Teja
                </h1>
                <h2 className="text-[#A1A1A1] text-[20px] max-sm:text-base leading-[24px] font-['Graphikthin'] font-normal opacity-60 mt-[6px] max-sm:mt-[3px] max-sm:mb-[12px]">
                  Vitae nisi eu turpis
                </h2>
                {/* <Image
                  src="/razor.svg"
                  className="py-[9.06px]"
                  width={98.24}
                  height={20.89}
                /> */}
              </div>
            </div>
            <p className="opacity-80 max-sm:text-sm max-sm:mt-[20px] text-base text-[#E0E0E0] mt-[34.73px]">
              I learned so many things in a short period of time. Sitting in
              their workshop was a good decision. I will definitely recommend
              anyone who is interested in the current AI scene.
            </p>
          </div>

          <div className="w-[468px] max-sm:w-[320px] max-sm:p-[20px] border-[1px] border-[#FFFFFFBF] rounded-[6px] pl-[27.94px] pt-[33.07px] pr-[24.8px] pb-[39.11px] h-[282px] max-sm:h-auto">
            <div className="flex gap-[28.36px]">
              <Image
                src="/Frame 1000002775.png"
                className="max-sm:w-[80px] max-sm:h-[80px]"
                width={93.71}
                height={93.71}
              />
              <div>
                <h1 className="text-[36px] max-sm:text-[24px] max-sm:leading-[120%] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  Kruthi R
                </h1>
                <h2 className="text-[#A1A1A1] text-[20px] max-sm:text-base leading-[24px] font-['Graphikthin'] font-normal opacity-60 mt-[6px] max-sm:mt-[3px] max-sm:mb-[12px]">
                  Vitae nisi eu turpis
                </h2>
                {/* <Image
                  src="/razor.svg"
                  className="py-[9.06px]"
                  width={98.24}
                  height={20.89}
                /> */}
              </div>
            </div>
            <p className="opacity-80 max-sm:text-sm max-sm:mt-[20px] text-base text-[#E0E0E0] mt-[34.73px]">
              Your approach to teaching is very nice!
            </p>
          </div>
          <div className="w-[468px] max-sm:w-[320px] max-sm:p-[20px] border-[1px] border-[#FFFFFFBF] rounded-[6px] pl-[27.94px] pt-[33.07px] pr-[24.8px] pb-[39.11px] h-[282px] max-sm:h-auto">
            <div className="flex gap-[28.36px]">
              <Image
                src="/Frame 1000002775.png"
                className="max-sm:w-[80px] max-sm:h-[80px]"
                width={93.71}
                height={93.71}
              />
              <div>
                <h1 className="text-[36px] max-sm:text-[24px] max-sm:leading-[120%] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  Surya Narayan
                </h1>
                <h2 className="text-[#A1A1A1] text-[20px] max-sm:text-base leading-[24px] font-['Graphikthin'] font-normal opacity-60 mt-[6px] max-sm:mt-[3px] max-sm:mb-[12px]">
                  Vitae nisi eu turpis
                </h2>
                {/* <Image
                  src="/razor.svg"
                  className="py-[9.06px]"
                  width={98.24}
                  height={20.89}
                /> */}
              </div>
            </div>
            <p className="opacity-80 max-sm:text-sm max-sm:mt-[20px] text-base text-[#E0E0E0] mt-[34.73px]">
              Your workshop helped me use LinkedIn efficiently to get a job. I
              don’t have to depend on my college for placements.
            </p>
          </div>
          <div className="w-[468px] max-sm:w-[320px] max-sm:p-[20px] border-[1px] border-[#FFFFFFBF] rounded-[6px] pl-[27.94px] pt-[33.07px] pr-[24.8px] pb-[39.11px] h-[282px] max-sm:h-auto">
            <div className="flex gap-[28.36px]">
              <Image
                src="/Frame 1000002775.png"
                className="max-sm:w-[80px] max-sm:h-[80px]"
                width={93.71}
                height={93.71}
              />
              <div>
                <h1 className="text-[36px] max-sm:text-[24px] max-sm:leading-[120%] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  Lakshmi JT{" "}
                </h1>
                <h2 className="text-[#A1A1A1] text-[20px] max-sm:text-base leading-[24px] font-['Graphikthin'] font-normal opacity-60 mt-[6px] max-sm:mt-[3px] max-sm:mb-[12px]">
                  Vitae nisi eu turpis
                </h2>
                {/* <Image
                  src="/razor.svg"
                  className="py-[9.06px]"
                  width={98.24}
                  height={20.89}
                /> */}
              </div>
            </div>
            <p className="opacity-80 max-sm:text-sm max-sm:mt-[20px] text-base text-[#E0E0E0] mt-[34.73px]">
              Most of the workshops I’ve attended, I’ve ended up seeing reels on
              Instagram.
            </p>
          </div>
          <div className="w-[468px] max-sm:w-[320px] max-sm:p-[20px] border-[1px] border-[#FFFFFFBF] rounded-[6px] pl-[27.94px] pt-[33.07px] pr-[24.8px] pb-[39.11px] h-[282px] max-sm:h-auto">
            <div className="flex gap-[28.36px]">
              <Image
                src="/Frame 1000002775.png"
                className="max-sm:w-[80px] max-sm:h-[80px]"
                width={93.71}
                height={93.71}
              />
              <div>
                <h1 className="text-[36px] max-sm:text-[24px] max-sm:leading-[120%] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  Ravi Teja
                </h1>
                <h2 className="text-[#A1A1A1] text-[20px] max-sm:text-base leading-[24px] font-['Graphikthin'] font-normal opacity-60 mt-[6px] max-sm:mt-[3px] max-sm:mb-[12px]">
                  Vitae nisi eu turpis
                </h2>
                {/* <Image
                  src="/razor.svg"
                  className="py-[9.06px]"
                  width={98.24}
                  height={20.89}
                /> */}
              </div>
            </div>
            <p className="opacity-80 max-sm:text-sm max-sm:mt-[20px] text-base text-[#E0E0E0] mt-[34.73px]">
              I learned so many things in a short period of time. Sitting in
              their workshop was a good decision. I will definitely recommend
              anyone who is interested in the current AI scene.
            </p>
          </div>

          <div className="w-[468px] max-sm:w-[320px] max-sm:p-[20px] border-[1px] border-[#FFFFFFBF] rounded-[6px] pl-[27.94px] pt-[33.07px] pr-[24.8px] pb-[39.11px] h-[282px] max-sm:h-auto">
            <div className="flex gap-[28.36px]">
              <Image
                src="/Frame 1000002775.png"
                className="max-sm:w-[80px] max-sm:h-[80px]"
                width={93.71}
                height={93.71}
              />
              <div>
                <h1 className="text-[36px] max-sm:text-[24px] max-sm:leading-[120%] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  Kruthi R
                </h1>
                <h2 className="text-[#A1A1A1] text-[20px] max-sm:text-base leading-[24px] font-['Graphikthin'] font-normal opacity-60 mt-[6px] max-sm:mt-[3px] max-sm:mb-[12px]">
                  Vitae nisi eu turpis
                </h2>
                {/* <Image
                  src="/razor.svg"
                  className="py-[9.06px]"
                  width={98.24}
                  height={20.89}
                /> */}
              </div>
            </div>
            <p className="opacity-80 max-sm:text-sm max-sm:mt-[20px] text-base text-[#E0E0E0] mt-[34.73px]">
              Your approach to teaching is very nice!
            </p>
          </div>
          <div className="w-[468px] max-sm:w-[320px] max-sm:p-[20px] border-[1px] border-[#FFFFFFBF] rounded-[6px] pl-[27.94px] pt-[33.07px] pr-[24.8px] pb-[39.11px] h-[282px] max-sm:h-auto">
            <div className="flex gap-[28.36px]">
              <Image
                src="/Frame 1000002775.png"
                className="max-sm:w-[80px] max-sm:h-[80px]"
                width={93.71}
                height={93.71}
              />
              <div>
                <h1 className="text-[36px] max-sm:text-[24px] max-sm:leading-[120%] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  Surya Narayan
                </h1>
                <h2 className="text-[#A1A1A1] text-[20px] max-sm:text-base leading-[24px] font-['Graphikthin'] font-normal opacity-60 mt-[6px] max-sm:mt-[3px] max-sm:mb-[12px]">
                  Vitae nisi eu turpis
                </h2>
                {/* <Image
                  src="/razor.svg"
                  className="py-[9.06px]"
                  width={98.24}
                  height={20.89}
                /> */}
              </div>
            </div>
            <p className="opacity-80 max-sm:text-sm max-sm:mt-[20px] text-base text-[#E0E0E0] mt-[34.73px]">
              Your workshop helped me use LinkedIn efficiently to get a job. I
              don’t have to depend on my college for placements.
            </p>
          </div>
          <div className="w-[468px] max-sm:w-[320px] max-sm:p-[20px] border-[1px] border-[#FFFFFFBF] rounded-[6px] pl-[27.94px] pt-[33.07px] pr-[24.8px] pb-[39.11px] h-[282px] max-sm:h-auto">
            <div className="flex gap-[28.36px]">
              <Image
                src="/Frame 1000002775.png"
                className="max-sm:w-[80px] max-sm:h-[80px]"
                width={93.71}
                height={93.71}
              />
              <div>
                <h1 className="text-[36px] max-sm:text-[24px] max-sm:leading-[120%] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  Lakshmi JT{" "}
                </h1>
                <h2 className="text-[#A1A1A1] text-[20px] max-sm:text-base leading-[24px] font-['Graphikthin'] font-normal opacity-60 mt-[6px] max-sm:mt-[3px] max-sm:mb-[12px]">
                  Vitae nisi eu turpis
                </h2>
                {/* <Image
                  src="/razor.svg"
                  className="py-[9.06px]"
                  width={98.24}
                  height={20.89}
                /> */}
              </div>
            </div>
            <p className="opacity-80 max-sm:text-sm max-sm:mt-[20px] text-base text-[#E0E0E0] mt-[34.73px]">
              Most of the workshops I’ve attended, I’ve ended up seeing reels on
              Instagram.
            </p>
          </div>
          <div className="w-[468px] max-sm:w-[320px] max-sm:p-[20px] border-[1px] border-[#FFFFFFBF] rounded-[6px] pl-[27.94px] pt-[33.07px] pr-[24.8px] pb-[39.11px] h-[282px] max-sm:h-auto">
            <div className="flex gap-[28.36px]">
              <Image
                src="/Frame 1000002775.png"
                className="max-sm:w-[80px] max-sm:h-[80px]"
                width={93.71}
                height={93.71}
              />
              <div>
                <h1 className="text-[36px] max-sm:text-[24px] max-sm:leading-[120%] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  Ravi Teja
                </h1>
                <h2 className="text-[#A1A1A1] text-[20px] max-sm:text-base leading-[24px] font-['Graphikthin'] font-normal opacity-60 mt-[6px] max-sm:mt-[3px] max-sm:mb-[12px]">
                  Vitae nisi eu turpis
                </h2>
                {/* <Image
                  src="/razor.svg"
                  className="py-[9.06px]"
                  width={98.24}
                  height={20.89}
                /> */}
              </div>
            </div>
            <p className="opacity-80 max-sm:text-sm max-sm:mt-[20px] text-base text-[#E0E0E0] mt-[34.73px]">
              I learned so many things in a short period of time. Sitting in
              their workshop was a good decision. I will definitely recommend
              anyone who is interested in the current AI scene.
            </p>
          </div>

          <div className="w-[468px] max-sm:w-[320px] max-sm:p-[20px] border-[1px] border-[#FFFFFFBF] rounded-[6px] pl-[27.94px] pt-[33.07px] pr-[24.8px] pb-[39.11px] h-[282px] max-sm:h-auto">
            <div className="flex gap-[28.36px]">
              <Image
                src="/Frame 1000002775.png"
                className="max-sm:w-[80px] max-sm:h-[80px]"
                width={93.71}
                height={93.71}
              />
              <div>
                <h1 className="text-[36px] max-sm:text-[24px] max-sm:leading-[120%] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  Kruthi R
                </h1>
                <h2 className="text-[#A1A1A1] text-[20px] max-sm:text-base leading-[24px] font-['Graphikthin'] font-normal opacity-60 mt-[6px] max-sm:mt-[3px] max-sm:mb-[12px]">
                  Vitae nisi eu turpis
                </h2>
                {/* <Image
                  src="/razor.svg"
                  className="py-[9.06px]"
                  width={98.24}
                  height={20.89}
                /> */}
              </div>
            </div>
            <p className="opacity-80 max-sm:text-sm max-sm:mt-[20px] text-base text-[#E0E0E0] mt-[34.73px]">
              Your approach to teaching is very nice!
            </p>
          </div>
          <div className="w-[468px] max-sm:w-[320px] max-sm:p-[20px] border-[1px] border-[#FFFFFFBF] rounded-[6px] pl-[27.94px] pt-[33.07px] pr-[24.8px] pb-[39.11px] h-[282px] max-sm:h-auto">
            <div className="flex gap-[28.36px]">
              <Image
                src="/Frame 1000002775.png"
                className="max-sm:w-[80px] max-sm:h-[80px]"
                width={93.71}
                height={93.71}
              />
              <div>
                <h1 className="text-[36px] max-sm:text-[24px] max-sm:leading-[120%] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  Surya Narayan
                </h1>
                <h2 className="text-[#A1A1A1] text-[20px] max-sm:text-base leading-[24px] font-['Graphikthin'] font-normal opacity-60 mt-[6px] max-sm:mt-[3px] max-sm:mb-[12px]">
                  Vitae nisi eu turpis
                </h2>
                {/* <Image
                  src="/razor.svg"
                  className="py-[9.06px]"
                  width={98.24}
                  height={20.89}
                /> */}
              </div>
            </div>
            <p className="opacity-80 max-sm:text-sm max-sm:mt-[20px] text-base text-[#E0E0E0] mt-[34.73px]">
              Your workshop helped me use LinkedIn efficiently to get a job. I
              don’t have to depend on my college for placements.
            </p>
          </div>
          <div className="w-[468px] max-sm:w-[320px] max-sm:p-[20px] border-[1px] border-[#FFFFFFBF] rounded-[6px] pl-[27.94px] pt-[33.07px] pr-[24.8px] pb-[39.11px] h-[282px] max-sm:h-auto">
            <div className="flex gap-[28.36px]">
              <Image
                src="/Frame 1000002775.png"
                className="max-sm:w-[80px] max-sm:h-[80px]"
                width={93.71}
                height={93.71}
              />
              <div>
                <h1 className="text-[36px] max-sm:text-[24px] max-sm:leading-[120%] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  Lakshmi JT{" "}
                </h1>
                <h2 className="text-[#A1A1A1] text-[20px] max-sm:text-base leading-[24px] font-['Graphikthin'] font-normal opacity-60 mt-[6px] max-sm:mt-[3px] max-sm:mb-[12px]">
                  Vitae nisi eu turpis
                </h2>
                {/* <Image
                  src="/razor.svg"
                  className="py-[9.06px]"
                  width={98.24}
                  height={20.89}
                /> */}
              </div>
            </div>
            <p className="opacity-80 max-sm:text-sm max-sm:mt-[20px] text-base text-[#E0E0E0] mt-[34.73px]">
              Most of the workshops I’ve attended, I’ve ended up seeing reels on
              Instagram.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
