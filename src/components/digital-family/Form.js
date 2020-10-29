import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, navigate } from "gatsby"
import {
    blue,
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

// TODO: Still needs desktop styling
export default function GetInvolvedForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        selectedOptions: [],
    })

    function handleChange(e) {
        const { name, value } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }))
    }

    function handleCheckboxChange(e) {
        const { checked, value } = e.target
        setFormData(prevData => ({
            ...prevData,
            selectedOptions: checked
                ? [...prevData.selectedOptions, value]
                : prevData.selectedOptions.filter(option => option !== value),
        }))
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const options = {
            method: "POST",
            body: JSON.stringify(formData),
        }
        try {
            const res = await fetch(
                "https://hooks.zapier.com/hooks/catch/666916/oq1triu/",
                options
            )
            const data = await res.json()
            navigate("/digital-family/thanks")
        } catch (e) {}
    }

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
    } = data.prismicDigitalFamilyPage.data

    const checkboxOptions = body.map(option => (
        <Checkbox
            key={option.id}
            name="selectedOptions"
            value={option.primary.method_title.text}
            checked={formData.selectedOptions.includes(
                option.primary.method_title.text
            )}
            onChange={handleCheckboxChange}
        >
            {option.primary.method_title.text}
        </Checkbox>
    ))

    return (
        <Container>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <Form onSubmit={handleSubmit}>
                <TextInput
                    label="Name"
                    name="name"
                    type="text"
                    onChange={handleChange}
                    value={formData.name}
                    required
                    validationText="auto-generate"
                />
                <TextInput
                    label="Email"
                    name="email"
                    type="email"
                    onChange={handleChange}
                    value={formData.email}
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
                    name="message"
                    onChange={handleChange}
                    value={formData.message}
                    placeholder="Tell us a little bit about how you would like to get involved with V School"
                />
                <StyledButton>{buttonText}</StyledButton>
            </Form>
        </Container>
    )
}
