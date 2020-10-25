import React from "react"
import SEO from '../components/seo'

import Posts from '../components/posts'

const Proyectos = props => {
  return (
    <>
      <SEO title="Proyectos" />
      <Posts filter="proyectos"/>
    </>
  )
}

export default Proyectos