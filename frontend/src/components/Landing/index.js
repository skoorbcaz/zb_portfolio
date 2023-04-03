import * as React from 'react'
import '../components/Landing/styles.css'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Hero } from '../components/Landing/Hero'
import { Intro } from '../components/Landing/Intro'
import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LocomotiveScroll from 'locomotive-scroll'

const LandingPage = () => {
  useLayoutEffect(() => {
    setUpLayerScroll()
  }, [])

  return (
    <Layout>
      <Seo title='WELCOME TO ZAC BROOKS' />
      <div className='smooth-scroll'>
        <section style={{ minHeight: '100vh', overflow: 'hidden' }} data-scroll-section=''>
          <div className='section-inner'>
            <Hero />
          </div>
        </section>
        <section style={{ minHeight: '100vh' }} data-scroll-section=''>
          <div className='section-inner'>
            <Intro />
          </div>
        </section>
      </div>
    </Layout>
  )
}
const setUpLayerScroll = () => {
  gsap.registerPlugin(ScrollTrigger)

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector('.smooth-scroll'),
    smooth: true,
  })
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on('scroll', ScrollTrigger.update)

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy('.smooth-scroll', {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector('.smooth-scroll').style.transform ? 'transform' : 'fixed',
  })

  const sections = gsap.utils.toArray('section')

  sections.forEach(function (section) {
    const inner = section.classList.contains('sectionLeftAndRight')
      ? section.querySelector('.leftText')
      : section.querySelector('.section-inner')

    ScrollTrigger.create({
      scroller: '.smooth-scroll',
      trigger: section,
      start: 'bottom bottom',
      end: '+=100%',
      pin: inner,
      pinSpacing: false,
      pinType: 'transform',
    })
  })

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.rightPinImage img',
      scroller: '.smooth-scroll',
      scrub: true,
      start: '50% 50%',
      endTrigger: '.sectionLeftAndRight .section-inner',
      end: 'bottom bottom',
      anticipatePin: 1,
      pin: true,
      pinSpacing: false,
      pinType: 'transform',
    },
  })

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener('refresh', () => locoScroll.update())

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh()
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title='Home' />

export default IndexPage
