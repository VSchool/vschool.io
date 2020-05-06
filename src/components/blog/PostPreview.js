import React from "react"
import styled from "styled-components"

const PreviewContainer = styled.div`

`

const PreviewImage = styled.img`
  width: 100%;
  max-width: 380px;
`

const TagAndDateContainer = styled.div`

`

const Tag = styled.div``

const PublishedDate = styled.p``

const Title = styled.h2``

const Description = styled.p``

export default function PostPreview(props) {
    console.log(props)
    const {
        published_at,
        slug,
        title,
        url,
        feature_image,
        authors: { name, profile_image, slug: authorSlug },
    } = props
    return (
        <PreviewContainer>
            <PreviewImage src={feature_image} />
            <TagAndDateContainer>
              <Tag></Tag>
              <PublishedDate>{published_at}</PublishedDate>
            </TagAndDateContainer>
            <Title>{title}</Title>
        </PreviewContainer>
    )
}
