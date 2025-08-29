'use client'
import React from 'react'
import { motion } from "motion/react"
import ScrollReveal from '@/components/shared/animetions/ScrollReveal'


export const FinalCta = () => {
    return (
        <section className="py-24 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="max-w-4xl mx-auto text-center">
                <ScrollReveal direction="scale" delay={0.2}>
                    <h2 className="text-4xl font-bold text-white mb-8">
                        Sẵn sàng bắt đầu dự án?
                    </h2>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.5}>
                    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                        Liên hệ với chúng tôi để được tư vấn miễn phí về dự án của bạn
                    </p>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.7}>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-blue-600 font-bold text-lg px-12 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
                    >
                        Liên Hệ Ngay
                    </motion.button>
                </ScrollReveal>
            </div>
        </section>
    )
}
