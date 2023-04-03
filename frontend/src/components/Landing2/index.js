import React, { useLayoutEffect } from 'react'
import img1 from '../../images/portfolioslides/gravitate.png'
import './base.css'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import imagesLoaded from 'imagesloaded'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Layout from '../layout'
import { Hero } from '../Landing/Hero'
import Splitting from 'splitting'
import { Pitch } from '../Landing/Pitch/Pitch'
import { Heading } from '@chakra-ui/react'

export const LandingPage2 = () => {
  useLayoutEffect(() => {
    setupAnimation()
  })
  return (
    <Layout>
      <div className='demo-4 '>
        <section className='section section--intro'>
          <Hero />
        </section>
        <section className='section section--columns'>
          <div className='columns'>
            <ColumnWrap />
            <ColumnWrap />
            <ColumnWrap />
          </div>
        </section>
        <div>
          <div className='scroll-section scroll-section-1'>
            <div className='scroll-box'>
              <div className='scroller-text'>Resize when the page was scrolled make me jump :/</div>
            </div>
            <div className='text-animation-content'>
              <Heading className='text-animation-content__title' data-splitting='' data-effect11=''>
                <span className='font-3 font-height'>
                  Hi, I'm Zac Brooks. I originally planned on just being a software engineer.
                </span>
              </Heading>
            </div>
          </div>
          <div className='scroll-section scroll-section-2'>
            <div style={{ flex: 1 }} />
            <div className='text-animation-content'>
              <Heading className='text-animation-content__title' data-splitting='' data-effect11=''>
                <span className='font-3 font-height '>
                  but then I also got a taste of the creative ecstasy of branding and UI design.
                </span>
              </Heading>
            </div>
          </div>
          <div className='scroll-section scroll-section-3'></div>
        </div>
        <section className='section section--showcase'>
          <Pitch />

          <div className='row'>
            <div className='row__header'>
              <span>2000</span>
              <span>Bocage's Secret</span>
              <span>My mind drifts to a place where I find you</span>
            </div>
            <IMGRow />
          </div>
          <div className='row'>
            <div className='row__header'>
              <span>2002</span>
              <span>Coolista Website Redesign</span>
              <span>Can we kiss with poison on our lips?</span>
            </div>
            <IMGRow />
          </div>
          <div className='row'>
            <div className='row__header'>
              <span>2010</span>
              <span>Running away</span>
              <span>Take off your clothes and take off your mask</span>
            </div>
            <IMGRow />
          </div>
          <div className='row'>
            <div className='row__header'>
              <span>2012</span>
              <span>Verona</span>
              <span>It's not over now, I won't leave you in the dark</span>
            </div>
            <IMGRow />
          </div>
          <p>
            Based on the effect seen on <a href='https://www.margotpriolet.com/'>margotpriolet.com</a>
          </p>
        </section>
      </div>
    </Layout>
  )
}
const IMGRow = () => {
  return (
    <div className='row__content'>
      <div className='row__content-imgwrap'>
        <div className='row__content-img' style={{ backgroundImage: `url(${img1})` }} />
      </div>
      <div className='row__content-imgwrap'>
        <div className='row__content-img' style={{ backgroundImage: `url(${img1})` }} />
      </div>
      <div className='row__content-imgwrap'>
        <div className='row__content-img' style={{ backgroundImage: `url(${img1})` }} />
      </div>
      <div className='row__content-imgwrap'>
        <div className='row__content-img' style={{ backgroundImage: `url(${img1})` }} />
      </div>
    </div>
  )
}
const ColumnWrap = () => {
  return (
    <div className='column-wrap'>
      <div className='column'>
        <div className='column__item'>
          <div className='column__item-img' style={{ backgroundImage: `url(${img1})` }} />
        </div>
        <div className='column__item'>
          <div className='column__item-img' style={{ backgroundImage: `url(${img1})` }} />
        </div>
        <div className='column__item'>
          <div className='column__item-img' style={{ backgroundImage: `url(${img1})` }} />
        </div>
        <div className='column__item'>
          <div className='column__item-img' style={{ backgroundImage: `url(${img1})` }} />
        </div>
        <div className='column__item'>
          <div className='column__item-img' style={{ backgroundImage: `url(${img1})` }} />
        </div>
        <div className='column__item'>
          <div className='column__item-img' style={{ backgroundImage: `url(${img1})` }} />
        </div>
        <div className='column__item'>
          <div className='column__item-img' style={{ backgroundImage: `url(${img1})` }} />
        </div>
      </div>
      {/* /column */}
    </div>
  )
}
const setupAnimation = () => {
  Splitting()
  const preloadImages = (selector = 'img') => {
    return new Promise((resolve) => {
      imagesLoaded(document.querySelectorAll(selector), { background: true }, resolve)
    })
  }
  gsap.registerPlugin(ScrollTrigger)

  const DOM = {
    sections: {
      columns: document.querySelector('.section--columns'),
      showcase: document.querySelector('.section--showcase'),
    },
    fx11Titles: [...document.querySelectorAll('.text-animation-content__title[data-splitting][data-effect11]')],
    columns: document.querySelectorAll('.section--columns > .columns'),
    columnWraps: document.querySelectorAll('.section--columns .column-wrap'),
    itemsWrappers: document.querySelectorAll('.section--columns .column-wrap .column'),
    items: document.querySelectorAll('.section--columns .column__item'),
    images: document.querySelectorAll('.section--columns .column__item-img'),
  }

  // Lenis smooth scrolling
  let lenis

  // Initialize Lenis smooth scrolling
  const initSmoothScrolling = () => {
    lenis = new Lenis({
      lerp: 0.2,
      smooth: true,
    })
    const scrollFn = (time) => {
      lenis.raf(time)
      requestAnimationFrame(scrollFn)
    }
    requestAnimationFrame(scrollFn)
    const section1 = document.body.querySelector('.scroll-section-1')
    const box = document.body.querySelector('.scroll-box')

    const tl = gsap.timeline({ paused: true })

    tl.fromTo(box, { y: 0 }, { y: '100vh', duration: 1, ease: 'none' }, 0)

    const st = ScrollTrigger.create({
      animation: tl,
      trigger: section1,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    })
  }

  // GSAP Scroll Triggers
  const scroll = () => {
    gsap
      .timeline({
        scrollTrigger: {
          start: 0,
          end: 'max',
          scrub: true,
        },
      })
      .addLabel('start', 0)

      .to(
        DOM.sections.columns,
        {
          ease: 'none',
          startAt: { scale: 1.2 },
          scale: 1,
        },
        'start'
      )

      .to(
        DOM.items,
        {
          scrollTrigger: {
            trigger: DOM.sections.showcase,
            start: 0,
            end: 'top top',
            scrub: true,
          },
          ease: 'power4.inOut',
          startAt: {
            opacity: 0,
            filter: 'brightness(300%)',
          },
          opacity: 1,
          filter: 'brightness(100%)',
          // repeat once (go back to "startAt" values)
          yoyo: true,
          repeat: 1,
        },
        'start'
      )
      .to(
        DOM.columnWraps,
        {
          ease: 'none',
          yPercent: (pos) => pos * -15 - 15,
        },
        'start'
      )
    DOM.fx11Titles.forEach((title) => {
      const wrapElements = (elems, wrapType, wrapClass) => {
        elems.forEach((char) => {
          const wrapEl = document.createElement(wrapType)
          wrapEl.classList = wrapClass
          char.parentNode.appendChild(wrapEl)
          wrapEl.appendChild(char)
        })
      }
      const chars = title.querySelectorAll('.char')
      wrapElements(chars, 'span', 'char-wrap')

      gsap.fromTo(
        chars,
        {
          'will-change': 'transform',
          transformOrigin: '0% 50%',
          xPercent: 105,
        },
        {
          duration: 0.15,
          ease: 'expo',
          xPercent: 0,
          stagger: 0.042,
          scrollTrigger: {
            trigger: title,
            start: 'top bottom',
            end: 'top top+=10%',
            toggleActions: 'play resume resume reset',
          },
        }
      )
    })
  }

  // Preload images
  preloadImages('.column__item-img').then(() => {
    document.body.classList.remove('loading')
    // Lenis (smooth scrolling)
    initSmoothScrolling()
    // GSAP Scroll Triggers
    scroll()
  })
}
