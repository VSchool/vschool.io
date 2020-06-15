import React from "react"
import styled from "styled-components"
import { black, gray } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.light};
    display: block;
`

const H3 = styled.h3`
    color: ${black};
    font-size: 20px;
    font-weight: 800;
    padding-top: 40px;
    max-width: 848px;

    @media (max-width: 415px) {
        font-size: 18px;
    }

    @media (min-width: 1200px) {
        margin: 0 auto;
    }
`

const P = styled.p`
    color: ${gray.darker};
    font-size: 16px;
    font-weight: 500;
    padding-top: 24px;
    max-width: 848px;

    @media (max-width: 415px) {
        font-size: 14px;
    }

    @media (min-width: 1200px) {
        margin: 0 auto;
    }
`

const GrayBar = styled.div`
    height: 192px;
`

export default function LongDescription(props) {
    const { title, description1, description2, description3 } = props
    return (
        <Container>
            <H3>{title}</H3>
            <P>{description1}</P>
            <P>{description2}</P>
            <P>{description3}</P>
            <GrayBar />
        </Container>
    )
}
