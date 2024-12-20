"use client";

import {
  animate,
  easeOut,
  KeyframeOptions,
  useInView,
  useIsomorphicLayoutEffect,
} from "framer-motion";
import { useRef } from "react";

type AnimatedCounterProps = {
  from: number;
  to: number;
  duration?: number;
  animationOptions?: KeyframeOptions;
};

const AnimatedCounter = ({
  from,
  to,
  duration = 1.5,
  animationOptions,
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;
    if (!inView) return;

    element.textContent = String(from);
    const controls = animate(from, to, {
      duration: duration,
      ease: easeOut,
      ...animationOptions,
      onUpdate(value) {
        element.textContent = String(value.toFixed());
      },
    });

    return () => {
      controls.stop();
    };
  }, [ref, from, to, inView, duration]);

  return <span ref={ref} />;
};

export default AnimatedCounter;
