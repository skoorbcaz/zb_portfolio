import { useLayoutEffect } from 'react'
import './intro.css'
import img1 from './img/1.jpeg'
import React from 'react'
import imagesLoaded from 'imagesloaded'
import LocomotiveScroll from 'locomotive-scroll'
export const Intro = () => {
  useLayoutEffect(() => {
    // Preload  images and fonts
    Promise.all([preloadImages('.tiles__line-img')]).then(() => {
      // Remove loader (loading class)
      document.body.classList.remove('loading')
    })
  }, [])

  return (
    <div className='data-scroll-container'>
      <div className='tiles tiles--columns-rotated tiles--darker' id='grid'>
        <div className='tiles__wrap'>
          <div className='tiles__line' data-scroll='' data-scroll-speed='1' data-scroll-target='#grid'>
            <div className='tiles__line-img' style={{ backgroundImage: `url(${img1})` }} />
            <div className='tiles__line-img' style={{ backgroundImage: `url(${img1})` }} />
            <div className='tiles__line-img' style={{ backgroundImage: `url(${img1})` }} />
            <div className='tiles__line-img' style={{ backgroundImage: `url(${img1})` }} />
            <div className='tiles__line-img' style={{ backgroundImage: `url(${img1})` }} />
          </div>
          <div className='tiles__line' data-scroll='' data-scroll-speed='-1' data-scroll-target='#grid'>
            <div className='tiles__line-img' style={{ backgroundImage: `url(${img1})` }} />
            <div className='tiles__line-img' style={{ backgroundImage: `url(${img1})` }} />
            <div className='tiles__line-img' style={{ backgroundImage: `url(${img1})` }} />
            <div className='tiles__line-img' style={{ backgroundImage: `url(${img1})` }} />
            <div className='tiles__line-img' style={{ backgroundImage: `url(${img1})` }} />
          </div>
          <div className='tiles__line' data-scroll='' data-scroll-speed='1' data-scroll-target='#grid'>
            <div className='tiles__line-img' style={{ backgroundImage: `url(${img1})` }} />
            <div className='tiles__line-img' style={{ backgroundImage: `url(${img1})` }} />
            <div className='tiles__line-img' style={{ backgroundImage: `url(${img1})` }} />
            <div className='tiles__line-img' style={{ backgroundImage: `url(${img1})` }} />
            <div className='tiles__line-img' style={{ backgroundImage: `url(${img1})` }} />
          </div>
          <div className='tiles__line' data-scroll='' data-scroll-speed='-1' data-scroll-target='#grid'>
            <div className='tiles__line-img' style={{ backgroundImage: `url(${img1})` }} />
            <div className='tiles__line-img' style={{ backgroundImage: `url(${img1})` }} />
            <div className='tiles__line-img' style={{ backgroundImage: `url(${img1})` }} />
            <div className='tiles__line-img' style={{ backgroundImage: `url(${img1})` }} />
            <div className='tiles__line-img' style={{ backgroundImage: `url(${img1})` }} />
          </div>
          <div className='tiles__line' data-scroll='' data-scroll-speed='1' data-scroll-target='#grid'>
            <div className='tiles__line-img' style={{ backgroundImage: `url(${img1})` }} />
            <div className='tiles__line-img' style={{ backgroundImage: `url(${img1})` }} />
            <div className='tiles__line-img' style={{ backgroundImage: `url(${img1})` }} />
            <div className='tiles__line-img' style={{ backgroundImage: `url(${img1})` }} />
            <div className='tiles__line-img' style={{ backgroundImage: `url(${img1})` }} />
          </div>
        </div>
      </div>
      <div className='scrolling-content'>
        <p className='content__text content__text--centered' data-scroll='' data-scroll-speed='4'>
          Psychedelics are illegal not because a loving government is concerned that you may jump out of a third story
          window. Psychedelics are illegal because they dissolve opinion structures and culturally laid down models of
          behaviour and information processing. They open you up to the possibility that everything you know is wrong.
        </p>
      </div>
      <div className='scrolling-content content--feature'>
        <p
          className='content__breakout content__breakout--big'
          data-scroll=''
          data-scroll-speed='1'
          data-scroll-direction='horizontal'
        >
          pursuit of happiness
        </p>
        <p
          className='content__breakout content__breakout--medium'
          data-scroll=''
          data-scroll-speed='2'
          data-scroll-direction='horizontal'
        >
          the right to experiment with your own consciousnes
        </p>
      </div>
    </div>
  )
}

// Preload images
const preloadImages = (selector = 'img') => {
  return new Promise((resolve) => {
    imagesLoaded(document.querySelectorAll(selector), { background: true }, resolve)
  })
}

export { preloadImages }
