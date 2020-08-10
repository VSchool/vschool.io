import React from "react"
import styled from "styled-components"
import { gray, black } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.lightest};
    padding-bottom: 96px;
    justify-content: center;

    @media (min-width: 600px) {
        padding-left: 32px;
        padding-right: 32px;
    }

    @media (min-width: 840px) {
        padding-bottom: 96px;
    }

    @media (min-width: 1200px) {
        flex-direction: row;
    }
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 366px;

    @media (min-width: 1200px) {
        max-width: 316px;
        align-items: flex-start;
        margin-right: 122px;
    }
`

const Header = styled.h2`
    color: ${black};
    font-weight: 900;
    font-size: 32px;
    line-height: 38px;

    @media (min-width: 1200px) {
        font-size: 44px;
        line-height: 48px;
    }
`

const Info = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${gray.darker};
    margin-top: 16px;

    @media (min-width: 1200px) {
        margin-top: 32px;
        font-size: 16px;
        line-height: 24px;
        max-width: 316px;
    }
`

const Image = styled.img`
    width: 100%;
    max-width: 377px;
    margin-top: 48px;

    @media (min-width: 1200px) {
        max-width: 585px;
    }
`

export default function ResponsiveIndustry(props) {
    const { header, info, img } = props
    return (
        <Container>
            <TextContainer>
                <Header>{header}</Header>
                <Info>{info}</Info>
            </TextContainer>
            <Image src={img} />
        </Container>
    )
}
