import { Box, Container, Text } from '@chakra-ui/react'
import { TwoColumnText } from './TwoColumnText'
import React from 'react'
import { MultibulletShow } from './MultibulletShow'

export const ShortImagePreview = ({ slide }) => {
  return (
    <Box>
      <div className='content__intro content__breakout'>
        <div className='content__intro-imgWrap'>
          <img
            data-scroll=''
            data-scroll-speed='1'
            data-scroll-delay='0.1'
            data-scroll-position='top'
            className='content__intro-img'
            src={slide.slideImg}
            alt='Some image'
          />
        </div>
      </div>
      <Container maxW='container.xl'>
        <TwoColumnText
          left='gravitate accelarant'
          right='       Furthered Gravitate’s brand by designing and developing a bold marketing site that generated sales
            leads and clearly explained our product offerings. (gravitate.energy)'
        />
        <Text fontSize='1.25em' my={20}>
          Frontend Engineer & UI/UX Designer that crafts visceral experiences to help users solve complex problems in
          simple ways. Is a strong evangelist in the power of state management, component re-use, and performance
          benefits through expert level knowledge of the React ecosystem. Strives for streamlined connections between
          design and engineering through intuitive design systems and powerful component libraries. Strongly inspired by
          past experiences of teams challenging what is impossible together and thoroughly enjoys teaching and learning
          from colleagues through paired programming, code reviews, and architecture discussions.
        </Text>
      </Container>
      <MultibulletShow slide={slide} />
    </Box>
  )
}
