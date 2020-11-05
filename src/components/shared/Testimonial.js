import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import {
    gray,
    black,
    red,
    orange,
    yellow,
    green,
    blue,
    pink,
    purple,
} from "@vschool/lotus"
const colors = { red, orange, yellow, green, blue, pink, purple }

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1000px) {
        flex-direction: row-reverse;
        justify-content: center;
    }
`

const TextContainer = styled.div`
    background-color: ${({ color }) => color.lightest};
    border: ${({ color }) => `2px solid ${color.base}`};
    padding: 48px 24px 64px;
    max-width: 600px;
    margin-bottom: -32px;

    @media (min-width: 1000px) {
        margin-bottom: 0;
        margin-left: -24px;
        padding: 64px;
        padding-right: 40px;
    }
`
const Quote = styled.blockquote`
    font-size: 20px;
    line-height: 28px;
    font-weight: bold;
    color: ${black};
    font-family: "aktiv-grotesk-extended";
    margin-bottom: 24px;

    &:before {
        content: open-quote;
    }

    &:after {
        content: close-quote;
    }
`
const Source = styled.h5`
    margin-bottom: 8px;

    &:before {
        content: "— ";
    }
`
const SourceTitle = styled.p`
    color: ${gray.darker};
    font-size: 12px;
    line-height: 16px;

    @media (min-width: 800px) {
        font-size: 14px;
        line-height: 18px;
    }
`
const Image = styled.img`
    width: 90%;
    max-width: 337px;
    border-bottom: ${({ color }) => `20px solid ${color.base}`};
`

function Testimonial({
    quote,
    source,
    sourceTitle,
    primaryColor,
    secondaryColor,
    imgSrc,
}) {
    const mainColor = colors[primaryColor]
    const secondColor = colors[secondaryColor]
    return (
        <Container>
            <TextContainer color={mainColor}>
                <Quote>{quote}</Quote>
                <Source>{source}</Source>
                <SourceTitle>{sourceTitle}</SourceTitle>
            </TextContainer>
            <Image src={imgSrc} color={secondColor} />
        </Container>
    )
}

Testimonial.propTypes = {}

export default Testimonial
