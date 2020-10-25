import React, { useState } from "react"
import { Link } from "gatsby"
import tw, { styled } from 'twin.macro'
import { RoughNotation } from "react-rough-notation";

const Wrapper = styled.nav`
  ${tw`flex relative sm:p-0 overflow-x-auto overflow-y-hidden w-full`};
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
`

const StyledLink = styled(Link)`
  ${tw`pr-5 pt-4 pb-4`}
  &:first-of-type {
    ${tw`pl-5`}
  }
`

const Menu = ({ isHome }) => {
  const [active, setActive] = useState(null)
  const items = [
    'Intervenciones',
    'Proyectos',
    'Acciones',
    'Palabras',
    'Bio'
  ]
  return (
  <Wrapper>
    {isHome && <StyledLink to="/">/</StyledLink>}
    {items.map((item, index) => (
        <StyledLink 
          key={item}
          to={`/${item.toLowerCase()}`}
          onClick={() => setActive(index)}
        >
          <RoughNotation 
            type="underline" 
            color="grey" 
            show={active === index && isHome}
            animationDuration={200}
          >
            {item}
          </RoughNotation>
          
        </StyledLink>
    ))}
  </Wrapper>
  )
}

export default Menu
