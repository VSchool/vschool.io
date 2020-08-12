import React, { useState, useEffect, useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import PostPreview from "./PostPreview.js"
import TopPostPreview from "./TopPostPreview.js"
import LearnCodeOrDesign from "./LearnCodeOrDesign.js"
import SubscribeBanner from "./SubscribeBanner.js"
import { BlogFilterContext } from "./context/BlogFilterProvider.js"
import { useBlogFilter } from "./utils/useBlogFilter"

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 96px;
    padding-top: 64px;
`

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    grid-gap: 16px;
    width: 100%;
    max-width: 500px;
    padding: 0 16px;

    @media (min-width: 400px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr;
        max-width: 1080px;
        grid-gap: 24px;
    }
`

const SecondGridContainer = styled(GridContainer)``

const InfiniteGridContainer = styled(GridContainer)``

export default function BlogList(props) {
    const data = useStaticQuery(graphql`
        {
            allGhostPost(sort: { fields: published_at, order: DESC }) {
                edges {
                    node {
                        title
                        slug
                        published_at(formatString: "MMMM DD, YYYY")
                        feature_image
                        url
                        excerpt
                        primary_tag {
                            name
                            slug
                            id
                            description
                        }
                        featured
                        primary_author {
                            slug
                            name
                            profile_image
                            cover_image
                        }
                    }
                }
            }
        }
    `)

    const { blogFilter } = useContext(BlogFilterContext)

    // Drill down into the `node` property on each post
    // so we don't have to deal with it elsewhere
    const posts = data.allGhostPost.edges.map(post => post.node)
    // console.log(posts)
    const currentPosts = posts.filter(post => {
        return blogFilter === "all"
            ? true
            : post.primary_tag.slug === blogFilter
    })

    const featured =
        blogFilter === "all"
            ? posts.find(post => post.featured)
            : currentPosts[0]
    console.log(featured)

    const currentPostsWithoutFeatured = currentPosts.filter(
        post => post.id !== featured.id
    )
    console.log(currentPostsWithoutFeatured)

    const {
        codeStartDate,
        designStartDate,
        learnHeader,
        learnBtnText,
        learnCodeLink,
        learnDesignLink,
        nextCodeSession,
        nextDesignSession,
        subscribeBtnText,
        subscribeHeader,
    } = props

    return (
        <PageContainer>
            <GridContainer>
                {/* 
                Currently, this is set up to feature the most recent blog post
                Soon, we will want to feature the most recent blog post with the
                "featured" tag included
             */}
                <TopPostPreview {...featured} />
                {currentPostsWithoutFeatured.slice(1, 7).map(post => (
                    <PostPreview key={post.id} {...post} />
                ))}
            </GridContainer>
            <LearnCodeOrDesign
                header={learnHeader}
                learnBtnText={learnBtnText}
                codeStartDate={codeStartDate}
                designStartDate={designStartDate}
                learnCodeLink={learnCodeLink}
                learnDesignLink={learnDesignLink}
                nextCodeSession={nextCodeSession}
                nextDesignSession={nextDesignSession}
            />
            <GridContainer>
                {currentPostsWithoutFeatured.slice(7, 13).map(post => (
                    <PostPreview key={post.id} {...post} />
                ))}
            </GridContainer>
            <SubscribeBanner
                header={subscribeHeader}
                btnText={subscribeBtnText}
            />
            <GridContainer>
                {currentPostsWithoutFeatured.slice(13).map(post => (
                    <PostPreview key={post.id} {...post} />
                ))}
            </GridContainer>
        </PageContainer>
    )
}
