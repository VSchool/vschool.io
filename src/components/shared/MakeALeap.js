import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { black, white, orange, Button } from "@vschool/lotus"
import Link from "../shared/QueryLink"

const Container = styled.section`
    background-color: ${props => props.bgColor};
    padding-top: 96px;
    padding-bottom: 96px;

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
        font-size: 56px;
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

const SessionText = styled.h3`
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

export default function CallToAction(props) {
    const data = useStaticQuery(graphql`
        {
            allPrismicStartDate(
                sort: { order: ASC, fields: data___start_date }
            ) {
                edges {
                    node {
                        data {
                            start_date(formatString: "MMM Do, YYYY")
                        }
                    }
                }
            }
            prismicTiffin {
                data {
                    make_a_leap_btn {
                        text
                    }
                    make_a_leap_header {
                        text
                    }
                    make_a_leap_link {
                        url
                    }
                    make_a_leap_sub {
                        text
                    }
                    next_session {
                        text
                    }
                    scholarship_details {
                        detail_title {
                            text
                        }
                        detail_date(formatString: "MMM Do, YYYY")
                        detail_info {
                            text
                        }
                    }
                }
            }
        }
    `)

    const {
        make_a_leap_btn: { text: makeALeapBtn },
        make_a_leap_header: { text: makeALeapHeader },
        make_a_leap_link: { url: makeALeapLink },
        make_a_leap_sub: { text: makeALeapSub },
        next_session: { text: nextSession },
    } = data.prismicTiffin.data
    const startDates = data.allPrismicStartDate.edges.map(
        obj => obj.node.data.start_date
    )
    const nextStartDate = startDates[0]

    const { bgColor, sessionColor } = props

    return (
        <Container bgColor={bgColor} id="schedule-appt">
            <H1>{makeALeapHeader}</H1>
            <SessionContainer sessionColor={sessionColor}>
                <NextSession>
                    <SessionHeader>{nextSession}:</SessionHeader>
                    <SessionDate>{nextStartDate}</SessionDate>
                </NextSession>
            </SessionContainer>
            <Options>{makeALeapSub}</Options>
            <FlexContainer>
                <Link to={makeALeapLink}>
                    <StyledButton buttonStyle="primary-dark">
                        {makeALeapBtn}
                    </StyledButton>
                </Link>
            </FlexContainer>
        </Container>
    )
}
