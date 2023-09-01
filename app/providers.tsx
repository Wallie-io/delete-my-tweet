'use client'

import { SessionProvider } from 'next-auth/react'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { ColorModeScript } from '@chakra-ui/react'

// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
    brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac',
    },
}

export const theme = extendTheme({ colors })

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <SessionProvider>
            <CacheProvider>
                <ColorModeScript
                    initialColorMode={theme.config.initialColorMode}
                />
                <ChakraProvider theme={theme}>{children}</ChakraProvider>
            </CacheProvider>
        </SessionProvider>
    )
}
