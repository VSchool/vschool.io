import React from "react"
import styled from "styled-components"
import { Card } from "../shared"
import { gray } from "@vschool/lotus"

const Container = styled.div`
    background-color: ${gray.lightest};
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
    margin-top: -96px;
    display: flex;
    flex-direction: column;

    @media(min-width: 1200px){
      flex-direction: row
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
