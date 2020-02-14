import React from "react"
import styled from "styled-components"
import { gray, black, Button } from "@vschool/lotus"

const Container = styled.div`
    background-color: ${gray.light};
    padding-top: 96px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 96px;

    @media (min-width: 600px) {
        padding-left: 32px;
        padding-right: 32px;
    }

    @media (min-width: 840px) {
        padding-left: 40px;
        padding-right: 40px;
    }

    @media (min-width: 1000px) {
        padding-top: 160px;
        padding-bottom: 160px;
    }

    @media (min-width: 1200px) {
        padding-left: 88px;
        padding-right: 88px;
    }
`

const H1 = styled.h1`
    font-family: "aktiv-grotesk";
    font-size: 32px;
    font-weight: 900;
    line-height: 38px;
    text-align: center;
    color: ${black};
    margin-bottom: 16px;
    width: 460px;

    @media (min-width: 600px) {
        font-size: 36px;
    }

    @media (min-width: 840px) {
        font-size: 40px;
        line-height: 48px;
        width: 600px;
    }

    @media (min-width: 1000px) {
        margin-bottom: 32px;
    }

    @media (min-width: 1200px) {
        font-size: 44px;
        width: 946px;
        padding-left: 160px;
        padding-right: 160px;
        line-height: 48px;
    }
`

const P = styled.p`
    color: ${gray.darker};
    font-family: "aktiv-grotesk";
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
    margin-bottom: 24px;
    width: 460px;

    @media (min-width: 840px) {
        font-size: 18px;
        line-height: 26px;
        width: 600px;
    }

    @media (min-width: 1000px) {
        margin-bottom: 40px;
    }

    @media (min-width: 1200px) {
        font-size: 20px;
        line-height: 28px;
        width: 598px;
    }
`

const StyledButton = styled(Button)`
    width: 312px;
    font-family: "aktiv-grotesk-extended";
    font-weight: 800;
    outline: none;

    @media (min-width: 300px) and (max-width: 380px) {
        width: 286px;
    }

    @media (min-width: 1200px) {
        font-size: 16px;
        letter-spacing: 1.14px;
        line-height: 24px;
        height: 56px;
    }
`

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
`

function SubmitAResume(props) {
    const { title, sub, btnText } = props
    return (
        <Container>
            <FlexContainer>
                <H1>{title}</H1>
            </FlexContainer>
            <FlexContainer>
                <P>{sub}</P>
            </FlexContainer>
            <FlexContainer>
                <a href="mailto:info@vschool.io">
                    <StyledButton buttonStyle="primary-dark">
                        {btnText}
                    </StyledButton>
                </a>
            </FlexContainer>
        </Container>
    )
}

export default SubmitAResume
