import React, { useLayoutEffect } from 'react'
import './base.css'
import { setupAnimation } from './landing-animation'
import { LandingHero } from './sections/Hero'
import Layout from '../layout'
import { LargeWithAppLinksAndSocial } from './Footer'
import { NewsletterSignup } from './NewsletterSignup'
import { ScreensPreview } from './sections/ScreensPreview'
import { DevAbout } from './sections/DevAbout'
import { DesignAbout } from './sections/DesignAbout'
import { LeadershipAbout } from './sections/LeadershipAbout'
import { CallToActionBoxes } from './sections/CallToActionBoxes'
import { RecentBlogPosts } from './sections/RecentBlogPosts'
import { PortfolioHorizontalScroll } from './sections/PortfolioHorizontalScroll'
import { DesignDisciplines } from './sections/DesignDisciplines'

export const LandingPage2 = () => {
  const [isMounted, setIsMounted] = React.useState(false)
  useLayoutEffect(() => {
    if (!isMounted) {
      setupAnimation()
      setIsMounted(true)
    }
  }, [])
  return (
    <Layout>
      <div className='demo-4 '>
        <LandingHero />
        <ScreensPreview />
        <div className='landing-about-section'>
          <DevAbout />
          <DesignAbout />

          <LeadershipAbout />
        </div>
        <PortfolioHorizontalScroll />

        <RecentBlogPosts />
        <NewsletterSignup />
        <LargeWithAppLinksAndSocial />
      </div>
    </Layout>
  )
}
