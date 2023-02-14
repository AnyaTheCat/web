import { DeepPartial, extendTheme, Theme, ThemeConfig } from '@chakra-ui/react'

export const theme = extendTheme({
    config: {
        cssVarPrefix: 'アーニャ',
        initialColorMode: 'dark',
        useSystemColorMode: false
    },
    colors: {
        bg: '#06041b'
    },
    fonts: {
        heading: "'NewRodin', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        body: "'NewRodin', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    },
    styles: {
        global: {
            html: {
                minHeight: '100%',
                height: '100%'
            },
            body: {
                bg: 'bg',
                minHeight: '100%',
                height: '100%'
            }
        }
    }
} satisfies DeepPartial<Theme>)