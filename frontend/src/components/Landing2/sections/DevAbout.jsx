import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { DevShader } from './shaders/DevShader'
import agGridLogo from '../../../images/stack-logos/ag-grid.png'
import antdLogo from '../../../images/stack-logos/antd.png'
import bootstrapLogo from '../../../images/stack-logos/bootstrap.png'
import chakraLogo from '../../../images/stack-logos/chakra.png'
import gaLogo from '../../../images/stack-logos/ga.png'
import gatsbyLogo from '../../../images/stack-logos/gatsby.png'
import graphqlLogo from '../../../images/stack-logos/graphQL.png'
import npmLogo from '../../../images/stack-logos/npm.png'
import reactLogo from '../../../images/stack-logos/react.png'
import reactQueryLogo from '../../../images/stack-logos/reactquery.png'
import strapiLogo from '../../../images/stack-logos/strapi.png'
import threejsLogo from '../../../images/stack-logos/threejs.png'
import viteLogo from '../../../images/stack-logos/vite.png'
import yarnLogo from '../../../images/stack-logos/yarn.png'

const marqueeLogos = [
  agGridLogo,
  antdLogo,
  bootstrapLogo,
  chakraLogo,
  gaLogo,
  gatsbyLogo,
  graphqlLogo,
  npmLogo,
  reactLogo,
  reactQueryLogo,
  strapiLogo,
  threejsLogo,
  viteLogo,
  yarnLogo,
]

export const DevAbout = () => {
  return (
    <>
      <section className='dev-section about-section' style={{ background: 'var(--chakra-colors-gray-900)' }}>
        <div className='dev-section__inner'>
          <Box p={100}>
            <Heading fontSize='8vh' className='content__title' data-splitting='' data-effect13=''>
              <span>dynamic, scalable UI engineering</span>
            </Heading>
            <div
              className='header__border'
              style={{
                height: '2px',
                marginTop: '3em',
                width: '200vw',
                background: 'var(--chakra-colors-brand-500)',
              }}
            />
          </Box>

          <Flex px={100}>
            <Box style={{ flex: 1 }}>
              <div className='dev-shader-container' style={{ marginBottom: 100 }}>
                <DevShader />
              </div>
            </Box>
            <Flex style={{ flex: 1 }}>
              <Text style={{ whiteSpace: 'pre' }} fontSize='1.1em' pr={10} color='gray.500' mt={4}>
                ZAC IS A DEV
              </Text>
              <Text style={{ fontSize: '3.5vh' }} className='dev-about-desc' data-effect4='' data-splitting=''>
                With a strong focus on component re-use, state management, and performance benefits, I love crafting
                visually stunning, high-performance applications that help businesses succeed.
              </Text>
            </Flex>
          </Flex>
        </div>
      </section>
      <section className='logo-marquee-container'>
        <LogoScroll />
      </section>
    </>
  )
}
const LogoScroll = () => {
  return (
    <>
      <Heading ml={20} color='gray.300' mb={10}>
        experienced with:
      </Heading>
      <article className='wrapper'>
        <div className='marquee'>
          <div className='marquee__group'>
            {marqueeLogos.map((logo, i) => (
              <div className='marquee-logo-wrapper' key={i}>
                <img src={logo} alt='logo' />
              </div>
            ))}
          </div>
          <div aria-hidden='true' className='marquee__group'>
            {marqueeLogos.map((logo, i) => (
              <div className='marquee-logo-wrapper' key={i}>
                <img src={logo} alt='logo' />
              </div>
            ))}
          </div>
        </div>

        <div className='marquee marquee--reverse'>
          <div className='marquee__group'>
            {marqueeLogos.map((logo, i) => (
              <div className='marquee-logo-wrapper' key={i}>
                <img src={logo} alt='logo' />
              </div>
            ))}
          </div>

          <div aria-hidden='true' className='marquee__group'>
            {marqueeLogos.map((logo, i) => (
              <div className='marquee-logo-wrapper' key={i}>
                <img src={logo} alt='logo' />
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  )
}
