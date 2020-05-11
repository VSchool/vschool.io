import React from "react"
import styled from "styled-components"
import QueryLink from "../shared/QueryLink.js"
import { black, gray } from "@vschool/lotus"
import { getColorFromTag } from "./utils"
import AuthorBox from "./AuthorBox.js"

const TopPostContainer = styled.div`
    @media (min-width: 1200px) {
        display: flex;
    }
`

const InfoContainer = styled.div`
    width: 100%;

    @media (min-width: 1200px) {
        margin-left: 24px;
        width: 400px;
    }
`

const ImageContainer = styled.div`
    position: relative;
    height: 217px;
    width: 100%;

    @media (min-width: 1200px) {
        height: 384px;
        width: 680px;
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
        height: 378px;
        width: 99%;
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
        height: 378px;
        width: 99%;
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
    font-weight: 700;
    font-family: "aktiv-grotesk";
    text-transform: uppercase;
`

const PublishedDate = styled.p`
    font-family: "aktiv-grotesk-extended";
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.5px;
    margin-top: 16px;
    font-weight: 600;
`

const TopPostTitle = styled.h1`
    font-family: "aktiv-grotesk";
    font-size: 32px;
    line-height: 38px;
    color: ${black};
    margin-top: 16px;
    font-weight: 800;
`

const Excerpt = styled.p`
    font-family: "aktiv-grotesk";
    font-size: 16px;
    margin-top: 16px;
    line-height: 24px;
    font-weight: 500;
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
        height: 24px;
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
    grid-column: 1 / -1;
    width: 100%;
    border-bottom: 2px solid ${gray.base};
    padding-bottom: 32px;

    @media (min-width: 1200px) {
        grid-column: 1 / 4;
        padding-bottom: 55px;
    }
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
        excerpt,
    } = props

    const postColor = getColorFromTag(primary_tag ? primary_tag.name.toLowerCase() : "")
    return (
        <StyledLink to={`/blog/${slug}`}>
            <TopPostContainer>
                <ImageContainer>
                    <PreviewImage img={feature_image} />
                    <ImageBackground bgColor={postColor} />
                </ImageContainer>
                <InfoContainer>
                    <TagAndDateContainer>
                        <Tag bgColor={postColor}>
                            {primary_tag && primary_tag.name}
                        </Tag>
                        <PublishedDate>{published_at}</PublishedDate>
                    </TagAndDateContainer>
                    <TopPostTitle>{title}</TopPostTitle>
                    <Excerpt>{excerpt}</Excerpt>
                    <AuthorBox {...authors[0]} />
                </InfoContainer>
            </TopPostContainer>
        </StyledLink>
    )
}
