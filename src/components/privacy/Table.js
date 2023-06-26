import React from "react"
import styled from "styled-components"
import { gray, blue } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.lightest};
    padding-top: 54px;
    padding-bottom: 54px;
`

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
`

const H1 = styled.h1`
    font-weight: 900;
    font-size: 56px;
    line-height: 56px;
    text-align: center;
    color: ${gray.darkest};

    @media (min-width: 600px) {
        font-size: 40px;
    }

    @media (min-width: 840px) {
        font-size: 48px;
        line-height: 48px;
    }

    @media (min-width: 1200px) {
        font-size: 56px;
        padding-left: 160px;
        padding-right: 160px;
        line-height: 56px;
    }
`

export default function Table() {

    return (
        <Container>
            <FlexContainer>
                <H1>Privacy Policy</H1>
            </FlexContainer>
        </Container>
    )
}
