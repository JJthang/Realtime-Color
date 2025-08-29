import React from 'react'
import ScrollReveal from '@/components/shared/animetions/ScrollReveal'
import StaggeredReveal from '@/components/shared/animetions/StaggeredReveal';

export interface CardData {
    title: string;
    content: string;
    color: string;
}

export const ServicesSection: React.FC<{ cardData: CardData[] }> = ({ cardData }) => {
    return (
        <section className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
                <ScrollReveal direction="up" delay={0.2}>
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-gray-800 mb-4">
                            Dịch Vụ Của Chúng Tôi
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
                    </div>
                </ScrollReveal>

                <StaggeredReveal
                    staggerDelay={0.2}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                            <div className="relative p-8">
                                <div className={`w-12 h-12 bg-gradient-to-r ${card.color} rounded-lg mb-6 flex items-center justify-center`}>
                                    <span className="text-white font-bold text-xl">{index + 1}</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                                    {card.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">{card.content}</p>
                            </div>
                        </div>
                    ))}
                </StaggeredReveal>
            </div>
        </section>
    )
}
