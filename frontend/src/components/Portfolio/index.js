import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import './portfolio.css'
import React, { useLayoutEffect, useMemo, useState } from 'react'
import { VStack, Text, Flex, Box } from '@chakra-ui/react'
import { slides } from './slides'
import { setupAnimation } from './animations/portfolioAnimations'
import { SlideLinks } from './components/SlideLinks'

export const Portfolio = () => {
  const [infiniteIndex, setInfiniteIndex] = useState(0 + slides.length)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  useLayoutEffect(() => {
    setupAnimation(setCurrentSlideIndex, setInfiniteIndex)
  }, [])
  return (
    <div className='content-container'>
      <div className='frame'>
        <SlideLinks infiniteIndex={infiniteIndex} />
        <button className='frame__back unbutton'>
          <span data-splitting=''>&larr; Go back</span>
        </button>
        <span className='frame__info'>&darr; Scroll or drag &darr;</span>
      </div>
      <div className='slides'>
        {slides.map((slide) => (
          <SingleSlide key={slide.title} currentSlideIndex={currentSlideIndex} slide={slide} />
        ))}
      </div>
    </div>
  )
}

const SingleSlide = ({ slide }) => {
  const { bgColor, isLightMode, slideImg, logoImg } = slide
  return (
    <div className='slide' style={{ background: bgColor }}>
      <div className='slide__inner'>
        <div className='slide__img' style={{ display: 'flex' }}>
          <VStack style={{ flex: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ maxWidth: 500 }}>
              <img className='item-logo' src={logoImg} style={{ width: '30vw', marginBottom: '2em' }} />
              <Text className='description' color={isLightMode ? 'gray.600' : 'gray.200'} maxWidth={500}>
                In constantly striving to help users solve complex problems in simple ways, I have loved challenging and
                teaching engineering teams to raise the bar.
              </Text>
              <Flex className='details-link' alignItems='center' mt={5} pt={10}>
                <AniLink onClick={(e) => e.stopPropagation()} paintDrip to='/portfolio-detail'>
                  <Text color={isLightMode ? 'gray.600' : 'gray.200'} textDecoration='none' fontSize='1.2em'>
                    Open Case Study
                  </Text>
                </AniLink>
                <div
                  style={{
                    height: 2,
                    background: isLightMode ? 'var(--chakra-colors-gray-600)' : 'var(--chakra-colors-gray-200)',
                    width: '8vw',
                    marginLeft: '2em',
                  }}
                />
              </Flex>
            </div>
          </VStack>
          <div className='slide-wrapper'>
            <div className='slide__img-inner' style={{ backgroundImage: `url(${slideImg})`, flex: 2, width: '40vw' }} />
          </div>
        </div>
      </div>
    </div>
  )
}
