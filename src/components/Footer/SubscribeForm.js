import React, { useState } from "react"
import styled from "styled-components"
import { Button, green } from "@vschool/lotus"
import MailchimpSubscribe from "react-mailchimp-subscribe"

const Header = styled.h3`
    width: 232px;
    color: #a09c96;
    font-family: "aktiv-grotesk-extended";
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0.29px;
    line-height: 18px;
    margin-top: 40px;
    margin-bottom: 16px;
`

const Form = styled.form`
    @media (min-width: 600px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const Input = styled.input`
    height: 40px;
    width: 100%;
    padding: 8px;
    background-color: #ffffff;
    color: #4f4b43;
    font-family: "aktiv-grotesk";
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    margin-bottom: 16px;
    outline: none;

    @media (min-width: 450px) {
        width: 366px;
    }

    @media (min-width: 1200px) {
        width: 232px;
    }
`

const Label = styled.label``

const StyledButton = styled(Button)`
    height: 40px;
    width: 100%;
    border: 2px solid #a09c96;
    font-size: 12px;

    @media (min-width: 450px) {
        width: 366px;
    }

    @media (min-width: 1200px) {
        width: 232px;
    }
`

const SuccessMsg = styled.div`
    height: 56px;
    margin-bottom: 40px;
    background-color: green;
    width: 232px;
    background-color: #DAECE8;
    border: 1px solid #058266;
    border-radius: 2px;
    padding: 12px 12px 0px 12px;
`

const ErrorMsg = styled.div`
    height: 56px;
    margin-bottom: 40px;
    background-color: #F6DFDF;
    width: 232px;
    border: 1px solid #C92A2A;
    border-radius: 2px;
    padding: 12px 12px 0px 12px;
`

const MsgHeader = styled.h6`
    color: ${props => props.color};
    font-size: 12px;
    font-weight: 700;
`

const MsgInfo = styled.p`
    color: ${props => props.color};
    font-size: 12px;

`

export default function SubscribeForm(props) {
    const { formHeader, placeholder } = props
    const [inputs, setInputs] = useState({ EMAIL: "" })
    function handleChange(e) {
        const { value } = e.target
        setInputs({ EMAIL: value })
    }

    const url =
        "//vschool.us16.list-manage.com/subscribe/post?u=f5ba48f36061bdea6c3b83712&amp;id=7b3742eafe"
    return (
        <>
            <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => {
                    let msg
                    let duplicate = message ? message.slice(0, message.indexOf(" ")) : ""
                    if (status === "sending") {
                        msg = "Submitting..."
                    } else if (status === "success") {
                        msg = "success"
                    } else if (status === "error") {
                        // If they have already subscribed, show success instead of error
                        if(duplicate === inputs.EMAIL){
                            msg = "success"
                        } else {
                            msg = "error"
                        }
                    } else {
                        msg = "Begin Free Course"
                    }
                    return (
                        <>
                            <Form
                                onSubmit={e => {
                                    e.preventDefault()
                                    subscribe(inputs)
                                }}
                            >
                                <Header>{formHeader}</Header>

                                {msg !== "success" && msg !== "error" ? (
                                    <>
                                        <Label htmlFor="EMAIL">
                                            <Input
                                                name="EMAIL"
                                                value={inputs.EMAIL}
                                                onChange={handleChange}
                                                placeholder={placeholder}
                                            />
                                        </Label>
                                        <StyledButton buttonStyle="secondary-light">
                                            {msg}
                                        </StyledButton>
                                    </>
                                ) : msg === "success" ? (
                                    <SuccessMsg>
                                        <MsgHeader color={green.darker}>Success!</MsgHeader>
                                        <MsgInfo color={green.darker}>You've subscribed to our newsletter.</MsgInfo>
                                    </SuccessMsg>
                                ) : (
                                    <ErrorMsg>
                                        <MsgHeader color="#961F1F">Uh oh!</MsgHeader>
                                        <MsgInfo color="#961F1F">There was an issue with your request.</MsgInfo>
                                    </ErrorMsg>
                                )}
                            </Form>
                        </>
                    )
                }}
            />
        </>
    )
}
