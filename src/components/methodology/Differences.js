import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { gray, black } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.lightest};
    padding-bottom: 56px;
    padding-top: 80px;

    @media (min-width: 1200px) {
        padding-top: 80px;
    }
`

const Header = styled.h2`
    font-size: 32px;
    line-height: 38px;
    color: ${black};
    text-align: center;
    font-weight: 800;
    margin-bottom: 16px;

    @media (min-width: 600px) {
        font-size: 44px;
    }

    @media (min-width: 1100px) {
        margin-top: 56px;
    }
`

const DifferencesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1100px) {
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
    }
`

const Difference = styled.div`
    width: 100%;
    max-width: 320px;

    @media (min-width: 1100px) {
        margin: 0 24px;
    }
`

const Title = styled.h3`
    margin-top: 48px;
    margin-bottom: 16px;
    font-size: 20px;
    line-height: 26px;
    color: ${black};
    font-weight: 800;
`

const Info = styled.p`
    color: ${gray.darker};
    font-size: 18px;
    line-height: 26px;
`

export default function Differences() {
    const data = useStaticQuery(graphql`
        {
        prismicMethodologyPage {
            id
            data {
            difference_header {
                text
            }
            differences {
                info {
                text
                }
                title {
                text
                }
            }
            }
        }
        }
    `)

    const {
        differences,
        difference_header: { text: differencesHeader }
    } = data.prismicMethodologyPage.data

    return (
        <Container>
            <Header>{differencesHeader}</Header>
            <DifferencesContainer>
                {differences.map(item => (
                    <Difference key={item.title.text}>
                        <Title>{item.title.text}</Title>
                        <Info>{item.info.text}</Info>
                    </Difference>
                ))}
            </DifferencesContainer>
        </Container>
    )
}
