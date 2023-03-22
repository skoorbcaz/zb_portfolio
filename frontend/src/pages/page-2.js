import * as React from 'react'
import '../styles/menu.css'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Portfolio from './portfolio'

const SecondPage = () => {
  return (
    <Layout>
      <Portfolio />
    </Layout>
  )
}

export const Head = () => <Seo title='Page two' />

export default SecondPage
