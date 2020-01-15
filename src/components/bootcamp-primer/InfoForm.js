import React, { useState } from "react"
import styled from "styled-components"
import { blue, white, black, } from "@vschool/lotus"
import MailchimpSubscribe from "react-mailchimp-subscribe"

const FormContainer = styled.div`
    position: relative;
    background-color: ${blue.lightest};
    display: flex;
    justify-content: center;
    padding-top: 32px;
    margin-top: -1px;
`

const Form = styled.form`
    height: 304px;
    width: 360px;
    background-color: ${blue.lighter};
    padding: 32px 24px;

    @media (max-width: 360px) {
        width: 320px;
    }

    @media (min-width: 600px) {
        width: 480px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (min-width: 840px) {
        width: 700px;
    }

    @media (min-width: 960px) {
        width: 800px;
        flex-direction: row;
        justify-content: space-evenly;
        height: 150px;
    }

    @media (min-width: 1200px) {
        width: 1024px;
    }
`

const Label = styled.label`
    color: ${blue.darker};
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
    width: 310px;
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

    @media (max-width: 360px) {
        width: 280px;
        margin-right: 16px;
    }

    @media (min-width: 600px) {
        display: block;
        width: 350px;
    }

    @media (min-width: 840px) {
        width: 500px;
    }

    @media (min-width: 960px) {
        width: 250px;
    }

    @media (min-width: 1200px) {
        width: 350px;
    }
`

const Button = styled.button`
  height: 48px;	
  width: 318px;
  color: ${white};	
  font-family: "aktiv-grotesk-extended";	
  font-size: 14px;	
  font-weight: bold;	
  letter-spacing: 1px;	
  line-height: 18px;	
  text-align: center;
  border: 2px solid ${black};	
  background-color: ${black};
  margin: 0 auto;
  box-shadow: 4px 4px 0 0 rgba(0,0,0,0.2);
  outline: none;
  cursor: pointer;

  :hover {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0 0 rgba(100,100,100, 0.5);
  }

  :active {
    transform: translate(4px, 4px);
    box-shadow: inset 1px 1px #eee9;
    border-top: 1px solid #eee9;
    border-left: 1px solid #eee9;
  }

    @media (max-width: 360px) {
        width: 280px;
    }

    @media (min-width: 600px) {
        width: 350px;
    }

    @media (min-width: 840px) {
        width: 500px;
    }

    @media (min-width: 960px) {
        width: 400px;
        margin-left: 8px;
    }
`

const ErrorMsg = styled.div`
    position: absolute;
    bottom: -20px;
    width: 90%;
    text-align: center;
`

function InfoForm() {
    const initInputs = { NAME: "", EMAIL: "" }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
      const {name, value} = e.target
      setInputs(prev => ({
        ...prev,
        [name]: value
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
                                    There seems to have been a problem. Please try a different email address.
                                </div>
                            </ErrorMsg>
                        )}
                        { status === "success" &&
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
                                    onChange={ handleChange }
                                    name="NAME"
                                    value={ inputs.NAME }
                                />
                            </Label>
                            <Label htmlfor="EMAIL">
                                Email
                                <Input
                                    placeholder="Email"
                                    onChange={ handleChange }
                                    name="EMAIL"
                                    value={ inputs.EMAIL }
                                />
                            </Label>
                            <Button>{ msg }</Button>
                        </Form>
                    </FormContainer>
                )
            }}
        />
    )
}

export default InfoForm
