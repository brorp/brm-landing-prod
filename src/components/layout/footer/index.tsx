import Image from "next/image";
import React from "react";
import LogoWhite from "@/assets/images/logo-white.png";
// import Link from "next/link";
import SectionPrimary from "@/components/section/section-primary";

export default function Footer() {
  return (
    <SectionPrimary
      className="bg-gradient-to-br from-[#0d2d7d] from-15% to-[#309651] font-noto text-white"
      classNameChild="grid md:grid-cols-12 xl:p-0 items-center md:h-[260px]"
    >
      <div className="order-last row-span-4 mt-12 space-y-6 justify-self-start md:order-first md:col-span-4 md:mt-0">
        <Image alt="logo" src={LogoWhite} />
        <p className="w-9/12 text-xs md:w-7/12">
          #77, Street 291, Sangkat Boeung Kak 2, Khan Tuol Kouk, Phnom Penh,
          Cambodia
        </p>
      </div>
      <div className="row-span-4 mb-6 flex flex-col items-start font-noto text-sm md:col-span-4 md:mb-0 md:flex-row md:justify-center lg:gap-12">
        {/* <div className="flex flex-col">
          <Link href="#" className="py-2 md:p-2">
            OUR STORY
          </Link>
          <Link href="#" className="py-2 md:p-2">
            OUR RICE
          </Link>
          <Link href="#" className="py-2 md:p-2">
            IMPACT
          </Link>
        </div>
        <div className="flex flex-col">
          <Link href="#" className="py-2 md:p-2">
            INSIGHT
          </Link>
          <Link href="#" className="py-2 md:p-2">
            CONTACT US
          </Link>
        </div> */}
      </div>
      <div className="row-span-4 space-y-6 place-self-end justify-self-start md:col-span-4 md:place-self-center md:justify-self-end md:text-right">
        <div className="text-xs font-bold">CONTACT INFO</div>
        <p className="text-xs">
          (+855) 8127 3458
          <br /> <a href="mailto:INFO@BRM-AGRO.COM">INFO@BRM-AGRO.COM</a>
        </p>
      </div>
    </SectionPrimary>
  );
}
