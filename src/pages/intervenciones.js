import React from "react"
import Layout from '../components/layout'

import Posts from '../components/posts'

const Intervenciones = props => {
  return (
    <Layout location={props.location}>
      <h2>Intervenciones</h2>
      <Posts filter="intervenciones"/>
    </Layout>
  )
}

export default Intervenciones