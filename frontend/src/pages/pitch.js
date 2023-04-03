import * as React from 'react'
import '../styles/menu.css'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Portfolio from './portfolio'
import { Pitch } from '../components/Landing/Pitch/Pitch'

const PitchPage = () => {
  return (
    <Layout>
      <Pitch />
    </Layout>
  )
}

export const Head = () => <Seo title='Pitch' />

export default PitchPage
