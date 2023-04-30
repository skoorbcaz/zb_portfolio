import React from 'react'
import { Box, Flex, Heading, Image, Input, Button, Text } from '@chakra-ui/react'
import zbLogo from '../../images/zb-icon.png'
export const NewsletterSignup = () => {
  return (
    <Flex bg='brand.500' p={30}>
      <Flex mx='5%' gap={50} alignItems='center'>
        <Image width='10%' src={zbLogo} alt='ZB' />
        <Box flex={1}>
          <Heading as='h2' size='xl' color='gray.800'>
            never miss out on a new post
          </Heading>
          <Text color='gray.800'>Sign up for our newsletter to get the latest updates</Text>
        </Box>
        <Flex gap={30}>
          <Input borderColor='gray.500' colorScheme='blackAlpha' placeholder='Enter your email' />
          <Button width={200} colorScheme='blackAlpha'>
            Subscribe
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}
