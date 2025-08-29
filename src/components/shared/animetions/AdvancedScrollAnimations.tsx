'use client'

import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ParallaxTextProps {
    children: React.ReactNode;
    className?: string;
}

export const ParallaxText: React.FC<ParallaxTextProps> = ({ children, className = '' }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <motion.div
            ref={ref}
            style={{ y }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

interface FadeInUpProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}

export const FadeInUp: React.FC<FadeInUpProps> = ({
    children,
    delay = 0,
    className = ''
}) => {
    const { ref, isInView } = useScrollAnimation();

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.8,
                    delay,
                    ease: [0.25, 0.46, 0.45, 0.94]
                }
            } : { opacity: 0, y: 60 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};