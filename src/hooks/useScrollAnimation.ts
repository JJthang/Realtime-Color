"use client";

import { useRef } from "react";
import { useInView } from "motion/react";

interface UseScrollAnimationOptions {
  amount?: number | "some" | "all";
  once?: boolean;
  margin?: string;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { amount = 0.1, once = true, margin = "0px" } = options;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    amount,
    once,
    margin,
  });

  return { ref, isInView };
};
