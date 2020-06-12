import React from "react"
import styled from "styled-components"
import { yellow } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${yellow.lightest};
    padding-bottom: 64px;

    @media (min-width: 840px) {
        padding-bottom: 96px;
    }

    @media (min-width: 1200px) {
        padding-bottom: 160px;
    }
`

const Image = styled.img`
    width: 100%;
    display: block;
    height: auto;
    max-width: 911px;
    margin-top: -64px;

    @media (min-width: 840px) {
        margin-top: -96px;
    }

    @media (min-width: 1200px) {
        margin-top: -160px;
        width: 911px;
    }
`

export default function VetStudents(props) {
    const { img } = props
    return (
        <Container>
            <Image src={img} />
        </Container>
    )
}
