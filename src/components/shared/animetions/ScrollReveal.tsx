"use client";

import React from 'react';
import { motion, Variants } from 'motion/react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ScrollRevealProps } from '@/types/animation.type';

const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.6,
    className = ''
}) => {
    const { ref, isInView } = useScrollAnimation();

    const variants: Variants = {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
            x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
            scale: direction === 'scale' ? 0.8 : 1
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            transition: {
                duration,
                delay,
                ease: [0.25, 0.25, 0.25, 0.75]
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;