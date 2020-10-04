import React from "react"
import Layout from '../components/layout'

import Posts from '../components/posts'

const Proyectos = props => {
  return (
    <Layout location={props.location}>
      <h2>Proyectos</h2>
      <Posts filter="proyectos"/>
    </Layout>
  )
}

export default Proyectos