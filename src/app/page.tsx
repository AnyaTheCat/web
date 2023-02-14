'use client'

import { useToken } from '@chakra-ui/react'
import { VStack, Box, Text, Center } from '@chakra-ui/layout'

export default function Home() {
  return (
    <VStack p={4}> 
      <Center h="420px">
        <VStack>
          <Text as="h1" textShadow="4px 4px 0 #06041b, -4px -4px 0 #06041b, 6px 6px 0 #e71038, -6px -6px 0 #31a8ff, 0 0 8px #06041b, 0 0 16px #06041b, 0 0 32px #06041b, 0 0 48px #06041b, 0 0 96px #06041b" fontSize="5xl" fontWeight={600} letterSpacing="2px">
            AnyaTheCat 猫のアーニャ
          </Text>
          <Text as="h2" textShadow="0 0 8px #06041b, 0 0 16px #06041b, 0 0 32px #06041b, 0 0 48px #06041b, 0 0 96px #06041b" fontSize="xl" fontWeight={500} letterSpacing="2px">
            developer - designer - cat enjoyer
          </Text>
        </VStack>
      </Center>
    </VStack>
  )
}
