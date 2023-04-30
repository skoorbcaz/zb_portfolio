import Splitting from 'splitting'
import imagesLoaded from 'imagesloaded'
import { gsap } from 'gsap'
import Lenis from '@studio-freight/lenis'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const setupAnimation = () => {
  Splitting()
  gsap.registerPlugin(ScrollTrigger)
  const DOM = getDOMElements()

  // Initialize Lenis smooth scrolling
  const initSmoothScrolling = () => {
    const lenis = new Lenis({
      lerp: 0.2,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    const scrollFn = (time) => {
      lenis.raf(time)
      requestAnimationFrame(scrollFn)
    }
    requestAnimationFrame(scrollFn)
  }

  // GSAP Scroll Triggers
  const scroll = () => {
    addStickyHeaderAnimation(DOM)
    addPortfolioPreviewAnimation(DOM)
    addTextAnimation(DOM)
    addPinnedBoxAnimation(DOM)
    addTrackAnimation(DOM)
    setupDevIntroAnimation()
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
const addStickyHeaderAnimation = (DOM) => {
  gsap.fromTo(
    DOM.stickyHeader,
    { top: -200 },
    {
      top: 0,
      ease: 'power4.out',
      duration: 1,
      scrollTrigger: { start: 'bottom bottom', end: 'bottom top', scrub: true, trigger: DOM.sections.columns },
    }
  )
}
const setupDevIntroAnimation = () => {
  const devDOM = {
    titles: [...document.querySelectorAll('.content__title[data-splitting][data-effect13]')],
    titles2: [...document.querySelectorAll('.content__title[data-splitting][data-effect6]')],
    titles3: [...document.querySelectorAll('.content__title[data-splitting][data-effect3]')],
    headerBorders: document.querySelectorAll('.header__border'),
    devSection: document.querySelector('.dev-section'),
    designSection: document.querySelector('.design-section'),
    devAbout: document.querySelector('.dev-about-desc'),
  }

  devDOM.headerBorders.forEach((border) => {
    gsap.fromTo(
      border,
      {
        x: '200%',
      },
      {
        x: '-30%%',

        ease: 'expo',
        scrollTrigger: {
          start: 'bottom bottom',
          end: 'bottom top',
          scrub: true, // link the image fade to the scroll
          trigger: border.parentElement,
        },
      }
    )
  })
  devDOM.titles3.forEach((title) => {
    const chars = title.querySelectorAll('.char')

    gsap.fromTo(
      chars,
      {
        'will-change': 'transform',
        transformOrigin: '50% 0%',
        scaleY: 0,
      },
      {
        ease: 'back',
        opacity: 1,
        scaleY: 1,
        yPercent: 0,
        stagger: 0.03,
        scrollTrigger: {
          trigger: title,
          start: 'center bottom-=5%',
          end: 'top top-=20%',
          scrub: true,
        },
      }
    )
  })
  devDOM.titles.forEach((title) => {
    const chars = title.querySelectorAll('.char')

    chars.forEach((char) => gsap.set(char.parentNode, { perspective: 2000 }))

    gsap.fromTo(
      chars,
      {
        'will-change': 'opacity, transform',
        opacity: 0,
        rotationY: 180,
        xPercent: -40,
        yPercent: 100,
      },
      {
        ease: 'power4.inOut()',
        opacity: 1,
        rotationY: 0,
        xPercent: 0,
        yPercent: 0,
        stagger: {
          each: -0.03,
          from: 0,
        },
        scrollTrigger: {
          trigger: title,
          start: 'center bottom',
          end: 'bottom center-=10%',
          scrub: 0.9,
        },
      }
    )
  })
  const results = Splitting({ target: devDOM.devAbout, by: 'lines' })
  results.forEach((line) => {
    line.chars.forEach((char) => {
      gsap.fromTo(
        char,
        {
          opacity: 0,
          y: 100,
        },
        {
          duration: 1,
          opacity: 1,
          y: 0,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: line.chars[0],
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )
    })
  })
  devDOM.titles2.forEach((title) => {
    const words = title.querySelectorAll('.word')

    for (const word of words) {
      const chars = word.querySelectorAll('.char')

      chars.forEach((char) => gsap.set(char.parentNode, { perspective: 2000 }))

      gsap.fromTo(
        chars,
        {
          'will-change': 'opacity, transform',
          opacity: 0,
          rotationX: -90,
          yPercent: 50,
        },
        {
          ease: 'power1.inOut',
          opacity: 1,
          rotationX: 0,
          yPercent: 0,
          stagger: {
            each: 0.03,
            from: 0,
          },
          scrollTrigger: {
            trigger: word,
            start: 'center bottom+=40%',
            end: 'bottom center-=30%',
            scrub: 0.9,
          },
        }
      )
    }
  })
}

const preloadImages = (selector = 'img') => {
  return new Promise((resolve) => {
    imagesLoaded(document.querySelectorAll(selector), { background: true }, resolve)
  })
}
const getDOMElements = () => {
  return {
    sections: {
      columns: document.querySelector('.section--columns'),
      showcase: document.querySelector('.landing-about-section'),
    },
    tracks: document.querySelectorAll('.sticky-element'),
    pinSection1: document.body.querySelector('.scroll-section-1'),
    pinnedBox: document.body.querySelector('.scroll-box'),
    fx11Titles: [...document.querySelectorAll('.text-animation-content__title[data-splitting][data-effect11]')],
    columns: document.querySelectorAll('.section--columns > .columns'),
    columnWraps: document.querySelectorAll('.section--columns .column-wrap'),
    itemsWrappers: document.querySelectorAll('.section--columns .column-wrap .column'),
    items: document.querySelectorAll('.section--columns .column__item'),
    images: document.querySelectorAll('.section--columns .column__item-img'),
    fullBlogImage: document.querySelector('.blog-image-full'),
    landingBlogSection: document.querySelector('.landing-blog-section'),
    blogRightColumn: document.querySelector('.blog-right-column'),
    blogRightInners: document.querySelectorAll('.blog-right-column__inner'),
    blogItemReveals: document.querySelectorAll('.blog-item-reveal'),
    stickyHeader: document.querySelector('#sticky-header'),
  }
}
const addTrackAnimation = (DOM) => {
  DOM.tracks.forEach((track, i) => {
    let trackWrapper = track.querySelectorAll('.track')
    let allImgs = track.querySelectorAll('.image')

    let trackWrapperWidth = () => {
      let width = 0
      trackWrapper.forEach((el) => (width += el.offsetWidth))
      return width
    }

    gsap.defaults({
      ease: 'none',
    })

    let scrollTween = gsap.to(trackWrapper, {
      x: () => -trackWrapperWidth() + window.innerWidth,
      scrollTrigger: {
        trigger: track,
        scrub: 1,
        pin: true,
        start: 'center center',
        end: () => '+=' + (track.scrollWidth - window.innerWidth),
        onRefresh: (self) => self.getTween().resetTo('totalProgress', 0), // fixes a very minor issue where the progress was starting at 0.001.
        invalidateOnRefresh: true,
        id: 'id-one',
      },
    })

    allImgs.forEach((img, i) => {
      // the intended parallax animation
      gsap.fromTo(
        img,
        {
          x: '-20vw',
        },
        {
          x: '20vw',
          scrollTrigger: {
            trigger: img.parentNode, //.panel-wide
            containerAnimation: scrollTween,
            start: 'left right',
            end: 'right left',
            scrub: true,
            invalidateOnRefresh: true,
            onRefresh: (self) => {
              if (self.start < 0) {
                self.animation.progress(gsap.utils.mapRange(self.start, self.end, 0, 1, 0))
              }
            },
            id: 'id-two',
          },
        }
      )
    })
  })
}
const addTextAnimation = (DOM) => {
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
const addPinnedBoxAnimation = (DOM) => {
  const tl = gsap.timeline({ paused: true })

  tl.fromTo(DOM.pinnedBox, { y: 0 }, { y: '100vh', duration: 1, ease: 'none' }, 0)

  const st = ScrollTrigger.create({
    animation: tl,
    trigger: DOM.pinnedBox,
    start: 'top top',
    end: 'bottom top',
    scrub: true,
  })
}
const addPortfolioPreviewAnimation = (DOM) => {
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
}
