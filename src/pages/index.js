import React from "react"

import Layout from '../components/layout'
import Posts from '../components/posts'
// import Image from '../components/image'
import SEO from '../components/seo'


const Index = props => {
  return (
    <Layout location={props.location}>
      <SEO title="Silvia Ariño" />
      <p 
        style={{ 
          fontSize: '2vh',
          marginBottom: '3vw'
        }}
      >
        Continúo envolviendo lo innecesario.<br/>
        Pero mis palabras torcidas, mis jadeos<br/>
        no destapan el calendario.
      </p>
      <Posts/>
    </Layout>
  )
}

export default Index