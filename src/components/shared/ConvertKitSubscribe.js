import React, { useState } from "react"
import styled from "styled-components"
import { TextInput, Button, blue, gray } from "@vschool/lotus"

const FormContainer = styled.form`
    padding: 40px 24px;
    background-color: ${blue.lightest};
    border: 2px solid ${blue.base};
    width: 100%;
    max-width: 1024px;

    @media (min-width: 800px) {
        padding: 32px 48px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
    }
`

const StyledInput = styled(TextInput)`
    margin-bottom: 16px;

    @media (min-width: 800px) {
        margin-bottom: 0;
        margin-right: 16px;
        flex-basis: 170px;
        flex-grow: 1;
    }
`

const StyledButton = styled(Button)`
    width: 100%;
    flex-basis: 170px;
    flex-grow: 1;
`

const Disclaimer = styled.p`
    flex-basis: 100%;
    margin-top: 24px;
    font-size: 14px;
    line-height: 18px;
    color: ${gray.darker};
    font-weight: normal;
    text-align: center;

    @media (min-width: 800px) {
        text-align: left;
    }
`

const ThanksMessage = styled.h4`
    margin-left: auto;
    margin-right: auto;
`

export default function ConvertKitSubscribe({ webhookUrl, ...props }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [submitted, setSubmitted] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        const data = JSON.stringify({ name, email })
        const options = {
            method: "POST",
            body: data,
        }

        fetch(webhookUrl, options).then(res => {
            res.ok && setSubmitted(true)
        })
    }

    return (
        <FormContainer {...props} onSubmit={handleSubmit}>
            {!submitted ? (
                <>
                    <StyledInput
                        type="text"
                        label="First Name"
                        name="name"
                        placeholder="Your First Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                        validationText="Required"
                    />
                    <StyledInput
                        type="email"
                        label="Email"
                        name="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        validationText="Required"
                    />
                    <StyledButton>Sign Up</StyledButton>
                    <Disclaimer>
                        By submitting your information you are agreeing to
                        receive emails from vschool.io.
                    </Disclaimer>
                </>
            ) : (
                <ThanksMessage>Thanks for subscribing!</ThanksMessage>
            )}
        </FormContainer>
    )
}
