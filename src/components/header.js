import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import tw, { styled } from "twin.macro"

import Menu from './menu'

const Wrapper = styled.header`
  ${tw`flex flex-col fixed z-10 top-0 flex-wrap w-full`};
  transition: all 300ms cubic-bezier(0.39, 0.58, 0.57, 1);
  h1 {
    ${tw`p-5 pb-0`},
    transform: translateY(0);
    transition: all 600ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
  }
  ${props => props.isHome ? `
    top: -41px;
    h1 {
      transform: translateY(-100%);
    }
  ` : null}
`

const Header = ({ siteTitle, location }) => {
  const isHome = location.pathname !== "/"
  return (
    <Wrapper isHome={isHome}>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <Menu isHome={isHome}/>
    </Wrapper>
  )
} 

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
