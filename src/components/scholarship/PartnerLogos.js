import React from "react"
import styled from "styled-components"
import { gray } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.lighter};
    padding-top: 64px;
    padding-bottom: 64px;
`

const ImageContainer = styled.div`
    text-align: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 400px;

    @media (min-width: 800px) {
        max-width: 848px;
        grid-template-columns: repeat(${props => props.logos.length}, 1fr);
    }
`

const Image = styled.img`
    width: 100%;
    margin: auto;
    display: inline-block;
    padding: 10px;
`

const Title = styled.h1`
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    color: ${gray.darkest};
    margin-bottom: 32px;
`


export default function Hero(props) {
    const {
        partner_title: { text: title },
        partner_logos
    } = props

    const mappedLogos = partner_logos.map(({partner_logo: {url}}) => <Image src={url} />)
    return (
        <Container>
            <Title>{title}</Title>
            <ImageContainer logos={partner_logos}>
                {mappedLogos}
            </ImageContainer>
        </Container>
    )
}
