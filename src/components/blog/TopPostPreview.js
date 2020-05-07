import React from "react"
import styled from "styled-components"

const TopPostContainer = styled.div`
    grid-column: 1 / -1;
`

const TopPostImage = styled.img`
    width: 100%;
    max-width: 380px;
`

const TagAndDate = styled.div``

const Tag = styled.div``

const PublishedDate = styled.p``

const TopPostTitle = styled.h1``

const PostPreview = styled.p``

const AuthorContainer = styled.div``

const AuthorImg = styled.img``

const AuthorPosition = styled.p``

export default function TopPostPreview(props) {
    const {
        published_at,
        slug,
        title,
        url,
        feature_image,
        authors: { name, profile_image, slug: authorSlug },
    } = props
    return (
        <TopPostContainer>
            <TopPostImage src={feature_image} />
            <TagAndDate>
                <Tag></Tag>
                <PublishedDate>{published_at}</PublishedDate>
            </TagAndDate>
            <TopPostTitle>{title}</TopPostTitle>
            <PostPreview></PostPreview>

        </TopPostContainer>
    )
}
