import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { black, gray } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.light};
    padding-top: 64px;
    padding-bottom: 64px;

    @media (min-width: 840px) {
        padding-bottom: 96px;
        padding-top: 96px;
    }
`

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
`

const H1 = styled.h1`
    font-size: 36px;
    font-weight: 900;
    line-height: 40px;
    text-align: center;
    color: ${black};
    margin-bottom: 16px;

    @media (min-width: 600px) {
        font-size: 40px;
    }

    @media (min-width: 840px) {
        font-size: 48px;
        line-height: 48px;
    }

    @media (min-width: 1200px) {
        font-size: 56px;
        padding-left: 160px;
        padding-right: 160px;
        line-height: 56px;
    }
`

const P = styled.p`
    color: ${gray.darker};
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
    margin-bottom: 24px;
    width: 390px;

    @media (min-width: 840px) {
        font-size: 18px;
        line-height: 26px;
        width: 600px;
    }

    @media (min-width: 1200px) {
        font-size: 20px;
        line-height: 28px;

        width: 598px;
    }
`

export default function Header() {
    const data = useStaticQuery(graphql`
        {
        prismicCareers {
            data {
            careers_header {
                text
            }
            careers_sub_header {
                text
            }
            header_invite {
                text
            }
            }
        }
        }
    `)

    const {
        careers_header: { text: header },
        careers_sub_header: { text: subHeader },
        header_invite: { text: invite }
    } = data.prismicCareers.data

    return (
        <Container>
            <FlexContainer>
                <H1>{header}</H1>
            </FlexContainer>
            <FlexContainer>
                <P>{subHeader}</P>
            </FlexContainer>
            <FlexContainer>
                <P>{invite}</P>
            </FlexContainer>
        </Container>
    )
}
