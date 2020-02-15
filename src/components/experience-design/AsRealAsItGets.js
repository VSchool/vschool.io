import React from "react"
import styled from "styled-components"
import { orange, black, gray } from "@vschool/lotus"

const Container = styled.div`
    background-color: ${orange.lightest};
    padding-top: 96px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 16px;

    @media (min-width: 900px) {
        padding-left: 44px;
        padding-right: 44px;
        padding-bottom: 64px;
    }

    @media (min-width: 1024px) {
        padding-top: 160px;
    }

    @media (min-width: 1200px) {
        padding-left: 88px;
        padding-right: 88px;
    }
`

const LargeContainer = styled.div`
    @media (min-width: 900px) {
        display: flex;
        justify-content: space-around;
    }

    @media (min-width: 1024px) {
        width: 960px;
        margin-right: auto;
        margin-left: auto;
    }

    @media (min-width: 1200px) {
        width: 1024px;
    }
`

const FlexItem = styled.div`
    @media (min-width: 600px) {
        padding-right: 32px;
        padding-left: 32px;
    }

    @media (min-width: 900px) {
        padding-right: 32px;
        width: 420px;
    }

    @media (min-width: 1024px) {
        width: 520px;
    }
`

const H3 = styled.h3`
    color: ${black};
    font-family: "aktiv-grotesk";
    font-size: 32px;
    font-weight: 900;
    line-height: 40px;
    margin-bottom: 32px;

    @media (min-width: 900px) {
        font-size: 36px;
        line-height: 42px;
    }

    @media (min-width: 1024px) {
        padding-top: 36px;
        font-size: 40px;
    }

    @media (min-width: 1200px) {
        font-size: 44px;
        line-height: 48px;
    }
`

const P = styled.p`
    color: ${gray.darker};
    font-family: "aktiv-grotesk";
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    margin: 0;

    @media (min-width: 1024px) {
        font-size: 20px;
    }

    @media (min-width: 1200px) {
        line-height: 28px;
    }
`

const SubP = styled(P)`
    padding-bottom: 24px;
    margin: 0;
`

const KungFuContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const KungFu = styled.img`
    margin-top: 42px;
    width: 408px;

    @media (min-width: 320px) and (max-width: 440px) {
        width: 286px;
    }

    @media (min-width: 900px) {
        margin-top: 0;
        height: 444px;
        width: 408px;
    }
`

function AsRealAsItGets(props) {
    const { title, sub1, sub2, sub3, img } = props
    return (
        <Container>
            <LargeContainer>
                <FlexItem>
                    <H3>{title}</H3>
                    <P>{sub1}</P>
                    <SubP>{sub2}</SubP>
                    <P>{sub3}</P>
                </FlexItem>
                <KungFuContainer>
                    <KungFu src={img} />
                </KungFuContainer>
            </LargeContainer>
        </Container>
    )
}

export default AsRealAsItGets
