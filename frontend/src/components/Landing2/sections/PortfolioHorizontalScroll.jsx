import React from 'react'
import img1 from '../../../images/portfolioscreens/1.png'
import img2 from '../../../images/portfolioscreens/2.png'
import img3 from '../../../images/portfolioscreens/3.png'
import img4 from '../../../images/portfolioscreens/4.png'
import img5 from '../../../images/portfolioscreens/5.jpg'
import img6 from '../../../images/portfolioscreens/6.jpg'
import { Box, Heading } from '@chakra-ui/react'
import reachLogo from '../../../images/portfoliologos/reachlogo.svg'
export const PortfolioHorizontalScroll = () => {
  return (
    <section className='sticky-element half-height'>
      <Box pl={100}>
        <Heading color='gray.500' fontWeight={500} size='xl' className='section__heading'>
          recent
        </Heading>
        <Heading size='4xl' className='section__subheading'>
          work
        </Heading>
      </Box>

      <div className='track'>
        <div className='track-flex'>
          <div className='panel-wide'>
            <img className='image' src={img1} alt='' />
            <img className='port-logo' src={reachLogo} />
          </div>
          <div className='panel-wide'>
            <img className='image' src={img4} alt='' />
            <img className='port-logo' src={reachLogo} />
          </div>
          <div className='panel-wide'>
            <img className='image' src={img5} alt='' />
            <img className='port-logo' src={reachLogo} />
          </div>
          <div className='panel-wide'>
            <img className='image' src={img6} alt='' />
            <img className='port-logo' src={reachLogo} />
          </div>
          <div className='panel-wide'>
            <img className='image' src={img3} alt='' />
            <img className='port-logo' src={reachLogo} />
          </div>
        </div>
      </div>
    </section>
  )
}
