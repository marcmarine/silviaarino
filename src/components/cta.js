import React from 'react';
import { Link } from 'gatsby'
import tw, { styled } from 'twin.macro'
import { keyframes } from '@emotion/core'

const marquee = keyframes`
  0% {
    left: 0
  }
  100% {
    left: -100%;
  }
`

const  Marquee = styled.span`
  ${tw`pt-4 fixed bottom-0 w-full pointer-events-none`};
  // backdrop-filter: blur(4px);
  background-color: black;
  background-blend-mode: screen;
  color: white;
  height: 35px;
  > div {
    display: flex;
    width: 200%;
    position: absolute;
    animation: ${marquee} 11s linear infinite
  }
  span {
    ${tw`w-1/4 md:w-1/6`}
    float: left;
    text-transform: uppercase;
    &:nth-child(2n) {
      // text-decoration: underline;
    }
    &:nth-child(n+5) {
      ${tw`hidden md:block`}
    }
  }
`

const CTA = () => {
  let textos = [];
  for (var i = 0; i < 12; i++) {
    textos.push('En construcción')
  }
  return (
    <Marquee to="/">
      <div>
        {textos.map((texto, index) => (
          <span key={index}>{texto}</span>
        ))}
      </div>
    </Marquee>
  )
}
export default CTA