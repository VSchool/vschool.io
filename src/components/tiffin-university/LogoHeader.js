import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { blue } from "@vschool/lotus"

const Container = styled.div`
    background-color: ${blue.lightest};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px 24px 0 24px;

    & > div:nth-child(2) {
        margin-left: 48px;
        max-width: 161px;
    }

    @media (max-width: 500px) {
        & > div:nth-child(2) {
            margin-left: 24px;
        }
    }
`

const LogoContainer = styled.div``

const Logo = styled.img`
    width: 100%;
    max-width: 209px;
`

export default function LogoHeader() {
    const data = useStaticQuery(graphql`
        {
            prismicTiffin {
                data {
                    tf_logo {
                        url
                    }
                    vschool_logo {
                        url
                    }
                }
            }
        }
    `)

    const {
        tf_logo: { url: tfLogo },
        vschool_logo: { url: vsLogo },
    } = data.prismicTiffin.data

    return (
        <Container>
            <LogoContainer>
                <Logo src={tfLogo} />
            </LogoContainer>
            <LogoContainer>
                <Logo src={vsLogo} />
            </LogoContainer>
        </Container>
    )
}
