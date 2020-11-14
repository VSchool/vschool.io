import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { gray, black } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.lightest};
    padding-bottom: 96px;
    justify-content: center;

    @media (min-width: 600px) {
        padding-left: 32px;
        padding-right: 32px;
    }

    @media (min-width: 840px) {
        padding-bottom: 96px;
    }

    @media (min-width: 1200px) {
        flex-direction: row;
    }
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 366px;

    @media (min-width: 1200px) {
        max-width: 316px;
        align-items: flex-start;
        margin-right: 122px;
    }
`

const Header = styled.h2`
    color: ${black};
    font-weight: 900;
    font-size: 32px;
    line-height: 38px;

    @media (min-width: 1200px) {
        font-size: 44px;
        line-height: 48px;
    }
`

const Info = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${gray.darker};
    margin-top: 16px;

    @media (min-width: 1200px) {
        margin-top: 32px;
        font-size: 16px;
        line-height: 24px;
        max-width: 316px;
    }
`

const Image = styled.img`
    width: 100%;
    max-width: 377px;
    margin-top: 48px;

    @media (min-width: 1200px) {
        max-width: 585px;
    }
`

export default function ResponsiveIndustry() {
    const data = useStaticQuery(graphql`
        {
            prismicResponsiveLearning {
                data {
                    industry_header {
                        text
                    }
                    industry_image {
                        url
                    }
                    industry_info {
                        text
                    }
                }
            }
        }
    `)

    const {
        industry_header: { text: industryHeader },
        industry_image: { url: industryImg },
        industry_info: { text: industryInfo }
    } = data.prismicResponsiveLearning.data

    return (
        <Container>
            <TextContainer>
                <Header>{industryHeader}</Header>
                <Info>{industryInfo}</Info>
            </TextContainer>
            <Image src={industryImg} />
        </Container>
    )
}
