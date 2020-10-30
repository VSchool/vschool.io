import React from "react"
import styled from "styled-components"
import { white, green, CardGroup, Card } from "@vschool/lotus"

const Section = styled.section`
    background-color: ${white};
    margin-top: -257px;
    padding-top: 257px;

    @media (min-width: 1000px) {
        margin-top: 0;
        padding-top: 160px;
    }
`

const Title = styled.h1`
    text-align: center;
    margin-bottom: 24px;
    max-width: 762px;
`

const Subtitle = styled.h6`
    text-align: center;
    margin-bottom: 64px;
    color: ${green.dark};
`

const CardsContainer = styled(CardGroup)`
    max-width: 1000px;
`

export default function CurrentScholarships() {
    return (
        <Section>
            <Title>Current Scholarship Opportunities</Title>
            <Subtitle>
                Breaking down barrier to enter the tech industry
            </Subtitle>

            <CardsContainer>
                <Card>
                    <h4>Scholarship 1</h4>
                </Card>
                <Card>
                    <h4>Scholarship 2</h4>
                </Card>
                <Card>
                    <h4>Scholarship 3</h4>
                </Card>
                <Card>
                    <h4>Scholarship 4</h4>
                </Card>
            </CardsContainer>
        </Section>
    )
}
