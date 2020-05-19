import React from "react"
import styled from "styled-components"
import { black, gray } from "@vschool/lotus"

const Container = styled.div`
    background-color: ${gray.lightest};
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 96px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 600px) {
        padding-left: 32px;
        padding-right: 32px;
    }

    @media (min-width: 840px) {
        padding-left: 40px;
        padding-right: 40px;
        padding-bottom: 96px;
    }

    @media (min-width: 1200px) {
        padding-left: 88px;
        padding-right: 88px;
    }

    & div:nth-child(2) {
        margin-top: 109px;
    }

    & div:nth-child(2) img {
        width: 113px;
    }
`

const QuoteContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 334px;
`

const Logo = styled.img`
    width: 72px;
    align-self: center;
`

const Quote = styled.p`
    font-family: "aktiv-grotesk-extended";
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;
    color: ${gray.darker};
    margin-top: 24px;
`

const CiteContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
`

const Cite = styled.p`
    font-weight: 800;
    font-size: 14px;
    line-height: 24px;
    font-family: "aktiv-grotesk-extended";
    color: ${black};
    margin-right: 4px;
`

const Position = styled.p`
    font-weight: bold;
    font-size: 10px;
    line-height: 24px;
    font-family: "aktiv-grotesk-extended";
    color: ${black};
`

export default function Quotes(props) {
    const { quotes } = props
    return (
        <Container>
            {quotes.map(quote => (
                <QuoteContainer key={quote.testimonial.text}>
                    <Logo src={quote.logo.url} />
                    <Quote>" {quote.testimonial.text} "</Quote>
                    <CiteContainer>
                        <Cite>{quote.cite.text}</Cite>
                        <Position>{quote.position.text}</Position>
                    </CiteContainer>
                </QuoteContainer>
            ))}
        </Container>
    )
}
