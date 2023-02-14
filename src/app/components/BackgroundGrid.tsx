'use client'

import { FC } from 'react'
import { Box } from '@chakra-ui/layout'
import { motion } from 'framer-motion'

export interface BackgroundGridProps {
    size?: number
}

export const BackgroundGrid: FC<BackgroundGridProps> = ({ size = 16 }) => (
    <Box pos="absolute" zIndex={-10} inset={0} margin={0} overflow="hidden">
        <Box pos="absolute" zIndex={1} inset={0} margin={0} bgGradient="linear-gradient(to-t, bg, bg, transparent)" />
            <motion.div style={{ position: 'absolute', width: '100%', height: '100%' }} animate={{ scale: [1.1, 1.15, 1.1] }} transition={{ duration: 8, type: 'linear', repeat: Infinity }}>
        <Box pos="absolute" zIndex={-10} inset={0} margin={0} sx={{ perspective: '340px' }} overflow="hidden">
                <Box as="svg" color="#e71038" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" transform="scaleX(2) scaleY(2) scaleZ(2) rotateX(15deg) rotateY(0deg) rotateZ(0deg) translateX(0px) translateY(-25%) translateZ(0px) skewX(0deg) skewY(0deg)">
                    <defs>
                        <pattern id="sg1" width={size} height={size} patternUnits="userSpaceOnUse">
                            <path d={`M ${size} 0 L 0 0 0 ${size}`} fill="none" stroke="currentColor" strokeWidth="4"/>
                        </pattern>
                        <pattern id="g1" width={size * 10} height={size * 10} patternUnits="userSpaceOnUse">
                            <rect width={size * 10} height={size * 10} fill="url(#sg1)"/>
                        </pattern>
                    </defs>
                        
                    <rect width="100%" height="100%" fill="url(#g1)" />
                </Box>
        </Box>
            </motion.div>
            <motion.div style={{ position: 'absolute',width: '100%', height: '100%' }} animate={{ scale: [1.1, 1.15, 1.1] }} transition={{ duration: 8, type: 'linear', repeat: Infinity,  }}>
                <Box pos="absolute" zIndex={-10} inset={0} margin={0} sx={{ perspective: '340px' }} overflow="hidden">
            <Box as="svg" color="#31a8ff" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" transform="scaleX(2) scaleY(2) scaleZ(2) rotateX(15deg) rotateY(0deg) rotateZ(0deg) translateX(-4px) translateY(calc(-25% - 4px)) translateZ(0px) skewX(0deg) skewY(0deg)">
                    <defs>
                        <pattern id="sg2" width={size} height={size} patternUnits="userSpaceOnUse">
                            <path d={`M ${size} 0 L 0 0 0 ${size}`} fill="none" stroke="currentColor" strokeWidth="4"/>
                        </pattern>
                        <pattern id="g2" width={size * 10} height={size * 10} patternUnits="userSpaceOnUse">
                            <rect width={size * 10} height={size * 10} fill="url(#sg2)"/>
                        </pattern>
                    </defs>
                        
                    <rect width="100%" height="100%" fill="url(#g2)" />
                </Box>
        </Box>
            </motion.div>
    </Box>
)