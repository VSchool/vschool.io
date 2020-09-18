import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { gray } from "@vschool/lotus"

const Container = styled.section`
    margin-top: -280px;
    overflow-x: hidden;
`

const Img = styled.img`
    margin-bottom: 64px;

    @media only screen and (min-width: 800px) {
        margin-bottom: 96px;
    }
`

const Paragraphs = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 840px) {
        flex-direction: row;
        justify-content: space-between;
        max-width: 1024px;
    }

    & > p {
        color: ${gray.darker};

        @media only screen and (min-width: 840px) {
            width: 48%;
        }
    }
`

export default function MainInfo() {
    const data = useStaticQuery(graphql`
        {
            prismicMotherCoders {
                data {
                    image {
                        url
                        alt
                    }
                    info_title {
                        text
                    }
                    info_paragraph {
                        html
                    }
                }
            }
        }
    `)

    const {
        image,
        info_title: { text: infoTitle },
        info_paragraph: { html: infoHtml },
    } = data.prismicMotherCoders.data

    return (
        <Container>
            <Img src={image.url} alt={image.alt} />
            <h2>{infoTitle}</h2>
            <Paragraphs dangerouslySetInnerHTML={{ __html: infoHtml }} />
        </Container>
    )
}
