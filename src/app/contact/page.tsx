import ArrowRightIcon from "@/assets/icons/arrow-right";
import Twelve from "@/assets/images/section-image-twelve.png";
import SectionPrimary from "@/components/section/section-primary";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Contact() {
  return (
    <SectionPrimary
      classNameChild="!p-0 flex flex-col md:flex-row md:h-[960px] !w-full"
      className=""
    >
      <div className="h-full w-full bg-gradient-to-br from-white from-20% to-brand-blue_four px-6 py-20 lg:w-7/12 lg:px-12 xl:!pr-[7.5rem]">
        <h1 className="abaya-32 mb-12 w-11/12 text-brand-blue">
          Whether you&apos;re an investor or community partner, we want to hear
          from you.
        </h1>
        <h1 className="abaya-32 mb-12 w-11/12 text-brand-blue">
          Reach out to explore collaboration opportunities, learn more about our
          work, or ask any questions.
        </h1>
        <form action="#" className="space-y-6 font-noto">
          <input
            className="h-16 w-full border-b border-brand-blue bg-transparent px-4 placeholder:text-brand-blue focus:outline-none"
            placeholder="Name*"
            required
          />
          <input
            className="h-16 w-full border-b border-brand-blue bg-transparent px-4 placeholder:text-brand-blue focus:outline-none"
            placeholder="Your E-mail*"
          />
          <input
            className="h-16 w-full border-b border-brand-blue bg-transparent px-4 placeholder:text-brand-blue focus:outline-none"
            placeholder="Subject*"
          />
          <textarea
            rows={5}
            className="w-full border-b border-brand-blue bg-transparent px-4 placeholder:text-brand-blue focus:outline-none"
            placeholder="Your message here..."
          ></textarea>
          <Button
            type="submit"
            className="mt-12 space-x-4 bg-brand-blue text-white"
          >
            <ArrowRightIcon /> <span className="noto-16">SEND MESSAGE</span>
          </Button>
        </form>
      </div>{" "}
      <div className="relative h-full w-full lg:w-5/12">
        <Image alt="" src={Twelve} className="h-full w-full object-cover" />
      </div>
    </SectionPrimary>
  );
}
