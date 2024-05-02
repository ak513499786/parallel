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
          { ease: Linear.easeNone, x: -1263, duration: 10 }
        );
    } else if (width < 640) {
      gsap
        .timeline({ repeat: -1 })
        .fromTo(
          successanimation.current,
          { x: -150 },
          { ease: Linear.easeNone, x: -833, duration: 10 }
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
      <h1 className="w-[813.91px] max-hamburger:w-full pl-20 max-md:px-[40px] max-sm:px-[20px] text-[64px] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] leading-[61.68px] font-['Graphikthin'] font-light text-[#E5E5E5] mb-[58px] max-sm:mb-[50px] tracking-[-2.56px]">
        People benefitting from our learn now pay later model.
      </h1>
      <div className="overflow-x-hidden w-full">
        <div
          ref={successanimation}
          className="flex gap-[20px] ml-20 max-sm:ml-[25px] max-md:ml-[50px] w-[3880px]"
        >
          <div className="w-[630px] max-sm:w-[320px] max-sm:p-[20px] border-[1px] border-[#FFFFFFBF] rounded-[6px] pl-[27.94px] pt-[33.07px] pr-[24.8px] pb-[39.11px] h-[395px] max-sm:h-auto">
            <div className="flex gap-[42.5px]">
              <Image
                src="/Frame 1000002775.png"
                className="max-sm:w-[100px] max-sm:h-[100px]"
                width={142.56}
                height={142.56}
              />
              <div>
                <h1 className="text-[36px] max-sm:text-[24px] max-sm:leading-[120%] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  In Arcu Nunc
                </h1>
                <h2 className="text-[#A1A1A1] text-[20px] max-sm:text-base leading-[24px] font-['Graphikthin'] font-normal opacity-60 mb-[27px] mt-[6px] max-sm:mt-[3px] max-sm:mb-[12px]">
                  Vitae nisi eu turpis
                </h2>
                <Image
                  src="/razor.svg"
                  className="py-[9.06px]"
                  width={98.24}
                  height={20.89}
                />
              </div>
            </div>
            <p className="opacity-80 max-sm:text-sm max-sm:mt-[20px] text-base text-[#E0E0E0] mt-[33.84px]">
              Eu nulla tincidunt aliquam volutpat lorem. Lectus phasellus
              tristique in proin sit dolor cursus pharetra elit. Morbi
              adipiscing tellus amet faucibus ut. Duis eu viverra urna diam diam
              pulvinar. Risus scelerisque diam dolor est vulputate amet. Enim
              congue egestas morbi mauris adipiscing libero sollicitudin
              venenatis egestas. Tincidunt mi lorem et donec id dignissim
              pharetra ut. Velit dolor sapien elementum congue leo suscipit
              purus.
            </p>
          </div>
          <div className="w-[630px] max-sm:w-[320px] max-sm:p-[20px] border-[1px] border-[#FFFFFFBF] rounded-[6px] pl-[27.94px] pt-[33.07px] pr-[24.8px] pb-[39.11px] h-[395px] max-sm:h-auto">
            <div className="flex gap-[42.5px]">
              <Image
                src="/Frame 1000002775.png"
                className="max-sm:w-[100px] max-sm:h-[100px]"
                width={142.56}
                height={142.56}
              />
              <div>
                <h1 className="text-[36px] max-sm:text-[24px] max-sm:leading-[120%] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  In Arcu Nunc
                </h1>
                <h2 className="text-[#A1A1A1] text-[20px] max-sm:text-base leading-[24px] font-['Graphikthin'] font-normal opacity-60 mb-[27px] mt-[6px] max-sm:mt-[3px] max-sm:mb-[12px]">
                  Vitae nisi eu turpis
                </h2>
                <Image
                  src="/razor.svg"
                  className="py-[9.06px]"
                  width={98.24}
                  height={20.89}
                />
              </div>
            </div>
            <p className="opacity-80 max-sm:text-sm max-sm:mt-[20px] text-base text-[#E0E0E0] mt-[33.84px]">
              Eu nulla tincidunt aliquam volutpat lorem. Lectus phasellus
              tristique in proin sit dolor cursus pharetra elit. Morbi
              adipiscing tellus amet faucibus ut. Duis eu viverra urna diam diam
              pulvinar. Risus scelerisque diam dolor est vulputate amet. Enim
              congue egestas morbi mauris adipiscing libero sollicitudin
              venenatis egestas. Tincidunt mi lorem et donec id dignissim
              pharetra ut. Velit dolor sapien elementum congue leo suscipit
              purus.
            </p>
          </div>
          <div className="w-[630px] max-sm:w-[320px] max-sm:p-[20px] border-[1px] border-[#FFFFFFBF] rounded-[6px] pl-[27.94px] pt-[33.07px] pr-[24.8px] pb-[39.11px] h-[395px] max-sm:h-auto">
            <div className="flex gap-[42.5px]">
              <Image
                src="/Frame 1000002775.png"
                className="max-sm:w-[100px] max-sm:h-[100px]"
                width={142.56}
                height={142.56}
              />
              <div>
                <h1 className="text-[36px] max-sm:text-[24px] max-sm:leading-[120%] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  In Arcu Nunc
                </h1>
                <h2 className="text-[#A1A1A1] text-[20px] max-sm:text-base leading-[24px] font-['Graphikthin'] font-normal opacity-60 mb-[27px] mt-[6px] max-sm:mt-[3px] max-sm:mb-[12px]">
                  Vitae nisi eu turpis
                </h2>
                <Image
                  src="/razor.svg"
                  className="py-[9.06px]"
                  width={98.24}
                  height={20.89}
                />
              </div>
            </div>
            <p className="opacity-80 max-sm:text-sm max-sm:mt-[20px] text-base text-[#E0E0E0] mt-[33.84px]">
              Eu nulla tincidunt aliquam volutpat lorem. Lectus phasellus
              tristique in proin sit dolor cursus pharetra elit. Morbi
              adipiscing tellus amet faucibus ut. Duis eu viverra urna diam diam
              pulvinar. Risus scelerisque diam dolor est vulputate amet. Enim
              congue egestas morbi mauris adipiscing libero sollicitudin
              venenatis egestas. Tincidunt mi lorem et donec id dignissim
              pharetra ut. Velit dolor sapien elementum congue leo suscipit
              purus.
            </p>
          </div>
          <div className="w-[630px] max-sm:w-[320px] max-sm:p-[20px] border-[1px] border-[#FFFFFFBF] rounded-[6px] pl-[27.94px] pt-[33.07px] pr-[24.8px] pb-[39.11px] h-[395px] max-sm:h-auto">
            <div className="flex gap-[42.5px]">
              <Image
                src="/Frame 1000002775.png"
                className="max-sm:w-[100px] max-sm:h-[100px]"
                width={142.56}
                height={142.56}
              />
              <div>
                <h1 className="text-[36px] max-sm:text-[24px] max-sm:leading-[120%] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  In Arcu Nunc
                </h1>
                <h2 className="text-[#A1A1A1] text-[20px] max-sm:text-base leading-[24px] font-['Graphikthin'] font-normal opacity-60 mb-[27px] mt-[6px] max-sm:mt-[3px] max-sm:mb-[12px]">
                  Vitae nisi eu turpis
                </h2>
                <Image
                  src="/razor.svg"
                  className="py-[9.06px]"
                  width={98.24}
                  height={20.89}
                />
              </div>
            </div>
            <p className="opacity-80 max-sm:text-sm max-sm:mt-[20px] text-base text-[#E0E0E0] mt-[33.84px]">
              Eu nulla tincidunt aliquam volutpat lorem. Lectus phasellus
              tristique in proin sit dolor cursus pharetra elit. Morbi
              adipiscing tellus amet faucibus ut. Duis eu viverra urna diam diam
              pulvinar. Risus scelerisque diam dolor est vulputate amet. Enim
              congue egestas morbi mauris adipiscing libero sollicitudin
              venenatis egestas. Tincidunt mi lorem et donec id dignissim
              pharetra ut. Velit dolor sapien elementum congue leo suscipit
              purus.
            </p>
          </div>
          <div className="w-[630px] max-sm:w-[320px] max-sm:p-[20px] border-[1px] border-[#FFFFFFBF] rounded-[6px] pl-[27.94px] pt-[33.07px] pr-[24.8px] pb-[39.11px] h-[395px] max-sm:h-auto">
            <div className="flex gap-[42.5px]">
              <Image
                src="/Frame 1000002775.png"
                className="max-sm:w-[100px] max-sm:h-[100px]"
                width={142.56}
                height={142.56}
              />
              <div>
                <h1 className="text-[36px] max-sm:text-[24px] max-sm:leading-[120%] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  In Arcu Nunc
                </h1>
                <h2 className="text-[#A1A1A1] text-[20px] max-sm:text-base leading-[24px] font-['Graphikthin'] font-normal opacity-60 mb-[27px] mt-[6px] max-sm:mt-[3px] max-sm:mb-[12px]">
                  Vitae nisi eu turpis
                </h2>
                <Image
                  src="/razor.svg"
                  className="py-[9.06px]"
                  width={98.24}
                  height={20.89}
                />
              </div>
            </div>
            <p className="opacity-80 max-sm:text-sm max-sm:mt-[20px] text-base text-[#E0E0E0] mt-[33.84px]">
              Eu nulla tincidunt aliquam volutpat lorem. Lectus phasellus
              tristique in proin sit dolor cursus pharetra elit. Morbi
              adipiscing tellus amet faucibus ut. Duis eu viverra urna diam diam
              pulvinar. Risus scelerisque diam dolor est vulputate amet. Enim
              congue egestas morbi mauris adipiscing libero sollicitudin
              venenatis egestas. Tincidunt mi lorem et donec id dignissim
              pharetra ut. Velit dolor sapien elementum congue leo suscipit
              purus.
            </p>
          </div>
          <div className="w-[630px] max-sm:w-[320px] max-sm:p-[20px] border-[1px] border-[#FFFFFFBF] rounded-[6px] pl-[27.94px] pt-[33.07px] pr-[24.8px] pb-[39.11px] h-[395px] max-sm:h-auto">
            <div className="flex gap-[42.5px]">
              <Image
                src="/Frame 1000002775.png"
                className="max-sm:w-[100px] max-sm:h-[100px]"
                width={142.56}
                height={142.56}
              />
              <div>
                <h1 className="text-[36px] max-sm:text-[24px] max-sm:leading-[120%] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  In Arcu Nunc
                </h1>
                <h2 className="text-[#A1A1A1] text-[20px] max-sm:text-base leading-[24px] font-['Graphikthin'] font-normal opacity-60 mb-[27px] mt-[6px] max-sm:mt-[3px] max-sm:mb-[12px]">
                  Vitae nisi eu turpis
                </h2>
                <Image
                  src="/razor.svg"
                  className="py-[9.06px]"
                  width={98.24}
                  height={20.89}
                />
              </div>
            </div>
            <p className="opacity-80 max-sm:text-sm max-sm:mt-[20px] text-base text-[#E0E0E0] mt-[33.84px]">
              Eu nulla tincidunt aliquam volutpat lorem. Lectus phasellus
              tristique in proin sit dolor cursus pharetra elit. Morbi
              adipiscing tellus amet faucibus ut. Duis eu viverra urna diam diam
              pulvinar. Risus scelerisque diam dolor est vulputate amet. Enim
              congue egestas morbi mauris adipiscing libero sollicitudin
              venenatis egestas. Tincidunt mi lorem et donec id dignissim
              pharetra ut. Velit dolor sapien elementum congue leo suscipit
              purus.
            </p>
          </div>
          <div className="w-[630px] max-sm:w-[320px] max-sm:p-[20px] border-[1px] border-[#FFFFFFBF] rounded-[6px] pl-[27.94px] pt-[33.07px] pr-[24.8px] pb-[39.11px] h-[395px] max-sm:h-auto">
            <div className="flex gap-[42.5px]">
              <Image
                src="/Frame 1000002775.png"
                className="max-sm:w-[100px] max-sm:h-[100px]"
                width={142.56}
                height={142.56}
              />
              <div>
                <h1 className="text-[36px] max-sm:text-[24px] max-sm:leading-[120%] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  In Arcu Nunc
                </h1>
                <h2 className="text-[#A1A1A1] text-[20px] max-sm:text-base leading-[24px] font-['Graphikthin'] font-normal opacity-60 mb-[27px] mt-[6px] max-sm:mt-[3px] max-sm:mb-[12px]">
                  Vitae nisi eu turpis
                </h2>
                <Image
                  src="/razor.svg"
                  className="py-[9.06px]"
                  width={98.24}
                  height={20.89}
                />
              </div>
            </div>
            <p className="opacity-80 max-sm:text-sm max-sm:mt-[20px] text-base text-[#E0E0E0] mt-[33.84px]">
              Eu nulla tincidunt aliquam volutpat lorem. Lectus phasellus
              tristique in proin sit dolor cursus pharetra elit. Morbi
              adipiscing tellus amet faucibus ut. Duis eu viverra urna diam diam
              pulvinar. Risus scelerisque diam dolor est vulputate amet. Enim
              congue egestas morbi mauris adipiscing libero sollicitudin
              venenatis egestas. Tincidunt mi lorem et donec id dignissim
              pharetra ut. Velit dolor sapien elementum congue leo suscipit
              purus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
