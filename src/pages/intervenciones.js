import React from "react"
import Layout from '../components/layout'
import SEO from '../components/seo'

import Posts from '../components/posts'

const Intervenciones = props => {
  return (
    <Layout location={props.location}>
      <SEO title="Intervenciones" />
      <h2>Intervenciones</h2>
      <Posts filter="intervenciones"/>
    </Layout>
  )
}

export default Intervenciones