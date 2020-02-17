import React from "react"
import styled from "styled-components"
import { black, gray, Button } from "@vschool/lotus"

const Container = styled.div`
    width: 100%;
    max-width: 350px;
`

const Header = styled.h3`
    color: ${black};
    font-family: "aktiv-grotesk";
    font-size: 32px;
    font-weight: 900;
    line-height: 38px;
    margin-bottom: 32px;
    margin-top: 80px;
`

const ContactItem = styled.h4`
    color: ${gray.darker};
    font-family: "aktiv-grotesk";
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
`

const StyledButton = styled(Button)`
    font-family: "aktiv-grotesk-extended";
    margin-top: 40px;
`

export default function Contact(props) {
    const {
        header,
        businessName,
        streetAddress,
        cityAndState,
        email,
        phone,
    } = props

    return (
        <Container>
            <Header>{header}</Header>
            <ContactItem>{businessName}</ContactItem>
            <ContactItem>{streetAddress}</ContactItem>
            <ContactItem>{cityAndState}</ContactItem>
            <ContactItem>{email}</ContactItem>
            <ContactItem>{phone}</ContactItem>
            <a href={"https://calendly.com/v-school/apply"}>
                <StyledButton buttonStyle="primary-light">
                    Get In Touch
                </StyledButton>
            </a>
        </Container>
    )
}
