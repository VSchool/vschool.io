import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { gray } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.lighter};
    padding: 350px 24px 96px;

    @media (min-width: 800px) {
      padding: 350px 80px 96px;
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
    @media (min-width: 1000px){
      max-width: 1264px;
    }
`

const Section = styled.div`
  display: block;
	padding: 40px 0;

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
	width: 100%;
	/* text-align: center; */

    @media (min-width: 800px) {
      padding-bottom: 0;
		  width: 50%;
		/* text-align: left; */
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

const ImageContainer = styled.div`
	width: 100%;
  margin: auto;
  text-align: center;
	padding-bottom: 40px;

	@media (min-width: 800px) {
    width: 50%;
		padding-bottom: 0;
  }
`

const Image = styled.img`
  max-width: 307px;
  max-height: 205px;
	width: 100%;
`

const Steps = () => {
  const data = useStaticQuery(graphql`
    {
      prismicPrecoursePartners {
        data {
          success_middle_title {
            text
          }
          success_middle_steps {
            step_description {
              text
            }
            step_logo {
              alt
              url
            }
            step_num {
              alt
              url
            }
            step_title {
              text
            }
          }
          success_middle_description {
            text
          }
        }
      }
    }
  `)

  const {
    success_middle_steps,
    success_middle_description: { text: subtitle },
    success_middle_title: { text: title },
  } = data.prismicPrecoursePartners.data

  const mappedSections = success_middle_steps.map(
    (
        {
            step_logo: { alt: logoAlt, url: logoUrl },
            step_num: { alt: numAlt, url: numUrl },
            step_description: { text: sectionSubtitle },
            step_title: { text: sectionTitle },
        },
        i
    ) => (
        <Section style={{ flexDirection: i % 2 !== 0 && "row" }}>
            <ImageContainer>
              <Image src={logoUrl} alt={logoAlt} />
            </ImageContainer>
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

export default Steps
