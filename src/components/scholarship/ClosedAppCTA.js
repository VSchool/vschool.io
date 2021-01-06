import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { blue, Button } from "@vschool/lotus"
import Link from "../shared/QueryLink"

const Container = styled.section`
    background-color: ${blue.lightest};
    padding-top: 224px;
    padding-bottom: 64px;
    margin-top: -168px;
    margin-bottom: 64px;

    @media (min-width: 800px) {
        margin-top: -124px;
        margin-bottom: 96px;
        padding-bottom: 96px;
    }
`

const Header = styled.h3`
    margin-bottom: 48px;
    text-align: center;
`

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 800px) {
        flex-direction: row;
    }
`

const StyledButton = styled(Button)`
    margin: 24px;
`

export default function ClosedAppCTA() {
    const data = useStaticQuery(graphql`
        {
            prismicScholarshipPageSharedData {
                data {
                    closed_cta_header {
                        text
                    }
                    closed_other_scholarships_text {
                        text
                    }
                    closed_other_scholarships_url {
                        url
                    }
                    closed_reg_app_text {
                        text
                    }
                    closed_reg_app_url {
                        url
                    }
                }
            }
        }
    `)

    const {
        closed_cta_header: { text: header },
        closed_other_scholarships_text: { text: otherScholarshipsText },
        closed_other_scholarships_url: { url: otherScholarshipsUrl },
        closed_reg_app_text: { text: regAppText },
        closed_reg_app_url: { url: regAppUrl },
    } = data.prismicScholarshipPageSharedData.data

    return (
        <Container>
            <Header>{header}</Header>
            <ButtonsContainer>
                <Link to={otherScholarshipsUrl}>
                    <StyledButton size="lg" buttonStyle="secondary-dark">
                        {otherScholarshipsText}
                    </StyledButton>
                </Link>
                <Link to={regAppUrl} target="_blank">
                    <StyledButton size="lg">{regAppText}</StyledButton>
                </Link>
            </ButtonsContainer>
        </Container>
    )
}
