"use client";

import LogoWhite from "@/assets/images/logo-white.png";
import Logo from "@/assets/images/logo.png";
import LogoT from "@/assets/images/logo-2.png";
import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  // { url: "/our-story", title: "OUR STORY" },
  // { url: "/our-rice", title: "OUR RICE" },
  // { url: "/impact", title: "IMPACTS" },
  // { url: "/insight", title: "INSIGHTS" },
  { url: "/contact", title: "CONTACT US" },
];

type HeaderProps = {
  fixed?: boolean;
};

export default function Header({ fixed = true }: HeaderProps) {
  const { scrollY } = useScroll();
  const [showModal, setShowModal] = useState(false);
  const [hidden, setHidden] = useState<boolean>(false);
  const path = usePathname();
  fixed = !["contact"].some((subPath) => path.includes(subPath));

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (prev && latest > prev && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visble: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden && fixed && !showModal ? "hidden" : "visble"}
      className={cn(
        "left-0 top-0 z-20 flex w-full origin-top-right items-center justify-center border-b border-white bg-[#404040] bg-opacity-20 backdrop-blur-sm backdrop-filter",
        showModal &&
          "fixed h-screen w-screen flex-col items-start overflow-hidden border-none bg-gradient-to-r from-[#031945] to-[#073EAB]",
        fixed ? "fixed" : "bg-white",
      )}
    >
      <motion.nav className="my-4 flex w-full items-center justify-between ~sm/lg:~px-6/10 lg:items-end xl:w-brand_xl xl:p-0">
        <div className={cn("logo h-auto w-28")}>
          <Link href="/" className={cn(showModal && "opacity-0")}>
            <Image
              src={fixed ? Logo : LogoT}
              alt="logo"
              className="object-cover"
            />
          </Link>
        </div>

        <div
          className={cn(
            "hidden items-center gap-8 font-sans lg:flex",
            fixed ? "text-white" : "text-brand-blue",
          )}
        >
          {navLinks.map((val, i) => (
            <Link key={i} href={val.url}>
              {val.title}
            </Link>
          ))}
        </div>
        {!showModal ? (
          <Menu
            onClick={toggleModal}
            className={cn("text-white lg:hidden", !fixed && "text-brand-blue")}
            width={44}
            height={44}
          />
        ) : (
          <XIcon
            onClick={toggleModal}
            className={cn("text-white lg:hidden")}
            width={44}
            height={44}
          />
        )}
      </motion.nav>
      {showModal && (
        <div className="mt-14 flex h-full w-full flex-col p-6">
          <div className="flex flex-col gap-4 font-abaya text-[2rem] text-white">
            {navLinks.map((val, i) => (
              <Link key={i} href={val.url} onClick={toggleModal}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ transition: { delay: 0.4 }, opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="capitalize"
                >
                  {val.title.toLowerCase()}
                </motion.div>
              </Link>
            ))}
          </div>
          <div className="mt-auto space-y-6">
            <Image src={LogoWhite} alt="logo" className="object-cover" />
            <p className="font-noto text-sm text-white">
              For Farmers - For Environment - For Profit
            </p>
          </div>
        </div>
      )}
    </motion.header>
  );
}
