import React from "react"
import styled from "styled-components"
import { black, gray } from "@vschool/lotus"
import { getColorFromTag } from "./utils"
import QueryLink from "../shared/QueryLink.js"
import AuthorBox from "./AuthorBox.js"

const PreviewContainer = styled.div``

const ImageContainer = styled.div`
    position: relative;
    height: 106px;
    width: 100%;

    @media (min-width: 1200px) {
        height: 188px;
    }
`

const ImageBackground = styled.div`
    width: 98%;
    height: 101px;
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
    width: 98%;
    height: 101px;
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
    flex-direction: column;
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

const Title = styled.h2`
    font-family: "aktiv-grotesk";
    font-weight: 800;
    line-height: 26px;
    color: ${black};
    margin-top: 8px;
    font-size: 20px;
`

const Excerpt = styled.p`
    font-family: "aktiv-grotesk";
    font-size: 14px;
    margin-top: 18px;
    line-height: 18px;
    color: ${gray.darker};
    height: 126px;
    position: relative;
    overflow: hidden;

    &::after {
        content: "";
        text-align: right;
        position: absolute;
        bottom: 0;
        right: 0;
        width: 70%;
        height: 18px;
        background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 1) 50%
        );
    }

    @media (min-width: 1200px) {
        font-size: 16px;
        line-height: 24px;

        &::after {
            height: 24px;
        }
    }
`

const StyledLink = styled(QueryLink)`
    text-decoration: none;
    color: ${black};
`

export default function PostPreview(props) {
    const {
        published_at,
        slug,
        title,
        url,
        feature_image,
        excerpt,
        primary_tag,
        authors,
    } = props
   

    const postColor = getColorFromTag(primary_tag.name.toLowerCase())
    return (
        <StyledLink to={`/blog/${slug}`}>
            <PreviewContainer>
                <ImageContainer>
                    <PreviewImage img={feature_image} />
                    <ImageBackground bgColor={postColor} />
                </ImageContainer>
                <TagAndDateContainer>
                    <Tag bgColor={postColor}>
                        {primary_tag && primary_tag.name}
                    </Tag>
                    <PublishedDate>{published_at}</PublishedDate>
                </TagAndDateContainer>
                <Title>{title}</Title>
                <Excerpt>{excerpt}</Excerpt>
                <AuthorBox {...authors[0]} />
            </PreviewContainer>
        </StyledLink>
    )
}
