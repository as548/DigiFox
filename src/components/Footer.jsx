import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} color={'blackAlpha.700'} minH={'48'} px={'16'}py={['16','8']}>
        <Stack direction={['column','row']} h={'full'} alignItems={'center'}>
            <VStack w={'full'} alignItems={['center','flex-start']}>
               <Text fontWeight={'bold'}color={'blackAlpha.900'}>About Us</Text>
               <Text fontSize={'sm'} letterSpacing={'widest'} textAlign={['center','left']} color={'blackAlpha.900'}>
                We are the best crypto trading app in India, we provide guidance at a very cheap price.</Text>

            </VStack>
            <VStack >
                <Avatar boxSize={'28'} mt={['4','0']}/>
                <Text color={'blackAlpha.900'}>Our Founder</Text>

            </VStack>

        </Stack>
    </Box>
  )
}

export default Footer
