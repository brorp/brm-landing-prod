import Certificate1 from "@/assets/images/certificate-1.png";
import Certificate2 from "@/assets/images/certificate-2.png";
import Certificate3 from "@/assets/images/certificate-3.png";
import Certificate4 from "@/assets/images/certificate-4.png";
import Certificate5 from "@/assets/images/certificate-5.png";
import SectionBgFour from "@/assets/images/section-bg-four.png";
import SectionImage from "@/assets/images/section-image-six.png";
import { RICE_LIST } from "@/constant";
import Image from "next/image";

export default function OurRice() {
  return (
    <div className="static">
      <div className="relative flex w-full items-end xl:justify-center">
        <div className="relative h-[50rem] w-full lg:h-full">
          <Image
            src={SectionBgFour}
            alt="hero"
            style={{ objectPosition: "50%" }}
            className="h-full w-full object-cover object-bottom lg:object-center"
          />
        </div>
        <div className="absolute mb-10 text-white xl:mb-24 xl:w-brand_xl">
          <div className="w-5/6 space-y-2 ~sm/lg:~p-6/10 md:w-full lg:pb-0 xl:p-0">
            <span className="link ~sm/xl:~text-sm/lg">OUR RICE</span>
            <h1 className="font-abaya font-bold leading-none ~sm/xl:~text-[2.5rem]/[4rem]">
              From Seed to Market
            </h1>
            <p className="font-noto ~sm/xl:~text-sm/base md:w-[610px]">
              Rice is a key economic driver for Cambodia, contributing
              significantly to the country&apos;s agricultural output.
              Cambodian-sourced rice has also successfully penetrated the
              European market, capturing a 10% share.
            </p>
          </div>
        </div>
      </div>

      <div className="hidden w-full justify-center lg:flex">
        <div className="w-full space-y-4 ~sm/lg:~p-6/10 xl:w-brand_xl xl:px-0 xl:py-20">
          <div className="heading-5 w-[600px] text-xl font-bold text-[#092D74]">
            Our rice is certified non-GMO, gluten-free, and meets international
            standards, including SMETA and EcoCert.
          </div>
          <div className="flex items-center gap-6">
            <div className="relative">
              <Image
                alt="certificate-1"
                className="w-full"
                src={Certificate1}
              />
            </div>
            <div className="relative">
              <Image
                alt="certificate-2"
                className="w-full"
                src={Certificate2}
              />
            </div>
            <div className="relative">
              <Image
                alt="certificate-3"
                className="w-full"
                src={Certificate3}
              />
            </div>
            <div className="relative">
              <Image
                alt="certificate-4"
                className="w-full"
                src={Certificate4}
              />
            </div>
            <div className="relative">
              <Image
                alt="certificate-5"
                className="w-full"
                src={Certificate5}
              />
            </div>
          </div>
          <div className="heading-5 w-[600px] text-xl font-bold text-[#092D74]">
            From sweet to nutty, tender to sticky, our rice varieties offer a
            taste and texture profile for every preference.
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center">
        <div className="w-full py-[3.125rem] ~sm/lg:~px-6/10 lg:pb-[12.5rem] lg:pt-20 xl:w-brand_xl xl:px-0">
          <div className="grid grid-cols-2 ~sm/xl:~gap-6/20 lg:grid-cols-3">
            {RICE_LIST.map((val, i) => (
              <div key={i} className="justify-stretch space-y-6">
                <div className="relative w-full">
                  <Image
                    alt="rice"
                    src={val.img}
                    className="h-[150px] w-full rounded-sm object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="font-abaya font-bold leading-none text-[#1D489E] ~sm/xl:~text-2xl/[2rem]">
                    {val.title}
                  </h3>
                  <span className="font-noto font-bold text-[#37B14D] ~sm/xl:~text-sm/xl">
                    {val.subtitle}
                  </span>
                  <p className="font-noto ~sm/xl:~text-sm/base">{val.desc}</p>
                  <p className="font-noto ~sm/xl:~text-sm/base">
                    Accounting for ____% of our total production.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center bg-[#0B1936]">
        <div className="w-full pb-[10px] pt-[6.25rem] ~sm/lg:~px-6/10 xl:w-brand_xl xl:px-0">
          <div className="lg :gap-20 grid grid-rows-2 flex-col lg:grid-cols-2 lg:grid-rows-1">
            <div className="relative h-full w-full">
              <Image
                src={SectionImage}
                alt="facilities"
                className="aspect-square h-full w-full object-contain"
              />
            </div>
            <div className="flex-1 text-white xl:py-20">
              <h3 className="mb-6 font-abaya text-[2.5rem] font-bold leading-none">
                Facilities
              </h3>
              <p>
                We are bridging critical gaps in Cambodia&apos;s rice production
                with modern infrastructure and advanced technology.
              </p>
              <br />
              <p>
                Starting with a drying capacity of 120 MT per day, we have
                expanded to 520 MT, and are set to reach 800 MT in 2023.
              </p>
              <br />
              <p>
                Our cutting-edge milling line and storage systems ensure that
                each batch meets international quality standards.
              </p>
              <p>
                <br />
                Beyond infrastructure, we support farmers with advanced tools
                like drone spraying and logistics, enabling them to achieve
                higher yields and better market access.
              </p>
              <br />
              <p>
                Our facilities are more than just processing centers—they are
                catalysts for growth, driving innovation and elevating the
                standards of Cambodian agriculture.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*
      <div className="w-full flex justify-center bg-[#0B1936]">
        <div className="~sm/xl:~w-96/brand_xl mb-24">
          <div className="grid grid-cols-3 gap-[10px]">
            {FACILITIES.map((val, i) => (
              <div key={i} className="space-y-1">
                <Image alt="facilities" src={val.img} />
                <h3 className="font-abaya leading-none font-bold text-[2rem] text-[#37B14D]">{val.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
}
