import React from "react"
import styled from "styled-components"
import { black, blue, pink } from "@vschool/lotus"

const Container = styled.div`
    background-color: ${pink.lightest};
    padding-top: 96px;
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

    @media (min-width: 1100px) {
        padding-top: 64px;
    }

    @media (min-width: 1200px) {
        padding-right: 96px;
        padding-left: 96px;
        padding-bottom: 160px;
    }
`

const H4 = styled.h4`
    background-color: ${pink.lightest};
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

    @media (min-width: 500px) {
        width: 300px;
    }

    @media (min-width: 600px) {
        width: 400px;
    }

    @media (min-width: 900px) {
        width: 642px;
    }
`

const Image = styled.img`
    width: 100%;
    max-width: 230px;
    margin: 16px 0;

    @media (min-width: 400px) {
        max-width: 280px;
    }

    @media (min-width: 600px) {
        max-width: 300px;
    }

    @media (min-width: 900px) {
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

    & ${Image}:nth-child(2) {
        width: 170px;
    }

    @media (min-width: 400px) {
        width: 350px;
    }

    @media (min-width: 500px) {
        width: 400px;
    }

    @media (min-width: 600px) {
        width: 500px;
        margin-top: -32px;
        padding-top: 48px;
    }

    @media (min-width: 900px) {
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

export default function Ratings(props) {
    const { header, ratings } = props
    return (
        <Container>
            <H4>{header}</H4>
            <RatingsContainer>
                {ratings.map(({ rating_img }) => (
                    <Image key={rating_img.url} src={rating_img.url} />
                ))}
            </RatingsContainer>
        </Container>
    )
}
