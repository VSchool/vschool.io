import React from "react"
import styled from "styled-components"
import { blue, black } from "@vschool/lotus"
import QueryLink from "../shared/QueryLink.js"

const Container = styled.div`
    background-color: ${blue.lightest};
    padding-top: 32px;
    padding-left: 24px;
    padding-right: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 96px;

    @media (max-width: 400px) {
        padding-left: 16px;
        padding-right: 16px;
        padding-top: 56px;
    }

    @media (min-width: 600px) {
        padding-left: 48px;
        padding-right: 48px;
    }

    @media (min-width: 1200px) {
        padding-right: 96px;
        padding-left: 96px;
        padding-bottom: 160px;
    }
`

const H4 = styled.h4`
    background-color: ${blue.lightest};
    color: ${black};
    font-family: "aktiv-grotesk";
    font-size: 24px;
    font-weight: 800;
    display: inline-block;
    text-align: center;
    width: 250px;
    z-index: 3;

    @media (max-width: 400px) {
        font-size: 22px;
    }

    @media (min-width: 1200px) {
        width: 642px;
    }
`

const Image = styled.img`
    width: 100%;
    max-width: 230px;
    margin: 16px 0;

    @media (min-width: 1200px) {
        width: 100%;
        max-width: 229px;
    }
`

const RatingsContainer = styled.div`
    border: 2px solid ${blue.base};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    padding-top: 56px;
    padding-bottom: 32px;
    margin-top: -48px;
    width: 100%;
    max-width: 380px;

    & ${Image}:nth-child(2) {
        width: 170px;
    }

    @media (min-width: 1200px) {
        width: 100%;
        max-width: 850px;
        margin-top: -16px;
        flex-direction: row;
        justify-content: space-between;
        padding-top: 56px;
        padding-bottom: 56px;
        padding-left: 40px;
        padding-right: 40px;
    }
`

const StyledLink = styled(QueryLink)``

export default function Ratings(props) {
    const { header, ratings, bootcampRankingsLink } = props
    return (
        <Container>
            <H4>{header}</H4>
            <RatingsContainer>
                {ratings.map(({ rating }, i) =>
                    i === 2 ? (
                        <StyledLink to={bootcampRankingsLink}>
                            <Image key={rating.url} src={rating.url} />
                        </StyledLink>
                    ) : (
                        <Image key={rating.url} src={rating.url} />
                    )
                )}
            </RatingsContainer>
        </Container>
    )
}
