import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import { black } from "@vschool/lotus"

const PageContainer = styled.div`
    padding: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(min-width: 1200px){
        padding: 0 264px;
    }
`

const PostBodyContainer = styled.section`
    width: 100%;
    max-width: 672px;
   
    & img {
        max-width: 100%;
    }
    & p {
        font-family: "aktiv-grotesk";
    }
`

const PostTitle = styled.h1`
    font-family: "aktiv-grotesk";
    font-size: 32px;
    line-height: 38px;
    color: ${black};
    align-self: flex-start;
`

function Post({ data }) {
    const post = data.ghostPost
    console.log(data)
    return (
        <Layout>
            <PageContainer>
                <PostTitle>{post.title}</PostTitle>
                <PostBodyContainer
                    dangerouslySetInnerHTML={{ __html: post.html }}
                />
            </PageContainer>
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
