import React from "react"
import styled from "styled-components"
import { black, gray } from "@vschool/lotus"

const Container = styled.div`
    padding: 0 24px 0 24px;
    background-color: ${gray.light};

    @media (min-width: 600px) {
        padding: 0 44px 0 44px;
    }

    @media (min-width: 840px) {
        padding: 0 88px 0 88px;
    }

    @media (min-width: 1200px) {
        padding: 0;
    }
`

const H3 = styled.h3`
    color: ${black};
    font-size: 20px;
    font-weight: 800;
    padding-bottom: 24px;
    max-width: 848px;

    @media (max-width: 415px) {
        font-size: 18px;
    }

    @media (min-width: 600px) {
    }

    @media (min-width: 840px) {
    }

    @media (min-width: 1200px) {
        margin: 0 auto;
    }
`

const P = styled.p`
    color: ${gray.darker};
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    max-width: 848px;

    @media (max-width: 415px) {
        font-size: 18px;
    }

    @media (min-width: 1200px) {
        margin: 0 auto;
    }
`

export default function ShortDescription(props) {
    const { title, text } = props
    return (
        <Container>
            <H3>{title}</H3>
            <P>{text}</P>
        </Container>
    )
}
