import React from "react"
import styled from "styled-components"
import PostPreview from "./PostPreview.js"

const PageContainer = styled.div`
    padding: 0 16px;
`

export default function BlogList(props) {
    const { posts } = props
    return (
        <PageContainer>
            <h1>This is a list of blogs</h1>
            {posts.map(({ node }) => (
                <PostPreview key={node.id} {...node} />
            ))}
        </PageContainer>
    )
}
