import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CustomContainer from '@/components/shared/Container'
import NavLinks from './NavLink'

export const MainHeader = () => {

    return (
        <header className="border-b border-black-10 sticky top-0 bg-white">
            <CustomContainer>
                <div className="flex justify-between items-center py-[10px]">
                    <div className="flex items-center gap-4 group">
                        <Image
                            src="/imgs/logo.png"
                            width={30}
                            height={30}
                            alt="Logo"
                            loading="lazy"
                            className="transition-transform duration-500 group-hover:rotate-180"
                        />
                        <Link href="/" className="font-bold">
                            Realtime Colors
                        </Link>
                    </div>

                    <NavLinks />
                </div>
            </CustomContainer>
        </header>
    )
}