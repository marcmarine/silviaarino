import React from "react"
import Posts from '../components/posts'
import SEO from '../components/seo'

import imagen from './../images/presentacion.jpg'

const Index = props => {
  return (
    <>
      <SEO title="Silvia Ariño" />
      <h1 className="text-3xl font-medium mb-40 uppercase">Silvia Ariño</h1>
      <Posts />
      <img className="absolute w-80 hidden md:block md:right-1/4 md:top-1/2" src={imagen} alt="Imágen de presentación" />
    </>
  )
}

export default Index