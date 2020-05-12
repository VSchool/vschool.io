import React, { useState } from "react"
import styled from "styled-components"
import { black, gray, white, Button, green } from "@vschool/lotus"
import MailchimpSubscribe from "react-mailchimp-subscribe"

const Container = styled.div`
    width: 100%;
    background-color: ${black};
    padding: 32px 18px 64px 18px;
    margin-top: 64px;

    @media (min-width: 500px) {
        padding: 32px 32px 64px 32px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (min-width: 1000px) {
        flex-direction: row;
        justify-content: center;
        padding: 32px 88px 32px 88px;
    }
`

const FixedContainer = styled.div`
    @media (min-width: 1000px) {
        display: flex;
        width: 1050px;
        justify-content: space-between;
        align-items: center;
    }
`

const Header = styled.h2`
    color: ${gray.lightest};
    font-family: "aktiv-grotesk";
    font-weight: 600;
    line-height: 38px;
    font-size: 32px;
    margin-bottom: 64px;
    max-width: 450px;

    @media (min-width: 1000px) {
        max-width: 100%;
        margin-bottom: 0;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    @media (min-width: 1000px) {
        flex-direction: row;
        justify-content: flex-end;
    }
`

const Input = styled.input`
    background-color: ${white};
    border: 2px solid ${gray.base};
    width: 100%;
    color: ${gray.darker};
    max-width: 450px;
    padding: 14px;
    font-size: 16px;
    font-family: "aktiv-grotesk";
    margin-bottom: 16px;

    @media (min-width: 1000px) {
        margin-bottom: 0;
        margin-right: 16px;
        width: 318px;
    }
`

const StyledButton = styled(Button)`
    box-shadow: 4px 4px 0px rgba(255, 255, 255, 0.2);
    min-width: 0;
    width: 100%;
    max-width: 450px;
    outline: none;

    @media (min-width: 1000px) {
        width: 180px;
    }
`

const Label = styled.label`
    width: 100%;

    @media (min-width: 1000px) {
        width: auto;
    }
`

const SuccessMsg = styled.div`
    height: 56px;
    margin-bottom: 40px;
    background-color: green;
    width: 232px;
    background-color: #daece8;
    border: 1px solid #058266;
    border-radius: 2px;
    padding: 12px 12px 0px 12px;
`

const ErrorMsg = styled.div`
    height: 56px;
    margin-bottom: 40px;
    background-color: #f6dfdf;
    width: 232px;
    border: 1px solid #c92a2a;
    border-radius: 2px;
    padding: 12px 12px 0px 12px;
`

const MsgHeader = styled.h6`
    color: ${props => props.color};
    font-size: 12px;
    font-weight: 800;
`

const MsgInfo = styled.p`
    color: ${props => props.color};
    font-size: 12px;
`

export default function SubscribeBanner(props) {
    const [EMAIL, setEmail] = useState("")
    const handleChange = e => {
        setEmail(e.target.value)
    }
    const { header, btnText } = props
    const url =
        "//vschool.us16.list-manage.com/subscribe/post?u=f5ba48f36061bdea6c3b83712&amp;id=7b3742eafe"
    return (
        <Container>
            <FixedContainer>
                <Header>{header}</Header>
                {/* <Form>
                    <Input
                        type="text"
                        value={EMAIL}
                        onChange={handleChange}
                        placeholder="Your Email Address"
                    />
                    <StyledButton buttonStyle="secondary-light">
                        {btnText}
                    </StyledButton>
                </Form> */}
                <MailchimpSubscribe
                    url={url}
                    render={({ subscribe, status, message }) => {
                        let msg
                        let duplicate = message
                            ? message.slice(0, message.indexOf(" "))
                            : ""
                        if (status === "sending") {
                            msg = "Submitting..."
                        } else if (status === "success") {
                            msg = "success"
                        } else if (status === "error") {
                            // If they have already subscribed, show success instead of error
                            if (duplicate === EMAIL) {
                                msg = "success"
                            } else {
                                msg = "error"
                            }
                        } else {
                            msg = "Subscribe"
                        }
                        return (
                            <>
                                <Form
                                    onSubmit={e => {
                                        e.preventDefault()
                                        subscribe({ EMAIL })
                                    }}
                                >
                                    {/* Display the form until the msg status changes to success or error */}
                                    {msg !== "success" && msg !== "error" ? (
                                        <>
                                            <Label htmlFor="EMAIL">
                                                <Input
                                                    name="EMAIL"
                                                    value={EMAIL}
                                                    onChange={handleChange}
                                                    placeholder={
                                                        "Your Email Address"
                                                    }
                                                />
                                            </Label>
                                            <StyledButton buttonStyle="secondary-light">
                                                {msg}
                                            </StyledButton>
                                        </>
                                    ) : msg === "success" ? (
                                        <SuccessMsg>
                                            <MsgHeader color={green.darker}>
                                                Success!
                                            </MsgHeader>
                                            <MsgInfo color={green.darker}>
                                                You've subscribed to our
                                                newsletter.
                                            </MsgInfo>
                                        </SuccessMsg>
                                    ) : (
                                        <ErrorMsg>
                                            <MsgHeader color="#961F1F">
                                                Uh oh!
                                            </MsgHeader>
                                            <MsgInfo color="#961F1F">
                                                There was an issue with your
                                                request.
                                            </MsgInfo>
                                        </ErrorMsg>
                                    )}
                                </Form>
                            </>
                        )
                    }}
                />
            </FixedContainer>
        </Container>
    )
}
