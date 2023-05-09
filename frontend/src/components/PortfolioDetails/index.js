import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Show,
  Text,
  VStack,
} from '@chakra-ui/react'
import React, { useEffect, useLayoutEffect } from 'react'
import { slides } from '../Portfolio/slides'
import LocomotiveScroll from 'locomotive-scroll'
import './styles.css'
import { ArrowDownIcon, ArrowLeftIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { CgArrowLeft, CgArrowRight } from 'react-icons/all'
import { ItemPreview } from './ItemPreview'
import { ProjectSummary } from './ProjectSummary'
import { TwoColumnText } from './components/TwoColumnText'
import { ShortImagePreview } from './components/ShortImagePreview'
import { PortfolioMasonry } from './components/PortfolioMasonry'
export const PortfolioDetails = () => {
  const [isMounted, setIsMounted] = React.useState(false)
  const slide = slides[0]
  useLayoutEffect(() => {
    if (!isMounted) {
      new LocomotiveScroll({
        el: document.querySelector('.data-scroll-container'),
        smooth: true,
      })
      setIsMounted(true)
    }
  })
  return (
    <div className='data-scroll-container'>
      <section className='content'>
        <Box className='inner'>
          <ItemPreview slide={slide} showNav />
          <Box p={100}>
            <ProjectSummary />
          </Box>
          <ShortImagePreview slide={slide} />
          <PortfolioMasonry />
        </Box>
      </section>
    </div>
  )
}
const ItemHeader = ({ slide }) => {
  return (
    <Flex pt={100} direction='column' height='100vh'>
      <Flex flex={1}>
        <VStack style={{ flex: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ maxWidth: 500 }}>
            <img className='item-logo' src={slide.logoImg} style={{ width: '30vw', marginBottom: '2em' }} />
            <Text className='description' maxWidth={500}>
              In constantly striving to help users solve complex problems in simple ways, I have loved challenging and
              teaching engineering teams to raise the bar.
            </Text>
          </div>
        </VStack>
      </Flex>
      <Flex style={{ backgroundImage: `url(${slide.slideImg})` }} background='brand.500' flex={1} />
    </Flex>
  )
}
