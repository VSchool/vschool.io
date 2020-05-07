import React from "react"
import styled from "styled-components"
import { black } from "@vschool/lotus"

const PreviewContainer = styled.div``

const PreviewImage = styled.div`
    width: 100%;
    height: 101px;
    position: relative;
    background: url() 50% 50% no-repeat;
    background-image: ${({ img }) => `url(${img})`};
    background-size: cover;
    background-clip: content-box;

    &:before {
        display: block;
        content: "";
        padding-top: 75%;
    }
`

const TagAndDateContainer = styled.div``

const Tag = styled.div``

const PublishedDate = styled.p`
    font-family: "aktiv-grotesk-extended";
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.5px;
    margin-top: 16px;
`

const Title = styled.h2`
    font-family: "aktiv-grotesk";
    font-weight: 800;
    line-height: 26px;
    color: ${black};
    margin-top: 8px;
`

const Description = styled.p``

const Excerpt = styled.p``

export default function PostPreview(props) {
    console.log(props)
    const {
        published_at,
        slug,
        title,
        url,
        feature_image,
        excerpt,
        authors: { name, profile_image, slug: authorSlug },
    } = props
    return (
        <PreviewContainer>
            <PreviewImage img={feature_image} />
            <TagAndDateContainer>
                <Tag></Tag>
                <PublishedDate>{published_at}</PublishedDate>
            </TagAndDateContainer>
            <Title>{title}</Title>
            <Excerpt>{excerpt}</Excerpt>
        </PreviewContainer>
    )
}
