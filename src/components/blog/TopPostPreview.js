import React from "react"
import styled from "styled-components"
import QueryLink from "../shared/QueryLink.js"
import { black } from "@vschool/lotus"
import { getColorFromTag } from "./utils"

const TopPostContainer = styled.div`
    grid-column: 1 / -1;
    width: 100%;
`

const ImageContainer = styled.div`
    position: relative;
    height: 217px;
    width: 100%;

    @media (min-width: 1200px) {
        height: 188px;
    }
`

const ImageBackground = styled.div`
    width: 99%;
    height: 214px;
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: ${({ bgColor }) => bgColor};
    z-index: 1;

    @media (min-width: 1200px) {
        height: 180px;
        width: 97%;
    }
`

const PreviewImage = styled.div`
    width: 99%;
    height: 214px;
    position: relative;
    background: url() 50% 50% no-repeat;
    background-image: ${({ img }) => `url(${img})`};
    background-size: cover;
    background-clip: content-box;
    left: 0;
    top: 0;
    z-index: 2;

    &:before {
        display: block;
        content: "";
        padding-top: 75%;
    }

    @media (min-width: 1200px) {
        height: 180px;
        width: 97%;
    }
`

const TagAndDateContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const Tag = styled.div`
    height: 24px;
    border-radius: 16px;
    background-color: ${({ bgColor }) => bgColor};
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    padding: 0 12px;
    margin-top: 16px;
    font-size: 10px;
    font-weight: 800;
    font-family: "aktiv-grotesk";
    text-transform: uppercase;
`

const PublishedDate = styled.p`
    font-family: "aktiv-grotesk-extended";
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.5px;
    margin-top: 16px;
`

const TopPostTitle = styled.h1``

const PostPreview = styled.p``

const StyledLink = styled(QueryLink)`
    text-decoration: none;
    color: ${black};
`

export default function TopPostPreview(props) {
    const {
        published_at,
        slug,
        title,
        url,
        feature_image,
        primary_tag,
        authors,
    } = props

    const postColor = getColorFromTag(primary_tag.name.toLowerCase())
    return (
        <TopPostContainer>
            <ImageContainer>
                <PreviewImage img={feature_image} />
                <ImageBackground bgColor={postColor} />
            </ImageContainer>
            <TagAndDateContainer>
                <Tag bgColor={postColor}>{primary_tag && primary_tag.name}</Tag>
                <PublishedDate>{published_at}</PublishedDate>
            </TagAndDateContainer>
            <TopPostTitle>{title}</TopPostTitle>
            <PostPreview></PostPreview>
        </TopPostContainer>
    )
}
