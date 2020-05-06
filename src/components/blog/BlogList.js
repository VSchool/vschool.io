import React from "react"
import styled from "styled-components"
import PostPreview from "./PostPreview.js"
import TopPostPreview from "./TopPostPreview.js"

const PageContainer = styled.div`
    padding: 0 16px;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;

    @media(min-width: 400px){
        grid-template-columns: 1fr 1fr;
    }
`

export default function BlogList(props) {
    const { posts } = props
    return (
        <PageContainer>
            <TopPostPreview {...posts[0].node} />
            {posts.slice(1).map(({ node }) => (
                <PostPreview key={node.id} {...node} />
            ))}
        </PageContainer>
    )
}
