import React from "react"
import Layout from '../components/layout'
import SEO from '../components/seo'

import Posts from '../components/posts'

const Acciones = props => {
  return (
    <Layout location={props.location}>
      <SEO title="Acciones" />
      <h2>Acciones</h2>
      <Posts filter="acciones"/>
    </Layout>
  )
}

export default Acciones