import React from "react"
import styled from "styled-components"
import { blue, black, gray, Button } from "@vschool/lotus"
import QueryLink from "../shared/QueryLink.js"

const Container = styled.div`
    background-color: ${gray.lighter};
    padding-top: 32px;
    padding-left: 24px;
    padding-right: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 208px;

    @media (max-width: 400px) {
        padding-left: 16px;
        padding-right: 16px;
        padding-top: 56px;
    }

    @media (min-width: 600px) {
        padding-left: 48px;
        padding-right: 48px;
    }

    @media (min-width: 1200px) {
        padding-right: 96px;
        padding-left: 96px;
        padding-top: 120px;
    }
`

const Header = styled.h2`
    font-family: "aktiv-grotesk";
    font-weight: 900;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
    color: ${black};
    width: 100%;
    max-width: 240px;

    @media (min-width: 1200px) {
        max-width: 100%;
        font-size: 56px;
        line-height: 56px;
    }
`

const InfoContainer = styled.div`
    width: 100%;
    max-width: 380px;
    padding: 16px;
    background-image: ${({ bgImg }) => `url(${bgImg})`};
    background-size: cover;
    margin-top: 32px;

    @media (min-width: 1200px) {
        margin-top: 48px;
        max-width: 642px;
        padding: 21px 16px;
    }
`

const WhiteBackground = styled.div`
    background-color: ${gray.lighter};
    padding: 16px 56px;

    @media (max-width: 350px) {
        padding: 16px;
    }
`

const NextSession = styled.p`
    font-family: "aktiv-grotesk-extended";
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.5px;
    color: ${black};
`

const StartDate = styled.p`
    font-family: "aktiv-grotesk";
    font-weight: 800;
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    color: ${blue.base};
    margin-top: 4px;
`

const SubHeader = styled.p`
    font-family: "aktiv-grotesk-extended";
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: ${blue.base};
    width: 270px;
    font-weight: 800;
    margin-top: 32px;

    @media (min-width: 1200px) {
        max-width: 100%;
        margin-top: 48px;
        width: 100%;
        font-size: 16px;
        line-height: 24px;
    }
`

const StyledLink = styled(QueryLink)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
`

const StyledButton = styled(Button)`
    font-family: "aktiv-grotesk-extended";
    width: 100%;
    max-width: 315px;
    margin-top: 32px;

    @media (min-width: 1200px) {
        margin-top: 48px;
        height: 56px;
        max-height: 56px;
    }
`

export default function CTA(props) {
    const {
        header,
        bgImg,
        startDate,
        subHeader,
        link,
        btnText,
        nextSession,
    } = props
    return (
        <Container>
            <Header>{header}</Header>
            <InfoContainer bgImg={bgImg}>
                <WhiteBackground>
                    <NextSession>{nextSession}</NextSession>
                    <StartDate>
                        {startDate.document[0].data.start_date}
                    </StartDate>
                </WhiteBackground>
            </InfoContainer>
            <SubHeader>{subHeader}</SubHeader>
            <StyledLink to={link}>
                <StyledButton>{btnText}</StyledButton>
            </StyledLink>
        </Container>
    )
}
