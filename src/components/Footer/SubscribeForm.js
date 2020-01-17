import React, { useState } from "react"
import styled from "styled-components"
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

const Form = styled.form``

const Input = styled.input`
    height: 40px;
    width: 366px;
    padding: 8px;
    background-color: #ffffff;
    color: #4f4b43;
    font-family: "aktiv-grotesk";
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    margin-bottom: 16px;
    outline: none;
`

const Label = styled.label``

const Button = styled.button`
    height: 40px;
    width: 366px;
    border: 2px solid #a09c96;
    background-color: #0000;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    color: #ffffff;
    font-family: "aktiv-grotesk";
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 0.86px;
    line-height: 16px;
    text-align: center;
    box-shadow: 4px 4px 0 0 rgba(0, 0, 0, 0.25);

    :hover {
        transform: translate(2px, 2px);
        box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 0.25);
    }

    :active {
        transform: translate(4px, 4px);
        box-shadow: inset 1px 1px #eee9;
        border-top: 1px solid #eee9;
        border-left: 1px solid #eee9;
    }
`

const ErrorMsg = styled.div`
    position: absolute;
    bottom: -20px;
    width: 90%;
    text-align: center;
`

export default function SubscribeForm(props) {
    const { formHeader, placeholder, btnText } = props
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
                    if (status === "sending") {
                        msg = "Loading..."
                    } else if (status === "success") {
                        msg = "Redirecting..."
                    } else {
                        msg = "Begin Free Course"
                    }
                    return (
                        <>
                            {status === "error" && (
                                <ErrorMsg>
                                    <div style={{ color: "#BF6B1C" }}>
                                        There seems to have been a problem.
                                        Please try a different email address.
                                    </div>
                                </ErrorMsg>
                            )}
                            <Form
                                onSubmit={e => {
                                    e.preventDefault()
                                    subscribe(inputs)
                                }}
                            >
                                <Header>{formHeader}</Header>
                                <Label htmlFor="EMAIL">
                                    <Input
                                        name="EMAIL"
                                        value={inputs.EMAIL}
                                        onChange={handleChange}
                                        placeholder={placeholder}
                                    />
                                </Label>
                                <Button>{ btnText }</Button>
                            </Form>
                        </>
                    )
                }}
            />
        </>
    )
}
