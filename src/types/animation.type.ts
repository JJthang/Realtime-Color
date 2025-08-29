export type AnimationDirection = "up" | "down" | "left" | "right" | "scale";
export interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: AnimationDirection;
  delay?: number;
  duration?: number;
  className?: string;
}

export interface StaggeredRevealProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}
