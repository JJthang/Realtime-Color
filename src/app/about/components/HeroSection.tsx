'use client'

import React from 'react'
import ScrollReveal from '@/components/shared/animetions/ScrollReveal'

export const HeroSection = () => {

    return (
        <section id='herror_123' className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-800 relative overflow-hidden">
            <button>Click me</button>
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="relative z-10 text-center">
                <ScrollReveal direction="scale" duration={1.2}>
                    <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
                        TypeScript
                        <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            Scroll Magic
                        </span>
                    </h1>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.5}>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                        Trải nghiệm animation mượt mà khi scroll với TypeScript + Next.js
                    </p>
                </ScrollReveal>
            </div>
        </section>
    )
}
