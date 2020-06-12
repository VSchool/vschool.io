import React from "react"
import styled from "styled-components"
import { Card } from "../shared"
import { gray } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.lightest};
    padding-bottom: 96px;

    @media (max-width: 415px) {
        padding-left: 16px;
        padding-right: 16px;
    }
`

const CardsList = styled.div`
    margin-top: -96px;
    display: flex;
    flex-direction: column;

    @media (min-width: 1200px) {
        flex-direction: row;
    }
`

export default function Cards(props) {
    const { cards } = props
    return (
        <Container>
            <CardsList>
                {cards.map(card => (
                    <Card {...card} key={card.card_text.text} />
                ))}
            </CardsList>
        </Container>
    )
}
