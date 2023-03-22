import { Slide } from '../slide'
import { gsap } from 'gsap'
import { slides } from '../slides'

export const getDOMForAnimations = () => {
  // Some DOM elements
  const DOM = {
    slides: [...document.querySelectorAll('.slide')],
    cursor: document.querySelector('.cursor'),
    backCtrl: document.querySelector('.frame__back'),
    navigationItems: document.querySelectorAll('.frame__nav-button'),
    menuIcons: document.querySelectorAll('.menu-icon'),
    ZBContainer: document.querySelector('.brand-square'),
    hamburgerInner: document.querySelector('.hamburger-inner'),
    logoStroke1: document.querySelector('#logoStroke1'),
    logoStroke2: document.querySelector('#logoStroke2'),
    navBanner: document.querySelector('.nav-banner'),
  }
  // cursor text chars
  DOM.cursorChars = DOM.cursor.querySelectorAll('.word > .char, .whitespace')
  // backCtrl text chars
  DOM.backChars = DOM.backCtrl.querySelectorAll('.word > .char, .whitespace')

  let slidesArr = []
  DOM.slides.forEach((slide) => {
    slidesArr.push(new Slide(slide))
  })
  return { DOM, slidesArr }
}

export const initEvents = (
  DOM,
  isAnimating,
  setIsAnimating,
  slidesArr,
  setInfiniteIndex,
  setCurrentIndex,
  Observer,
  currentSlideIndex
) => {
  // Links navigation
  ;[...DOM.navigationItems].forEach((item, position) => {
    item.addEventListener('click', () => {
      if (currentSlideIndex === position || isAnimating) return
      navigate(position, setIsAnimating, slidesArr, DOM, currentSlideIndex)
    })
  })

  // Back click
  DOM.backCtrl.addEventListener('click', () => {
    if (isAnimating) return
    setIsAnimating(true)
    toggleCursorBackTexts()
    hideContent(slidesArr[current], true)
  })

  // Initialize the GSAP Observer plugin
  Observer.create({
    type: 'wheel,touch,pointer',
    onDown: () =>
      !isAnimating && prev(setIsAnimating, slidesArr, DOM, setInfiniteIndex, setCurrentIndex, currentSlideIndex),
    onUp: () =>
      !isAnimating && next(setIsAnimating, slidesArr, DOM, setInfiniteIndex, setCurrentIndex, currentSlideIndex),
    // invert the mouse wheel delta
    wheelSpeed: -1,
    tolerance: 10,
  })

  for (const [position, slide] of slidesArr.entries()) {
    slide.DOM.img.addEventListener('click', () => {
      showContent(position, isAnimating, setIsAnimating, slidesArr)
    })
  }
}

const hideContent = (slide, animate = false, setIsAnimating) => {
  // reset values
  setIsAnimating(true)

  const complete = () => {
    slide.isOpen = false
    setIsAnimating(false)
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

export const setCurrentSlide = (position, slidesArr, DOM, currentSlideIndex) => {
  if (currentSlideIndex !== -1) {
    slidesArr[currentSlideIndex].DOM.el.classList.remove('slide--current')
  }

  const textColor = slides[position % slides.length].isLightMode
    ? 'var(--chakra-colors-gray-600)'
    : 'var(--chakra-colors-gray-100)'
  slidesArr[position].DOM.el.classList.add('slide--current')
  DOM.ZBContainer.style.background = slides[position % slides.length].brandColor
  DOM.navBanner.style.background = slides[position % slides.length].brandColor
  DOM.menuIcons.forEach((icon) => (icon.style.color = textColor))
  DOM.logoStroke1.style.stroke = slides[position % slides.length].logoStroke
  DOM.logoStroke2.style.stroke = slides[position % slides.length].logoStroke
  if (slides[position % slides.length].isLightMode) {
    DOM.hamburgerInner.classList.add('light')
  } else {
    DOM.hamburgerInner.classList.remove('light')
  }
}

const next = (setIsAnimating, slidesArr, DOM, setInfiniteIndex, setCurrentSlideIndex, currentSlideIndex) => {
  console.log('next')

  setIsAnimating(true)
  const newPosition = currentSlideIndex < slidesArr.length - 1 ? currentSlideIndex + 1 : 0
  navigate(newPosition, setIsAnimating, slidesArr, DOM, currentSlideIndex)
  setInfiniteIndex((prev) => prev + 1)
  setCurrentSlideIndex(newPosition)
}

const prev = (setIsAnimating, slidesArr, DOM, setInfiniteIndex, setCurrentSlideIndex, currentSlideIndex) => {
  console.log('prev')
  const newPosition = currentSlideIndex > 0 ? currentSlideIndex - 1 : slidesArr.length - 1
  navigate(newPosition, setIsAnimating, slidesArr, DOM, currentSlideIndex)
  setInfiniteIndex((prev) => prev - 1)
  setCurrentSlideIndex(newPosition)
}

const navigate = (newPosition, setIsAnimating, slidesArr, DOM, currentSlideIndex) => {
  setIsAnimating(true)
  const totalSlides = slidesArr.length
  // navigation direction
  const direction =
    currentSlideIndex < newPosition
      ? currentSlideIndex === 0 && newPosition === totalSlides - 1
        ? 'prev'
        : 'next'
      : currentSlideIndex === totalSlides - 1 && newPosition === 0
      ? 'next'
      : 'prev'

  const currentSlide = slidesArr[currentSlideIndex % slides.length]
  const upcomingSlide = slidesArr[newPosition % slides.length]
  const textColor = slides[newPosition % slides.length].isLightMode
    ? 'var(--chakra-colors-gray-600)'
    : 'var(--chakra-colors-gray-100)'
  DOM.ZBContainer.style.background = slides[newPosition % slides.length].brandColor
  DOM.navBanner.style.background = slides[newPosition % slides.length].brandColor
  DOM.logoStroke1.style.stroke = slides[newPosition % slides.length].logoStroke
  DOM.logoStroke2.style.stroke = slides[newPosition % slides.length].logoStroke
  DOM.menuIcons.forEach((icon) => (icon.style.color = textColor))
  if (slides[newPosition % slides.length].isLightMode) {
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

        setIsAnimating(false)
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

const showContent = (position, isAnimating, setIsAnimating, slidesArr) => {
  if (isAnimating) return
  setIsAnimating(true)

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
        setIsAnimating(false)
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
