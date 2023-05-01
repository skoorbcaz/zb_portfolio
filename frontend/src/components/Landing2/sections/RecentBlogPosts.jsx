import React, { useEffect, useState } from 'react'
import { Box, Flex, Heading, Text, Image, Link } from '@chakra-ui/react'
import img1 from '../../../images/portfolioslides/gravitate.png'
import { gsap } from 'gsap'
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/all'

import image1 from '../../../images/blog-images/1.jpg'
import image2 from '../../../images/blog-images/2.jpg'
import image3 from '../../../images/blog-images/3.jpg'
import image4 from '../../../images/blog-images/4.jpg'
import image5 from '../../../images/blog-images/5.jpg'
import image6 from '../../../images/blog-images/6.jpg'
import image7 from '../../../images/blog-images/7.jpg'
import image8 from '../../../images/blog-images/8.jpg'
import image9 from '../../../images/blog-images/9.jpg'
import { ArrowForwardIcon } from '@chakra-ui/icons'

const srces = [image1, image4, image2, image3, image5, image6, image7, image8, image9]

function BlogMasonry() {
  return (
    <>
      <Heading maxW='90vw' mx='auto' size='xl' mb={10}>
        recent posts
      </Heading>
      <Box padding={4} w='100%' maxW='90vw' mx='auto' bg='gray.800' sx={{ columnCount: [1, 2, 3], columnGap: '8px' }}>
        {srces.map((src) => (
          <Image key={src} w='100%' borderRadius='xl' mb={2} d='inline-block' src={src} alt='Alt' />
        ))}
      </Box>
      <MagneticCTA />
    </>
  )
}
const MagneticCTA = () => {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    if (!isMounted) {
      const magnets = document.querySelectorAll('.magnetic')
      const strength = 50

      magnets.forEach((magnet) => {
        magnet.addEventListener('mousemove', moveMagnet)
        magnet.addEventListener('mouseout', function (event) {
          gsap.to(event.currentTarget, 1, { x: 0, y: 0, ease: 'power4.out' })
        })
      })

      function moveMagnet(event) {
        const magnetButton = event.currentTarget
        const bounding = magnetButton.getBoundingClientRect()

        gsap.to(magnetButton, 1, {
          x: ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) * strength,
          y: ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) * strength,
          ease: 'power4.out',
        })

        setIsMounted(true)
      }
    }
  }, [])
  return (
    <Flex justifyContent='center' alignItems='center' height='40vh'>
      <div className='magnetic'>
        <button href='#' className='magnet-button my-button'>
          discover more
          <ArrowForwardIcon style={{ marginLeft: '0.5em' }} />
        </button>
      </div>
    </Flex>
  )
}

export const RecentBlogPosts = () => {
  return (
    <section className='blog-preview' style={{ marginTop: '20vh' }}>
      <Flex height='120vh' flexDirection='column' mb={100}>
        <Flex borderRadius={5} flex={1} flexDirection='column' style={{ position: 'relative' }}>
          <div
            src={image3}
            style={{
              background: `url(${image3})`,
              backgroundAttachment: 'fixed',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              borderRadius: 5,
              position: 'absolute',
              height: '80vh',
              width: '100%',
              objectFit: 'cover',
              objectPosition: '100% 0',
            }}
          />
          <Flex flex={1} flexDirection='column' justifyContent='flex-end'>
            <Box zIndex={10} flex={0} borderRadius={5} bg='gray.900' mx='10%' p={20} pb={10}>
              <Flex color='gray.400' gap={5} pb={5}>
                <Text>ZAC BROOKS</Text>
                <Text> | </Text>
                <Text>APRIL 23, 2023</Text>
              </Flex>
              <Heading fontSize='4vw'>Writing React re-use function with TypeScript and Storybook</Heading>
              <Text pt={5} color='gray.300'>
                It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                of letters, as opposed to using 'Content here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,{' '}
              </Text>
              <Flex pt={10}>
                <Flex gap={3} alignItems='center'>
                  <Box width={6} height={6} borderRadius={24} border='solid 1px' bg='brand.500' />
                  <Box width={6} height={6} borderRadius={24} border='solid 1px' />
                  <Box width={6} height={6} borderRadius={24} border='solid 1px' />
                  <Box width={6} height={6} borderRadius={24} border='solid 1px' />
                  <Box width={6} height={6} borderRadius={24} border='solid 1px' />
                </Flex>
                <Flex flex={1} gap={30} justifyContent='flex-end'>
                  <HiArrowLongLeft size={60} />
                  <HiArrowLongRight size={60} />
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <BlogMasonry />
    </section>
  )
}
