import { Flex, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useLayoutEffect } from 'react'
import { slides } from '../Portfolio/slides'
import LocomotiveScroll from 'locomotive-scroll'
import './styles.css'
export const PortfolioDetails = () => {
  const slide = slides[0]
  useLayoutEffect(() => {
    new LocomotiveScroll({
      el: document.querySelector('.data-scroll-container'),
      smooth: true,
    })
  })
  return (
    <div className='data-scroll-container'>
      <section className='content'>
        <div className='inner'>
          <header className='content__header'>
            <div className='content__meta'>
              <div>
                <Text className='content__meta-number'>01</Text>
                <Text className='content__meta-title'>Gnostic Love</Text>
              </div>
            </div>
            <h2
              data-scroll=''
              data-scroll-speed='2'
              data-scroll-delay='0.1'
              data-scroll-position='top'
              className='content__title anim-block-wrap'
            >
              <img className='item-logo' src={slide.logoImg} style={{ width: '50vw' }} />
            </h2>
            <p
              data-scroll=''
              data-scroll-speed='1'
              data-scroll-delay='0.1'
              data-scroll-position='top'
              className='content__subtitle anim-block-wrap'
            >
              <Text className='anim-block'>
                What is wanted is not the will to believe, but the wish <br /> to find out, which is its exact opposite.
              </Text>
            </p>
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
          </header>
          <div className='content__body'>
            <p className='content__body-para text-right cell--1-2'>
              Then they opened the firmaments and the Light descended below to the lower regions and to those who were
              without form, having no true likeness. It was thus that they got the likeness of the Light for themselves.
              Some rejoiced because the Light had come to them, and that they had been made rich thereby. Others mourned
              because they were made poor and that which they thought they had was taken away from them. Thus came He,
              who went forth full of grace, and was taken captive with a captivity. A light of glory was given to the
              æons who had received the Spark, and guardian spirits were sent to them who are Gamanêl, Etrempsouchos,
              and Agramas, and those who are with them. They bring help to those who have believed in the Spark of
              Light.
            </p>
            <p data-scroll='' data-scroll-offset='130' className='content__body-para cell--3 anim-show'>
              <strong>The Crown that the Deathless pray for</strong>
            </p>
            <div className='content__body-imgwrap cell--1-3'>
              <div
                data-scroll=''
                data-scroll-speed='0.7'
                data-scroll-delay='0.1'
                className='content__body-image'
                style={{ backgroundImage: `url(${slide.slideImg})` }}
              ></div>
            </div>
            <p className='content__body-para cell--2-3'>
              Now in the Space of the Indivisible Atom are twelve Founts, above which are the twelve Paternities who
              surround the Indivisible [Queen] like Deeps or like Skies and make for Her a crown in which is every kind
              of life: all modes of Triple-powered life, of Uncontainable life, of Infinite life, of Ineffable life, of
              Silent life, of Unknown life, of Solitary life, of Unshakable life, of First-manifested life, of Self-born
              life, of True life. All is therein. Every species is in it, all Gnôses and every power which has received
              the Light, yea, all Mind manifests itself therein. This is the Crown which the Father of the Universe has
              placed upon the Indivisible [Queen] with three hundred and sixty-five kinds in it, brilliant and filling
              the Universe with an incorruptible and unfailing light.
            </p>
          </div>
          <footer className='content__footer content__breakout'>
            <div className='inner inner--grid'>
              <a className='content__footer-copyright' href='https://www.twitter.com/codrops'>
                © Codrops 2020
              </a>
              <a data-scroll='' className='content__footer-next anim-show'>
                Next Project
              </a>
            </div>
          </footer>
        </div>
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
