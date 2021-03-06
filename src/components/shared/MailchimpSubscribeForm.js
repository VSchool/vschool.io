import React, { useState } from "react"
import styled from "styled-components"
import { blue, white, black, gray, Button } from "@vschool/lotus"
import MailchimpSubscribe from "react-mailchimp-subscribe"

const FormContainer = styled.div`
    padding: 32px 24px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1024px;

    /* TODO:  Use defaultProps to set these defaults instead*/
    background-color: ${props => props.backgroundColor || blue.light};
    border: ${props =>
        props.borderColor ? `2px solid ${props.borderColor}` : "none"};
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (min-width: 600px) {
        flex-direction: column;
        align-items: center;
    }

    @media (min-width: 800px) {
        flex-direction: row;
        justify-content: center;
    }
`

const Label = styled.label`
    display: block;
    width: 100%;
    color: ${blue.darker};
    font-family: "aktiv-grotesk";
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 0.25px;
    line-height: 16px;
    display: flex;
    flex-direction: column;

    @media (min-width: 800px) {
        max-width: 350px;
        margin-left: 8px;
        margin-right: 8px;
    }
`

const Input = styled.input`
    height: 50px;
    border: 2px solid ${blue.light};
    background-color: ${white};
    margin-top: 7px;
    margin-bottom: 16px;
    padding: 12px;
    color: ${black};
    font-family: "aktiv-grotesk";
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;

    ::placeholder {
        height: 20px;
        color: ${gray.darker};
        font-family: "aktiv-grotesk";
        font-size: 14px;
        font-weight: 500;
        line-height: 18px;

        @media (min-width: 800px) {
            font-size: 16px;
            line-height: 24px;
        }
    }

    @media (min-width: 600px) {
        display: block;
    }
`

const StyledButton = styled(Button)`
    width: 100%;
    min-width: initial;
    position: relative;
    top: 3px;
    /* color: ${white}; */
    /* border: 2px solid ${black}; */
    /* background-color: ${black}; */

    @media(min-width: 800px) {
        max-width: 300px;
    }
`

const ErrorMsg = styled.p`
    /* position: absolute; */
    /* bottom: -20px; */
    width: 90%;
    text-align: center;
    color: #7c2637;
    margin-bottom: 20px;
`

function MailchimpSubscribeForm({ style, formUrl }) {
    const initInputs = { NAME: "", EMAIL: "" }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    function redirectTo(url) {
        window.location.href = url
    }

    return (
        <MailchimpSubscribe
            url={formUrl}
            render={({ subscribe, status, message }) => {
                let msg
                if (status === "sending") {
                    msg = "Loading..."
                } else if (status === "success") {
                    msg = "Redirecting..."
                } else {
                    msg = "Begin Free Course"
                }

                return (
                    <FormContainer {...style}>
                        {status === "error" && (
                            <ErrorMsg>
                                There seems to have been a problem. Please try a
                                different email address.
                            </ErrorMsg>
                        )}
                        {status === "success" &&
                            redirectTo(
                                "https://scrimba.com/learn/bootcampprimer"
                            )}
                        <Form
                            onSubmit={e => {
                                e.preventDefault()
                                subscribe(inputs)
                            }}
                        >
                            <Label>
                                Name
                                <Input
                                    placeholder="Name"
                                    onChange={handleChange}
                                    name="NAME"
                                    value={inputs.NAME}
                                />
                            </Label>
                            <Label>
                                Email
                                <Input
                                    placeholder="Email"
                                    onChange={handleChange}
                                    name="EMAIL"
                                    value={inputs.EMAIL}
                                />
                            </Label>
                            <StyledButton buttonStyle="primary-dark">
                                {msg}
                            </StyledButton>
                        </Form>
                    </FormContainer>
                )
            }}
        />
    )
}

MailchimpSubscribeForm.propTypes = {
    formUrl: function(props, propName, componentName) {
        if (!props[propName]) {
            return new Error(`${propName} is required`)
        }
        if (!props[propName].startsWith("//")) {
            return new Error(
                `Invalid ${propName} value. URL must start with // (no http or https in the URL)`
            )
        }
    },
}

export default MailchimpSubscribeForm
