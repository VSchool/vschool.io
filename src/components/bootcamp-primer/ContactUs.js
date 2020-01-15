import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { blue, black, gray, white } from "@vschool/lotus"

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

const Button = styled.a`
    height: 48px;
    width: 318px;
    border: 2px solid ${black};
    background-color: ${white};
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    color: ${black};
    font-family: "aktiv-grotesk-extended";
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;
    line-height: 18px;
    box-shadow: 4px 4px 0 0 rgba(0, 0, 0, 0.25);

    :hover {
      transform: translate(2px, 2px);
      box-shadow: 2px 2px 0 0 rgba(100,100,100, 0.5);
    }

    :active {
      transform: translate(4px, 4px);
      box-shadow: inset 1px 1px #eee9;
      border-top: 1px solid #eee9;
      border-left: 1px solid #eee9;
    }
`

function ContactUs() {
  const {
    prismicBootcampPrimer: {
      data: {
        contact_us_title: {
          text: title
        },
        contact_us_sub: {
          text: sub
        },
        contact_us_btn: {
          text: btnText
        },
        contact_us_link: {
          url: link
        }
      }
    }
  } = useStaticQuery(graphql`
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
    return (
        <Container>
            <H1>{ title }</H1>
            <P>{ sub }</P>
            <Button href={ link }>
                { btnText }
            </Button>
        </Container>
    )
}

export default ContactUs