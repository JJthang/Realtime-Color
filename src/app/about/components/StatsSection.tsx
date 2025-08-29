'use client'

import React from 'react'
import { motion } from "motion/react"
import ScrollReveal from '@/components/shared/animetions/ScrollReveal'
import StaggeredReveal from '@/components/shared/animetions/StaggeredReveal'


export const StatsSection = () => {
    return (
        <section className="py-24 px-4">
            <div className="max-w-4xl mx-auto">
                <ScrollReveal direction="scale" delay={0.3}>
                    <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
                        Thống Kê Ấn Tượng
                    </h2>
                </ScrollReveal>

                <StaggeredReveal
                    staggerDelay={0.2}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {[
                        { number: "100+", label: "Projects Completed" },
                        { number: "50+", label: "Happy Clients" },
                        { number: "99%", label: "Success Rate" }
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="text-center bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                        >
                            <motion.div
                                initial={{ scale: 0.5 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 200
                                }}
                                className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4"
                            >
                                {stat.number}
                            </motion.div>
                            <p className="text-gray-600 text-lg font-medium">{stat.label}</p>
                        </div>
                    ))}
                </StaggeredReveal>
            </div>
        </section>
    )
}
