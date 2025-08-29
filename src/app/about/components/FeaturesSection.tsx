import { FadeInUp, ParallaxText } from '@/components/shared/animetions/AdvancedScrollAnimations'
import StaggeredReveal from '@/components/shared/animetions/StaggeredReveal'
import React from 'react'

type Props = {
    features: string[]
}

export const FeaturesSection: React.FC<Props> = ({ features }) => {

    return (
        <section className="py-24 bg-gradient-to-r from-gray-900 to-gray-800 relative overflow-hidden"  >
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url(https://free3d.com/img/selections/feat-May2019.jpg)',
                    willChange: 'transform'
                }}
            />
            <ParallaxText className="absolute inset-0 flex items-center justify-center opacity-5">
                <span className="text-9xl font-bold text-white">FEATURES</span>
            </ParallaxText>

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <FadeInUp delay={0.2}>
                    <h2 className="text-4xl font-bold text-center mb-16 text-white">
                        Tính Năng Nổi Bật
                    </h2>
                </FadeInUp>

                <div className="grid md:grid-cols-2 gap-8">
                    <StaggeredReveal staggerDelay={0.15}>
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20"
                            >
                                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-white font-bold">✓</span>
                                </div>
                                <span className="text-white text-lg font-medium">{feature}</span>
                            </div>
                        ))}
                    </StaggeredReveal>
                </div>
            </div>
        </section>
        // <div className="content-wrapper my-scroll ">
        //     <div className="parallax">
        //         <div
        //             className="parallax-image"
        //             style={{ backgroundImage: "url('https://free3d.com/img/selections/feat-May2019.jpg')" }}
        //         />
        //         <div className="content">Hey there!</div>
        //     </div>
        // </div>
    )
}
