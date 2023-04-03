import * as React from 'react'
import '../components/Landing/styles.css'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { LandingPage2 } from '../components/Landing2'

const IndexPage = () => {
  return (
    <>
      <Seo title='WELCOME TO ZAC BROOKS' />
      <LandingPage2 />
    </>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title='Meet Zac Brooks - Frontend Engineer and Multi-Disciplinary Designer' />

export default IndexPage
