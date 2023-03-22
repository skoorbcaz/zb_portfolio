import React, { useMemo } from 'react'
import { slides } from '../slides'
import { Box, Text } from '@chakra-ui/react'

export const SlideLinks = ({ infiniteIndex }) => {
  const infiniteSlides = useMemo(() => [...slides, ...slides], [])

  const indices = useMemo(() => {
    const length = infiniteSlides.length
    const indices = [
      (((infiniteIndex - 2) % length) + length) % length,
      (((infiniteIndex - 1) % length) + length) % length,
      infiniteIndex,
      (((infiniteIndex + 1) % length) + length) % length,
      (((infiniteIndex + 2) % length) + length) % length,
    ]
    return {
      veryFirstIndex: (((infiniteIndex - 2) % length) + length) % length,
      previousIndex: (((infiniteIndex - 1) % length) + length) % length,
      infiniteIndex,
      nextIndex: (((infiniteIndex + 1) % length) + length) % length,
      lastIndex: (((infiniteIndex + 2) % length) + length) % length,
      indices,
    }
  }, [infiniteIndex])

  if (!indices) return null
  return (
    <div className='infinite-scroll-list-container' style={{ gridArea: 'nav' }}>
      <Box
        className='infinite-scroll-list'
        mb='10'
        height={120}
        width={280}
        pl={10}
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        {infiniteSlides.map((slide, index) => {
          return (
            <div
              key={index}
              className={`infinite-scroll-list-item frame__nav-button ${
                index === indices.veryFirstIndex ? 'first-item' : ''
              } ${index === indices.previousIndex ? 'second-item' : ''} ${
                index === indices.infiniteIndex ? 'active-item frame__nav-button--current' : ''
              } ${index === indices.infiniteIndex && slide.isLightMode ? 'light' : ''} ${
                index === indices.nextIndex ? 'fourth-item' : ''
              } ${!indices.indices.includes(index) ? 'hidden' : ''}
              ${index === indices.lastIndex ? 'fifth-item' : ''}`}
            >
              <Text className='link-text'>{slide.title}</Text>
            </div>
          )
        })}
      </Box>
    </div>
  )
}
