import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { BlogNav, BlogList } from "../../components/blog"
import { graphql } from "gatsby"

export default function Blog({ data }) {
    const { edges } = data.allGhostPost
    return (
        <Layout>
            <SEO title="Blog" />
            <BlogNav />
            <BlogList posts={edges} />
        </Layout>
    )
}

export const query = graphql`
    {
        allGhostPost {
            edges {
                node {
                    title
                    slug
                    published_at(formatString: "MMMM DD, YYYY")
                    feature_image
                    url
                    excerpt
                    primary_tag {
                        name
                      }
                    authors {
                        slug
                        name
                        profile_image
                        cover_image
                    }
                }
            }
        }
    }
`

// Insert a page query here to get a list of the blogs.
// Probably want to sort them by ascending date
// Then map over them with their URLs to Link to them.
