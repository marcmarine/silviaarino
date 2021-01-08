const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })
    const parent = getNode(node.parent)

    createNodeField({
      name: "slug",
      node,
      value: `${value}`,
    })

    createNodeField({
      name: `sourceName`,
      node,
      value: parent.sourceInstanceName
    })

  }
}

exports.createPages = ({ graphql, actions }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx(
              filter: { 
                fields: { sourceName: { eq: "posts" } } 
              }
            ) {
              edges {
                node {
                  id
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        // this is some boilerlate to handle errors
        if (result.errors) {
          console.error(result.errors)
          reject(result.errors)
        }
        // We'll call `createPage` for each result
        result.data.allMdx.edges.forEach(({ node }) => {
          createPage({
            // This is the slug we created before
            // (or `node.frontmatter.slug`)
            path: node.fields.slug,
            // This component will wrap our MDX content
            component: path.resolve(`./src/components/post.js`),
            // We can use the values in this context in
            // our page layout component
            context: { id: node.id },
          })
        })
      })
    )
  })
}