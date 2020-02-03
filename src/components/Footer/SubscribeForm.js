import React, { useState } from "react"
import styled from "styled-components"
import { Button } from "@vschool/lotus"
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
    @media(min-width: 600px){
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

    @media(min-width: 450px){
        width: 366px;
    }


    @media(min-width: 1200px){
        width: 232px
    }
`

const Label = styled.label``

const StyledButton = styled(Button)`
    height: 40px;
    width: 100%;
    border: 2px solid #a09c96;
    font-size: 12px;
   
    @media(min-width: 450px){
        width: 366px;
    }

    @media(min-width: 1200px){
        width: 232px
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
                                <StyledButton buttonStyle="secondary-light">{btnText}</StyledButton>
                            </Form>
                        </>
                    )
                }}
            />
        </>
    )
}
