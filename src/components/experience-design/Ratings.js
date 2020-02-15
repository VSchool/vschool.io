import React from "react"
import styled from "styled-components"
import { gray, orange } from "@vschool/lotus"

const Container = styled.div`
    background-color: ${gray.lighter};
`

const FlexContainer = styled.div`
    background-color: ${orange.lighter};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 64px;
    z-index: 1;
    margin-left: 24px;
    margin-right: 24px;
    margin-top: -188px;

    @media (min-width: 600px) {
        margin-right: 44px;
        margin-left: 44px;
    }

    @media (min-width: 900px) {
        flex-direction: row;
        justify-content: space-evenly;
    }

    @media (min-width: 1200px) {
        margin-right: auto;
        margin-left: auto;
        width: 1024px;
    }
`

const TintedBackground = styled.div`
    background-color: ${orange.lightest};
    height: 280px;
    width: 100%;
    left: 0;
    z-index: 0;

    @media (min-width: 900px) {
        height: 285px;
    }
`

const RateImg = styled.img`
    padding-bottom: 72px;

    @media (min-width: 1024px) {
        height: 176px;
        width: 176px;
        padding-bottom: 68px;
    }
`

function Ratings(props) {
    const { rating1, rating2, rating3 } = props
    return (
        <Container>
            <TintedBackground />
            <FlexContainer>
                <RateImg src={rating1} />
                <RateImg src={rating2} />
                <RateImg src={rating3} />
            </FlexContainer>
        </Container>
    )
}

export default Ratings
