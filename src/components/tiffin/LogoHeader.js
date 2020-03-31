import React from "react"
import styled from "styled-components"
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

export default function LogoHeader(props) {
    const { logo1, logo2 } = props
    return (
        <Container>
            <LogoContainer>
                <Logo src={logo1} />
            </LogoContainer>
            <LogoContainer>
                <Logo src={logo2} />
            </LogoContainer>
        </Container>
    )
}
