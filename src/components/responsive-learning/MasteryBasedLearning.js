import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { gray, green, purple, black } from "@vschool/lotus"

const Container = styled.section`
    padding-top: 96px;
    background-color: ${gray.lightest};
    padding-bottom: 96px;
    justify-content: center;

    @media (min-width: 840px) {
        padding-bottom: 96px;
        padding-top: 96px;
    }

    @media (min-width: 1200px) {
        padding-top: 160px;
    }
`

const HeaderContainer = styled.div`
    position: relative;
`

const Header = styled.h2`
    position: relative;
    font-style: normal;
    font-weight: 800;
    font-size: 44px;
    line-height: 48px;
    text-align: center;
    width: 100%;
    max-width: 366px;
    z-index: 2;
    color: ${black};

    @media (min-width: 1200px) {
        max-width: 100%;
        font-size: 56px;
        line-height: 56px;
    }
`

const GreenUnderline = styled.span`
    position: absolute;
    background-color: ${green.lighter};
    height: 24px;
    width: 197px;
    left: 8px;
    top: 24px;
    z-index: 1;

    @media(max-width: 415px){
        display: none;
    }

    @media(min-width: 1200px){
        width: 258px;
        left: -24px;
        top: 32px;
    }
`

const SubHeader = styled.h4`
    font-weight: 800;
    font-size: 14px;
    line-height: 20px;
    color: ${purple.darker};
    margin-top: 16px;
    width: 100%;
    max-width: 366px;
    text-align: center;

    @media (min-width: 1200px) {
        max-width: 760px;
        margin-top: 32px;
        font-size: 16px;
        line-height: 24px;
    }
`

const Description = styled.p`
    width: 100%;
    max-width: 366px;
    margin-top: 16px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${gray.darker};

    @media (min-width: 1200px) {
        max-width: 848px;
        margin-top: 32px;
        font-size: 20px;
        line-height: 28px;
    }
`

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 64px;

    & div:nth-child(1) {
        margin-bottom: 64px;
    }

    @media (min-width: 1200px) {
        flex-direction: row;
        margin-top: 96px;
        align-items: flex-start;

        & div:nth-child(1) {
            margin-bottom: 0;
            margin-right: 16px;
        }
    }
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 378px;

    @media (min-width: 1200px) {
        max-width: 493px;
        align-items: flex-start;
    }
`

const InfoHeader = styled.h3`
    font-weight: 800;
    font-size: 24px;
    line-height: 30px;
    color: ${black};
    width: 100%;
    max-width: 365px;

    @media (min-width: 1200px) {
        font-size: 32px;
        line-height: 38px;
        max-width: 493px;
    }
`

const InfoImg = styled.img`
    width: 100%;
    max-width: 378px;
    margin-top: 32px;

    @media(min-width: 1200px){
        max-width: 493px;
        margin-top: 48px;
    }
`

const InfoText = styled.p`
    width: 100%;
    max-width: 370px;
    margin-top: 16px;
    font-weight: 500;
    color: ${gray.darker};
    font-size: 16px;
    line-height: 24px;

    @media(min-width: 1200px){
        font-size: 20px;
        line-height: 28px;
        max-width: 448px;
        margin-top: 32px;
    }
`

export default function MasterBasedLearning(props) {
    const data = useStaticQuery(graphql`
            {
                prismicResponsiveLearning {
                    data {
                        mastery_description {
                            text
                        }
                        mastery_header {
                            text
                        }
                        mastery_info {
                            info {
                                text
                            }
                            header {
                                text
                            }
                            graph {
                                url
                            }
                        }
                        mastery_subheader {
                            text
                        }
                    }
                }
            }
        `)

        const {
            mastery_description: { text: masteryDescription },
            mastery_header: { text: masteryHeader },
            mastery_info,
            mastery_subheader: { text: masterySubheader }
        } = data.prismicResponsiveLearning.data

    return (
        <Container>
            <HeaderContainer>
                <Header>{masteryHeader}</Header>
                <GreenUnderline />
            </HeaderContainer>
            <SubHeader>{masterySubheader}</SubHeader>
            <Description>{masteryDescription}</Description>
            <InfoContainer>
                {mastery_info.map(item => (
                    <Info key={item.header.text}>
                        <InfoHeader>{item.header.text}</InfoHeader>
                        <InfoImg src={item.graph.url} />
                        <InfoText>{item.info.text}</InfoText>
                    </Info>
                ))}
            </InfoContainer>
        </Container>
    )
}
