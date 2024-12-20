import ArrowTopRightIcon from "@/assets/icons/arrow-top-right";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import ProfileImage from "@/assets/images/profile-image.png";
import ArticleImage from "@/assets/images/article-image.png";
import Link from "next/link";
import InstagramIcon from "@/assets/icons/instagram";
import FacebookIcon from "@/assets/icons/facebook";
import YoutubeIcon from "@/assets/icons/youtube";

export default function DetailInsight() {
  return (
    <div className="static mt-24 py-[6.25rem]">
      <div className="w-full flex justify-center items-center flex-col">
        <div className="~sm/xl:~w-96/brand_xl flex flex-col space-y-12">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex gap-4 items-center justify-start w-full">
                <div className="transform scale-x-[-1]">
                  <ArrowTopRightIcon fill="#E0AA64" />
                </div>
                <span className="font-jakarta font-black text-sm text-[#63765C]">
                  BACK TO BLOGS
                </span>
              </div>

              <h2 className="font-sarif text-[2.5rem]">
                Musemind Founders, Sanjay and Arthur are taking the leap with
                their AI robot.
              </h2>

              <Breadcrumb className="font-jakarta text-sm text-[#6D6D6D] font-black">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">TAGS</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>/</BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">READ TIME</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>/</BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">DATE</BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="flex gap-12">
              <div className="flex items-center gap-6">
                <div className="relative aspect-square w-16 h-16">
                  <Image
                    alt="profile"
                    src={ProfileImage}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h5 className="font-jakarta font-bold text-sm text-[#26543D]">
                    Karan Khumar
                  </h5>
                  <p className="font-jakarta text-sm text-[#26543D]">
                    Start Up Advisor
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="relative aspect-square w-16 h-16">
                  <Image
                    alt="profile"
                    src={ProfileImage}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h5 className="font-jakarta font-bold text-sm text-[#26543D]">
                    Karan Khumar
                  </h5>
                  <p className="font-jakarta text-sm text-[#26543D]">
                    Start Up Advisor
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-[37.5rem] relative">
            <Image
              alt="banner"
              src={ArticleImage}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="w-full grid grid-cols-12">
            <div className="col-span-4 space-y-4">
              <div className=" space-y-4">
                <h4 className="font-jakarta text-sm font-black text-[#6D6D6D]">
                  TABLE OF CONTENTS
                </h4>
                <ul className="font-jakarta text-lg font-medium">
                  <li className="before:content-['|']">
                    <Link href="#" className="pl-2">
                      Climate Change
                    </Link>
                  </li>
                  <li className="before:content-['|']">
                    <Link href="#" className="pl-2">
                      Robots Capability
                    </Link>
                  </li>
                  <li className="before:content-['|']">
                    <Link href="#" className="pl-2">
                      Expert’s Opinion
                    </Link>
                  </li>
                  <li className="before:content-['|']">
                    <Link href="#" className="pl-2">
                      Conclusion
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-jakarta text-sm font-black text-[#6D6D6D]">
                  SHARE
                </h4>
                <div className="flex gap-4">
                  <YoutubeIcon />
                  <FacebookIcon />
                  <InstagramIcon />
                </div>
              </div>
            </div>
            <div className="col-span-8 font-jakarta font-medium text-lg text-[#292929]">
              <p>
                In a groundbreaking development, the AI startup Musemind has
                announced that their advanced robots are poised to revolutionize
                the fight against climate change. The company claims that their
                robots, equipped with cutting-edge artificial intelligence and
                advanced sensors, can effectively combat the effects of global
                warming on a massive scale.
              </p>
              <br />
              According to Musemind, their robots are capable of: <br />
              <ul className="list-outside list-disc pl-5">
                <li>
                  Reforestation at unprecedented rates: The robots can plant
                  billions of trees in a fraction of the time it would take
                  humans, helping to restore damaged ecosystems and absorb
                  carbon dioxide.
                </li>
                <li>
                  Ocean cleanup: Equipped with sophisticated filtration systems,
                  the robots can remove vast amounts of plastic waste and other
                  pollutants from the oceans, preserving marine life and
                  improving water quality.
                </li>
                <li>
                  Weather modification: By analyzing complex weather patterns,
                  the robots can identify and address potential climate
                  disasters, such as hurricanes and droughts, before they cause
                  significant damage.
                </li>
              </ul>
              <br />
              <p>
                While some environmental experts have expressed skepticism about
                the feasibility of these claims, Musemind insists that their
                technology is backed by rigorous testing and scientific
                research. The company has also partnered with several leading
                climate organizations to deploy their robots in pilot programs
                around the world.
              </p>
              <br />
              <p>
                If Musemind&apos;s claims prove to be true, their AI robots
                could represent a major breakthrough in the fight against
                climate change. However, many questions remain about the
                long-term sustainability and ethical implications of such
                technology. As the world watches with bated breath, only time
                will tell whether Musemind&apos;s robots can truly become the
                climate heroes we need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
