import React from "react"
import Layout from '../components/layout'

import Posts from '../components/posts'

const Acciones = props => {
  return (
    <Layout location={props.location}>
      <h2>Acciones</h2>
      <Posts filter="acciones"/>
    </Layout>
  )
}

export default Acciones