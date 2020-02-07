import React from "react"
import styled from "styled-components"
import { gray } from "@vschool/lotus"
import Press from "./Press.js"
import Contact from "./Contact.js"

const Container = styled.div`
    padding: 0 24px;
    background-position: center;
    background-color: ${gray.lightest};
    padding-top: 180px;
    padding-bottom: 96px;
    display: flex;
    justify-content: center;

    @media (min-width: 320px) and (max-width: 414px) {
        padding-left: 16px;
        padding-right: 16px;
    }

    @media (min-width: 600px) {
        padding: 180px 32px 96px 32px;
    }

    @media (min-width: 840px) {
        padding: 140px 88px;
        grid-template-columns: 1fr 1fr;
        grid-gap: 240px;
    }

    @media (min-width: 1200px) {
        padding: 140px 176px;
    }
`

const FixedContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    max-width: 848px;

    @media (min-width: 840px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 240px;
    }
`

export default function PressAndContact(props) {
    const {
        pressHeader,
        contactUsHeader,
        businessName,
        streetAddress,
        cityAndState,
        email,
        phone,
    } = props
    return (
        <Container>
            <FixedContainer>
                <Press header={pressHeader} />
                <Contact
                    header={contactUsHeader}
                    businessName={businessName}
                    streetAddress={streetAddress}
                    cityAndState={cityAndState}
                    email={email}
                    phone={phone}
                />
            </FixedContainer>
        </Container>
    )
}
