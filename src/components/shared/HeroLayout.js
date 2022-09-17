import React from "react"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1200px;

    @media (min-width: 1000px) {
        flex-direction: ${props => props.dir.flexDirection || 'row'};
        align-items: center;
        justify-content: center;
    }
`

const TextContainer = styled.div`
    max-width: 500px;
    @media (min-width: 1000px) {
        padding-right: 30px;
        max-width: 50%;
        width: ${props => props?.txt?.width || 'initial'};
        margin-right: ${props => props?.txt?.marginRight || 'inherit'};
    }
`

const ImageContainer = styled.div`
    max-width: 500px;
    display: flex;
    justify-content: center;

    @media (min-width: 1000px) {
        flex-basis: 50%;
        margin-top: 0;
        width: ${props => props?.img?.width || 'initial'};
    }

    & img {
        max-width: 100%;
    }
`

export default function HeroLayout({ text, image, textStyles, imgStyles, direction }) {
    return (
        <Container dir={{flexDirection: direction ? direction : 'row'}}>
            <TextContainer txt={textStyles}>{text}</TextContainer>
            <ImageContainer img={imgStyles}>{image}</ImageContainer>
        </Container>
    )
}
