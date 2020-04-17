import React from "react"
import styled from "styled-components"
import { gray, black } from "@vschool/lotus"

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${gray.lighter};
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 64px;

    @media (min-width: 600px) {
        padding-left: 32px;
        padding-right: 32px;
    }

    @media (min-width: 840px) {
        padding-left: 40px;
        padding-right: 40px;
        padding-bottom: 96px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (min-width: 1200px) {
        padding-left: 88px;
        padding-right: 88px;
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
    font-family: "aktiv-grotesk";
    font-size: 24px;
    line-height: 30px;
    font-weight: 800;
    max-width: 390px;
`

const Info = styled.p`
    color: ${gray.darker};
    font-family: "aktiv-grotesk";
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    margin-top: 16px;

    @media (max-width: 400px) {
        font-size: 14px;
    }
`

export default function Details(props) {
    const { details } = props
    return (
        <FlexContainer>
            <DetailsContainer>
                {details.map(({ info, header }, i, arr) => (
                    <Detail key={header.text + i} i={i} arr={arr}>
                        <Title>{header.text}</Title>
                        <Info>{info.text}</Info>
                    </Detail>
                ))}
            </DetailsContainer>
        </FlexContainer>
    )
}
