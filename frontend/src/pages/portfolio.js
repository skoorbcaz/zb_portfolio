import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Portfolio } from '../components/Portfolio'

const PortfolioPage = () => {
  return (
    <Layout>
      <Portfolio />
    </Layout>
  )
}

export const Head = () => <Seo title='Page two' />

export default PortfolioPage
