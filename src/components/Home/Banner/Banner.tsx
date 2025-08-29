import CustomContainer from '@/components/shared/animetions/Container'
import React from 'react'
import BannerInfo from './BannerInfo'
import MuiBlock from './MuiBlock'


export const Banner = () => {
    return (
        <div className='py-8' id='banner' >
            <CustomContainer>
                <div className='flex items-center justify-between'>
                    <BannerInfo />
                    <MuiBlock />
                </div>
                hello world
            </CustomContainer>
        </div>
    )
}
