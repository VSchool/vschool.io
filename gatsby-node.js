/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
exports.createPages = async ({ graphql, actions, reporter }) => {
    const postTemplate = path.resolve(`./src/templates/post.js`)
    // Query Ghost data
    const result = await graphql(`
        {
            allGhostPost(sort: { order: ASC, fields: published_at }) {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)
    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }
    if (!result.data.allGhostPost) {
        return
    }

    // Redirects. These don't seem to be working locally (even using gatsby build + serve), 
    // but once they're deployed on Netlify they work fine
    actions.createRedirect({
        fromPath: "/fsjs",
        toPath: "/development",
        isPermanent: true,
        force: true
    })

    actions.createRedirect({
        fromPath: "/book-a-time",
        toPath: "https://calendly.com/v-school/apply",
        isPermanent: true,
        force: true
    })
    
    actions.createRedirect({
        fromPath: "/adobe",
        toPath: "/",
        isPermanent: true,
        force: true
    })
    
    actions.createRedirect({
        fromPath: "/paylater",
        toPath: "/admissions",
        isPermanent: true,
        force: true
    })
    
    actions.createRedirect({
        fromPath: "/gibill",
        toPath: "/veterans",
        isPermanent: true,
        force: true
    })

    // Create pages for each Ghost post
    const items = result.data.allGhostPost.edges
    items.forEach(({ node }) => {
        node.url = `/blog/${node.slug}/`
        actions.createPage({
            path: node.url,
            component: postTemplate,
            context: {
                slug: node.slug,
            },
        })
    })
}
