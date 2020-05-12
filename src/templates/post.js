import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import { black, gray, blue } from "@vschool/lotus"

const PageContainer = styled.div`
    padding: 18px;

    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${gray.lighter};

    @media (min-width: 1200px) {
        padding: 0 264px;
    }
`

const PostBodyContainer = styled.section`
    width: 100%;
    max-width: 672px;
    display: flex;
    flex-direction: column;
    padding-bottom: 64px;

    & figure {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: ${gray.lighter};
        padding: 24px;
        margin: 16px 0;
    }

    & figcaption {
        font-family: "aktiv-grotesk-extended";
        font-size: 12px;
        margin: 8px;
    }

    & img {
        max-width: 100%;
        max-height: 400px;
    }
    & p {
        font-family: "aktiv-grotesk";
        font-size: 16px;
        margin: 8px 0;
        line-height: 24px;
    }
    & a {
        font-family: "aktiv-grotesk-extended";
        color: ${blue.base};
        display: block;
        margin-left: 8px;
        text-decoration: none;
    }

    & a::before {
        content: "- ";
    }
`

const PostTitle = styled.h1`
    font-family: "aktiv-grotesk";
    font-size: 32px;
    font-weight: 800;
    line-height: 38px;
    color: ${black};
    align-self: center;
    width: 100%;
    max-width: 672px;
    font-size: 32px;
    letter-spacing: 0.5px;
    line-height: 26px;
    padding: 56px 0;
`

function Post({ data }) {
    const post = data.ghostPost
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
