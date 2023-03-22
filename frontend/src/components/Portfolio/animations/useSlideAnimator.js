import { useLayoutEffect, useState } from 'react'
import { slides } from '../slides'
import { gsap } from 'gsap'
import Splitting from 'splitting'
import { Observer } from 'gsap/Observer'
import { CursorText } from '../cursor'
import { preloadImages } from '../utils'
import { getDOMForAnimations, initEvents, setCurrentSlide } from './util'

export const useSlideAnimator = () => {
  const [infiniteIndex, setInfiniteIndex] = useState(0 + slides.length)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  useLayoutEffect(() => {
    setupAnimation(setCurrentSlideIndex, setInfiniteIndex)
  }, [])
  const setupAnimation = (setCurrentSlideIndex, setInfiniteIndex) => {
    gsap.registerPlugin(Observer)
    // Call the splittingjs to transform the data-splitting texts to spans of chars
    Splitting()

    const { DOM, slidesArr } = getDOMForAnimations()

    // Initialize the events
    initEvents(
      DOM,
      isAnimating,
      setIsAnimating,
      slidesArr,
      setInfiniteIndex,
      setCurrentSlideIndex,
      Observer,
      currentSlideIndex
    )
    // Set current slide
    setCurrentSlide(0, slidesArr, DOM, currentSlideIndex)
    // Preload images and initialize scrolling animations
    preloadImages('.slide__img-inner').then((_) => {
      document.body.classList.remove('loading')
    })
  }
  return { infiniteIndex, currentSlideIndex, setCurrentSlideIndex, setInfiniteIndex }
}
