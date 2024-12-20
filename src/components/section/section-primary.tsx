import React, { ReactNode } from "react";
import ResponsiveContainer from "./responsive-container";
import { cn } from "@/lib/utils";

type SectionPrimary = {
  children: ReactNode;
  className?: React.ComponentProps<"div">["className"];
  classNameChild?: React.ComponentProps<"div">["className"];
};

export default function SectionPrimary({
  children,
  className = "",
  classNameChild = "",
}: SectionPrimary) {
  return (
    <section
      className={cn("flex w-full items-start justify-center", className)}
    >
      <ResponsiveContainer className={classNameChild}>
        {children}
      </ResponsiveContainer>
    </section>
  );
}
