import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { PortfolioDetails } from '../components/PortfolioDetails'

const PortfolioPage = () => {
  return (
    <Layout>
      <PortfolioDetails />
    </Layout>
  )
}

export const Head = () => <Seo title='Gravitate GO Case Study' />

export default PortfolioPage
