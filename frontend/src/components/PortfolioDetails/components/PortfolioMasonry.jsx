import React from 'react'
import { Box, Container, Flex, Heading } from '@chakra-ui/react'
import image1 from '../../../images/blog-images/1.jpg'
import image2 from '../../../images/blog-images/2.jpg'
import image3 from '../../../images/blog-images/3.jpg'
import image4 from '../../../images/blog-images/4.jpg'
import image5 from '../../../images/blog-images/5.jpg'
import image6 from '../../../images/blog-images/6.jpg'
import image7 from '../../../images/blog-images/7.jpg'
import image8 from '../../../images/blog-images/8.jpg'
import image9 from '../../../images/blog-images/9.jpg'

export const PortfolioMasonry = () => {
  return (
    <Box>
      <Container maxW='container.xl'>
        <Heading as='h2' mt={200} mb={100} size='4xl'>
          in cab workflow
        </Heading>
      </Container>
      <Flex mb={30} gap={30} height='50vh'>
        <Flex bgImg={`url(${image1})`} bgRepeat='no-repeat' bgSize='cover' flex={2} />
        <Flex bgImg={`url(${image3})`} bgRepeat='no-repeat' bgSize='cover' flex={1} />
      </Flex>
      <Flex gap={30} height='50vh'>
        <Flex gap={30} flex={2}>
          <Flex bgImg={`url(${image4})`} bgSize='cover' flex={1} />

          <Flex bgImg={`url(${image8})`} bgRepeat='no-repeat' bgSize='cover' flex={1} />
        </Flex>
        <Flex bgImg={`url(${image9})`} bgRepeat='no-repeat' bgSize='cover' flex={1} />
      </Flex>
    </Box>
  )
}
