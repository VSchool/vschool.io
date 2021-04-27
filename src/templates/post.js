import React, { useEffect } from "react"
import Prism from "prismjs"
import { graphql } from "gatsby"
import styled from "styled-components"
import BlogLayout from "../components/blog/blogLayout"
import BackButton from "../components/blog/blogPage/BackButton.js"
import BlogNav from "../components/blog/blogNav"
import { black, gray, blue } from "@vschool/lotus"
import { getColorFromTag } from "../components/blog/utils"
import CTAFooter from "../components/blog/blogPage/CTAFooter.js"
import { BlogFilterContext } from "../components/blog/context/BlogFilterProvider.js"

const PageContainer = styled.div`
    padding: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${gray.lightest};

    @media (min-width: 1200px) {
        padding: 0 264px;
    }
`

const PostBodyContainer = styled.section`
    width: 100%;
    max-width: 672px;
    padding: 0;
    padding-bottom: 64px;
    font-family: "aktiv-grotesk";
    background-color: ${gray.lightest};

    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        align-self: flex-start;
    }

    h2 {
        margin-top: 48px;
        margin-bottom: 32px;
    }

    h3 {
        margin-top: 32px;
        margin-bottom: 8px;
    }

    li {
        margin: 5px 0;
    }

    blockquote {
        font-size: 18px;
        line-height: 28px;
        font-style: italic;
        font-family: "aktiv-grotesk-extended";
        font-weight: 900;
        margin-top: 48px;
        margin-bottom: 48px;

        @media (min-width: 600px) {
            letter-spacing: 0.375px;
            font-size: 24px;
        }
    }

    & figure {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: ${gray.lightest};
        padding: 24px;
        position: relative;
        width: 100%;
        overflow: hidden;
        padding-top: 56.25%; /* 16:9 Aspect Ratio */

        iframe {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            width: 100%;
            height: 100%;
            border: none;
        }

        @media (min-width: 1000px) {
            margin: 16px 0;
        }
    }

    & figcaption {
        font-family: "aktiv-grotesk-extended";
        font-size: 12px;
        margin: 16px;
    }

    & img {
        max-height: 400px;
        max-width: 100%;
    }
    & img:nth-child(1) {
        -webkit-box-shadow: 4px 4px 0px 0px ${({ bgColor }) => bgColor};
        -moz-box-shadow: 4px 4px 0px 0px ${({ bgColor }) => bgColor};
        box-shadow: 4px 4px 0px 0px ${({ bgColor }) => bgColor};
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
        text-decoration: none;
    }

`

const DetailsContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    max-width: 672px;

    @media (min-width: 1000px) {
        flex-direction: row-reverse;
        justify-content: space-between;
    }
`

const TagAndDateContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    max-width: 672px;

    @media (min-width: 1000px) {
        justify-content: flex-end;
    }
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
    font-weight: 600;
    color: ${gray.darker};
    margin-left: 16px;
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
    padding: 16px 0;

    @media (min-width: 1000px) {
        font-size: 44px;
        line-height: 48px;
        padding-top: 32px;
    }
`

const AuthorContainer = styled.div`
    display: flex;
    margin-top: 16px;
    width: 100%;
    max-width: 672px;
    padding-bottom: 16px;
`

const AuthorImage = styled.img`
    width: 32px;
    height: 32px;
    object-fit: cover;
`

const FeatureImage = styled.img`
    width: 100%;
    max-width: 672px;
    max-height: 400px;
    object-fit: cover;
`

const Name = styled.p`
    font-size: 12px;
    line-height: 16px;
    font-family: "aktiv-grotesk-extended";
    font-weight: 500;
    letter-spacing: 0.5px;
    margin-left: 8px;
    color: ${black};
`

function Post({ data }) {
    useEffect(() => {
        // call the highlightAll() function to style our code blocks
        Prism.highlightAll()
    })

    const post = data.ghostPost
    const {
        title,
        published_at,
        primary_tag,
        authors,
        url,
        feature_image,
    } = post

    const postColor = getColorFromTag(
        primary_tag ? primary_tag.name.toLowerCase() : ""
    )
    return (
        <BlogLayout>
            <BlogFilterContext.Consumer>
                {value => (
                    <>
                        <BlogNav />
                        <PageContainer>
                            <BackButton blogFilter={value.blogFilter} />
                            <PostTitle>{title}</PostTitle>
                            <DetailsContainer>
                                <TagAndDateContainer>
                                    <Tag bgColor={postColor}>
                                        {primary_tag && primary_tag.name}
                                    </Tag>
                                    <PublishedDate>
                                        {published_at}
                                    </PublishedDate>
                                </TagAndDateContainer>
                                <AuthorContainer>
                                    <AuthorImage
                                        src={authors[0].profile_image}
                                    />
                                    <Name>{authors[0].name}</Name>
                                </AuthorContainer>
                            </DetailsContainer>
                            <FeatureImage src={feature_image} />
                            <PostBodyContainer
                                bgColor={postColor}
                                dangerouslySetInnerHTML={{
                                    __html: post.html,
                                }}
                            />
                            <CTAFooter url={url} />
                        </PageContainer>
                    </>
                )}
            </BlogFilterContext.Consumer>
        </BlogLayout>
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
            published_at(formatString: "MMMM DD, YYYY")
            page
            primary_tag {
                name
            }
            authors {
                slug
                name
                profile_image
                cover_image
            }
        }
    }
`
