import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import ResponsiveContainer from "./responsive-container";

type SectionImageBg = {
  bgImage: StaticImageData;
  alt?: string;
  height: string;
  smObjPosition: number;
  children: ReactNode;
  className?: React.ComponentProps<"div">["className"];
};

export default function SectionImageBg({
  bgImage,
  alt = "hero",
  height,
  smObjPosition,
  children,
  className = "",
}: SectionImageBg) {
  return (
    <section>
      <div className={cn("relative w-full lg:h-full", height)}>
        <Image
          priority
          src={bgImage}
          alt={alt}
          style={{ objectPosition: smObjPosition + "%" }}
          className="h-full w-full object-cover object-bottom lg:object-center"
        />
      </div>
      <div className="flex w-full items-end justify-center">
        <ResponsiveContainer className={cn("absolute", className)}>
          {children}
        </ResponsiveContainer>
      </div>
    </section>
  );
}
