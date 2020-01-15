import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { gray, black } from "@vschool/lotus"

const TextContainer = styled.div`
    background-color: ${gray.lighter};

    @media (min-width: 840px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
`

const FlexContainer = styled.div`
    @media (min-width: 1200px) {
        display: flex;
        justify-content: center;
        background-color: ${gray.lighter};
        padding: 0 48px;
    }
`

const H3 = styled.h3`
    background-color: ${gray.lighter};
    color: ${black};
    font-family: "aktiv-grotesk";
    font-weight: 900;
    font-size: 24px;
    line-height: 30px;
    padding: 24px;

    @media (min-width: 600px) {
        padding: 24px 48px;
        font-size: 28px;
    }

    @media (min-width: 840px) {
        font-size: 32px;
        line-height: 38px;
        grid-column: 1 / -1;
    }

    @media (min-width: 960px) {
        font-size: 40px;
        line-height: 42px;
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
    display: block;
    padding: 4px 24px 24px 24px;
    margin-bottom: 0;

    @media (min-width: 600px) {
        padding: 4px 48px 24px 48px;
        font-size: 18px;
    }

    @media (min-width: 960px) {
        font-size: 20px;
    }

    @media (min-width: 1200px) {
        line-height: 28px;
    }
`

function AboutPrimer() {
  const {
    prismicBootcampPrimer: {
      data: {
        about_primer_title: {
          text: title
        },
        about_primer_sub1: {
          text: sub1
        },
        about_primer_sub2: {
          text: sub2
        }
      }
    }
  } = useStaticQuery(graphql`
    {
      prismicBootcampPrimer {
        data {
          about_primer_title {
            text
          }
          about_primer_sub2 {
            text
          }
          about_primer_sub1 {
            text
          }
        }
      }
    }
  `)

    return (
        <FlexContainer>
            <TextContainer>
                <H3>{ title }</H3>
                <P>{ sub1 }</P>
                <P>{ sub2 }</P>
            </TextContainer>
        </FlexContainer>
    )
}

export default AboutPrimer
