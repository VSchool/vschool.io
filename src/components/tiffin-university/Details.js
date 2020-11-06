import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { gray, black } from "@vschool/lotus"

const FlexContainer = styled.section`
    justify-content: center;
    background-color: ${gray.lightest};
    padding-bottom: 64px;
    padding-top: 48px;

    @media (min-width: 840px) {
        padding-bottom: 96px;
        align-items: center;
    }
`

const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1024px;

    @media (min-width: 1200px) {
        display: grid;
        align-items: flex-start;
        grid-template-columns: 1fr 1fr;
    }
`

const Detail = styled.div`
    width: 100%;
    max-width: 440px;
    margin-bottom: ${props => (props.arr.length - 1 !== props.i ? "56px" : 0)};

    @media (min-width: 1200px) {
        margin-right: ${props => (props.i % 2 === 0 ? "88px" : 0)};
    }
`

const Title = styled.h3`
    color: ${black};
    font-size: 24px;
    line-height: 30px;
    font-weight: 800;
    max-width: 390px;
`

const Info = styled.p`
    color: ${gray.darker};
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    margin-top: 16px;

    @media (max-width: 400px) {
        font-size: 14px;
    }
`

const H3 = styled.h3`
    width: 100%;
    color: ${black};
    font-size: 28px;
    font-weight: 900;
    text-align: center;
    padding-bottom: 48px;

    @media (min-width: 600px) {
        max-width: 800px;
        padding-bottom: 56px;
    }

    @media (min-width: 840px) {
    }

    @media (min-width: 1200px) {
        font-size: 32px;
    }
`

export default function Details() {
    const data = useStaticQuery(graphql`
        {
            prismicTiffin {
                data {
                    details {
                        detail_info {
                            text
                        }
                        detail_title {
                            text
                        }
                    }
                    details_header {
                        text
                    }
                }
            }
        }
    `)

    const {
        details_header: { text: header },
        details,
    } = data.prismicTiffin.data

    return (
        <FlexContainer>
            <H3>{header}</H3>
            <DetailsContainer>
                {details.map(
                    ({ detail_info: info, detail_title: title }, i, arr) => (
                        <Detail key={title.text + i} i={i} arr={arr}>
                            <Title>{title.text}</Title>
                            <Info>{info.text}</Info>
                        </Detail>
                    )
                )}
            </DetailsContainer>
        </FlexContainer>
    )
}
