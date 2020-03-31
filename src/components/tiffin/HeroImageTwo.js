import React from "react"
import styled from "styled-components"
import { blue } from "@vschool/lotus"

const Container = styled.div`
    width: 100vw;
    padding-left: 24px;
    padding-right: 24px;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${blue.lightest};

    @media (min-width: 320px) and (max-width: 414px) {
        padding-left: 16px;
        padding-right: 16px;
    }

    @media (min-width: 600px) {
        padding-left: 32px;
        padding-right: 32px;
    }

    @media (min-width: 840px) {
        padding-left: 88px;
        padding-right: 88px;
    }

    @media (min-width: 1200px) {
        padding-left: 176px;
        padding-right: 176px;
    }
`

const Image = styled.img`
    width: 100%;
    display: block;
    height: auto;
    margin: -88px auto 0 auto;
    max-width: 848px;

    @media (min-width: 1200px) {
        width: 848px;
    }
`

export default function HeroImage2(props) {
    const { heroImg } = props
    return (
        <Container>
            <Image src={heroImg} />
        </Container>
    )
}
