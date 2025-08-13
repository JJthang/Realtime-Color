
'use client'
import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/styles/theme';

type Props = {
    children: React.ReactNode
}

const MuiProvider: React.FC<Props> = ({ children }: Props) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {
                children
            }
        </ThemeProvider>
    )
}

export default MuiProvider