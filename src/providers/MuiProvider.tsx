
'use client'
import React from 'react'
import { theme } from '@/styles/theme';
import createCache from '@emotion/cache'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';

type Props = {
    children: React.ReactNode
}

const muiCache = createCache({ key: 'mui', prepend: true })
muiCache.compat = true

const MuiProvider: React.FC<Props> = ({ children }: Props) => {
    return (
        <CacheProvider value={muiCache} >
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {
                    children
                }
            </ThemeProvider>
        </CacheProvider>
    )
}

export default MuiProvider