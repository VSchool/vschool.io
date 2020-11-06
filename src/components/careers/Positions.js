import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { gray, black } from "@vschool/lotus"
import Position from "./Position.js"

const Container = styled.section`
    background-color: ${gray.lighter};
    padding-top: 16px;
    padding-bottom: 96px;

    @media (min-width: 600px) {
        padding-bottom: 96px;
    }

    @media (min-width: 840px) {
        padding-bottom: 160px;
        padding-top: 80px;
    }

    @media (min-width: 1200px) {
        padding-bottom: 160px;
    }
`

const H3 = styled.h3`
    color: ${black};
    font-size: 30px;
    font-weight: 900;
    line-height: 40px;
    text-align: center;
    padding-bottom: 48px;

    @media (min-width: 600px) {
        font-size: 32px;
    }

    @media (min-width: 800px) {
        font-size: 38px;
        padding-bottom: 72px;
    }

    @media (min-width: 1000px) {
        font-size: 44px;
    }
`

const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export default function Positions(props) {
    const data = useStaticQuery(graphql`
        {
        prismicCareers {
            data {
            open_positions {
                text
            }
            position {
                position_link {
                url
                }
                position_title {
                text
                }
            }
            }
        }
        }
    `)

    const {
        open_positions,
        position
    } = data.prismicCareers.data

    // const { header, positions } = props
    return (
        <Container>
            <H3>{open_positions.text}</H3>
            <FlexContainer>
                {position.length &&
                    position.map((p, i, arr) => (
                        <Position
                            {...p}
                            key={p.position_title.text + i}
                            borderBottom={i === arr.length - 1}
                        />
                    ))}
            </FlexContainer>
        </Container>
    )
}
