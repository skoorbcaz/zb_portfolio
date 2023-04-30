import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import abstractSVG1 from '../../../images/svgs/abstract_1.svg'
import { DesignShader } from './shaders/DesignShader'
import { DesignDisciplines } from './DesignDisciplines'
export const DesignAbout = () => {
  return (
    <div className='design-section about-section'>
      <Box p={100}>
        <Heading color='gray.700' fontSize='8vh' className='content__title' data-splitting='' data-effect6=''>
          <span>trailblazing, empathy-led designs</span>
        </Heading>
        <div
          className='header__border'
          style={{ height: '2px', width: '200vw', marginTop: '3em', background: 'var(--chakra-colors-gray-700)' }}
        />
      </Box>
      <Flex px={100}>
        <Box style={{ flex: 1 }}>
          <img height={150} width={150} src={abstractSVG1} alt='abstractSVG1' />
        </Box>
        <Flex className='design-about-desc' borderRadius={5} style={{ flex: 1 }}>
          <Text style={{ whiteSpace: 'pre' }} fontSize='1.1em' pr={10} color='gray.600' mt={4}>
            ZAC IS A DESIGNER
          </Text>
          <Text style={{ fontSize: '3.5vh' }} color='gray.600' className='dev-about-desc'>
            Through a deep understanding of design principles and a passion for pushing boundaries, I deeply enjoy the
            opportunity to unleash the power of creativity in software development.
          </Text>
        </Flex>
      </Flex>
      <DesignDisciplines />
      <div className='design-section-canvas-bg'>
        <DesignShader />
      </div>
    </div>
  )
}
