'use client'

import { useEffect, useState } from 'react'

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true)
            } else {
                setVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <>
            <button
                onClick={scrollToTop}
                className={`
                fixed bottom-5 right-5 w-10 h-10 rounded-full 
                bg-blue-600 text-white flex items-center justify-center 
                shadow-lg cursor-pointer
                transition-all duration-500 
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
            `}
            >
                ↑
            </button>
        </>
    )
}
