import React, { useEffect } from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import abstractSVG1 from '../../../images/svgs/abstract_1.svg'
import textureVideo from '../../../images/trim.mp4'
export const LeadershipAbout = () => {
  return (
    <section className='leadership-section about-section' style={{ paddingBottom: 200 }}>
      <Box p={100}>
        <Heading color='gray.800' fontSize='8vh' className='content__title' data-splitting='' data-effect3=''>
          <span>passion for empowering others</span>
        </Heading>
        <div
          className='header__border'
          style={{ height: '2px', marginTop: '3em', width: '200vw', background: 'var(--chakra-colors-gray-800)' }}
        />
      </Box>
      <Flex px={100}>
        <Box style={{ flex: 1 }}>
          <video className='texture-video' autoPlay loop muted height={150} width={150}>
            <source src={textureVideo} type='video/mp4' />
          </video>
        </Box>
        <Flex style={{ flex: 1, alignItems: 'center' }}>
          <Flex>
            <Text style={{ whiteSpace: 'pre' }} fontSize='1.1em' pr={10} color='gray.500' mt={4}>
              ZAC IS A LEADER
            </Text>
            <Text color='gray.700' style={{ fontSize: '3.5vh' }} className='dev-about-desc'>
              The same passion that drives me to continually learn and grow as a developer and designer also fuels me to
              invest in the growth of others. I love investing in those around me, and I am always looking for
              opportunities to do so.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </section>
  )
}
