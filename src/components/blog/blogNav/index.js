import React, { useContext } from "react"
import styled, { css } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { gray, black } from "@vschool/lotus"
import { BlogFilterContext } from "../context/BlogFilterProvider.js"

const NavContainer = styled.nav`
    height: 48px;
    background-color: ${gray.light};
    position: sticky;
    top: 0;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 16px;
    box-shadow: 0 8px 8px -8px rgba(0, 0, 0, 0.2);
    overflow-x: scroll;
    overflow-y: hidden;
`

const FixedContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;

    @media (min-width: 1000px) {
        padding-left: 72px;
        padding-right: 72px;
    }
`

const Header = styled.h2`
    font-family: "aktiv-grotesk-extended";
    color: ${black};
    font-size: 24px;
    line-height: 28px;
    font-weight: 700;
    margin-right: auto;

    @media (min-width: 1000px) {
    }
`

const TagsList = styled.ul`
    display: flex;
    list-style: none;
    margin-left: 46px;
`

const Tag = styled.li`
    padding: 15px 8px;
    position: relative;
    cursor: pointer;

    @media (min-width: 600px) {
        padding: 15px 16px;
    }

    &:last-child {
        /* Offset the padding in the last item */
        margin-right: -16px;
    }

    /* Underline effect for active and hover states */
    &:hover {
        :after {
            content: "";
            display: block;
            width: calc(100% - 16px);
            border-bottom: 4px solid ${black};
            margin: 0 auto;
            position: absolute;
            bottom: 0;

            @media (min-width: 600px) {
                width: calc(100% - 32px);
            }
        }
    }

    ${props =>
        props.slug === props.blogFilter &&
        css`
            &:after {
                content: "";
                display: block;
                width: calc(100% - 16px);
                border-bottom: 4px solid ${black};
                margin: 0 auto;
                position: absolute;
                bottom: 0;

                @media (min-width: 600px) {
                    width: calc(100% - 32px);
                }
            }
        `}
`

export default function BlogNav(props) {
    const data = useStaticQuery(graphql`
        {
            allGhostTag(
                filter: { slug: { ne: "data-schema" } }
                sort: { fields: slug, order: ASC }
            ) {
                edges {
                    node {
                        id
                        name
                        slug
                    }
                }
            }
        }
    `)

    const { blogFilter, setBlogFilter } = useContext(BlogFilterContext)

    // drill into the `node` property for each one
    const tags = data.allGhostTag.edges
        .filter(item => item)
        .map(item => item.node)

    const tagComponents = tags.map(tag => (
        <Tag
            key={tag.id}
            blogFilter={blogFilter}
            slug={tag.slug}
            onClick={() => setBlogFilter(tag.slug)}
        >
            {tag.name}
        </Tag>
    ))
    tagComponents.unshift(
        <Tag
            key="all"
            blogFilter={blogFilter}
            slug="all"
            onClick={() => setBlogFilter("all")}
        >
            All
        </Tag>
    )
    return (
        <NavContainer>
            <FixedContainer>
                <Header>Blog</Header>
                <TagsList>{tagComponents}</TagsList>
            </FixedContainer>
        </NavContainer>
    )
}
