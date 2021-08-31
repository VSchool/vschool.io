import React from "react"
import styled from "styled-components"
import { gray, blue } from "@vschool/lotus"
import { useStaticQuery, graphql } from "gatsby"

const Container = styled.section`
    background-color: ${gray.lighter};
    padding: 250px 16px 80px;

    @media (min-width: 800px) {
        padding: 96px 80px;
    }
`

const InfoTitle = styled.h1`
    font-weight: 900;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    color: ${gray.darkest};
    padding-bottom: 16px;

    @media (min-width: 800px) {
        font-size: 44px;
        line-height: 48px;
        padding-bottom: 24px;
    }
`

const InfoSub = styled.p`
    font-family: "aktiv-grotesk-extended";
    font-weight: 800;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: ${blue.base};
    padding-bottom: 64px;

    @media (min-width: 800px) {
        font-size: 16px;
        line-height: 24px;
        padding-bottom: 96px;
    }
`

const InfoContainer = styled.div`
    @media (min-width: 800px) {
        display: flex;
        gap: 20px;
        max-width: 1200px;
    }
`
const Paragraph = styled.p`
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: ${gray.darker};
    padding-bottom: 64px;

    @media (min-width: 800px) {
        font-size: 20px;
        line-height: 32px;
        padding-bottom: 80px;
    }
`
const Title = styled.p`
    font-weight: 800;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: ${gray.darkest};
    padding-bottom: 8px;

    @media (min-width: 800px) {
        font-size: 20px;
        line-height: 24px;
        padding-bottom: 12px;
        min-height: 60px;
    }

    @media (min-width: 1200px) {
        min-height: 0;
    }
`

const Logo = styled.img`
    max-width: 88px;
    display: block;
    margin: auto;
    padding-bottom: 24px;
`

const Info = () => {
  const data = useStaticQuery(graphql`
    {
      prismicPrecoursePartners {
        data {
          series_description {
            text
          }
          series_info {
            info_description {
              text
            }
            info_image {
              alt
              url
            }
            info_title {
              text
            }
          }
          series_title {
            text
          }
        }
      }
    }
  `)

    const {
        series_info,
        series_title: { text: seriesTitle },
        series_description: { text: seriesDescription },
    } = data.prismicPrecoursePartners.data

    const mappedInfo = series_info.map(
        ({
            info_image: { alt: logoAlt, url: logoUrl },
            info_description: { text: boxPara },
            info_title: { text: boxTitle },
        }) => (
            <div key={boxTitle}>
                <Logo src={logoUrl} alt={logoAlt} />
                <Title>{boxTitle}</Title>
                <Paragraph>{boxPara}</Paragraph>
            </div>
        )
    )

    return (
        <Container>
            <InfoTitle>{seriesTitle}</InfoTitle>
            <InfoSub>{seriesDescription}</InfoSub>
            <InfoContainer>{mappedInfo}</InfoContainer>
        </Container>
    )
}

export default Info
