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

const Section = styled.section`
    padding-left: 18px;
    padding-right: 18px;
`

const Container = styled.div`
    padding: 64px 24px;
    border: 2px solid ${blue.base};
    background-color: ${blue.lightest};
    margin-bottom: 96px;
    width: 100%;
    max-width: 1000px;

    @media (min-width: 800px) {
        padding: 68px 40px 80px;
    }
`

const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 800px) {
        flex-direction: row;

        & > div:first-child {
            margin-right: 16px;
        }
    }
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
    text-align: center;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 64px;
`

const BoxGroup = styled(CheckboxRadioGroup)`
    margin-bottom: 32px;
`

const StyledButton = styled(Button)`
    width: 100%;
    margin-bottom: 64px;

    @media (min-width: 600px) {
        width: 232px;
        align-self: flex-end;
    }
`

export default function GetInvolvedForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        selectedOptions: [],
    })
    const [checkboxError, setCheckboxError] = useState(false)

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

    async function handleSubmit(e, formUrl) {
        e.preventDefault()
        setCheckboxError(formData.selectedOptions.length === 0)
        if (formData.selectedOptions.length === 0) {
            return
        }
        const options = {
            method: "POST",
            body: JSON.stringify(formData),
        }
        try {
            await fetch(formUrl, options)
            navigate("/digital-family/thanks")
        } catch (e) {
            alert(e.message)
        }
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
                    form_submission_url {
                        url
                    }
                    body {
                        ... on PrismicDigitalFamilyPageDataBodyGetInvolvedMethod {
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
        form_submission_url: { url: formUrl },
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
        <Section id="get-involved-form">
            <Container>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
                <Form onSubmit={e => handleSubmit(e, formUrl)}>
                    <InputsContainer>
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
                    </InputsContainer>
                    <BoxGroup
                        label="I'm interested in Contributing by:"
                        required
                        validationText="Required."
                        columns={2}
                        hasError={checkboxError}
                    >
                        {checkboxOptions}
                    </BoxGroup>
                    <Textarea
                        label="Message"
                        name="message"
                        onChange={handleChange}
                        value={formData.message}
                        placeholder="Tell us a little bit about how you would like to get involved with V School"
                    />
                    <StyledButton size="lg">{buttonText}</StyledButton>
                </Form>
            </Container>
        </Section>
    )
}
