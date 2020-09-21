import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { black, gray, Button } from "@vschool/lotus"
import Link from "../shared/QueryLink"

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

export default function Contact() {
    const data = useStaticQuery(graphql`
        {
            prismicAbout {
                data {
                    business_name {
                        text
                    }
                    city_and_state {
                        text
                    }
                    contact_us {
                        text
                    }
                    email {
                        text
                    }
                    phone {
                        text
                    }
                    street_address {
                        text
                    }
                }
            }
        }
    `)

    const {
        business_name: { text: businessName },
        city_and_state: { text: cityAndState },
        contact_us: { text: header },
        email: { text: email },
        phone: { text: phone },
        street_address: { text: streetAddress },
    } = data.prismicAbout.data

    return (
        <Container>
            <Header>{header}</Header>
            <ContactItem>{businessName}</ContactItem>
            <ContactItem>{streetAddress}</ContactItem>
            <ContactItem>{cityAndState}</ContactItem>
            <ContactItem>{email}</ContactItem>
            <ContactItem>{phone}</ContactItem>
            <Link to={"https://calendly.com/v-school/apply"}>
                <StyledButton buttonStyle="primary-light">
                    Get In Touch
                </StyledButton>
            </Link>
        </Container>
    )
}
