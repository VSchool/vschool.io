/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
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
            allPrismicScholarshipPage(
                filter: { data: { active: { eq: true } } }
            ) {
                edges {
                    node {
                        uid
                        data {
                            scholarship_name {
                                text
                            }
                        }
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

    // Create pages for each Ghost post
    const postTemplate = path.resolve(`./src/templates/post.js`)
    const blogPosts = result.data.allGhostPost.edges
    blogPosts.forEach(({ node }) => {
        node.url = `/blog/${node.slug}/`
        actions.createPage({
            path: node.url,
            component: postTemplate,
            context: {
                slug: node.slug,
            },
        })
    })

    // Create pages for each scholarship page
    const scholarshipTemplate = path.resolve(`./src/templates/scholarship.js`)
    const scholarshipPages = result.data.allPrismicScholarshipPage.edges
    scholarshipPages.forEach(({ node }) => {
        node.url = `/scholarships/${node.uid}/`
        actions.createPage({
            path: node.url,
            component: scholarshipTemplate,
            context: {
                uid: node.uid,
                name: node.data.scholarship_name.text,
            },
        })
    })

    // Redirects. These don't seem to be working locally (even using gatsby build + serve),
    // but once they're deployed on Netlify they work fine
    actions.createRedirect({
        fromPath: "/fsjs",
        toPath: "/development",
        isPermanent: true,
        force: true,
    })

    actions.createRedirect({
        fromPath: "/book-a-time",
        toPath: "https://calendly.com/v-school/apply",
        isPermanent: true,
        force: true,
    })

    actions.createRedirect({
        fromPath: "/adobe",
        toPath: "/",
        isPermanent: true,
        force: true,
    })

    actions.createRedirect({
        fromPath: "/paylater",
        toPath: "/admissions",
        isPermanent: true,
        force: true,
    })

    actions.createRedirect({
        fromPath: "/gibill",
        toPath: "/veterans",
        isPermanent: true,
        force: true,
    })

    actions.createRedirect({
        fromPath: "/free-course-react",
        toPath: "/bootcamp-primer",
        isPermanent: true,
        force: true,
    })
}
