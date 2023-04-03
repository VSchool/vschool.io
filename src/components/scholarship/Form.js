import React, { useState } from "react"
import styled from "styled-components"

import { useStaticQuery, graphql, navigate } from "gatsby"
import { blue, gray, TextInput, Button } from "@vschool/lotus"

import { useLocation } from "@reach/router"


const Section = styled.section`
    padding-bottom: 24px;

    @media (min-width: 800px) {
        padding-bottom: 32px;
    }
`

const FormContainer = styled.div`
    background-color: ${blue.lightest};
    padding: 64px 24px 128px;
    border: 2px solid ${blue.base};
    width: 100%;
    max-width: 500px;

    @media (min-width: 800px) {
        padding: 64px 24px 128px;
    }
`

const Header = styled.h3`
    margin-bottom: 32px;
    text-align: center;
`

const DatesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: ${props => (props.$deadlinePast ? "0" : "64px")};
    @media (min-width: 800px) {
        flex-direction: column;
    }
`

const DateGroup = styled.div`
    text-align: center;
    margin-bottom: 24px;

    @media (min-width: 800px) {
        /* &:not(:last-child) {
            margin-right: 96px;
        } */
    }
`

const DateText = styled.h6`
    color: ${blue.base};
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 4px;

    @media (min-width: 800px) {
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 8px;
    }
`
const Date = styled.h5`
    color: ${gray.darker};
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    & > div {
        /* margin-bottom: 32px; */
    }

    @media (min-width: 800px) {
        flex-direction: column;

        & > div {
            /* margin-right: 16px; */
            margin-bottom: 0;
        }
    }
`

const Disclaimer = styled.p`
    color: ${gray.darker};
    font-size: 14px;
    line-height: 18px;
    margin-top: 16px;
    text-align: center;
`

const StyledButton = styled(Button)`
    margin-top: 64px;
    width: 100%;
`

export default function ApplicationForm(props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const {pathname} = useLocation()
    let shortPath = pathname.slice(pathname.indexOf('/', 2))
    // Getting pathname will tell which scholarship page we are on

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
         delays in the automation
        Submitting the form to Zapier adds a new ConvertKit subscriber and 
        adds them to a sequence which sends them the email with the URL. ConvertKit
        seems to take about 5 minutes to send the email, not including any intentional 
        */
        try {
            // if its forever scholarship, we want to send them straight to apply instead of the regular process.
            const scholarshipName = props.scholarship_name.text
            const nextStep = shortPath.includes('forever-scholarship') || scholarshipName === 'Fresh Start Scholarship' ? "schedule" : "background"
            const convertKitTag = props.convertkit_tag
            const options = {
                method: "POST",
                body: JSON.stringify({ name, email, phone, 'Scholarship Name': scholarshipName, nextStep, convertKitTag }),
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

            nextStep === "background" ?
            navigate(`/scholarships/application/background-info`, {
                state: { name, email, scholarshipName },
            }) :
            navigate(`/scholarships/application/schedule`, {
                state: { name, email, scholarshipName },
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
                            <TextInput
                                type="text"
                                label="Name"
                                name="name"
                                placeholder="First and Last name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                required
                                validationText="auto-generate"
                            />
                            <TextInput
                                type="email"
                                label="Email"
                                name="email"
                                placeholder="joe@example.com"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                                validationText="auto-generate"
                            />
                            <TextInput
                                type="phone"
                                label="Phone"
                                name="phone"
                                placeholder="801-555-1234"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                validationText="auto-generate"
                            />
                            <StyledButton size="lg">{buttonText}</StyledButton>
                        </Form>
                        <Disclaimer>{disclaimer}</Disclaimer>
                    </>
                )}
            </FormContainer>
        </Section>
    )
}
