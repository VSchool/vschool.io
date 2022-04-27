import React, { useState } from "react"
import styled from "styled-components"

import { useStaticQuery, graphql, navigate } from "gatsby"
import { blue, gray, TextInput, Button } from "@vschool/lotus"

const Section = styled.section`
    padding: 64px 20px 24px 20px;

    @media (min-width: 1200px) {
        padding: 48px 88px 24px 88px;
    }
`

const FormContainer = styled.div`
    padding: 40px 24px;
    width: 100%;
    background-color: ${blue.lightest};
    border: 2px solid ${blue.base};

    @media (min-width: 800px) {
        padding: 32px 288px;
    }
`

const Header = styled.h3`
    margin-bottom: 48px;
    font-weight: 900;
    font-size: 32px;
    line-height: 40px;
    text-align: center;

    @media (min-width: 1200px) {
        font-size: 44px;
        line-height: 48px;    
    }
`

const DatesContainer = styled.div`
    margin-bottom: ${props => (props.$deadlinePast ? "0" : "48px")};
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 800px) {
        flex-direction: row;
    }
`

const DateGroup = styled.div`
    &:first-child {
        margin-bottom: 24px;
    }

    @media (min-width: 800px) {
        &:not(:last-child) {
            margin-right: 96px;
            margin-bottom: 0px;
        }
    }
`

const DateText = styled.h6`
    margin-bottom: 4px;
    font-weight: 800;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    text-align: center;
    color: ${blue.base};

    @media (min-width: 1200px) {
        margin-bottom: 8px;
        font-size: 16px;
        line-height: 24px;
    }
`
const Date = styled.h5`
    font-weight: 800;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: ${gray.darker};
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const InputsWrapper = styled.div`
    margin-bottom: 8px;
    width: 100%;

    & > div {
        margin: 0px;
    }

    & > :last-child {
        margin-bottom: 16px;
    }

    @media (min-width: 1200px) {
        display: flex;
        justify-content: space-between;
    }
`

const Disclaimer = styled.p`
    margin-top: 16px;  
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-align: center; 
    color: ${gray.darker};

    @media (min-width: 1200px) {
        margin-top: 32px;
    }
`

const StyledButton = styled(Button)`

    @media (max-width: 599px) {
        width: 100%;
    }
`

const StyledTextInput = styled(TextInput)`

    @media (min-width: 1200px) {
        width: 325px;
    }
`

export default function ApplicationForm(props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    // TODO: Submit the data somewhere.
    // Chat with Cody about what happens after that.
    async function handleSubmit(e) {
        e.preventDefault()
        /**
        TODO:
        (1) Add the person to a ConvertKit sequence so they get the email with the URL to the background info form
        (2) Send them an email with the link to the background info form (email in URL params)
        (3) Navigate them to the background info form with their email remembered in state
        */

        /**
        Submitting the form to Zapier adds a new ConvertKit subscriber and 
        adds them to a sequence which sends them the email with the URL. ConvertKit
        seems to take about 5 minutes to send the email, not including any intentional 
        delays in the automation
        */

        try {
            const nextStep = "background"
            const scholarshipName = props.scholarship_name.text
            const convertKitTag = props.convertkit_tag
            const options = {
                method: "POST",
                body: JSON.stringify({ name, email, nextStep, convertKitTag }),
            }
            // Subscribe them to ConvertKit with specific tag
            convertKitTag && await fetch(
                process.env.GATSBY_CONVERTKIT_SIGNUP_ZAPIER_WEBHOOK_URL,
                options
            )
            // Progress applicant to next step.
            await fetch(
                process.env.GATSBY_SCHOLARSHIP_APP_ZAPIER_WEBHOOK_URL,
                options
            )

            localStorage.setItem("scholarshipAppNextStep", nextStep)
            localStorage.setItem("scholarshipName", scholarshipName)
            localStorage.setItem("application-email", email)

            navigate(`/scholarships/application/background-info`, {
                state: { email, scholarshipName },
            })
        } catch (err) {
            console.error(err.message)
        }
    }

    const data = useStaticQuery(graphql`
        {
            prismicScholarshipPageSharedData {
                data {
                    form_title {
                        text
                    }
                    form_disclaimer {
                        text
                    }
                    form_button_text {
                        text
                    }
                }
            }
        }
    `)

    const {
        form_title: { text: title },
        form_disclaimer: { text: disclaimer },
        form_button_text: { text: buttonText },
    } = data.prismicScholarshipPageSharedData.data

    const {
        deadline_text: { text: deadlineText },
        deadline_date: deadlineDate,
        winner_announced_text: { text: winnerText },
        winner_announced_date: winnerDate,
        deadlinePast,
    } = props

    // Not all scholarships will have the data for these dates
    const showDates =
        (deadlineText && deadlineDate) || (winnerText && winnerDate)

    return (
        <Section>
            <FormContainer>
                {deadlinePast ? (
                    <Header>Scholarship Application Closed</Header>
                ) : (
                    <Header>{title}</Header>
                )}
                {showDates && (
                    <DatesContainer $deadlinePast={deadlinePast}>
                        {deadlineText && deadlineDate && (
                            <DateGroup>
                                <DateText>{deadlineText}</DateText>
                                <Date>{deadlineDate}</Date>
                            </DateGroup>
                        )}
                        {winnerText && winnerDate && (
                            <DateGroup>
                                <DateText>{winnerText}</DateText>
                                <Date>{winnerDate}</Date>
                            </DateGroup>
                        )}
                    </DatesContainer>
                )}
                {!deadlinePast && (
                    <>
                        <Form id="application-form" onSubmit={handleSubmit}>
                            <InputsWrapper>
                                <StyledTextInput
                                    type="text"
                                    label="Name"
                                    name="name"
                                    placeholder="Enter full name"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    required
                                    validationText="auto-generate"
                                />
                                <StyledTextInput
                                    type="email"
                                    label="Email"
                                    name="email"
                                    placeholder="Enter vaild email address"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                    validationText="auto-generate"
                                />
                            </InputsWrapper>
                            
                            <StyledButton size="lg">{buttonText}</StyledButton>
                        </Form>
                        <Disclaimer>{disclaimer}</Disclaimer>
                    </>
                )}
            </FormContainer>
        </Section>
    )
}
