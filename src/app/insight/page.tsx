import Image from "next/image";
import React from "react";
import InsightCardImage from "@/assets/images/insight-card-image.png";
import Link from "next/link";

export default function Insight() {
  return (
    <div className="static mt-24">
      <div className="w-full flex justify-center items-start h-[20.75rem] bg-gradient-to-br from-[#D7EDDB] to-[#D2DFF9]">
        <div className="~sm/xl:~w-96/brand_xl flex items-center h-full">
          <h2 className="heading-2 w-8/12 text-[#1D489E]">
            Stay informed with the latest updates and impact stories from BRM
            Agro
          </h2>
        </div>
      </div>

      <div className="w-full flex justify-center items-start">
        <div className="~sm/xl:~w-96/brand_xl flex flex-col h-full mt-12 mb-24 gap-[25px]">
          <h2 className="font-sarif text-[2.5rem] text-[#26543D]">
            Latest News
          </h2>
          <div className="grid grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <Link href={"/insight/asd"} key={i}>
                <div className="shadow-[0px_0px_6px_0px_rgba(0,0,0,0.25)] flex flex-col gap-4 p-5">
                  <div className="flex items-center justify-between">
                    <div className="border border-[#A2C98A] bg-[#A2C98A] bg-opacity-30 rounded-lg px-5 py-2 text-[#26543D] font-jakarta text-xs font-medium">
                      Put Tag Here
                    </div>
                    <p className="font-noto text-xs text-[#6D6D6D]">
                      30 November 2022
                    </p>
                  </div>
                  <div className="w-full h-60 relative">
                    <Image
                      alt="card image"
                      src={InsightCardImage}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-2xl font-sarif">
                    Tech Titans: Innovating the Future
                  </h4>
                  <p className="font-jakarta text-sm text-[#6D6D6D]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
