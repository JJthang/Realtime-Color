"use client";

import React from 'react';
import { motion, Variants } from 'motion/react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { StaggeredRevealProps } from '@/types/animation.type';

const StaggeredReveal: React.FC<StaggeredRevealProps> = ({
    children,
    staggerDelay = 0.1,
    className = ''
}) => {
    const { ref, isInView } = useScrollAnimation();

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay
            }
        }
    };

    const item: Variants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={className}
        >
            {Array.isArray(children) ? (
                children.map((child, index) => (
                    <motion.div key={index} variants={item}>
                        {child}
                    </motion.div>
                ))
            ) : (
                <motion.div variants={item}>
                    {children}
                </motion.div>
            )}
        </motion.div>
    );
};

export default StaggeredReveal;