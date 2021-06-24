import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { gray, blue } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.lighter};
    padding: 64px 40px;

    @media (min-width: 800px) {
        padding: 96px 80px;
    }
`

const Title = styled.h1`
    font-weight: 900;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    color: ${gray.darkest};
    padding-bottom: 8px;

    @media (min-width: 800px) {
        font-size: 44px;
        line-height: 48px;
        padding-bottom: 24px;
    }
`

const Subtitle = styled.p`
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: ${gray.darker};
    padding-bottom: 64px;
    max-width: 850px;

    @media (min-width: 800px) {
        font-size: 20px;
        line-height: 32px;
    }
`

const SectionContainer = styled.div`
    max-width: 1200px;
`

const Section = styled.div`
    display: block;

    @media (min-width: 800px) {
        display: flex;
        flex-direction: row-reverse;
    }
`

const TextSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 64px;

    @media (min-width: 800px) {
        padding-bottom: 0;
    }
`

const SectionTitle = styled.h4`
    font-weight: 800;
    font-size: 24px;
    line-height: 32px;
    color: ${gray.darkest};
    padding: 16px 0;

    @media (min-width: 800px) {
        font-size: 32px;
        line-height: 40px;
    }
`

const SectionParagraph = styled.p`
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: ${gray.darker};
`

const SectionImage = styled.img`
    width: 100%;
    max-width: 80px;
`

const Image = styled.img`
    width: 100%;
    max-width: 600px;
`

const Next = () => {
    const data = useStaticQuery(graphql`
        {
            prismicPrecourseCommunitySuccess {
                data {
                    next_sections {
                        section_logo {
                            alt
                            url
                        }
                        section_number {
                            alt
                            url
                        }
                        section_subtitle {
                            text
                        }
                        section_title {
                            text
                        }
                    }
                    next_subtitle {
                        text
                    }
                    next_title {
                        text
                    }
                }
            }
        }
    `)

    const {
        next_sections,
        next_subtitle: { text: subtitle },
        next_title: { text: title },
    } = data.prismicPrecourseCommunitySuccess.data

    const mappedSections = next_sections.map(
        (
            {
                section_logo: { alt: logoAlt, url: logoUrl },
                section_number: { alt: numAlt, url: numUrl },
                section_subtitle: { text: sectionSubtitle },
                section_title: { text: sectionTitle },
            },
            i
        ) => (
            <Section style={{ flexDirection: i % 2 !== 0 && "row" }}>
                <Image src={logoUrl} alt={logoAlt} />
                <TextSection>
                    <SectionImage src={numUrl} alt={numAlt} />
                    <SectionTitle>{sectionTitle}</SectionTitle>
                    <SectionParagraph>{sectionSubtitle}</SectionParagraph>
                </TextSection>
            </Section>
        )
    )

    return (
        <Container>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <SectionContainer>{mappedSections}</SectionContainer>
        </Container>
    )
}

export default Next
