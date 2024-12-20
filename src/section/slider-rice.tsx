"use client";

import Certificate1 from "@/assets/images/certificate-1.png";
import Certificate2 from "@/assets/images/certificate-2.png";
import Certificate3 from "@/assets/images/certificate-3.png";
import Certificate5 from "@/assets/images/certificate-5.png";
import SectionPrimary from "@/components/section/section-primary";
import { RICE_LIST } from "@/constant";
import Image from "next/image";
import { MouseEvent, useRef, useState } from "react";
import * as motion from "framer-motion/client";

export default function SliderRice() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    const slider = sliderRef.current;
    if (!slider) return;

    setIsDown(true);
    slider.classList.add("active");
    setStartX(e.pageX - slider.offsetLeft);
    setScrollLeft(slider.scrollLeft);
  };

  const handleMouseLeave = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    setIsDown(false);
    slider.classList.remove("active");
  };

  const handleMouseUp = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    setIsDown(false);
    slider.classList.remove("active");
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDown) return;
    e.preventDefault();
    const slider = sliderRef.current;
    if (!slider) return;

    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1;
    slider.scrollLeft = scrollLeft - walk;
  };

  return (
    <SectionPrimary
      className="h-[640px] items-center bg-black text-white"
      classNameChild="xl:p-0 flex flex-col h-full select-none h-full justify-start !pr-0"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ ease: "easeIn" }}
        className="mb-12 flex w-full flex-row items-start justify-between gap-4 pr-6 md:items-center lg:gap-0 xl:pr-0"
      >
        <p className="noto-20 w-[98%] font-bold text-[#D2DFF9] md:w-[415px]">
          Our operations have received the SMETA and EcoCert certifications. Our
          rice is Non-GMO and Whole Grain.
        </p>
        <div className="h-[241px] rounded-md bg-white ~sm/md:~w-[6.25rem]/[35.875rem] md:h-[90px] md:rounded-full">
          <div className="flex h-full w-full flex-col p-4 md:flex-row">
            {[Certificate1, Certificate2, Certificate3, Certificate5].map(
              (certificate, index) => (
                <div className="relative h-full w-full md:w-1/4" key={index}>
                  <Image
                    fill
                    alt="certificate"
                    className="h-full w-full"
                    objectFit="contain"
                    src={certificate}
                  />
                </div>
              ),
            )}
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ ease: "easeIn" }}
        className="no-scrollbar flex w-full items-start justify-between gap-6 overflow-x-auto md:gap-8"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {RICE_LIST.map((val, i) => (
          <div key={i}>
            <div className="h-[77px] w-[100px] rounded-lg md:h-[158px] md:w-[185px]">
              <Image
                draggable={false}
                alt="rice"
                src={val.img}
                className="object-cover"
              />
            </div>
            <h5 className="mt-8 font-noto text-base font-bold text-[#D2DFF9] md:text-lg">
              {val.title}
            </h5>
            <p className="font-noto text-xs text-[#37B14D] md:text-sm">
              {val.subtitle}
            </p>
          </div>
        ))}
      </motion.div>
    </SectionPrimary>
  );
}
