import React from "react"
import styled from "styled-components"
import { Card } from "../shared"
import { gray } from "@vschool/lotus"

const Container = styled.div`
    background-color: ${gray.light};
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 96px;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 415px) {
        padding-left: 16px;
        padding-right: 16px;
    }

    @media (min-width: 600px) {
        padding-left: 32px;
        padding-right: 32px;
    }

    @media (min-width: 840px) {
        padding-left: 40px;
        padding-right: 40px;
    }

    @media (min-width: 1200px) {
        padding-left: 88px;
        padding-right: 88px;
    }
`

const CardsList = styled.div`
    background-color: ${gray.light};
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: 840px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 8px;
    }

    @media (min-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 0;
    }
`

export default function Cards(props) {
    const { cards } = props
    return (
        <Container>
            <CardsList>
                {cards.map(card => (
                    <Card {...card} />
                ))}
            </CardsList>
        </Container>
    )
}
