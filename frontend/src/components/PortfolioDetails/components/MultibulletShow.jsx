import { TwoColumnText } from './TwoColumnText'
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react'
import { ReactIcon } from '@chakra-ui/icons'
import React, { useEffect, useMemo, useState } from 'react'
import { useAnimate, useInView } from 'framer-motion'

export const MultibulletShow = ({ slide }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const selectBox = (index) => {
    setSelectedIndex(index)
  }
  return (
    <Box mt={200}>
      <Container maxW='container.xl'>
        <TwoColumnText
          size='sm'
          left='some of the roles I played at gravitate'
          right='Since my tenure at Gravitate was half a decade - i had a lot of time into grow into different roles. I started as a software engineer, then took laying a UI/UX design foundation, and finally helped scale the org as we added pods of engineers. I was able to grow into these roles because of the support of my colleagues and the trust of my managers.'
        />
      </Container>
      <Container maxW='container.xl' style={{ display: 'flex', gap: 30 }}>
        <SelectBox
          slide={slide}
          selectedIndex={selectedIndex}
          index={0}
          selectBox={selectBox}
          title='frontend engineer'
          description='i gained expertise in the javascript ecosystem building data-intensive enterprise single page applications intertwined with AI assistance.'
        />
        <SelectBox
          slide={slide}
          selectedIndex={selectedIndex}
          index={1}
          selectBox={selectBox}
          title='ui/ux designer'
          description='i gained expertise in the javascript ecosystem building data-intensive enterprise single page applications intertwined with AI assistance.'
        />
        <SelectBox
          slide={slide}
          selectedIndex={selectedIndex}
          index={2}
          selectBox={selectBox}
          title='engineering manager'
          description='i gained expertise in the javascript ecosystem building data-intensive enterprise single page applications intertwined with AI assistance.'
        />
      </Container>
      <Box bg={slide.brandColor} style={{ marginTop: -100 }} py={200}>
        <Container maxW='container.lg'>
          <Flex gap={30}>
            <Achievement />
            <Achievement />
          </Flex>
          <Flex gap={30} mt={30}>
            <Achievement />
            <Achievement />
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}

const SelectBox = ({ title, description, selectedIndex, selectBox, slide, index }) => {
  const isActive = useMemo(() => selectedIndex === index, [selectedIndex])

  return (
    <Flex
      transition='background-color 200ms linear'
      style={{ cursor: 'pointer' }}
      boxShadow='xl'
      border={`1px solid ${slide.brandColor}`}
      borderRadius={3}
      bg={isActive ? slide.bgColor : 'gray.800'}
      flex={1}
      p={10}
      onClick={() => selectBox(index)}
    >
      <Flex mr={5} flexDir='column' mt='40px'>
        <Heading color='white' opacity={0.3}>
          0{index + 1}
        </Heading>
      </Flex>
      <Box>
        <ReactIcon color={isActive ? 'default' : slide.brandColor} fontSize='2em' mb={5} />
        <Heading color={isActive ? 'white' : 'default'} as='h3' size='md' mb={7}>
          {title}
        </Heading>
        <Text color={isActive ? 'gray.400' : 'gray.200'}>{description}</Text>
      </Box>
    </Flex>
  )
}
const Achievement = () => {
  return (
    <Flex>
      <ReactIcon fontSize='3em' />
      <Box ml={5}>
        <Heading as='h3' size='md' mb={7}>
          scalable engineering
        </Heading>
        <Text>
          i gained expertise in the javascript ecosystem building data-intensive enterprise single page applications
          intertwined with AI assistance.
        </Text>
      </Box>
    </Flex>
  )
}
