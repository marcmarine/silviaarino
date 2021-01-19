import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Media from './media'

const GlobalScopeComponents = {
  img: Media,
  p: props => <p className="mb-3" {...props} />
}

export const MDXWrapper = (props) => {
  return (
    <MDXProvider {...props} components={{ ...GlobalScopeComponents }}>
      {props.children}
    </MDXProvider>
  )
}