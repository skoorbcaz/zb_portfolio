import { gsap } from 'gsap'
import Splitting from 'splitting'
import { Slide } from '../slide'
import { slides } from '../slides'
import { CursorText } from '../cursor'
import { preloadImages } from '../utils'
import { Observer } from 'gsap/Observer'
export const setupAnimation = (setCurrentSlideIndex, setInfiniteIndex) => {
  gsap.registerPlugin(Observer)
  // Call the splittingjs to transform the data-splitting texts to spans of chars
  Splitting()

  // Some DOM elements
  const DOM = {
    slides: [...document.querySelectorAll('.slide')],
    backCtrl: document.querySelector('.frame__back'),
    navigationItems: document.querySelectorAll('.frame__nav-button'),
    menuIcons: document.querySelectorAll('.menu-icon'),
    ZBContainer: document.querySelector('.brand-square'),
    hamburgerInner: document.querySelector('.hamburger-inner'),
    logoStroke1: document.querySelector('#logoStroke1'),
    logoStroke2: document.querySelector('#logoStroke2'),
    menuNav: document.querySelector('.menu__nav-content'),
    //navBanner: document.querySelector('.nav-banner'),
  }

  // total number of slides
  const totalSlides = DOM.slides.length

  let slidesArr = []
  DOM.slides.forEach((slide) => {
    slidesArr.push(new Slide(slide))
  })

  // current slide position
  let current = -1
  // check if animation is in progress
  let isAnimating = false

  const setCurrentSlide = (position) => {
    if (current !== -1) {
      slidesArr[current].DOM.el.classList.remove('slide--current')
    }

    current = position
    const textColor = slides[current % slides.length].isLightMode
      ? 'var(--chakra-colors-gray-600)'
      : 'var(--chakra-colors-gray-100)'
    slidesArr[current].DOM.el.classList.add('slide--current')
    DOM.ZBContainer.style.background = slides[current % slides.length].brandColor
    DOM.menuNav.style.background = slides[current % slides.length].brandColor
    // DOM.navBanner.style.background = slides[current % slides.length].brandColor
    DOM.menuIcons.forEach((icon) => (icon.style.color = slides[current % slides.length].logoStroke))
    DOM.logoStroke1.style.stroke = slides[current % slides.length].logoStroke
    DOM.logoStroke2.style.stroke = slides[current % slides.length].logoStroke
    if (slides[current % slides.length].isLightMode) {
      DOM.hamburgerInner.classList.add('light')
    } else {
      DOM.hamburgerInner.classList.remove('light')
    }
  }

  const next = () => {
    const newPosition = current < totalSlides - 1 ? current + 1 : 0
    setInfiniteIndex((prev) => prev + 1)
    navigate(newPosition)
  }

  const prev = () => {
    const newPosition = current > 0 ? current - 1 : totalSlides - 1
    setInfiniteIndex((prev) => prev - 1)
    navigate(newPosition)
  }

  const navigate = (newPosition) => {
    isAnimating = true

    // navigation direction
    const direction =
      current < newPosition
        ? current === 0 && newPosition === totalSlides - 1
          ? 'prev'
          : 'next'
        : current === totalSlides - 1 && newPosition === 0
        ? 'next'
        : 'prev'

    const currentSlide = slidesArr[current % slides.length]
    current = newPosition
    const upcomingSlide = slidesArr[current % slides.length]
    const textColor = slides[current % slides.length].isLightMode
      ? 'var(--chakra-colors-gray-600)'
      : 'var(--chakra-colors-gray-100)'
    DOM.ZBContainer.style.background = slides[current % slides.length].brandColor
    DOM.menuNav.style.background = slides[current % slides.length].brandColor
    // DOM.navBanner.style.background = slides[current % slides.length].brandColor
    DOM.logoStroke1.style.stroke = slides[current % slides.length].logoStroke
    DOM.logoStroke2.style.stroke = slides[current % slides.length].logoStroke
    DOM.menuIcons.forEach((icon) => (icon.style.color = slides[current % slides.length].logoStroke))
    if (slides[current % slides.length].isLightMode) {
      DOM.hamburgerInner.classList.add('light')
    } else {
      DOM.hamburgerInner.classList.remove('light')
    }

    gsap
      .timeline({
        defaults: {
          duration: 1.6,
          ease: 'power3.inOut',
        },
        onComplete: () => {
          currentSlide.DOM.el.classList.remove('slide--current')
          // Close the current slide if it was open
          if (currentSlide.isOpen) {
            hideContent(currentSlide)
          }

          isAnimating = false
        },
      })
      .addLabel('start', 0)

      .set(
        [currentSlide.DOM.imgInner, upcomingSlide.DOM.imgInner],
        {
          transformOrigin: direction === 'next' ? '50% 0%' : '50% 100%',
        },
        'start'
      )

      // Place coming slide either above (translate -100%) or below (translate 100%) and the slide__inner to the opposite translate.
      .set(
        upcomingSlide.DOM.el,
        {
          yPercent: direction === 'next' ? 100 : -100,
        },
        'start'
      )
      .set(
        [(upcomingSlide.DOM.description, upcomingSlide.DOM.logoImage, upcomingSlide.DOM.detailsLink)],
        {
          opacity: 0,
        },
        'start'
      )
      .set(
        upcomingSlide.DOM.inner,
        {
          yPercent: direction === 'next' ? -100 : 100,
        },
        'start'
      )

      // Add current class
      .add(() => {
        upcomingSlide.DOM.el.classList.add('slide--current')
      }, 'start')

      // hide the back button and show back the cursor text if the current slide was open
      .add(() => {
        if (currentSlide.isOpen) {
          toggleCursorBackTexts()
        }
      }, 'start')

      // Current slide moves either up or down (translate 100% or -100%)
      .to(
        currentSlide.DOM.el,
        {
          yPercent: direction === 'next' ? -100 : 100,
        },
        'start'
      )
      .to(
        currentSlide.DOM.imgInner,
        {
          scaleY: 2,
        },
        'start'
      )
      .to(
        [upcomingSlide.DOM.description, upcomingSlide.DOM.logoImage, upcomingSlide.DOM.detailsLink],
        {
          duration: 2,
          ease: 'power2.inOut',
          startAt: { yPercent: -50, opacity: 0 },
          yPercent: 0,
          opacity: 1,
        },
        'start'
      )
      // Upcoming slide translates to 0
      .to(
        [upcomingSlide.DOM.el, upcomingSlide.DOM.inner],
        {
          yPercent: 0,
        },
        'start'
      )
      .to(
        upcomingSlide.DOM.imgInner,
        {
          ease: 'power2.inOut',
          startAt: { scaleY: 2 },
          scaleY: 1,
        },
        'start'
      )
    setCurrentSlideIndex(current)
  }

  const toggleCursorBackTexts = (isContent) => {
    return gsap
      .timeline({
        onStart: () => {
          gsap.set(DOM.backChars, { opacity: isContent ? 0 : 1 })
          if (isContent) {
            DOM.backCtrl.classList.add('frame__back--show')
          }
        },
        onComplete: () => {
          DOM.backCtrl.classList[isContent ? 'add' : 'remove']('frame__back--show')
          if (!isContent) {
            DOM.backCtrl.classList.remove('frame__back--show')
          }
        },
      })

      .to(
        DOM.backChars,
        {
          duration: 0.1,
          ease: 'expo',
          opacity: isContent ? 1 : 0,
          stagger: {
            amount: 0.5,
            grid: 'auto',
            from: 'random',
          },
        },
        0
      )
  }

  const showContent = (position) => {
    if (isAnimating) return
    isAnimating = true

    const slide = slidesArr[position]

    slide.isOpen = true

    gsap
      .timeline({
        defaults: {
          duration: 1.6,
          ease: 'power3.inOut',
        },
        onStart: () => {},
        onComplete: () => {
          isAnimating = false
        },
      })
      .addLabel('start', 0)
      .add(() => {
        toggleCursorBackTexts('content')
      }, 'start')
      .to(
        slide.DOM.img,
        {
          yPercent: -100,
        },
        'start'
      )
      .set(
        [slide.DOM.description, slide.DOM.logoImage, slide.DOM.detailsLink],
        {
          opacity: 0,
        },
        'start'
      )
      .set(
        slide.DOM.imgInner,
        {
          transformOrigin: '50% 100%',
        },
        'start'
      )
      .to(
        slide.DOM.imgInner,
        {
          yPercent: 100,
          scaleY: 2,
        },
        'start'
      )
      .to(
        [slide.DOM.description, slide.DOM.logoImage, slide.DOM.detailsLink],
        {
          opacity: 1,
        },
        'start'
      )
      .to(
        slide.DOM.contentImg,
        {
          startAt: {
            transformOrigin: '50% 0%',
            scaleY: 1.5,
          },
          scaleY: 1,
        },
        'start'
      )
  }

  const hideContent = (slide, animate = false) => {
    // reset values
    isAnimating = true

    const complete = () => {
      slide.isOpen = false
      isAnimating = false
    }

    if (animate) {
      gsap
        .timeline({
          defaults: {
            duration: 1.6,
            ease: 'power3.inOut',
          },
          onComplete: complete,
        })
        .addLabel('start', 0)
        .to(
          slide.DOM.img,
          {
            yPercent: 0,
          },
          'start'
        )
        .to(
          [slide.DOM.description, slide.DOM.logoImage, slide.DOM.detailsLink],
          {
            opacity: 0,
          },
          'start'
        )
        .to(
          slide.DOM.imgInner,
          {
            yPercent: 0,
            scaleY: 1,
          },
          'start'
        )
    } else {
      gsap.set(slide.DOM.img, {
        yPercent: 0,
      })
      gsap.set([slide.DOM.description, slide.DOM.logoImage, slide.DOM.detailsLink], {
        opacity: 0,
      })
      gsap.set(slide.DOM.imgInner, {
        yPercent: 0,
        scaleY: 1,
      })
      complete()
    }
  }

  const initEvents = () => {
    // Links navigation
    ;[...DOM.navigationItems].forEach((item, position) => {
      item.addEventListener('click', () => {
        if (current === position || isAnimating) return
        navigate(position)
      })
    })

    // Back click
    DOM.backCtrl.addEventListener('click', () => {
      if (isAnimating) return
      isAnimating = true
      toggleCursorBackTexts()
      hideContent(slidesArr[current], true)
    })

    // Initialize the GSAP Observer plugin
    Observer.create({
      type: 'wheel,touch,pointer',
      onDown: () => !isAnimating && prev(),
      onUp: () => !isAnimating && next(),
      // invert the mouse wheel delta
      wheelSpeed: -1,
      tolerance: 10,
    })

    for (const [position, slide] of slidesArr.entries()) {
      slide.DOM.img.addEventListener('click', () => {
        showContent(position)
      })
    }
  }

  // Set current slide
  setCurrentSlide(0)

  // Initialize the events
  initEvents()

  // Preload images and initialize scrolling animations
  preloadImages('.slide__img-inner').then((_) => {
    document.body.classList.remove('loading')
  })
}
