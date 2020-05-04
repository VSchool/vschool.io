import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const PostBodyContainer = styled.section`
    padding: 50px;
    & img {
        max-width: 100%;
    }
`

function Post({ data }) {
    const post = data.ghostPost
    console.log(data)
    return (
        <Layout>
            <h1>{post.title}</h1>
            <PostBodyContainer
                dangerouslySetInnerHTML={{ __html: post.html }}
            />
        </Layout>
    )
}

export default Post
export const postQuery = graphql`
    query($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            title
            slug
            feature_image
            html
            reading_time
            title
            url
            updated_at
            published_at
            page
        }
    }
`