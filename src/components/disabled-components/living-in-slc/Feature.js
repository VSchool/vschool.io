import React from "react"
import { black } from "@vschool/lotus"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    margin-bottom: 48px;

    @media (min-width: 1000px) {
        width: 860px;
        flex-direction: ${props => (props.inverse ? "row-reverse" : "row")};
        padding-bottom: 96px;
    }
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;

    @media (min-width: 1000px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 306px;
        padding-right: ${props => (props.inverse ? "48px" : 0)};
        padding-left: ${props => (props.inverse ? 0 : "48px")};
    }
`

const H3 = styled.h3`
    color: ${black};
    font-size: 24px;
    font-weight: 900;
    line-height: 28px;
    padding-bottom: 16px;
    text-align: center;

    @media (min-width: 600px) {
        font-size: 28px;
        width: 500px;
    }

    @media (min-width: 1000px) {
        font-size: 32px;
        text-align: left;
        width: 100%;
    }
`

const P = styled.p`
    color: #514f4b;
    font-size: 16px;
    font-weight: 500;
    text-align: center;

    @media (min-width: 320px) and (max-width: 414px) {
        width: 280px;
    }

    @media (min-width: 415px) {
        width: 360px;
    }

    @media (min-width: 1000px) {
        text-align: left;
        width: 100%;
    }
`

const Image = styled.img`
    width: 100%;
    max-width: 408px;
    margin-bottom: 24px;

    @media (min-width: 1000px) {
        width: 408px;
        margin-bottom: 0;
    }
`

export default function Feature(props) {
    const { feature_description, feature_title, feature_image, inverse } = props
    return (
        <Container inverse={inverse}>
            <Image src={feature_image.url} width={200} />
            <TextContainer inverse={inverse}>
                <H3>{feature_title.text}</H3>
                <P>{feature_description.text}</P>
            </TextContainer>
        </Container>
    )
}
