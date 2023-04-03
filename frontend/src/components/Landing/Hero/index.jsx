import { Box, Flex, Grid, GridItem, Heading, Highlight, Text, Center } from '@chakra-ui/react'
import { DotBackground } from '../DotBackground'
import gravitateLogo from '../../../images/GRAVITATE.svg'
import * as React from 'react'
import { Icon } from '@chakra-ui/icons'
import { BsArrowRightCircle } from 'react-icons/all'
import { useLayoutEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import { gsap } from 'gsap'

export const Hero = () => {
  useLayoutEffect(() => {
    onLoadAnimation()
  }, [])
  return (
    <Grid h='100vh' templateRows='repeat(2, 1fr)' templateColumns='repeat(8, 1fr)'>
      <GridItem rowSpan={2} colSpan={4}>
        <div style={{ position: 'absolute', height: '100vh', width: '50%', zIndex: -1, opacity: 0.1 }}>
          <DotBackground />
        </div>
        <Flex direction='column' height='100%'>
          <Center p={4} px={50} flex='1' alignItems='flex-start' flexDirection='column'>
            <Heading className='hero-header' mb={3} pb={3} size='xl' lineHeight='1.2em' fontWeight={600}>
              <Highlight
                query={['designing and engineering', 'simplify complex problems']}
                styles={{ px: '1', py: '1', color: 'brand.500' }}
              >
                My passion is designing and engineering user-beloved software products that simplify complex problems.
              </Highlight>
            </Heading>
            <Text mt={5} fontSize='l'>
              In constantly striving to help users solve complex problems in simple ways, I have loved challenging and
              teaching engineering teams to raise the bar.{' '}
            </Text>
            <Flex alignItems='center' mt={5} pt={10}>
              <Text textDecoration='underline' fontSize='1.2em'>
                More About Me
              </Text>
              <div style={{ height: 2, background: 'white', width: '8vw', marginLeft: '2em' }} />
            </Flex>
          </Center>
          <Box p={3} m={0} bg='brand.500' w={500}>
            <Flex flex='1' alignItems='center' justifyContent='space-between'>
              <Flex alignItems='center'>
                <Text pl={5} letterSpacing={6} alignItems='center' fontSize='0.8em' fontWeight={600} color='gray.600'>
                  CURRENTLY AT:
                </Text>
              </Flex>
              <Flex alignItems='center'>
                <img src={gravitateLogo} width={200} style={{ marginBottom: 0, paddingRight: '2em' }} />
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </GridItem>
      <PillarBox backgroundClass='geometric' title='Engineering' />
      <PillarBox backgroundClass='linear' title='Design' />
      <PillarBox backgroundClass='zig-zag' title='User Experience' />
      <PillarBox backgroundClass='plus' title='Leadership' />
    </Grid>
  )
}
const PillarBox = ({ title, backgroundClass }) => {
  return (
    <GridItem
      colSpan={2}
      border='1px'
      borderColor='gray.500'
      display='flex'
      alignItems='flex-end'
      className='pillar-box'
    >
      <div className={`pillar-background ${backgroundClass}`} />
      <Flex alignItems='center' px={5} pb={4} justifyContent='space-between' flex='1'>
        <Text fontSize='1.2em'>{title}</Text>
        <Icon w={6} h={6} as={BsArrowRightCircle} />
      </Flex>
    </GridItem>
  )
}
const onLoadAnimation = () => {
  const quotes = document.querySelectorAll('.hero-header')

  function setupSplits() {
    quotes.forEach((quote) => {
      // Reset if needed
      if (quote.anim) {
        quote.anim.progress(1).kill()
        quote.split.revert()
      }

      quote.split = new SplitType('.hero-header')

      // Set up the anim
      quote.anim = gsap.from(quote.split.chars, {
        scrollTrigger: {
          trigger: quote,
          toggleActions: 'restart pause resume reverse',
          start: 'top 50%',
        },
        opacity: 0,
        duration: 0.6,
        ease: 'circ.out',
        y: 200,
        stagger: 0.02,
      })
    })
  }

  ScrollTrigger.addEventListener('refresh', setupSplits)
  setupSplits()
}
