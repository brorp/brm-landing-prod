import SectionPrimary from "@/components/section/section-primary";
import Image from "next/image";
import React from "react";
import Blog1 from "@/assets/images/blog-1.png";
import Blog2 from "@/assets/images/blog-2.png";
import Blog3 from "@/assets/images/blog-3.png";
import { Button } from "@/components/ui/button";
import ArrowTopRightIcon from "@/assets/icons/arrow-top-right";
import * as motion from "framer-motion/client";

export default function SliderBlog() {
  const blogs = [
    {
      images: Blog1,
      tag: "FARMERS",
      title: "Empowering Farmers, Enriching Lives",
      content:
        "BRM's smallholder teams work to provide farmers with low-cost financing of inputs, educational training in sustainable practices, and technical support at every stage of growing and harvesting.  Gender-equity programs offer childcare and single-mother subsidies to ensure that women can join the farming effort - or, in the case of BRM, lead it.",
      button: "READ OUR FARMER STORIES",
    },
    {
      images: Blog2,
      tag: "ENVIRONMENT",
      title: "Regenerative Agriculture",
      content:
        "BRM has worked with farming partners to replace chemical inputs, conserve natural resources and enhance biodiversity.  Now it has introduced a regenerative farming program that will harness the latest LLL and AWD technologies to reduce methane emissions from rice cultivation - one of the planet's biggest sources of greenhouse gasses.",
      button: "LEARN MORE",
    },
    {
      images: Blog3,
      tag: "PROFIT",
      title: "Sustainable Growth, Shared Success",
      content:
        "BRM has achieved strong core profitability and has built its business without any capex debt.  This is the ultimate proof of  its farming model - the fact that it can perpetuate itself financially.  BRM recognises that what makes sustainable operations truly sustainable is earnings: for reinvestment in the company and returns to stakeholders.",
      button: "LEARN MORE",
    },
  ];

  return (
    <SectionPrimary
      className="bg-brand-blue_three pb-[6.25rem] lg:pb-[9.375rem]"
      classNameChild="!pt-0 no-scrollbar h-full overflow-x-auto xl:p-0"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ ease: "easeIn" }}
        className="h-full w-full grid-rows-3 content-center text-white md:grid lg:grid-cols-3 lg:grid-rows-1 xl:w-brand_xl"
      >
        {blogs.map((blog, i) => (
          <div
            // className="h-[620px] flex-1 place-self-stretch border-t px-4 py-6 last:border-b lg:h-[750px] lg:border-l lg:border-t-0 lg:px-6 lg:py-[50px] last:lg:border-r lg:last:border-b-0"
            className="h-full flex-1 place-self-stretch border-t px-4 py-6 last:border-b lg:h-fit lg:border-l lg:border-t-0 lg:px-6 lg:py-[50px] last:lg:border-r lg:last:border-b-0"
            key={i}
          >
            <div className="flex h-full flex-col items-center bg-[#0B3996]">
              <div className="relative h-[180px] w-full">
                <Image
                  priority
                  alt="card image"
                  src={blog.images}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-2 pt-[6px]">
                <p className="font-noto text-sm font-semibold leading-normal tracking-[3.6px] text-[#37B14D] md:text-base">
                  {blog.tag}
                </p>
                <h3 className="w-[320px] font-abaya text-2xl md:text-[2rem]">
                  {blog.title}
                </h3>
                <p className="font-noto text-sm font-light md:text-base">
                  {blog.content}
                </p>
              </div>
              <div className="mt-auto hidden w-full">
                <Button className="flex items-center gap-2 bg-brand-green py-3 text-white">
                  <span className="text-wrap font-noto text-sm md:text-base">
                    {blog.button}
                  </span>
                  <ArrowTopRightIcon fill="#092D74" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </SectionPrimary>
  );
}
