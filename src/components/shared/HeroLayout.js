import React from "react"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 1000px) {
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
    }
`

const TextContainer = styled.div`
    max-width: 500px;
    @media (min-width: 1000px) {
        padding-right: 30px;
        max-width: 50%;
    }
`

const ImageContainer = styled.div`
    max-width: 500px;
    display: flex;
    justify-content: center;

    @media (min-width: 1000px) {
        flex-basis: 50%;
        margin-top: 0;
    }
`

export default function HeroLayout({ text, image }) {
    return (
        <Container>
            <TextContainer>{text}</TextContainer>
            <ImageContainer>{image}</ImageContainer>
        </Container>
    )
}
