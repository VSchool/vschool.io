import React from "react"
import styled from "styled-components"
import { blue, black } from "@vschool/lotus"
import QueryLink from "../shared/QueryLink.js"

const Container = styled.section`
    background-color: ${blue.lightest};
    padding-top: 32px;
    padding-bottom: 96px;

    @media (max-width: 400px) {
        padding-left: 16px;
        padding-right: 16px;
        padding-top: 56px;
    }

    @media (min-width: 1200px) {
        padding-bottom: 160px;
    }
`

const H3 = styled.h3`
    background-color: ${blue.lightest};
    color: ${black};
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
            <H3>{header}</H3>
            <RatingsContainer>
                {ratings.map(({ rating }, i) =>
                    i === 2 ? (
                        <StyledLink to={bootcampRankingsLink} key={rating.url}>
                            <Image src={rating.url} />
                        </StyledLink>
                    ) : (
                        <Image key={rating.url} src={rating.url} />
                    )
                )}
            </RatingsContainer>
        </Container>
    )
}
