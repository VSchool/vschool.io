import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import {
    blue,
    gray,
    Button,
    TextInput,
    Textarea,
    Checkbox,
    CheckboxRadioGroup,
} from "@vschool/lotus"

const Container = styled.section`
    margin-left: 18px;
    margin-right: 18px;
    padding-top: 64px;
    border: 2px solid ${blue.base};
    background-color: ${blue.lightest};
    margin-bottom: 96px;
`

const Title = styled.h2`
    text-align: center;
    margin-bottom: 24px;
`

const Subtitle = styled.h6`
    color: ${blue.dark};
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 80px;
`

const Form = styled.form`
    width: 100%;
    margin-bottom: 64px;
`

const StyledButton = styled(Button)`
    width: 100%;
    margin-bottom: 64px;
`

// TODO: Still needs state management, a place to submit to, and desktop styling
export default function GetInvolvedForm() {
    const data = useStaticQuery(graphql`
        {
            prismicDigitalFamilyPage {
                data {
                    form_button_text {
                        text
                    }
                    form_subtitle {
                        text
                    }
                    form_title {
                        text
                    }
                    body {
                        ... on PrismicDigitalFamilyPageBodyGetInvolvedMethod {
                            id
                            primary {
                                method_title {
                                    text
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    const {
        form_title: { text: title },
        form_subtitle: { text: subtitle },
        form_button_text: { text: buttonText },
        body,
        id,
    } = data.prismicDigitalFamilyPage.data

    const checkboxOptions = body.map(option => (
        <Checkbox key={id}>{option.primary.method_title.text}</Checkbox>
    ))

    return (
        <Container>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <Form>
                <TextInput
                    label="Name"
                    required
                    validationText="auto-generate"
                />
                <TextInput
                    label="Email"
                    required
                    validationText="auto-generate"
                />
                <CheckboxRadioGroup
                    label="I'm interested in Contributing by:"
                    required
                    validationText="Required."
                    columns={2}
                >
                    {checkboxOptions}
                </CheckboxRadioGroup>
                <Textarea
                    label="Message"
                    placeholder="Tell us a little bit about how you would like to get involved with V School"
                />
                <StyledButton>{buttonText}</StyledButton>
            </Form>
        </Container>
    )
}
