import React from "react"
import styled from "styled-components"
import PostPreview from "./PostPreview.js"
import TopPostPreview from "./TopPostPreview.js"

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 96px;
`

const GridContainer = styled.div`
    padding: 0 16px;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    grid-gap: 16px;
    width: 100%;
    max-width: 600px;

    @media (min-width: 400px) {
        grid-template-columns: 1fr 1fr;
    }

    @media(min-width: 1200px){
        grid-template-columns: 1fr 1fr 1fr;
        max-width: 1080px;
        grid-gap: 24px;
    }
`

export default function BlogList(props) {
    const { posts } = props
    return (
        <PageContainer>
            <GridContainer>
                <TopPostPreview {...posts[0].node} />
                {posts.slice(1).map(({ node }) => (
                    <PostPreview key={node.id} {...node} />
                ))}
            </GridContainer>
        </PageContainer>
    )
}