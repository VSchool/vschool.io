import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { blue, gray, Button } from "@vschool/lotus"
import { navigate } from "@reach/router"
import QueryLink from "../shared/QueryLink.js"

const Container = styled.section`
    background-color: ${gray.lighter};
    padding-top: 0;
    margin-bottom: -90px;

    & > .date-box {
        width: 97%;
        margin: 30px;

        @media (min-width: 800px) {
            max-width: 645px;
        }
    }

    @media (min-width: 800px) {
        padding-top: 0;
    }
`

const Title = styled.h1`
    font-size: 44px;
    line-height: 48px;
    text-align: center;
    color: ${gray.darkest};

    @media (min-width: 800px) {
        font-size: 56px;
        line-height: 56px;
    }
`

const DateContainer = styled.div`
    background-color: ${gray.lightest};
    padding: 20px;
    margin: 20px;

    @media (min-width: 800px) {
        text-align: center;
    }
`

const DateTitle = styled.h4`
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    color: ${gray.darkest};

    @media (min-width: 800px) {
        display: inline-block;
    }
`

const DateText = styled.p`
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    color: ${blue.base};

    @media (min-width: 800px) {
        display: inline-block;
        margin-left: 10px;
    }
`

const BlueContainer = styled.section`
    background-color: ${blue.lightest};
    padding-top: 100px;
    padding-bottom: 74px;

    & > .how-box {
        width: 97%;
        margin: 30px;

        @media (min-width: 800px) {
            max-width: 1024px;
        }
    }
`

const HowContainer = styled.div`
    background-color: ${gray.lightest};
    padding: 20px;
    margin: 20px;

    @media (min-width: 800px) {
        text-align: center;
        padding: 40px;
    }
`

const Benefits = styled.h3`
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    text-transform: uppercase;
    color: ${gray.darkest};
`

const HowTitle = styled.h3`
    font-weight: 800;
    font-size: 32px;
    line-height: 40px;
    padding: 15px 0;
    color: ${gray.darkest};

    @media (min-width: 800px) {
        font-size: 44px;
        line-height: 48px;
        text-align: left;
    }
`

const StepContainer = styled.div`
    @media (min-width: 800px) {
        display: flex;
        text-align: left;
        margin: 20px 0;
    }
`

const Step = styled.div`
    padding: 20px 0;

    @media (min-width: 800px) {
        padding: 20px;
    }
`

const StepNum = styled.p`
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    padding-bottom: 15px;
    color: ${blue.base};
`

const StepText = styled.h4`
    font-size: 24px;
    line-height: 30px;
    padding-bottom: 15px;
    color: ${gray.darkest};
`

const StepInfo = styled.p`
    font-size: 16px;
    line-height: 24px;
    color: ${gray.darker};
`

const StyledButton = styled(Button)`
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 1px;
    color: ${gray.lightest};
    max-width: 300px;
    margin: 40px 0;
    width: 100%;
    display: block;

    @media (min-width: 800px) {
        margin: 0;
        margin-left: auto;
    }
`

const BottomContainer = styled.section`
    background-color: ${blue.light};
    padding: 23px 0;
`

const DevContainer = styled.div`
    text-align: center;

    @media (min-width: 800px) {
        text-align: initial;
    }
`

const ApplyDev = styled.span`
    font-size: 18px;
    line-height: 26px;
    text-align: right;
    margin-right: 20px;
    font-weight: 600;
    color: ${gray.darkest};
    margin-bottom: 10px;
    display: inline-block;

    @media (min-width: 800px) {
        margin-bottom: 0;
        display: inline;
    }
`

const ApplyButton = styled(Button)`
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 1px;
    color: ${gray.darkest};
    background-color: ${gray.lightest};
    height: 32px;
    width: 160px;
`

const Apply = props => {
    const data = useStaticQuery(graphql`
        {
            prismicCoursePageSharedData {
                data {
                    apply_benefits {
                        text
                    }
                    apply_date_background {
                        url
                    }
                    apply_date_text {
                        text
                    }
                    apply_date_title {
                        text
                    }
                    apply_dev {
                        text
                    }
                    apply_dev_button {
                        text
                    }
                    apply_dev_link {
                        url
                    }
                    apply_how_background {
                        url
                    }
                    apply_how_button {
                        text
                    }
                    apply_how_link {
                        url
                    }
                    apply_how_title {
                        text
                    }
                    apply_steps {
                        step_info {
                            text
                        }
                        step_number {
                            text
                        }
                        step_text {
                            text
                        }
                    }
                    apply_title {
                        text
                    }
                }
            }
            prismicStartDate {
                data {
                    start_date(formatString: "MMM Do, YYYY")
                }
            }
        }
    `)
    
    const { start_date } = data.prismicStartDate.data

    const {
        apply_benefits: { text: appBenefits },
        apply_date_background: { url: dateUrl },
        apply_date_text: { text: dateText },
        apply_date_title: { text: dateTitle },
        apply_how_background: { url: howUrl },
        apply_how_button: { text: howBtn },
        apply_how_title: { text: howTitle },
        apply_steps,
        apply_title: { text: appTitle },
    } = data.prismicCoursePageSharedData.data

    const steps = apply_steps.map(
        ({
            step_info: { text: stepInfo },
            step_number: { text: stepNum },
            step_text: { text: stepText },
        }) => (
            <Step>
                <StepNum>{stepNum}</StepNum>
                <StepText>{stepText}</StepText>
                <StepInfo>{stepInfo}</StepInfo>
            </Step>
        )
    )
    console.log(dateText, dateTitle)

    const {
        apply_other: { text: other },
        apply_other_button: { text: otherBtn },
        apply_other_link: { url: otherUrl },
    } = props

    return (
        <>
            <Container>
                <Title>{appTitle}</Title>
                <div
                    style={{ backgroundImage: `url(${dateUrl})` }}
                    className="date-box"
                >
                    <DateContainer>
                        <DateTitle>{dateTitle}</DateTitle>
                        <DateText>{start_date}</DateText>
                    </DateContainer>
                </div>
            </Container>
            <BlueContainer>
                <Benefits>{appBenefits}</Benefits>
                <div
                    style={{ backgroundImage: `url(${howUrl})` }}
                    className="how-box"
                >
                    <HowContainer>
                        <HowTitle>{howTitle}</HowTitle>
                        <StepContainer>{steps}</StepContainer>
                        <QueryLink to="https://calendly.com/v-school/apply">
                            <StyledButton>{howBtn}</StyledButton>
                        </QueryLink>
                    </HowContainer>
                </div>
            </BlueContainer>
            <BottomContainer>
                <DevContainer>
                    <ApplyDev>{other}</ApplyDev>
                    <ApplyButton onClick={() => navigate(otherUrl)}>
                        {otherBtn}
                    </ApplyButton>
                </DevContainer>
            </BottomContainer>
        </>
    )
}

export default Apply
