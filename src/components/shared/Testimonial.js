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
    flex-direction: column-reverse;
    align-items: center;

    @media (min-width: 1000px) {
        flex-direction: row;
        justify-content: center;
    }
`

const Image = styled.img`
    width: 90%;
    z-index: 1; // Sit above the quote box
    max-width: 337px;
    border-bottom: ${({ theme, $color }) =>
        `20px solid ${theme?.secondary?.base || $color.base}`};
    position: relative;
    top: -40px;

    @media (min-width: 1000px) {
        top: 0;
    }
`

const TextContainer = styled.div`
    background-color: ${({ theme, $color }) =>
        theme?.primary?.lightest || $color.lightest};
    border: ${({ theme, $color }) =>
        `2px solid ${theme?.primary?.base || $color.base}`};
    padding: 48px 24px 64px;
    max-width: 600px;
    margin-top: -32px;

    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 1000px) {
        margin-top: 0;
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
/**TODO: Refactor this to use compound components w/ context
<Testimonial>
    <TestimonialQuote />
    <TestimonialImage />
</Testimonial>
 */
function Testimonial({
    quote,
    source,
    sourceTitle,
    primaryColor,
    secondaryColor,
    imgSrc,
    imgAlt,
    ...rest
}) {
    const mainColor = colors[primaryColor]
    const secondColor = colors[secondaryColor]
    return (
        <Container {...rest}>
            <Image src={imgSrc} alt={imgAlt} $color={secondColor} />
            <TextContainer $color={mainColor}>
                <Quote>{quote}</Quote>
                <Source>{source}</Source>
                <SourceTitle>{sourceTitle}</SourceTitle>
            </TextContainer>
        </Container>
    )
}

Testimonial.propTypes = {
    quote: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    sourceTitle: PropTypes.string,
    primaryColor: PropTypes.string,
    secondaryColor: PropTypes.string,
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
}

export default Testimonial
