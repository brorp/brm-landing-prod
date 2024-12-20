"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const SwitchLang = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer relative inline-flex h-[42px] w-[104px] shrink-0 cursor-pointer items-center rounded-md border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 bg-[#D2DFF9]",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none bg-brand-blue block h-full w-1/2 rounded-md  shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-full data-[state=unchecked]:translate-x-0"
      )}
    />
    <div className="absolute flex justify-around items-center w-full font-base">
      <SwitchPrimitives.Thumb className="data-[state=unchecked]:text-white text-brand-blue transition-colors">
        ENG
      </SwitchPrimitives.Thumb>
      <SwitchPrimitives.Thumb className="data-[state=checked]:text-white text-brand-blue transition-colors">
        CAM
      </SwitchPrimitives.Thumb>
    </div>
  </SwitchPrimitives.Root>
));
SwitchLang.displayName = SwitchPrimitives.Root.displayName;

export { SwitchLang };
