import React from 'react'
import CustomContainer from '../mh/Container'
import { Box } from '@mui/material'


const MainHeader = () => {
    return (
        <header>
            <CustomContainer maxWidth="sm">
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
            </CustomContainer>
        </header>
    )
}

export default MainHeader