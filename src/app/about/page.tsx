'use client'

import React from 'react';
import { CardData, ServicesSection } from './components/ServicesSection';
import { FeaturesSection, FinalCta, HeroSection, StatsSection, Timeline } from './components';


const HomePage: React.FC = () => {
    const cardData: CardData[] = [
        { title: "Frontend Development", content: "Xây dựng giao diện người dùng hiện đại", color: "from-blue-500 to-cyan-500" },
        { title: "Backend Development", content: "Phát triển API và xử lý logic server", color: "from-green-500 to-emerald-500" },
        { title: "Mobile Development", content: "Ứng dụng di động đa nền tảng", color: "from-purple-500 to-pink-500" },
        { title: "DevOps", content: "Tự động hóa và triển khai ứng dụng", color: "from-orange-500 to-red-500" }
    ];

    const features: string[] = [
        "Responsive Design",
        "Modern UI/UX",
        "Performance Optimization",
        "SEO Friendly",
        "Accessibility",
        "Cross-browser Support"
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <HeroSection />

            {/* Services Section */}
            <ServicesSection cardData={cardData} />

            {/* Features Section với Parallax */}
            <FeaturesSection features={features} />

            {/* Stats Section */}
            <StatsSection />

            {/* Timeline Section */}
            <Timeline />

            {/* Final CTA */}
            <FinalCta />
        </div>
    );
};

export default HomePage;
