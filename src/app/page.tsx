import ArrowRightIcon from "@/assets/icons/arrow-right";
import ArrowTopRightIcon from "@/assets/icons/arrow-top-right";

import Factory1 from "@/assets/images/factory-1.png";
import SectionBg from "@/assets/images/section-bg.png";
import Factory2 from "@/assets/images/section-image-eightteen.png";
import SectionEleven from "@/assets/images/section-image-eleven.png";
import SectionFiveT from "@/assets/images/section-image-fifteen.png";
import SectionFourT from "@/assets/images/section-image-fourteen.png";
import Factory3 from "@/assets/images/section-image-twenty.png";
import SectionFour from "@/assets/images/section-image-seventeen.png";
import SectionSix from "@/assets/images/section-image-sixteen.png";
import SectionTen from "@/assets/images/section-image-ten.png";
import SectionNine from "@/assets/images/section-image-thirteen.png";
import AnimatedCounter from "@/components/animated-counter";
import ResponsiveContainer from "@/components/section/responsive-container";
import SectionPrimary from "@/components/section/section-primary";
import { Button } from "@/components/ui/button";
import ContactSection from "@/section/contact-section";
import SliderBlog from "@/section/slider-blog";
import SliderHome from "@/section/slider-home";
import SliderRice from "@/section/slider-rice";
import * as motion from "framer-motion/client";
import { ArrowDownCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="static">
      <section className="relative">
        <div className="h-[800px] w-full md:aspect-video md:h-auto">
          <video
            autoPlay
            loop
            muted
            className="h-full w-full bg-gradient-to-b from-black object-cover"
          >
            <source src="/video/hero-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="wrapper-video absolute left-0 top-0 h-full w-full"></div>
        <div className="flex w-full items-end justify-center">
          <ResponsiveContainer className="absolute text-white ~lg/xl:~pb-24/36 md:bg-none xl:px-0 xl:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ease: "easeIn" }}
            >
              <h1 className="abaya-64">Transforming Cambodian Rice</h1>
              <p className="noto-24 mt-2 xl:mt-4">
                For Farmers - For Environment - For Profit
              </p>
              <Link href="#section">
                <Button className="mt-12 space-x-4">
                  <ArrowRightIcon /> <span>DISCOVER BRM AGRO</span>
                </Button>
              </Link>
            </motion.div>
          </ResponsiveContainer>
        </div>
      </section>

      <motion.div
        id="section"
        className="flex w-full flex-col items-center justify-center bg-gradient-to-t from-brand-green_bg to-white ~sm/xl:~h-[37.5rem]/[45.625rem] ~sm/xl:~space-y-20/[6.25rem]"
      >
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ ease: "easeIn" }}
          className="w-5/6 text-center font-noto text-lg leading-relaxed text-brand-blue md:text-[30px] lg:w-full"
        >
          BRM is Cambodia&apos;s only vertically-integrated rice business,
          <br className="hidden lg:block" />
          <strong className="italic">
            operating from seed to store, from its own mills and freehold land.
          </strong>
          <br className="hidden lg:block" /> It uses its command of the value
          chain to extract higher incomes for <br className="hidden lg:block" />
          farmers and impose sustainable agri-practices. In the process,
          <strong className="italic">
            {" "}
            it <br className="hidden lg:block" /> generates strong commercial
            returns.
          </strong>
        </motion.p>
        <div className="flex flex-col items-center gap-4 text-brand-green">
          <span className="font-noto text-base font-bold md:text-2xl">
            What we&apos;ve achieved so far
          </span>
          <Link href="#section-2">
            <ArrowDownCircleIcon className="h-[2.75rem] w-[2.75rem] stroke-1" />
          </Link>
        </div>
      </motion.div>

      <SectionPrimary
        className="h-full bg-gradient-to-b from-brand-green_bg from-50% to-[#a8cef4] pb-[110px] lg:h-[73rem] xl:p-0"
        classNameChild="xl:px-[4.375rem] xl:py-0 flex flex-col gap-8"
      >
        <motion.div
          id="section-2"
          initial={{ y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ ease: "easeIn" }}
          className="flex h-full flex-col gap-6 lg:h-[27.625rem] lg:flex-row"
        >
          <div className="flex h-[27.625rem] w-full flex-col justify-between gap-4 rounded-lg border border-brand-green bg-white p-4 text-center lg:h-full lg:w-[20.875rem]">
            <div className="text-brand-blue_two">
              <h1 className="abaya-48">36,000-MT</h1>
              <span className="font-noto text-lg">annual mill capacity</span>
              <p className="mt-3 px-4 font-noto text-sm md:text-base">
                financed by equity, internal cashflow, DFI grants and technical
                innovations - and now poised to scale up to 150,000 MT
              </p>
            </div>
            <div className="relative h-full w-full flex-1">
              <Image
                fill
                alt=""
                src={SectionTen}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
          </div>
          <div className="relative h-[303px] w-full rounded-lg lg:h-full lg:flex-1">
            <Image
              fill
              src={SectionNine}
              alt="section"
              className="h-full w-full rounded-lg object-cover"
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ ease: "easeIn" }}
              className="absolute bottom-0 right-0 flex flex-col items-end p-6"
            >
              <div className="flex items-center gap-2 text-brand-green_two">
                <h1 className="font-abaya text-2xl font-bold leading-none md:text-5xl">
                  73% female workers
                </h1>
              </div>
              <p className="text-right font-noto text-sm font-normal text-white md:w-7/12 md:text-base">
                showcasing BRM&apos;s gender-empowerment program that offers
                full farmer support plus single-mother, childcare and education
                benefits
              </p>
            </motion.div>
          </div>
        </motion.div>
        <div className="flex h-full flex-col-reverse gap-6 lg:h-[12.5rem] lg:flex-row">
          <div className="relative h-[12.5rem] w-full rounded-lg lg:h-full lg:flex-1">
            <Image
              fill
              src={SectionEleven}
              alt="section"
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
          <div className="flex h-full w-full flex-col gap-4 rounded-lg text-brand-blue_two lg:w-[30rem] lg:justify-between">
            <div className="abaya-48 space-y-3">
              <h1>
                <AnimatedCounter from={0} to={18} />
                km of roads,
              </h1>
              <h1>
                <AnimatedCounter from={0} to={17} />
                km of canal
              </h1>
            </div>
            <p className="font-noto text-sm md:w-7/12 md:text-base xl:w-full">
              privately constructed by BRM and fanning out into the countryside
              – opening up 20,000 ha of adjacent land and securing mill supply
            </p>
          </div>
        </div>
        <div className="grid flex-col gap-6 space-y-6 md:grid-cols-3 md:gap-8 md:space-y-0">
          <div className="flex flex-col items-center gap-4">
            <div className="relative h-[126px] w-full">
              <Image
                alt="income uplift"
                src={SectionFourT}
                className="h-full w-full rounded-md object-cover"
              />
            </div>
            <h2 className="abaya-32 text-center text-brand-blue">
              4-5x income uplift
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ ease: "easeIn" }}
              className="w-10/12 text-center font-noto text-sm text-brand-blue md:text-base"
            >
              for households working with BRM since 2015, vs Cambodian
              per-capita income growth of 1.6x during the same period
            </motion.p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="relative h-[126px] w-full">
              <Image
                alt="income uplift"
                src={SectionFiveT}
                className="h-full w-full rounded-md object-cover"
              />
            </div>
            <h2 className="abaya-32 text-center text-brand-blue">
              2x higher yields
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ ease: "easeIn" }}
              className="w-10/12 text-center font-noto text-sm text-brand-blue md:text-base"
            >
              of 5.3 MT/ha per harvest, vs an average 2.8 MT/ha in the rest of
              the country - and BRM has two harvests
            </motion.p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="relative h-[126px] w-full">
              <Image
                alt="income uplift"
                src={SectionSix}
                className="h-full w-full rounded-md object-cover"
              />
            </div>
            <h2 className="abaya-32 text-center text-brand-blue">
              2,200 ha of freehold land
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ ease: "easeIn" }}
              className="w-10/12 text-center font-noto text-sm text-brand-blue md:text-base"
            >
              owned by BRM in Cambodia’s rice-basket province of Kampong Thom –
              unique for Cambodian millers, and likely for South East Asia
            </motion.p>
          </div>
        </div>
      </SectionPrimary>

      <SliderHome />

      <section className="bg-black">
        <div className="relative h-[48.875rem] w-full lg:h-[39rem]">
          <Image
            priority
            src={SectionBg}
            alt="alt"
            className="h-96 w-full object-cover object-[18%] lg:h-full lg:object-[50%]"
          />
        </div>
        <div className="flex w-full items-end justify-center">
          <ResponsiveContainer className="absolute flex flex-col items-end text-white ~lg/xl:~pb-[3.75rem]/[6.25rem] xl:px-0 xl:pt-0">
            <motion.div
              initial={{ y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ ease: "easeIn" }}
              className="flex flex-col items-end"
            >
              <p className="noto-18 w-[54%] text-right font-bold tracking-[3.6px]">
                OUR PRODUCTS
              </p>
              <h1 className="abaya-48 mt-[0.875rem] w-[54%] text-right leading-normal">
                Responsibly Grown Rice
              </h1>
              <div className="mt-[0.875rem] w-[75%] text-right font-noto text-base md:w-[54%]">
                <span>
                  BRM&apos;s rice varieties offer unique flavor and texture.
                  They include the world-famous Angkor Malys, plus the legendary
                  Koshihikari Japonica, and various types of Jasmine and
                  Long-Grain Premium White.
                </span>
                <div className="h-6 md:hidden" />
                <span>
                  A focus on quality and innovation ensures that each variety
                  meets global standards, particularly the very tough standards
                  in the US and Europe, which few South East Asian producers are
                  able to comply with.
                </span>
              </div>
              <Button
                variant={"blue"}
                className="mt-12 hidden items-center gap-2 py-3 text-xs"
              >
                <span>LEARN MORE ABOUT OUR RICE</span>
                <ArrowTopRightIcon />
              </Button>
            </motion.div>
          </ResponsiveContainer>
        </div>
      </section>

      <SliderRice />

      <SectionPrimary
        className="bg-[#0B3996] pt-[6.25rem] text-center lg:pt-[9.375rem]"
        classNameChild="lg:!w-[84%] xl:!w-[64%]"
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ease: "easeIn" }}
          className="px-8 md:px-0"
        >
          <span className="font-noto text-sm tracking-[3.6px] text-brand-green md:text-base">
            FARMER&apos;S MOVEMENT
          </span>
          <h1 className="abaya-48 mt-2 text-white"> From Soil to Community</h1>
          <p className="mt-6 font-noto text-base font-light text-white">
            Experience consistently shows that what is good for farmers and the
            eco-system is good for business. BRM is investing heavily in
            regenerative agriculture, balancing farmer empowerment,
            sustainability and profitability.
          </p>
        </motion.div>
      </SectionPrimary>

      <SliderBlog />

      <SectionPrimary
        className="flex h-full w-full select-none items-end justify-center overflow-hidden bg-white py-[6.25rem] md:py-0 xl:h-[1100px]"
        classNameChild="flex h-full flex-col gap-12 justify-center xl:p-0 "
      >
        <div className="grid h-full w-full gap-12 md:h-[369px] md:grid-cols-2">
          <motion.div
            initial={{ y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ ease: "easeIn" }}
            className="order-last flex h-full flex-col items-start justify-between gap-6 md:order-first md:gap-0"
          >
            <h1 className="abaya-48 text-[#092D74]">
              State-of-the-Art <br /> Rice Processing
            </h1>
            <p className="font-noto text-sm text-[#092D74] md:text-base">
              BRM&apos;s rice mill was commissioned in 2022. With BRM&apos;s
              farming operations, it consumates vertical integration and
              optimizes margin capture. Current annual capacity of the mill is
              36,000 MT. An ongoing expansion program will take that to a
              world-class scale of 150,000 MT. This will anchor BRM - and
              Cambodia - as a premium producer for the US and European markets.
              In future, BRM plans to expand the processing operation downstream
              into products made from broken rice, husks and bran.
            </p>
            <Button className="invisible p-0" variant={"link"}>
              <span className="mr-2 font-noto text-sm font-semibold text-[#092D74]">
                LEARN MORE ABOUT OUR CAPACITIES
              </span>
              <ArrowTopRightIcon />
            </Button>
          </motion.div>
          <motion.div
            initial={{ y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ ease: "easeIn" }}
            className="relative h-[364px] w-full md:h-full"
          >
            <Image
              priority
              alt="farmer"
              src={SectionFour}
              className="h-full w-full object-cover md:rounded-xl"
            />
          </motion.div>
        </div>
        <div className="grid h-full w-full gap-12 md:h-[230px] md:grid-cols-3">
          {[Factory1, Factory2, Factory3].map((val, i) => (
            <motion.div
              initial={{ y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ ease: "easeIn" }}
              className="relative h-full w-full"
              key={i}
            >
              <Image
                alt="factory"
                src={val}
                className="h-full w-full rounded-lg object-cover"
              />
            </motion.div>
          ))}
        </div>
      </SectionPrimary>
      <ContactSection />
    </div>
  );
}
