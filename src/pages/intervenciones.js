import React from "react"
import SEO from '../components/seo'

import Posts from '../components/posts'

const Intervenciones = props => {
  return (
    <>
      <SEO title="Intervenciones" />
      <Posts filter="intervenciones"/>
    </>
  )
}

export default Intervenciones