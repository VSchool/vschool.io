import React from "react"
import styled from "styled-components"
import {} from "@vschool/lotus"
import { graphql, useStaticQuery } from "gatsby"

const Header = styled.header`
    background-color: #e3e8fa;
`

const H1 = styled.h1`
    color: #21201f;
    font-family: "aktiv-grotesk";
    font-size: 36px;
    font-weight: 900;
    line-height: 40px;
    text-align: center;
    padding: 68px 24px 0px 24px;
    margin: 0;

    @media (min-width: 600px) {
        font-size: 40px;
        margin-left: 32px;
        margin-right: 32px;
    }

    @media (min-width: 840px) {
        font-size: 44px;
        line-height: 46px;
    }

    @media (min-width: 960px) {
        font-size: 52px;
        margin-left: 80px;
        margin-right: 80px;
        margin-bottom: 8px;
        line-height: 52px;
    }

    @media (min-width: 1200px) {
        font-size: 56px;
        margin-left: 100px;
        margin-right: 100px;
        line-height: 56px;
    }
`

const P = styled.p`
    color: #514f4b;
    font-family: aktiv-grotesk;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
    margin: 16px 24px 24px 24px;

    @media (max-width: 840px) and (min-width: 600px) {
        font-size: 18px;
        margin-left: 32px;
        margin-right: 32px;
    }

    @media (min-width: 840px) {
        font-size: 20px;
        margin-left: 48px;
        margin-right: 48px;
        line-height: 28px;
    }

    @media (min-width: 960px) {
        margin-left: 124px;
        margin-right: 124px;
        padding-left: 56px;
        padding-right: 56px;
    }

    @media (min-width: 1200px) {
        margin-left: 200px;
        margin-right: 200px;
    }
`

const H5 = styled.h5`
    color: #21201f;
    font-family: aktiv-grotesk-extended;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    margin: 0px 84px 0px 84px;
    letter-spacing: 0;

    @media (min-width: 840px) {
        margin-bottom: 16px;
    }
`

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
`

function HeroHeader() {
  const {
    prismicBootcampPrimer: {
      data: {
        main_page_title: {
          text: title
        },
        subtitle: {
          text: sub
        },
        invitation_text: {
          text: invite
        }
      }
    }
  } = useStaticQuery(graphql`
    {
      prismicBootcampPrimer {
        data {
          subtitle {
            text
          }
          main_page_title {
            text
          }
          invitation_text {
            text
          }
        }
      }
    }
  `)
    return (
        <Header>
            <H1>{ title }</H1>
            <P>{ sub }</P>
            <FlexContainer>
                <H5>{ invite }</H5>
            </FlexContainer>
        </Header>
    )
}

export default HeroHeader
