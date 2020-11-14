import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { gray, purple, black } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.lightest};
    padding-bottom: 96px;
    justify-content: center;

    @media (min-width: 840px) {
        padding-bottom: 96px;
    }
`

const Header = styled.h1`
    text-align: center;
    font-weight: 800;
    font-size: 44px;
    line-height: 48px;
    width: 100%;
    max-width: 366px;
    color: ${black};

    @media(min-width: 1200px){
        font-size: 56px;
        line-height: 56px;
        max-width: 500px;
    }
`

const SubHeader = styled.h4`
    color: ${purple.darker};
    font-weight: 800;
    font-size: 14px;
    line-height: 20px;
    margin-top: 16px;
    text-align: center;

    @media(min-width: 1200px){
        margin-top: 32px;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.25px;
    }
`

const Description = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${gray.darker};
    margin-top: 16px;
    width: 100%;
    max-width: 366px;

    @media(min-width: 1200px){
        font-size: 20px;
        line-height: 28px;
        max-width: 848px;
    }
`

export default function RespondingHeader() {
    const data = useStaticQuery(graphql`
        {
            prismicResponsiveLearning {
                data {
                    responding_description {
                        text
                    }
                    responding_header {
                        text
                    }
                    responding_subheader {
                        text
                    }
                }
            }
        }
    `)

    const {
        responding_description: { text: respondingDescription },
        responding_header: { text: respondingHeader },
        responding_subheader: { text: respondingSubheader }
    } = data.prismicResponsiveLearning.data
    
    return (
        <Container>
            <Header>{respondingHeader}</Header>
            <SubHeader>{respondingSubheader}</SubHeader>
            <Description>{respondingDescription}</Description>
        </Container>
    )
}
