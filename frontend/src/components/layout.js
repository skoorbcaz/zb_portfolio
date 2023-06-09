/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Box, Container, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import './layout.css'
import { graphql, Link, useStaticQuery } from 'gatsby'
import * as React from 'react'
import menuBG from '../images/menu-bg.jpg'
import Header from './header'
import { gsap } from 'gsap'
import { useLayoutEffect } from 'react'

function Layout({ children, shouldRevealHeader = true }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useLayoutEffect(() => {
    setupAnimation()
  }, [])
  return (
    <>
      <Header shouldRevealHeader={shouldRevealHeader} />
      <Box>{children}</Box>

      <div className='menu'>
        <div className='cover-wrap' aria-hidden='true'>
          <div className='cover'>
            <div className='cover__inner' style={{ background: `url(${menuBG}) 0% 0% / cover no-repeat` }}></div>
          </div>
        </div>
        <div className='menu__content-wrap'>
          <div className='menu__content'>
            <nav className='menu__nav-content'>
              <Grid
                templateRows='repeat(5, 1fr)'
                templateColumns='repeat(3, 1fr)'
                gap={4}
                width='100%'
                style={{ padding: '2em 6em' }}
                px='5vw'
              >
                <GridItem rowSpan={4} colSpan={2} display='flex' flexDir='column' justifyContent='space-around'>
                  <LargeNavLink title='Home' url='/' index={1} />
                  <LargeNavLink title='Portfolio' url='/portfolio' index={2} />
                  <LargeNavLink title='About Me' url='/about' index={3} />
                  <LargeNavLink title=' Blog' url='/blog' index={4} />
                </GridItem>
                <GridItem colSpan={1} rowSpan={5}>
                  <SocialLinks />
                </GridItem>
                <GridItem colSpan={2} rowSpan={1} display='flex' alignItems='center'>
                  <SmallNavLink url='/contact' title='Contact' index={5} />
                  <SmallNavLink url='/resume' title='Resume' index={6} />
                </GridItem>
              </Grid>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
const SocialLinks = () => {
  return (
    <>
      <button className='menu__back unbutton'>
        <svg width='10' height='182' viewBox='0 0 10 121' preserveAspectRatio='xMidYMin meet'>
          <path d='M5 0 .5 9h9L5 0Zm.5 120.5V8h-1v113h1v-.5Z' />
        </svg>
      </button>
      <div className='menu__social'>
        <a className='menu__social-link' href='http://eepurl.com/dJBUCo'>
          subscribe
        </a>
        <a className='menu__social-link' href='https://www.instagram.com/codropsss/'>
          instagram
        </a>
        <a className='menu__social-link' href='https://www.instagram.com/codropsss/'>
          twitter
        </a>
        <a className='menu__social-author' href='https://codrops.com'>
          @skoorbcaz
        </a>
      </div>
    </>
  )
}
const LargeNavLink = ({ title, index, url }) => {
  return (
    <Flex>
      <Flex flex='0 1 50px' flexDir='column' mb='3' justifyContent='flex-end'>
        <Text className='menu-icon' color='gray.500'>
          {index}
        </Text>
      </Flex>
      <Flex overflow='hidden' flex='1' flexDir='column'>
        <Heading color='gray.200' pb='2' mb='3' fontWeight={500} size='3xl' className='line-link menu__tagline'>
          <AniLink swipe direction='up' to={url}>
            {title}
          </AniLink>
        </Heading>
      </Flex>
    </Flex>
  )
}
const SmallNavLink = ({ title, index, url }) => {
  return (
    <Flex flexDir='column' flex='1'>
      <Text className='menu-icon' mb={3} color='gray.500'>
        {index}
      </Text>
      <Heading overflow='hidden' size='xl' color='gray.200' fontWeight={500} className='line-link menu__tagline'>
        <Link to={url}>{title}</Link>
      </Heading>
    </Flex>
  )
}

const setupAnimation = () => {
  // DOM elements
  const DOM = {
    // For demo purposes, trigger the effect when clicking any link in the menu (.line-link)
    menuLinks: [...document.querySelectorAll('.hamburger')],
    // Cover element (wrap, outer and image inner elements)
    cover: {
      wrap: document.querySelector('.cover-wrap'),
      outer: document.querySelector('.cover'),
      inner: document.querySelector('.cover__inner'),
    },
    // Some of the main page content elements
    // We'll animate some of the content elements when expanding the menu
    content: {
      imgs: [...document.querySelectorAll('.content > .content__img')],
      titles: [...document.querySelectorAll('.content > .content__title')],
    },
    // Menu element (.menu)
    menu: document.querySelector('.menu'),
    // Element that slides out
    menuContent: document.querySelector('.menu__content'),

    //hamburger:
    hamburger: document.querySelector('.hamburger'),
    // Close button
    closeCtrl: document.querySelector('.menu__back'),
    brandSquare: document.querySelector('.brand-square'),
    navBanner: document.querySelector('.nav-banner'),
    // Extra elements that will be animated inside the menu
    extra: document.querySelectorAll('.menu__tagline, .menu__social-author'),
  }

  let menuStatus = {
    isOpen: false,
    isAnimating: false,
  }

  // Animation gsap timeline
  const menuTimeline = gsap
    .timeline({
      paused: true,
      onComplete: () => (menuStatus.isAnimating = false),
      onReverseComplete: () => (menuStatus.isAnimating = false),
      defaults: {
        duration: 1.2,
        ease: 'power4.inOut',
      },
    })
    .addLabel('start', 0)
    .add(() => {
      // Add pointer events to auto/none
      DOM.menu.classList[menuStatus.isOpen ? 'add' : 'remove']('menu--open')
    }, 'start')

    .to(
      DOM.cover.wrap,
      {
        duration: 1.6,
        startAt: { scale: '1', height: 0 },
        ease: 'power3.inOut',
        scale: 1.1,
        height: '101vh',
      },
      'start'
    )
    .to(
      DOM.cover.outer,
      {
        startAt: { y: '-100%' },
        y: '0%',
      },
      'start'
    )
    .to(
      DOM.cover.inner,
      {
        startAt: { y: '100%' },
        y: '0%',
      },
      'start'
    )
    .to(
      DOM.content.imgs,
      {
        //ease: 'power3.inOut',
        y: (position) => `${position % 2 === 0 ? -20 : 20}%`,
      },
      'start'
    )
    .to(
      DOM.content.titles,
      {
        //ease: 'power3.inOut',
        y: (position) => `${position % 2 === 0 ? 20 : -20}%`,
      },
      'start'
    )
    .to(
      DOM.navBanner,
      {
        duration: 1,
        startAt: { width: '0px' },
        width: '100%',
      },
      'start'
    )

    .addLabel('menu', 0.5)
    .to(
      DOM.menuContent,
      {
        duration: 1,
        startAt: { y: '-100%' },
        y: '0%',
      },
      'menu'
    )
    .addLabel('extra', 'menu+=0.6')
    .set(
      DOM.extra,
      {
        y: '400%',
        opacity: 0,
      },
      'start'
    )
    .to(
      DOM.extra,
      {
        duration: 0.5,
        ease: 'power4',
        startAt: { opacity: 1 },
        opacity: 1,
        y: '0%',
      },
      'extra'
    )

  // Menu expand
  const expandMenu = () => {
    if (menuStatus.isAnimating || menuStatus.isOpen) return
    menuStatus.isAnimating = true
    menuStatus.isOpen = true
    DOM.hamburger.classList.add('is-active')
    menuTimeline.play()
  }

  // Menu collapse
  const collapseMenu = () => {
    if (menuStatus.isAnimating || !menuStatus.isOpen) return
    menuStatus.isAnimating = true
    menuStatus.isOpen = false
    DOM.hamburger.classList.remove('is-active')
    menuTimeline.reverse(0)
  }

  // Expand the menu when pressing any of the menu top links...
  DOM.menuLinks.forEach((link) => {
    link.addEventListener('click', (ev) => {
      ev.preventDefault()
      if (menuStatus.isOpen) {
        collapseMenu()
      } else {
        expandMenu()
      }
    })
  })

  // Collapse it when pressing the close button
  DOM.closeCtrl.addEventListener('click', (ev) => {
    ev.preventDefault()
    collapseMenu()
  })
}

export default Layout
