import Image, { StaticImageData } from "next/image";
import React from "react";
import SectionImageFive from "@/assets/images/section-image-five.png";
import Partner1 from "@/assets/images/partner-1.png";
import Partner2 from "@/assets/images/partner-2.png";
import Leader1 from "@/assets/images/leader-1.png";
import Leader2 from "@/assets/images/leader-2.png";
import Leader3 from "@/assets/images/leader-3.png";
import { Button } from "@/components/ui/button";
import ArrowRightIcon from "@/assets/icons/arrow-right";
import SectionBgThree from "@/assets/images/section-bg-three.png";
import ModalFounder from "@/components/modal/modal-founder";

export type Leader = {
  img: StaticImageData;
  name: string;
  position: string;
  desc: string;
};

export default function OurStory() {
  const LEADER: Leader[] = [
    {
      img: Leader1,
      name: "Chan Ang",
      position: "CO-FOUNDER",
      desc: "Ang’s family has been shaping Cambodia’s rice industry for over a century. After a successful corporate career, he founded BRM Agro in 2015 to bring modern innovation to rice production, building on his family’s legacy.",
    },
    {
      img: Leader2,
      name: "Patric Devenport",
      position: "DIRECTION",
      desc: "With 35 years of experience in Asia, Patrick is a seasoned entrepreneur and private equity manager. He works closely with Ang to expand BRM Agro’s reach and impact in Cambodia’s agricultural sector, develop new products and expand to new export markets.",
    },
    {
      img: Leader3,
      name: "Bill Stoops",
      position: "BOARD MEMBER",
      desc: "Bill has over 40 years of experience in emerging markets, with leadership roles at top financial firms. He joined BRM Agro as a Director in 2022 after seeing its potential to transform Cambodia’s rice industry.",
    },
  ];

  const TIMELINE = [
    {
      year: "2015",
      title: "Founding the Company",
      desc: "Started our journey",
    },
    {
      year: "2016",
      title:
        "We start opening roads and canals for the farmers to work on their land",
      desc: "Built more than 13 km of road and canals, opening 20,000 hectares of rice land, and began supplying the Cambodian Ministry of Agriculture with Rumduol seed",
    },
    {
      year: "2022",
      title: "Expanding Capacities",
      desc: "Commissioned a new rice mill with industrial dryers and started exporting to the EU",
    },
    {
      year: "2024",
      title: "World Food Program Partners",
      desc: "Selected by World Food Program to provide fortified rice to Cambodia schools",
    },
  ];

  return (
    <div className="static mt-24">
      <div className="w-full flex justify-center items-center lg:h-[671px]">
        <div className="w-full xl:w-brand_xl flex flex-col justify-center items-start gap-9 ~sm/lg:~py-[6.25rem]/10 ~sm/lg:~px-[1.5rem]/10 xl:p-0">
          <div className="space-y-2">
            <span className="font-noto ~sm/xl:~text-sm/lg text-[#092D74]">
              BRM AGRO&apos;S GROWTH & ACHIEVEMENTS
            </span>
            <h1 className="font-abaya font-bold ~sm/xl:~text-[2.5rem]/[4rem] text-[#1D489E] leading-none">
              Our History
            </h1>
          </div>
          <div className="lg:grid lg:grid-cols-12 lg:grid-rows-1 grid-rows-12 w-full flex flex-col gap-8 lg:gap-0">
            {TIMELINE.map((val, i) => (
              <div
                key={i}
                className="lg:col-span-3 row-span-3 lg:border-t-2 border-[#D2DFF9] last:border-t-0 relative flex gap-2"
              >
                <div className="w-[18px] h-[18px] rounded-full bg-[#D2DFF9] aspect-square lg:absolute lg:-top-[9px] lg:left-0"></div>
                <div className="lg:mt-4 mr-7">
                  <span className="font-chenla ~sm/xl:~text-lg/2xl text-[#092D74]">
                    {val.year}
                  </span>
                  <h2 className="font-noto text-xl font-bold">{val.title}</h2>
                  <p className="font-noto mt-2">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center lg:h-[582px] bg-[#D2DFF9]">
        <div className="w-full flex flex-col lg:flex-row items-center lg:gap-14 h-full">
          <div className="lg:w-max w-full h-[36.375rem] relative">
            <Image
              alt="section image"
              src={SectionImageFive}
              className="w-full h-full object-cover object-left"
            />
          </div>
          <div className="lg:w-[430px] px-12 py-[3.125rem] lg:p-0">
            <span className="font-noto ~sm/xl:~text-sm/lg text-[#092D74]">
              COMPANY VISION & MISSION
            </span>
            <h1 className="font-abaya font-bold ~sm/xl:~text-2xl/5xl mt-4 text-[#1D489E]">
              Vision Statement
            </h1>
            <p className="font-noto mt-2">
              Transforming Cambodian agriculture and empowering farmers through
              innovation and excellence.
            </p>
            <h1 className="font-abaya font-bold ~sm/xl:~text-2xl/5xl text-[#1D489E] mt-8">
              Mission Statement
            </h1>
            <p className="font-noto ~sm/xl:~text-sm/base mt-2">
              We are committed to revolutionize Cambodian agriculture through
              innovation, investment, and partnerships. With our
              state-of-the-art facilities, sustainable practices, and strategic
              market access, we strive to elevate the quality and value of
              Cambodian rice.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center lg:h-[649px]">
        <div className="w-full flex items-center ~sm/xl:~py-[7.5rem]/0 ~sm/xl:~px-[2.5rem]/0 justify-center flex-col text-center gap-20">
          <div className="lg:w-[700px] space-y-6">
            <h1 className="font-abaya font-bold ~sm/xl:~text-[2rem]/[3rem] text-[#1D489E]">
              Driving Change, Together
            </h1>
            <div className="font-noto space-y-4">
              <p>
                Our success is built on strong partnerships with the Cambodian
                government, leading educational and other development agencies.
                These collaborations enable us to drive agricultural innovation,
                empower farmers, and contribute to sustainable development.
              </p>
              <p>
                Together, we&apos;re building a brighter future for
                Cambodia&apos;s agricultural sector by advancing research,
                policy, and community support, and moving its rich produce up
                the value chain to drive growth and prosperity
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div>
              <Image alt="partner" src={Partner1} />
            </div>
            <div>
              <Image alt="partner" src={Partner2} />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center lg:h-[839px] bg-[#092D74]">
        <div className="w-full flex items-center justify-center flex-col text-center gap-20 py-[6.25rem] pb-[12.5rem]">
          <div className="lg:w-[700px] space-y-6 text-white">
            <h1 className="font-abaya font-bold ~sm/xl:~text-[2rem]/[3rem] ">
              Leadership & Board
            </h1>
            <div className="font-noto ~sm/xl:~text-base/lg flex items-center justify-center">
              <p className="w-4/5 lg:w-full">
                Our leadership is driven by a diverse group of experts with
                deep-rooted knowledge in agriculture, finance, and sustainable
                practices. With decades of experience, our team works closely
                with local farmers and international partners to ensure
                innovation, quality, and growth in every aspect of our
                operations.
              </p>
            </div>
          </div>

          <div className="flex lg:items-start flex-col lg:flex-row gap-10 lg:gap-6 items-center">
            {LEADER.map((val, i) => (
              <ModalFounder key={i} data={val}>
                <div
                  key={i}
                  className="cursor-pointer text-white flex-1 space-y-4 flex items-center flex-col"
                >
                  <Image alt="partner" src={val.img} width={168} height={200} />
                  <div>
                    <h1 className="heading-3">{val.name}</h1>
                    <p className="text-sm">{val.position}</p>
                  </div>
                </div>
              </ModalFounder>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full relative flex justify-center items-end md:items-center">
        <div className="~sm/xl:~h-[37.5rem]/[31.25rem] w-full relative">
          <Image
            src={SectionBgThree}
            alt="hero"
            className="w-full object-cover object-top h-full"
          />
        </div>
        <div className="absolute w-full xl:w-brand_xl text-white mb-20 md:mb-0">
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0 xl:items-center px-6 xl:p-0">
            <h1 className="font-abaya font-bold leading-none ~sm/xl:~text-2xl/[2rem] md:w-5/12">
              Enriching Farmers, Driving Profit. Learn how we empower farmers
              and grow together.
            </h1>
            <div>
              <Button className="space-x-4">
                <ArrowRightIcon /> <span>OUR IMPACT</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
