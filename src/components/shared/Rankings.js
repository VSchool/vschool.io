import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { blue } from "@vschool/lotus"

const Section = styled.section`
    padding-bottom: 96px;

    @media (min-width: 800px) {
        padding-bottom: 160px;
    }
`

const Container = styled.div`
    position: relative;
    border: 2px solid ${blue.base};
    max-width: 380px;

    @media (min-width: 800px) {
        max-width: 840px;
    }
`

const Title = styled.h4`
    margin-left: auto;
    margin-right: auto;
    transform: translateY(-50%);
    width: 80%;
    text-align: center;
    background-color: #fbf9f6;
    padding-left: 16px;
    padding-right: 16px;
`

const RankingsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: max-content;
    justify-items: center;
    align-items: center;
    padding-bottom: 48px;

    @media (min-width: 800px) {
        gap: 10px;
        grid-template-columns: 1fr 2fr 1fr 2fr 1fr 2fr;
        padding: 16px 16px 32px;
        padding-right: 8px;
    }
`

const Ranking = styled.p`
    color: ${blue.base};
    font-weight: 900;
    font-size: 32px;
    line-height: 38px;
    grid-column: span 1;

    @media (min-width: 800px) {
        justify-self: end;
    }
`

const Logo = styled.img`
    width: 100%;
    @media (min-width: 800px) {
        justify-self: start;
        &:not(:last-child) {
            padding-right: 16px;
        }
    }
`

export default function Rankings() {
    const data = useStaticQuery(graphql`
        {
            prismicRankingsComponent {
                data {
                    title {
                        text
                    }
                    rankings_list {
                        ranking {
                            text
                        }
                        logo {
                            alt
                            url
                        }
                    }
                }
            }
        }
    `)

    const {
        title: { text: title },
        rankings_list: rankingsList,
    } = data.prismicRankingsComponent.data

    const rankings = rankingsList.map(item => (
        <React.Fragment key={item.logo.alt}>
            <Ranking>{item.ranking.text}</Ranking>
            <Logo src={item.logo.url} alt={item.logo.alt} />
        </React.Fragment>
    ))
    return (
        <Section>
            <Container>
                <Title>{title}</Title>
                <RankingsGrid>{rankings}</RankingsGrid>
            </Container>
        </Section>
    )
}
