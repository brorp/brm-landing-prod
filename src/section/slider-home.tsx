"use client";

import ArrowRightIcon from "@/assets/icons/arrow-right";
import Slider1 from "@/assets/images/slider-1.png";
import Slider2 from "@/assets/images/slider-2.png";
import Slider8 from "@/assets/images/slider-8.png";
import Slider10 from "@/assets/images/slider-10.png";
import Slider9 from "@/assets/images/slider-9.jpg";
import SectionPrimary from "@/components/section/section-primary";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import * as motion from "framer-motion/client";
import Image from "next/image";
import { useEffect, useState } from "react";

const SLIDER_ITEMS = [
  {
    img: Slider8,
    title: "Land Ownership Drives Vertical Integration",
    desc: "Land ownership has allowed BRM to develop a unique farming model on its own plantation. The model is vertical integration, and full control over every stage of production, from the crucial first step of seed development to final rice packaging.",
  },
  {
    img: Slider1,
    title: "Seeding World-Class Rice",
    desc: `All of BRM's rice is premium seed grown from its own seed bank, and is approved for export to Europe and the US. But of particular note is Phka Rumduol, the long-grain jasmine rice that is BRM's flagship product. This grain has been awarded "Best Rice in the World" six times by the TRT World Rice Confererence.`,
  },
  {
    img: Slider10,
    title: "Sustainable, High-Impact Model",
    desc: "BRM directly partners with individual farmers through smallholder support teams, rather than being intermediated by cooperatives. It provides farmers with direct financial and technical assistance, plus various household benefits.  In return, the farmers collaborate on sustainable agri-practices. BRM's model has been rolled out from its own land to adjacent districts, creating a network that farmers are eager to join.",
  },
  {
    img: Slider9,
    title: "Sustainable Innovation",
    desc: "Our sustainable practices include biochar production, drone fertilization, laser land leveling (LLL), alternate wetting and drying (AWD), proprietary bio-fertilizers, and large-scale tree planting.",
  },
  {
    img: Slider2,
    title: "Expanding Capacity",
    desc: "By 2026, BRM aims to quadruple milling capacity to 150,000 MT, positioning it as Cambodia’s largest premium rice exporter. Sales channels have been established in Europe, meeting the rigorous standards for EU distribution, and expansion into the US is underway. However, the challenge in the global food-security crisis is creating supply, not meeting demand.",
  },
];

export default function SliderHome() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <SectionPrimary
      className="h-full items-center bg-[#15381B] lg:h-[62.5rem]"
      classNameChild="xl:p-0 space-y-[3.125rem] overflow-hidden"
    >
      <motion.div
        initial={{ y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ ease: "easeIn" }}
        className="h-full flex-col pt-24 md:pt-0 lg:flex"
      >
        <p className="noto-16 tracking-[3.6px] text-white">
          WHAT MAKES US DIFFERENT
        </p>
        <h1 className="abaya-48 text-[40px] text-white md:text-5xl">
          Beyond the Grain
        </h1>
      </motion.div>
      <motion.div
        initial={{ y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ ease: "easeIn" }}
        className="grid md:grid-cols-2 md:gap-14 xl:gap-20"
      >
        <ul className="hidden space-y-5 md:block">
          {SLIDER_ITEMS.map((val, i) => (
            <li
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={cn(
                "noto-24 cursor-pointer text-[#59DD71]",
                current !== i && "text-opacity-50",
              )}
            >
              {val.title}
            </li>
          ))}
        </ul>

        <Carousel
          setApi={setApi}
          opts={{ loop: true, align: "start" }}
          className="w-full"
        >
          <CarouselContent className="-ml-1 w-full">
            {SLIDER_ITEMS.map((val, i) => (
              <CarouselItem key={i} className="basis-1/2 md:basis-full">
                <div className="flex h-full w-full flex-col gap-6 md:flex-col-reverse md:justify-end">
                  <div className="relative w-auto ~sm/xl:~h-[12.5rem]/[18.75rem]">
                    <Image
                      alt="slider-1"
                      src={val.img}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="space-y-4 md:space-y-0">
                    <h5 className="font-noto text-xl text-brand-green md:hidden md:text-2xl">
                      {val.title}
                    </h5>
                    <p className="font-noto text-sm text-white md:text-lg">
                      {val.desc}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </motion.div>
      <div className="mt-auto space-x-12 pb-20 md:hidden">
        <button onClick={() => api?.scrollPrev()}>
          <div className="grid aspect-square h-11 w-11 rotate-180 place-items-center rounded-full border border-white">
            <ArrowRightIcon />
          </div>
        </button>
        <button onClick={() => api?.scrollNext()}>
          <div className="grid aspect-square h-11 w-11 place-items-center rounded-full border border-white">
            <ArrowRightIcon />
          </div>
        </button>
      </div>
    </SectionPrimary>
  );
}
