import ScrollReveal from '@/components/shared/animetions/ScrollReveal'
import React from 'react'


export const Timeline = () => {
    return (
        <section className="py-24 px-4 bg-gray-100">
            <div className="max-w-4xl mx-auto">
                <ScrollReveal direction="up">
                    <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
                        Quy Trình Làm Việc
                    </h2>
                </ScrollReveal>

                <div className="space-y-12">
                    {[
                        { step: "01", title: "Phân tích yêu cầu", desc: "Hiểu rõ nhu cầu và mục tiêu của dự án" },
                        { step: "02", title: "Thiết kế & Prototype", desc: "Tạo mockup và prototype tương tác" },
                        { step: "03", title: "Development", desc: "Coding với công nghệ hiện đại nhất" },
                        { step: "04", title: "Testing & Deploy", desc: "Kiểm thử kỹ lưỡng và triển khai" }
                    ].map((item, index) => (
                        <ScrollReveal
                            key={index}
                            direction={index % 2 === 0 ? 'left' : 'right'}
                            delay={index * 0.1}
                        >
                            <div className={`flex items-center space-x-8 ${index % 2 === 1 ? 'flex-row-reverse space-x-reverse' : ''}`}>
                                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-white font-bold text-xl">{item.step}</span>
                                </div>
                                <div className="flex-1 bg-white rounded-xl p-8 shadow-lg">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
                                    <p className="text-gray-600 text-lg">{item.desc}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
