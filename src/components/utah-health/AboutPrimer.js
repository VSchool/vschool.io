import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { gray, black } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.lighter};
    padding-bottom: 96px;
    padding-top: 64px;
    justify-content: center;
`

const Header = styled.h2`
    font-weight: 800;
    font-size: 24px;
    line-height: 30px;
    color: ${black};
    width: 100%;
    max-width: 366px;

    @media (min-width: 1200px) {
        font-size: 44px;
        line-height: 48px;
        max-width: 934px;
        font-weight: 900;
    }
`

const InfoContainer = styled.div`
    width: 100%;
    max-width: 366px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1200px) {
        flex-direction: row;
        justify-content: center;
        max-width: 934px;
        margin-top: 48px;

        & p:nth-child(2) {
            margin-left: 60px;
        }
    }
`

const Info = styled.p`
    font-size: 16px;
    line-height: 24px;
    color: ${gray.darker};
    margin-top: 24px;

    @media (min-width: 1200px) {
        max-width: 468px;
        font-size: 20px;
        line-height: 28px;
        margin-top: 0;
    }
`

export default function AboutPrimer(props) {
    const data = useStaticQuery(graphql`
        {
            prismicUofuPrimer {
                data {
                    about_primer_header {
                        text
                    }
                    about_primer2 {
                        text
                    }
                    about_primer1 {
                        text
                    }
                }
            }
        }
    `)
    const {
        about_primer_header: { text: header },
        about_primer1: { text: info1 },
        about_primer2: { text: info2 },
    } = data.prismicUofuPrimer.data

    return (
        <Container>
            <Header>{header}</Header>
            <InfoContainer>
                <Info>{info1}</Info>
                <Info>{info2}</Info>
            </InfoContainer>
        </Container>
    )
}
