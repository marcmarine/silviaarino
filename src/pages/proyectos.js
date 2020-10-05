import React from "react"
import Layout from '../components/layout'
import SEO from '../components/seo'

import Posts from '../components/posts'

const Proyectos = props => {
  return (
    <Layout location={props.location}>
      <SEO title="Proyectos" />
      <h2>Proyectos</h2>
      <Posts filter="proyectos"/>
    </Layout>
  )
}

export default Proyectos