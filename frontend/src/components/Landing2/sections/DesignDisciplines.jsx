import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Circle,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer'
import screen1 from '../../../images/portfolioscreens/1.png'
import screen2 from '../../../images/portfolioscreens/2.png'
import screen3 from '../../../images/portfolioscreens/3.png'
import screen4 from '../../../images/portfolioscreens/4.png'
import zbLogo from '../../../images/zb-stroke-light.svg'
import { Icon } from '@chakra-ui/icons'
import { FaDharmachakra } from 'react-icons/all'
import { ReactIcon } from '@chakra-ui/icons'

const MotionBox = motion(Box)

export const DesignDisciplines = () => {
  const [active, setActive] = useState(0)

  const items = [
    {
      colorScheme: 'pink',
      title: 'user interface design',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      colorScheme: 'green',
      title: 'logo design',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      colorScheme: 'purple',
      title: 'branding assets',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      colorScheme: 'yellow',
      title: 'information architecture',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ]
  const container = {
    initial: { y: 50, scale: 0.8, opacity: 0 },
    animate: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        // duration: 2,
        staggerChildren: 0.125,
      },
    },
    exit: {
      y: -50,
      scale: 1,
      opacity: 0,
      transition: {
        // duration: 1,
        staggerChildren: 0.125,
      },
    },
  }

  const animationConfig = {
    initial: { y: 50, scale: 0.8, opacity: 0 },
    animate: { y: 0, scale: 1, opacity: 1 },
    exit: { y: -50, scale: 1, opacity: 0 },
  }

  const TemplateOverview = (
    <>
      <MotionBox h='full' w='full' variants={animationConfig}>
        <AnimatePresence>
          <Image src={screen1} />
        </AnimatePresence>
      </MotionBox>
      <MotionBox pos='absolute' display='flex' zIndex={2} bottom={4} left={[4]} variants={container}>
        <MotionBox bg='deepBlue.600' rounded='full' pl={2} pr={4} py={2} mr={2} variants={animationConfig}>
          <Flex direction='row' align='center'>
            <Icon as={ReactIcon} w={6} h={6} mr={2} />
            <Text fontWeight='500'>React</Text>
          </Flex>
        </MotionBox>
        <MotionBox bg='teal.600' rounded='full' pl={2} pr={4} py={2} mr={2} variants={animationConfig}>
          <Flex direction='row' align='center'>
            <Icon as={FaDharmachakra} w={6} h={6} mr={2} />
            <Text fontWeight='500'>Chakra</Text>
          </Flex>
        </MotionBox>
        <MotionBox bg='black' rounded='full' pl={2} pr={4} py={2} variants={animationConfig}>
          <Flex direction='row' align='center'>
            <Icon as={FaDharmachakra} w={6} h={6} mr={2} />
            <Text fontWeight='500'>Next.js</Text>
          </Flex>
        </MotionBox>
      </MotionBox>
    </>
  )

  const LandingPages = (
    <>
      <MotionBox w='full' h='full' pos='relative' zIndex={0} variants={animationConfig}>
        <Image src={screen2} />
      </MotionBox>
      <MotionBox
        pos='absolute'
        zIndex={1}
        top={20}
        left={[2, 4, 8]}
        w='full'
        h='full'
        boxShadow='-8px 12px 10px rgba(0, 0, 0,0.25)'
        variants={animationConfig}
      >
        <Image src={screen3} />
      </MotionBox>
      <MotionBox
        pos='absolute'
        zIndex={2}
        top={40}
        left={[4, 8, 16]}
        w='full'
        h='full'
        boxShadow='-8px 12px 10px rgba(0, 0, 0,0.25)'
        variants={animationConfig}
      >
        <Image src={screen4} />
      </MotionBox>
    </>
  )

  const Components = (
    <>
      <MotionBox pos='relative' zIndex={0} variants={animationConfig}>
        <Image mx='auto' src={zbLogo} />
      </MotionBox>
      <MotionBox
        pos='absolute'
        zIndex={2}
        top={40}
        // left={[4, 8, 20]}
        w='full'
        h='full'
        variants={animationConfig}
      >
        <Image mx='auto' src={zbLogo} />
      </MotionBox>
      <MotionBox
        pos='absolute'
        zIndex={3}
        left={'18.41%'}
        right={'73.63%'}
        top={'11.09%'}
        bottom={'77.64%'}
        variants={animationConfig}
      >
        <Circle size={16} bg='teal.500'>
          <Icon as={FaDharmachakra} w={8} h={8} />
        </Circle>
      </MotionBox>
      <MotionBox
        pos='absolute'
        zIndex={4}
        left={'28.36%'}
        right={'63.68%'}
        top={'51.23%'}
        bottom={'37.5%'}
        variants={animationConfig}
      >
        <Circle size={16} bg='green.400'>
          <Icon as={ReactIcon} w={8} h={8} />
        </Circle>
      </MotionBox>
      <MotionBox
        pos='absolute'
        zIndex={5}
        left={'75.5%'}
        right={'16.54%'}
        top={'53.52%'}
        bottom={'35.21%'}
        variants={animationConfig}
      >
        <Circle size={16} bg='amber.600'>
          <Icon as={ReactIcon} w={8} h={8} />
        </Circle>
      </MotionBox>
      <MotionBox
        pos='absolute'
        zIndex={6}
        left={'63.56%'}
        right={'28.48%'}
        top={'19.54%'}
        bottom={'69.19%'}
        variants={animationConfig}
      >
        <Circle size={16} bg='deepPurple.700'>
          <Icon as={ReactIcon} w={8} h={8} />
        </Circle>
      </MotionBox>
      <MotionBox
        pos='absolute'
        zIndex={6}
        left={'40.92%'}
        right={'51.12%'}
        top={'80.63%'}
        bottom={'8.1%'}
        variants={animationConfig}
      >
        <Circle size={16} bg='cyan.600'>
          <Icon as={ReactIcon} w={8} h={8} />
        </Circle>
      </MotionBox>
    </>
  )

  const Blocks = (
    <>
      <MotionBox pos='relative' zIndex={0} variants={animationConfig}>
        <Image mx='auto' src={zbLogo} />
      </MotionBox>
      <MotionBox
        pos='absolute'
        zIndex={1}
        w='full'
        h='full'
        left={'12.69%'}
        right={'12.69%'}
        top={'3.17%'}
        bottom={'3.17%'}
        variants={animationConfig}
      >
        <Image src={zbLogo} />
      </MotionBox>
      <MotionBox
        pos='absolute'
        zIndex={2}
        w='full'
        h='full'
        left={'14.8%'}
        right={'49.13%'}
        top={'15.67%'}
        bottom={'69.89%'}
        variants={animationConfig}
      >
        <Image src={zbLogo} />
      </MotionBox>
      <MotionBox
        pos='absolute'
        zIndex={3}
        w='full'
        h='full'
        left={'18.53%'}
        right={'45.4%'}
        top={'32.22%'}
        bottom={'53.35%'}
        variants={animationConfig}
      >
        <Image src={zbLogo} />
      </MotionBox>
      <MotionBox
        pos='absolute'
        zIndex={3}
        w='full'
        h='full'
        left={'15.55%'}
        right={'48.38%'}
        top={'48.77%'}
        bottom={'14.26%'}
        variants={animationConfig}
      >
        <Image src={zbLogo} />
      </MotionBox>
      <MotionBox
        pos='absolute'
        display={['none', 'inline', 'inline']}
        zIndex={3}
        w='full'
        h='full'
        left={'60.45%'}
        right={'14.68%'}
        top={'18.31%'}
        bottom={'39.44%'}
        variants={animationConfig}
      >
        <Image src={zbLogo} />
      </MotionBox>
      <MotionBox
        pos='absolute'
        display={['none', 'inline', 'inline']}
        zIndex={3}
        w='full'
        h='full'
        left={'55.97%'}
        right={'19.15%'}
        top={'62.68%'}
        bottom={'10.04%'}
        variants={animationConfig}
      >
        <Image src={zbLogo} />
      </MotionBox>
    </>
  )

  const slides = [TemplateOverview, LandingPages, Components, Blocks]

  return (
    <Box
      height='full'
      minHeight={['unset', 'unset', 850]}
      py={[10, 10, 20, 32]}
      color='gray.600'
      bg='#ffffff91'
      mt={20}
      overflow='hidden'
    >
      <Container maxW='container.xl'>
        <Grid gap={10} templateColumns={['1fr', '1fr', '1fr 2fr']}>
          <Box>
            <Subtitle mb={4}>WORKING THE PIXELS</Subtitle>
            <BlockTitle fontSize='4xl' mb={4}>
              design disciplines
            </BlockTitle>
            <Lead mb={10} color='gray.600' fontSize='xl' fontWeight={300}>
              I believe that high quality design can make a product go from zero to hero.
            </Lead>
            <AccordionCarousel items={items} onChange={setActive} />
          </Box>
          <AnimatePresence mode='wait'>
            <MotionBox
              key={`animation-${active}`}
              // bg={`${items[active].colorScheme}.500`}
              variants={container}
              initial='initial'
              animate='animate'
              exit='exit'
              pos='relative'
            >
              {slides[active] ? slides[active] : items[active].title}
            </MotionBox>
          </AnimatePresence>
        </Grid>
      </Container>
    </Box>
  )
}
const AccordionCarousel = ({ duration = 5000, items = [], onChange }) => {
  const [active, setActive] = useState(0)
  const [ref, inView] = useInView()
  const controls = useAnimation()

  useEffect(() => {
    if (inView) controls.start('animate')
    if (!inView) controls.start('stop')
  }, [active, inView])

  useEffect(() => {
    onChange(active)
  }, [active])

  const completed = (e) => {
    const nextIndex = (active + 1) % items.length
    if (e === 'animate') setActive(nextIndex)
  }

  const variants = {
    animate: {
      width: '100%',
      transition: { ease: 'linear', duration: duration / 1000 },
    },
    stop: { width: '0%' },
    init: { display: 'none', width: '0%' },
  }

  return (
    <Accordion ref={ref} defaultIndex={0} index={active} onChange={(index) => setActive(index)}>
      {items.map((item, idx) => (
        <AccordionItem key={idx} borderBottomColor='whiteAlpha.500' borderTopColor='whiteAlpha.500'>
          {({ isExpanded }) => (
            <>
              {isExpanded && (
                <MotionBox
                  height={0.5}
                  width='0%'
                  bg='brand.500'
                  rounded='full'
                  variants={variants}
                  // animate={idx === active ? "animate" : "init"}
                  animate={controls}
                  initial='stop'
                  onAnimationComplete={completed}
                />
              )}
              <AccordionButton>
                <Box py={2} flex='1' textAlign='left'>
                  <Heading as='h3' fontSize='lg'>
                    {item.title}
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel color='gray.600' pb={4}>
                {item.body}
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  )
}

const Subtitle = ({ children, ...rest }) => {
  return (
    <Text textTransform='uppercase' fontSize='xs' fontWeight={500} letterSpacing='1px' {...rest}>
      {children}
    </Text>
  )
}

const Lead = ({ color, children, ...rest }) => {
  const textColor = useColorModeValue('gray.600', 'gray.300')
  return (
    <Text color={color ? color : textColor} fontSize={['md', 'lg', 'xl']} fontWeight={300} {...rest}>
      {children}
    </Text>
  )
}
const BlockTitle = ({ children, ...rest }) => {
  return (
    <Heading fontSize={['3xl', '4xl', '5xl']} mb={8} {...rest}>
      {children}
    </Heading>
  )
}
