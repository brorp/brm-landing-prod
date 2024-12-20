import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type ResponsiveContainer = {
  children: ReactNode;
  className?: React.ComponentProps<"div">["className"];
};
export default function ResponsiveContainer({
  children,
  className = "",
}: ResponsiveContainer) {
  return (
    <div className={cn("w-full ~sm/lg:~p-6/10 xl:w-brand_xl", className)}>
      {children}
    </div>
  );
}
