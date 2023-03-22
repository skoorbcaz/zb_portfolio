import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import './styles.css'
export const Resume = () => {
  return (
    <Box ml='200px' p='100'>
      <Heading as='h1' size='2xl' mb='5'>
        Resume
      </Heading>
      <Box className='resume' borderRadius={5} mt='5' py='10' px='20' bg='gray.800'>
        <Box borderBottom='solid 1px var(--chakra-colors-gray-500)' py='5'>
          <Heading as='h2' mb='3'>
            <b>ZAC</b> BROOKS
          </Heading>
          <Heading color='brand.500' as='h4' mb='5'>
            UI/UX Lead
          </Heading>
        </Box>
        <Flex mt={8} py='5'>
          <Flex borderRight='solid 1px var(--chakra-colors-gray-500)' flex={1} height={300}>
            <Contact />
          </Flex>
          <Flex flex={3} height={300}></Flex>
        </Flex>
      </Box>
    </Box>
  )
}

const Contact = () => {
  return (
    <Box>
      <Heading color='gray.300' as='h5' mb='10'>
        CONTACT
      </Heading>
      <Heading color='gray.300' as='h6' mb='3'>
        MOBILE
      </Heading>
      <Text mb='10'>501.733.2220</Text>
      <Heading color='gray.300' as='h6' mt='3' mb='3'>
        EMAIL
      </Heading>
      <Text mb='10'>zac@lunacasoftware.com</Text>
    </Box>
  )
}
