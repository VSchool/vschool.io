import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

function BlogList(props) {
    return (
        <Layout>
            <SEO title="Blog" />
            <h1>This is a list of blogs</h1>
        </Layout>
    )
}

export default BlogList

// Insert a page query here to get a list of the blogs.
// Probably want to sort them by ascending date
// Then map over them with their URLs to Link to them.
