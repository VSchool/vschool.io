import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { blue, yellow, gray } from "@vschool/lotus"

const Section = styled.section`
    padding-top: 90px;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${yellow.base};
    box-shadow: 8px 8px 0px 0px ${blue.base}, 8px 8px 6px 0 rgba(0, 0, 0, 0.75);
    margin-bottom: 96px;
    max-width: 450px;

    @media (min-width: 800px) {
        max-width: 1000px;
        flex-direction: row-reverse;
        /* height: 430px; */
    }
`

const ImageContainer = styled.div`
    position: relative;
    width: 100%;

    @media (min-width: 800px) {
        width: auto;
    }
`

const Caption = styled.p`
    position: absolute;
    color: ${gray.lighter};
    right: 8px;
    bottom: 49px;
    font-size: 12px;
    line-height: 16px;
    width: 166px;
    border-left: 2px solid ${gray.lighter};
    padding-left: 16px;

    @media (min-width: 800px) {
        right: 24px;
        bottom: 32px;
        width: 210px;
        font-size: 14px;
        line-height: 18px;
    }
`

const Image = styled.img`
    width: 100%;
    object-fit: cover;

    @media (min-width: 800px) {
        height: 100%;
    }
`

const SymbolsContainer = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;

    /* I can't figure out why there's an extra 4px 
    in the height of the ImageContainer, so I'm just 
    compensating for it in my translateY calculation */
    transform: translateY(calc(50% - 4px));
    width: 190px;
    height: 40px;
    background-color: ${blue.darkest};
    background-image: ${props => `url(${props.bgImg})`};
    background-repeat: no-repeat;
    background-position: center center;

    @media (min-width: 800px) {
        right: 200px;
        transform: translate(-25%, 0);
        bottom: 32px;
    }
`

const TextContainer = styled.div`
    padding: 20px;
    padding-top: 37px;
    width: 100%;

    @media (min-width: 800px) {
        width: 60%;
    }
`

const Title = styled.h3`
    color: ${blue.darkest};
    margin-bottom: 13px;
    text-align: center;

    @media (min-width: 800px) {
        text-align: left;
        margin-bottom: 48px;
    }
`

const StatsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    max-width: 400px;

    @media (min-width: 800px) {
        max-width: none;
        margin-bottom: 48px;
    }
`

const StatGroup = styled.div`
    text-align: center;
    margin: 0 10px;
`

const StatNum = styled.h1`
    color: ${blue.base};
    margin-bottom: 8px;
`

const StatText = styled.h6`
    color: ${blue.darkest};
    font-size: 8px;
    line-height: 12px;

    @media (min-width: 800px) {
        font-size: 14px;
        line-height: 20px;
    }
`

const P = styled.p`
    font-size: 14px;
    line-height: 18px;
    padding-left: 4px;
    padding-right: 4px;
    margin-bottom: 40px;

    @media (min-width: 800px) {
        max-width: 67%;
    }
`

const Footnote = styled.p`
    font-size: 12px;
    line-height: 16px;
    color: ${gray.darker};
    padding-left: 4px;
    padding-right: 4px;

    @media (min-width: 800px) {
        max-width: 67%;
    }
`

export default function Impact() {
    const data = useStaticQuery(graphql`
        {
            prismicDigitalFamilyPage {
                data {
                    impact_footnote {
                        text
                    }
                    impact_stats_list {
                        stat_number {
                            text
                        }
                        stat_text {
                            text
                        }
                    }
                    impact_text {
                        text
                    }
                    impact_title {
                        text
                    }
                    impact_image {
                        alt
                        url
                    }
                    impact_caption {
                        text
                    }
                    impact_symbols {
                        url
                        alt
                    }
                }
            }
        }
    `)

    const {
        impact_footnote: { text: footnote },
        impact_stats_list: statsList,
        impact_text: { text: mainText },
        impact_title: { text: title },
        impact_caption: { text: captionText },
        impact_image: image,
        impact_symbols: symbols,
    } = data.prismicDigitalFamilyPage.data

    const stats = statsList.map(stat => (
        <StatGroup key={stat.stat_number.text}>
            <StatNum>{stat.stat_number.text}</StatNum>
            <StatText>{stat.stat_text.text}</StatText>
        </StatGroup>
    ))

    return (
        <Section>
            <Container>
                <ImageContainer>
                    <Image src={image.url} alt={image.alt} />
                    <Caption>{captionText}</Caption>
                    <SymbolsContainer bgImg={symbols.url} />
                </ImageContainer>
                <TextContainer>
                    <Title>{title}</Title>
                    <StatsContainer>{stats}</StatsContainer>
                    <P>{mainText}</P>
                    <Footnote>{footnote}</Footnote>
                </TextContainer>
            </Container>
        </Section>
    )
}
