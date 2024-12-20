import Image from "next/image";
import React from "react";
import SectionImageSeven from "@/assets/images/section-image-seven.png";
import SectionImageFive from "@/assets/images/section-image-five.png";
import SectionBgFive from "@/assets/images/section-bg-five.png";
import SectionBgSix from "@/assets/images/section-bg-six.png";
import SectionImageEight from "@/assets/images/section-image-eight.png";
import Goal1 from "@/assets/images/goal-1.png";
import Goal2 from "@/assets/images/goal-2.png";
import Goal3 from "@/assets/images/goal-3.png";
import Farmer1 from "@/assets/images/farmer-1.png";
import { Button } from "@/components/ui/button";
import ArrowTopRightIcon from "@/assets/icons/arrow-top-right";

const PLANET = [
  {
    title: "Irrigation and Land Levelling",
    desc: "Berms and canals prevent flooding and enable two crops annually. Laser land leveling improves yields by 20-30%.",
  },
  {
    title: "Biochar Integration",
    desc: "Rice husks are converted to biochar, enriching soil and reducing emissions.",
  },
  {
    title: "Renewable Energy from Rice Husks",
    desc: "Our drying systems use rice husks as a renewable energy source, lowering our carbon footprint and exploring building material applications.",
  },
  {
    title: "Solar-Powered Irrigation",
    desc: "Replacing diesel pumps with solar-powered systems will decrease emissions by [xy,000 tons CO2e] and expand AWD, reducing methane by up to 60%.",
  },
  {
    title: "Organic Alternatives",
    desc: "We work with partners to replace chemical fertilizers with organic ones that improve soil health.",
  },
  {
    title: "Biodiversity Enhancement",
    desc: "Maintaining selected wetlands provides bird habitats and enhances ecosystem diversity.",
  },
];
export default function Impact() {
  return (
    <div className="static mt-24">
      <div className="w-full flex justify-center items-start h-[911px] pt-1">
        <div className="~sm/xl:~w-96/brand_xl flex flex-col space-y-12">
          <div>
            <Image src={SectionImageSeven} alt="hero" />
          </div>
          <div className="text-center w-full flex flex-col items-center">
            <span className="font-chenla text-sm">OUR IMPACT</span>
            <h1 className="heading-1">
              Building a Legacy of Equity and Empowerment
            </h1>
            <p className="font-noto w-[800px]">
              We are nurturing a harmonious balance between people, planet, and
              profit. Our commitment goes beyond agriculture—we are buildinga a
              future where social equity, environmental stewardship, and
              sustainable, profitable growth coexist.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-end pb-24 h-[440px] bg-gradient-to-b from-[#DCE7FC] to-transparent to-40% relative">
        <div className="absolute z-0 top-14 left-28">
          <span className="font-noto text-[120px] font-bold bg-gradient-to-b from-[#CCDCFC] to-transparent bg-clip-text text-transparent leading-none">
            PEOPLE
          </span>
        </div>
        <div className="~sm/xl:~w-96/brand_xl absolute pb-1">
          <div className="flex items-end justify-between">
            <h3 className="heading-3 w-[47%] leading-tight">
              From empowering communities and embracing regenerative practices
              to driving economic prosperity, we are sowing the seeds for a
              thriving, inclusive, and resilient agricultural landscape.
            </h3>

            <div className="w-[30%] space-y-4">
              <p className="font-noto">
                Our work aligns with the United Nations Sustainable Development
                Goals (SDGs), including No Poverty, Gender Equality, and Climate
                Action.
              </p>
              <div className="flex gap-4">
                <Image
                  alt="goal"
                  className="aspect-square w-20 h-20"
                  src={Goal1}
                />
                <Image
                  alt="goal"
                  className="aspect-square w-20 h-20"
                  src={Goal2}
                />
                <Image
                  alt="goal"
                  className="aspect-square w-20 h-20"
                  src={Goal3}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-start h-[448px]">
        <div className="~sm/xl:~w-96/brand_xl flex justify-between">
          <div className="w-full flex gap-20 items-center">
            <div>
              <div className="w-[628px] h-[328px] relative">
                <Image
                  alt="farmer"
                  src={SectionImageFive}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="">
              <h2 className="heading-2 text-[2.5rem]">
                Farmers are at the heart of BRM Agro.
              </h2>
              <p className="font-noto">
                Our model is built around empowering these vital contributors
                through support, resources, and opportunities. <br />
                <br /> We believe that when farmers thrive, the entire community
                prospers. From providing high-quality inputs and training to
                creating sustainable livelihoods, we are building a future where
                farmers are leading the agricultural transformation of Cambodia.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex  justify-center items-start h-[605px] overflow-x-hidden">
        <div className="~sm/xl:~w-96/brand_xl flex relative">
          <h5 className="heading-4 text-[#1D489E] w-[18%]">
            We aid and support our farmers-partners to cultivate their farms and
            maximize their profits.
          </h5>
          <div className="absolute ml-[20%] w-full">
            <table className="border-collapse border border-[#58B2E4]">
              <tbody>
                <tr>
                  <td className="border border-[#58B2E4] w-[22.5rem] h-[18.75rem]">
                    <div className="w-full h-full p-[1.875rem] space-y-1 relative ">
                      <h3 className="heading-3 text-[#1D489E]">
                        Seed & Input Supports
                      </h3>
                      <p className="font-noto">
                        Providing high-quality seeds and financing inputs at
                        discounted rates, helping farmers increase productivity
                        and reduce costs.
                      </p>
                      <div className="h-14 w-20 bg-[#D9D9D9] absolute right-[1.875rem] bottom-[1.875rem]"></div>
                    </div>
                  </td>
                  <td className="border border-[#58B2E4] w-[22.5rem] h-[18.75rem]">
                    <div className="w-full h-full p-[1.875rem] space-y-1 relative">
                      <h3 className="heading-3 text-[#1D489E]">
                        Training & Education
                      </h3>
                      <p className="font-noto">
                        Offering workshops and hands-on training in modern
                        farming techniques, soil management, and efficient
                        harvesting methods.
                      </p>
                      <div className="h-14 w-20 bg-[#D9D9D9] absolute right-[1.875rem] bottom-[1.875rem]"></div>
                    </div>
                  </td>
                  <td className="border border-[#58B2E4] w-[22.5rem] h-[18.75rem]">
                    <div className="w-full h-full p-[1.875rem] space-y-1 relative">
                      <h3 className="heading-3 text-[#1D489E]">
                        Single Mother Supports
                      </h3>
                      <p className="font-noto">
                        Assisting single mothers with child care, school fees,
                        and meals to empower women in agriculture.
                      </p>
                      <div className="h-14 w-20 bg-[#D9D9D9] absolute right-[1.875rem] bottom-[1.875rem]"></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#58B2E4] w-[22.5rem] h-[18.75rem]">
                    <div className="w-full h-full p-[1.875rem] space-y-1 relative ">
                      <h3 className="heading-3 text-[#1D489E]">
                        Access to Market
                      </h3>
                      <p className="font-noto">
                        Facilitating better market access and fair pricing,
                        ensuring farmers have control over their produce and
                        profits.
                      </p>
                      <div className="h-14 w-20 bg-[#D9D9D9] absolute right-[1.875rem] bottom-[1.875rem]"></div>
                    </div>
                  </td>
                  <td
                    colSpan={2}
                    className="border border-[#58B2E4] w-[22.5rem] h-[18.75rem]"
                  >
                    <div className="w-full h-full p-[1.875rem] space-y-1 relative">
                      <h3 className="heading-3 text-[#1D489E]">
                        Leadership Role & Gender Equality
                      </h3>
                      <p className="font-noto">
                        Promoting gender inclusiveness by ensuring that 50% of
                        rice farmers are women and targeting 30% female hires in
                        leadership roles. BRM Agro also enforces a Gender
                        Workplace Protection and Anti-Harassment Policy to
                        create a safe and inclusive environment.
                      </p>
                      <div className="h-14 w-20 bg-[#D9D9D9] absolute right-[1.875rem] bottom-[1.875rem]"></div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="w-full flex  justify-center items-start h-[430px]">
        <div className="flex items-center justify-center my-11">
          <div className="space-y-6">
            <div className="font-noto text-[2rem] text-[#1D489E] font-bold">
              Our Farmer Partners Stories...
            </div>
            <div className="flex gap-6">
              <div className="gap-4 flex  rounded-[0.625rem] shadow-[#6B9CFF] shadow-[0px_0px_4px_0px_rgba(107,156,255,0)] w-[23rem]">
                <div className="w-44 h-44 relative">
                  <Image
                    alt="farmer"
                    src={Farmer1}
                    className="absolute w-full h-full"
                  />
                </div>
                <div className="flex-1 p-2 space-y-4">
                  <p className="font-noto">
                    We love working with BRM Agro. Us farmers have mutual
                    respect for each other.
                  </p>
                  <span className="font-noto font-bold text-sm">
                    Farmer Partner
                  </span>
                </div>
              </div>
              <div className="gap-4 flex  rounded-[0.625rem] shadow-[#6B9CFF] shadow-[0px_0px_4px_0px_rgba(107,156,255,0)] w-[23rem]">
                <div className="w-44 h-44 relative">
                  <Image
                    alt="farmer"
                    src={Farmer1}
                    className="absolute w-full h-full"
                  />
                </div>
                <div className="flex-1 p-2 space-y-4">
                  <p className="font-noto">
                    We love working with BRM Agro. Us farmers have mutual
                    respect for each other.
                  </p>
                  <span className="font-noto font-bold text-sm">
                    Farmer Partner
                  </span>
                </div>
              </div>
              <div className="gap-4 flex  rounded-[0.625rem] shadow-[#6B9CFF] shadow-[0px_0px_4px_0px_rgba(107,156,255,0)] w-[23rem]">
                <div className="w-44 h-44 relative">
                  <Image
                    alt="farmer"
                    src={Farmer1}
                    className="absolute w-full h-full"
                  />
                </div>
                <div className="flex-1 p-2 space-y-4">
                  <p className="font-noto">
                    We love working with BRM Agro. Us farmers have mutual
                    respect for each other.
                  </p>
                  <span className="font-noto font-bold text-sm">
                    Farmer Partner
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[62.5rem] relative flex justify-center items-center">
        <Image
          src={SectionBgFive}
          className="w-full h-full relative object-cover"
          alt="background"
        />
        <div className="absolute z-0 top-64 right-40">
          <span className="font-noto text-[120px] font-bold bg-gradient-to-b from-[#07301C] opacity-50 to-transparent bg-clip-text text-transparent leading-none">
            PLANET
          </span>
        </div>

        <div className="~sm/xl:~w-96/brand_xl absolute flex flex-col space-y-11">
          <h3 className="heading-3 w-[54%] text-white">
            We adhere to sustainable farming practices that protect and
            regenerate the environment. <br />
            <br /> By integrating innovative methods, we aim to enhance soil
            health, reduce emissions, and build resilience against climate
            change.
          </h3>
          <div className="flex flex-wrap gap-6">
            {PLANET.map((val, i) => (
              <div
                key={i}
                className="w-[21.125rem] h-[12.5rem] bg-white p-6 space-y-2"
              >
                <h5 className="heading-4 text-[#1D489E]">{val.title}</h5>
                <p className="font-noto">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-[62.5rem] relative flex justify-center items-center">
        <div className="absolute z-0 top-32 left-24">
          <span className="font-noto text-[120px] font-bold bg-gradient-to-b from-[#E3F4E6] to-transparent bg-clip-text text-transparent leading-none">
            PROFIT
          </span>
        </div>
        <div className="~sm/xl:~w-96/brand_xl absolute flex flex-col">
          <div className="w-[62%] space-y-12">
            <div className="space-y-4">
              <h3 className="heading-3 text-[2.5rem]">Business Model</h3>
              <p className="font-noto">
                BRM Agro&apos;s efficient, vertically-integrated operations have
                enabled us to achieve consistent growth and profitability. By
                investing in advanced technology and partnering with local
                farmers, we have created a sustainable and scalable business
                model that benefits all stakeholders. <br />
                <br /> As we increase the hectares of rice under cultivation
                enabled by our investment in irrigation and our farmer
                partnership model, we will also increase our production
                capacity, enabling continued profitable growth.
              </p>
            </div>
            <div className="w-full grid grid-cols-8 gap-6">
              <div className="col-span-2">
                <h1 className="heading-1">80%</h1>
                <p className="font-noto text-sm font-semibold text-[#37B14D]">
                  increased efficiency from regular milling
                </p>
              </div>
              <div className="col-span-3">
                <h3 className="heading-3">Preserving Tradition</h3>
                <p className="font-noto text-sm font-semibold text-[#37B14D]">
                  We elevate not disrupting their traditional ways, preserving
                  their traditions and culture
                </p>
              </div>
              <div className="col-span-3">
                <h3 className="heading-3">
                  Scalable, Sustainable Business Model
                </h3>
              </div>
            </div>

            <div className="w-full space-y-6">
              <span className="font-noto text-sm font-semibold">
                Intrested in learning more about our economic growth? Our
                Investor deck is available upon request here.
              </span>
              <div className="flex gap-6">
                <Button
                  variant={"blue"}
                  className="flex items-center gap-2 py-3 bg-[#37B14D] text-white font-bold"
                >
                  <span>SUPPORT OUR WORK</span>
                  <ArrowTopRightIcon fill="#092D74" />
                </Button>
                <Button
                  variant={"blue"}
                  className="flex items-center gap-2 py-3 bg-[#37B14D] text-white font-bold"
                >
                  <span>INVESTING OPPORTUNITIES</span>
                  <ArrowTopRightIcon fill="#092D74" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0">
          <div className="relative w-[29.375rem] h-[35.125rem]">
            <Image
              src={SectionImageEight}
              alt="farmer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-[39.75rem] relative flex justify-center items-center">
        <Image
          src={SectionBgSix}
          className="w-full h-full relative object-cover"
          alt="background"
        />
        <div className="absolute ~sm/xl:~w-96/brand_xl text-white flex justify-center items-end h-full mb-28">
          <div className="flex w-full justify-between items-center">
            <div>
              <h1 className="heading-3">
                Whether you&apos;re an investor or <br /> community partner,
                we&apos;d love to <br /> hear from you.
              </h1>
              <p className="font-telex">
                Reach out to explore collaboration opportunities, learn <br />
                more about our work, or ask any questions.
              </p>
            </div>
            <div>
              <Button className="float-right text-xs flex items-center gap-2">
                <span>CONTACT US</span>
                <ArrowTopRightIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
