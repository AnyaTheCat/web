'use client'

import { FC, PropsWithChildren } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from 'src/theme'

export interface ThemeWrapperProps extends PropsWithChildren {}

export const ThemeWrapper: FC<ThemeWrapperProps> = ({ children }) => (
    <ChakraProvider theme={theme}>
        {children}
    </ChakraProvider>
)