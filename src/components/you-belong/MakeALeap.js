import React from "react"
import styled from "styled-components"
import { black, white, orange, Button } from "@vschool/lotus"

const Container = styled.div`
    background-color: ${props => props.bgColor};
    padding-top: 96px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 96px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 320px) and (max-width: 400px) {
        padding-left: 8px;
        padding-right: 8px;
    }

    @media (min-width: 1200px) {
        padding-top: 160px;
        padding-bottom: 160px;
    }
`
const H1 = styled.h1`
    color: ${black};
    font-family: "aktiv-grotesk";
    font-size: 44px;
    font-weight: 900;
    line-height: 48px;
    text-align: center;
    margin-bottom: 32px;
    max-width: 500px;
    width: 100%;


    @media (min-width: 320px) and (max-width: 414px) {
        font-size: 38px;
        max-width: 400px;
    }

    @media (min-width: 860px) {
        font-size: 48px;
        line-height: 52px;
        margin-bottom: 38px;
        max-width: 675px;
    }

    @media (min-width: 1200px) {

        line-height: 56px;
        margin-bottom: 48px;
    }
`

const SessionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 114px;
    width: 367px;
    margin-right: auto;
    margin-left: auto;
    background-color: ${props => props.sessionColor};

    @media (min-width: 320px) and (max-width: 414px) {
        width: 300px;
    }

    @media (min-width: 900px) {
        width: 643px;
        background-image: url(${props => props.sessionBGLarge});
    }
`

const NextSession = styled.div`
    width: 326px;
    height: 72px;
    background-color: ${white};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media (min-width: 320px) and (max-width: 414px) {
        width: 250px;
        flex-direction: column;
    }

    @media (min-width: 900px) {
        width: 608px;
    }
`

const SessionText = styled.h5`
    font-family: "aktiv-grotesk";
    font-size: 20px;
    font-weight: 800;
    line-height: 26px;
    text-align: center;
`

const SessionHeader = styled(SessionText)`
    color: ${black};
    padding-bottom: 2px;
    padding-right: 8px;
`

const SessionDate = styled(SessionText)`
    color: ${orange.dark};
`

const Options = styled.h3`
    color: ${black};
    font-family: "aktiv-grotesk-extended";
    font-size: 16px;
    font-weight: 800;
    line-height: 24px;
    text-align: center;
    margin-top: 16px;
    margin-bottom: 32px;

    @media (min-width: 860px) {
        margin-top: 24px;
        margin-bottom: 48px;
    }
`

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledButton = styled(Button)`
    width: 318px;
    font-family: "aktiv-grotesk-extended";
    font-weight: 800;
    outline: none;

    @media (min-width: 320px) and (max-width: 400px) {
        width: 302px;
    }

    @media (min-width: 900px) {
        height: 56px;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 1.14px;
    }
`

const StrikeThrough = styled.span`
  text-decoration: line-through;
`

export default function CallToAction(props) {
    const {
        title,
        sub,
        btnText,
        nextSession,
        bgColor,
        sessionColor,
        startDate,
        link,
    } = props
    const titleArr = title.split(" ")
    const part1 = titleArr.slice(0, 2).join(' ')
    const part2 = ` ${titleArr[2]} `
    const part3 = ` ${titleArr.slice(3).join(' ')}`
    return (
        <Container bgColor={bgColor}>
            <H1>{part1}<StrikeThrough>{part2}</StrikeThrough>{part3}</H1>
            <SessionContainer sessionColor={sessionColor}>
                <NextSession>
                    <SessionHeader>{nextSession}:</SessionHeader>
                    <SessionDate>{startDate}</SessionDate>
                </NextSession>
            </SessionContainer>
            <Options>{sub}</Options>
            <FlexContainer>
                <a href={link}>
                    <StyledButton buttonStyle="primary-dark">
                        {btnText}
                    </StyledButton>
                </a>
            </FlexContainer>
        </Container>
    )
}
