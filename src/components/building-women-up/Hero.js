import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { white, gray } from "@vschool/lotus"

const Container = styled.section`
    background-image: ${props =>
        `linear-gradient(71.41deg, rgba(33, 32, 31, 0.9) 18.15%, rgba(33, 32, 31, 0) 126.08%), url(${props.$backgroundImg})`};
    background-size: cover;
    background-position: center top;
    padding-top: 160px;
    height: 704px;
    align-items: flex-start;
    position: relative;
`

const Header = styled.h1`
    color: ${white};
    max-width: 350px;
`

const Text = styled.p`
    margin-top: 24px;
    color: ${gray.base};
    font-weight: 400;
    max-width: 500px;
`

const LearnMoreContainer = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 51px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const LearnMoreText = styled.p`
    font-size: 12px;
    line-height: 16px;
    color: ${gray.lighter};
    font-weight: 400;
`

const DownArrow = styled.div`
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid ${gray.lighter};
    margin-top: 15px;
`

export default function Hero() {
    const data = useStaticQuery(graphql`
        {
            prismicWomensHistoryMonthPage {
                data {
                    hero_background_image {
                        url
                    }
                    hero_title {
                        text
                    }
                    hero_text {
                        text
                    }
                    hero_learn_more {
                        text
                    }
                }
            }
        }
    `)

    const {
        hero_background_image: { url: backgroundImgUrl },
        hero_title: { text: title },
        hero_text: { text },
        hero_learn_more: { text: learnMoreText },
    } = data.prismicWomensHistoryMonthPage.data
    return (
        <Container $backgroundImg={backgroundImgUrl}>
            <Header>{title}</Header>
            <Text>{text}</Text>
            <LearnMoreContainer>
                <LearnMoreText>{learnMoreText}</LearnMoreText>
                <DownArrow />
            </LearnMoreContainer>
        </Container>
    )
}
