import React from "react"
import styled from "styled-components"
import { gray, blue } from "@vschool/lotus"
import { useStaticQuery, graphql } from "gatsby"

const Container = styled.section`
    background-color: ${gray.lighter};
    padding: 250px 40px 80px;

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
        font-size: 16px;
        line-height: 24px;
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
            prismicPrecourseCommunitiesPageSharedData {
                data {
                    info_title {
                        text
                    }
                    info_subtitle {
                        text
                    }
                    info_box {
                        box_title {
                            text
                        }
                        box_paragraph {
                            text
                        }
                        box_logo {
                            alt
                            url
                        }
                    }
                }
            }
        }
    `)
    const {
        info_box,
        info_title: { text: infoTitle },
        info_subtitle: { text: infoSub },
    } = data.prismicPrecourseCommunitiesPageSharedData.data

    const mappedBoxes = info_box.map(
        ({
            box_logo: { alt: logoAlt, url: logoUrl },
            box_paragraph: { text: boxPara },
            box_title: { text: boxTitle },
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
            <InfoTitle>{infoTitle}</InfoTitle>
            <InfoSub>{infoSub}</InfoSub>
            <InfoContainer>{mappedBoxes}</InfoContainer>
        </Container>
    )
}

export default Info
