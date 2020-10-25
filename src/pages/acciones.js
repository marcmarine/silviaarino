import React from "react"
import SEO from '../components/seo'

import Posts from '../components/posts'

const Acciones = props => {
  return (
    <>
      <SEO title="Acciones" />
      <Posts filter="acciones"/>
    </>
  )
}

export default Acciones