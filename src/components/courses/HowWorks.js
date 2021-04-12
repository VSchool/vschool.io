import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { blue, gray } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.lighter};
    padding-top: 0;
    padding-bottom: 74px;

    @media (min-width: 800px) {
        padding-top: 0;
    }
`

const Title = styled.h1`
    font-size: 28px;
    line-height: 40px;
    text-align: center;
    color: ${gray.darkest};
    padding-bottom: 62px;
`

const Image = styled.img`
    width: 100%;
`

const Subtitle = styled.h3`
    padding: 30px 0 20px;
    font-weight: 800;
    font-size: 24px;
    line-height: 32px;
    color: ${gray.darkest};
`

const Text = styled.p`
    font-size: 16px;
    line-height: 24px;
    color: ${gray.darker};
`

const HowWorks = () => {
    const data = useStaticQuery(graphql`
        {
            prismicCoursePageSharedData {
                data {
                    how_works_image {
                        alt
                        url
                    }
                    how_works_subtitle {
                        text
                    }
                    how_works_text {
                        text
                    }
                    how_works_title {
                        text
                    }
                }
            }
        }
    `)

    const {
        how_works_image: { alt: howAlt, url: howImg },
        how_works_subtitle: { text: howSubTitle },
        how_works_text: { text: howText },
        how_works_title: { text: howTitle },
    } = data.prismicCoursePageSharedData.data

    return (
        <Container>
            <Title>{howTitle}</Title>
            <Image src={howImg} alt={howAlt} />
            <Subtitle>{howSubTitle}</Subtitle>
            <Text>{howText}</Text>
        </Container>
    )
}

export default HowWorks
