import React, { useState } from "react"
import styled from "styled-components"
import { blue, white, gray, black, Button } from "@vschool/lotus"
import MailchimpSubscribe from "react-mailchimp-subscribe"

const FormContainer = styled.div`
    position: relative;
    background-color: #eaeaea;
    display: flex;
    justify-content: center;
    padding-bottom: 380px;
    padding-top: 96px;
`

const Form = styled.form`
    height: 304px;
    max-width: 360px;
    width: 100%;
    background-color: #ac162c;
    padding: 32px 24px;
    border: 2px solid #fa0037;

    @media (max-width: 360px) {
        width: 286px;
    }

    @media (min-width: 1200px) {
        width: 100%;
        max-width: 1024px;
        height: 152px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const Label = styled.label`
    color: ${white};
    font-family: "aktiv-grotesk";
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 0.25px;
    line-height: 16px;
    display: block;

    @media (min-width: 960px) {
        margin-left: 8px;
        margin-right: 8px;
    }
`

const Input = styled.input`
    height: 50px;
    max-width: 310px;
    width: 100%;
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
        width: 287px;
        color: ${black};
        font-family: "aktiv-grotesk";
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
    }

    @media (min-width: 1200px) {
        max-width: 350px;
        width: 350px;
    }
`

const StyledButton = styled(Button)`
    max-width: 319px;
    margin-top: 16px;
    width: 100%;
    color: ${white};
    border: 2px solid ${black};
    background-color: ${gray.darker};
    font-family: "aktiv-grotesk-extended";

    @media(min-width: 1200px){
        width: 255px;
        margin-top: 0;
    }
`

const ErrorMsg = styled.div`
    position: absolute;
    bottom: 340px;
    width: 90%;
    text-align: center;
`

function MailchimpSubscribeForm() {
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

    const url =
        "//vschool.us16.list-manage.com/subscribe/post?u=f5ba48f36061bdea6c3b83712&amp;id=75906113f1"
    return (
        <MailchimpSubscribe
            url={url}
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
                    <FormContainer>
                        {status === "error" && (
                            <ErrorMsg>
                                <div style={{ color: "#BF6B1C" }}>
                                    There seems to have been a problem. Please
                                    try a different email address.
                                </div>
                            </ErrorMsg>
                        )}
                        {status === "success" &&
                            redirectTo("https://scrimba.com/g/gbootcampprimer")}
                        <Form
                            onSubmit={e => {
                                e.preventDefault()
                                subscribe(inputs)
                            }}
                        >
                            <Label htmlfor="NAME">
                                Name
                                <Input
                                    placeholder="Name"
                                    onChange={handleChange}
                                    name="NAME"
                                    value={inputs.NAME}
                                />
                            </Label>
                            <Label htmlfor="EMAIL">
                                Email
                                <Input
                                    placeholder="Email"
                                    onChange={handleChange}
                                    name="EMAIL"
                                    value={inputs.EMAIL}
                                />
                            </Label>
                            <StyledButton>{msg}</StyledButton>
                        </Form>
                    </FormContainer>
                )
            }}
        />
    )
}

export default MailchimpSubscribeForm
