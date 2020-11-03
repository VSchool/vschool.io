import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { blue, black, gray, Button } from "@vschool/lotus"

const Container = styled.div`
    height: 352px;
    background-color: ${blue.lightest};
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 600px) {
        height: 340px;
    }

    @media (min-width: 840px) {
        height: 390px;
    }
`

const H1 = styled.h1`
    color: ${black};
    font-family: "aktiv-grotesk";
    font-size: 32px;
    font-weight: 900;
    line-height: 40px;
    text-align: center;
    margin: 72px 24px 16px 24px;

    @media (min-width: 840px) {
        font-size: 40px;
        margin-top: 88px;
    }

    @media (min-width: 1200px) {
        font-size: 44px;
    }
`

const P = styled.p`
    color: ${gray.darker};
    font-family: "aktiv-grotesk";
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
    margin: 0 16px 32px 16px;

    @media (min-width: 480px) {
        margin: 0 32px 32px 32px;
    }

    @media (min-width: 840px) {
        font-size: 18px;
        line-height: 26px;
        width: 460px;
        margin: 16px 32px 32px 32px;
    }

    @media (min-width: 1200px) {
        font-size: 20px;
    }
`

const StyledButton = styled(Button)`
    width: 318px;
    font-size: 16px;
    font-family: "aktiv-grotesk-extended";
    font-weight: 700;
    outline: none;

    @media (min-width: 320px) and (max-width: 400px) {
        width: 290px;
    }
`

function ContactUs(props) {
    const data = useStaticQuery(graphql`
        {
            prismicBootcampPrimer {
                data {
                    contact_us_title {
                        text
                    }
                    contact_us_sub {
                        text
                    }
                    contact_us_link {
                        url
                    }
                    contact_us_btn {
                        text
                    }
                }
            }
        }
    `)

    const {
        contact_us_title: { text: title },
        contact_us_sub: { text: subTitle },
        contact_us_link: { url: link },
        contact_us_btn: { text: btnText },
    } = data.prismicBootcampPrimer.data
    return (
        <Container>
            <H1>{title}</H1>
            <P>{subTitle}</P>
            {/* TODO: Check if this should be using QueryLink instead of a window.location hack */}
            <StyledButton
                buttonStyle="primary-light"
                type="button"
                onClick={() => {
                    window.location = link
                }}
            >
                {btnText}
            </StyledButton>
        </Container>
    )
}

export default ContactUs
