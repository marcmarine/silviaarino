import React from "react"
import Posts from '../components/posts'
import SEO from '../components/seo'


const Index = props => {
  return (
    <>
      <SEO title="Silvia Ariño" />
      <p 
        style={{ 
          fontSize: '3.5vh',
          marginTop: '20vh',
          paddingLeft: '10vw'
        }}
      >
        Continúo envolviendo lo innecesario.<br/>
        Pero mis palabras torcidas, mis jadeos<br/>
        no destapan el calendario.
      </p>
      {/* <Posts/> */}
    </>
  )
}

export default Index