import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Resume } from '../components/Resume'

const ResumePage = () => {
  return (
    <Layout>
      <Resume />
    </Layout>
  )
}

export const Head = () => <Seo title='Page two' />

export default ResumePage
