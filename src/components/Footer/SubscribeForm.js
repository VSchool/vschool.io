import React, { useState } from "react"
import styled from "styled-components"
import { Button, gray } from "@vschool/lotus"
import modalImg from '../../images/download_icon.png'

const SubscribeContainer = styled.div`
    text-align: center;

    @media (min-width: 1200px){
        text-align: left;
    }
`

const Header = styled.h3`
    width: 232px;
    color: #a09c96;
    font-family: "aktiv-grotesk-extended";
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0.29px;
    line-height: 18px;
    margin: 40px auto 16px;
    
    @media (min-width: 800px){
        margin-top: 40px;
        margin-bottom: 16px;
    }
`

const Form = styled.form`
    @media (min-width: 600px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    & > button {
        margin-top: 64px;
    }

    & > div {
        width: 90%;
        margin: auto;
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
    border: 2px solid #D8D4CF;

`

const Label = styled.label`
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;
    letter-spacing: 0.5px;
    color: #21201F;
    margin: 8px 0;
    text-align: left;
`

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



const MailIcon = styled.img`
    width: 13px;
    position: absolute;
    top: 13.5px;
    left: 33px;
`

const Modal = styled.div`
    position: fixed; 
    z-index: 10000; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4); 
` 

const ModalContent = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10000;
    border: 1px solid #888;
    background-color: ${gray.lighter};
    padding: 30px 20px 128px;
    width: 350px;
    height: 650px;
    
    
    @media (max-width: 426px) {
        width: 300px;
    }

    & > img {
        width: 76px;
        margin: 15px auto;
        display: block;
    }

    & > h3 {
        font-weight: 800;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        letter-spacing: 0.25px;
        text-transform: uppercase;
        color: #456AE2;
    }

    & > h2 {
        font-weight: 900;
        font-size: 32px;
        line-height: 40px;
        text-align: center;
        color: #21201F;
        margin: 8px auto 15px;
    }
    & > form  {

        & > button {
            margin-top: 25px;
            width: 90%;
            height: 40px;
            border: 2px solid #a09c96;
            font-size: 12px;
        }
    }
`

const ModalIcon = styled.img`
    width: 60px;
    margin: auto;
    display: block;
`

export default function SubscribeForm(props) {
    const { formHeader } = props
    const [inputs, setInputs] = useState({ FNAME: "", LNAME: "", EMAIL: "" })
    const [open, setOpen] = useState(false)
    const [submitted, setSubmitted] = useState(localStorage.getItem('submitted') || false)


    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prev => { return { ...prev, [name]: value} })
    }

    async function handleSubmit (e) {
        e.preventDefault()
        const options = {
            method: "POST",
            body: JSON.stringify({ name: inputs.FNAME + ' ' + inputs.LNAME, email: inputs.EMAIL, convertKitTag: 'mailchimp master list' }),
        }
        await fetch(
            process.env.GATSBY_CONVERTKIT_SIGNUP_ZAPIER_WEBHOOK_URL,
            options
        )
        setInputs({EMAIL: '', FNAME: '', LNAME: ''})
        setOpen(false)
        setSubmitted(true)
        localStorage.setItem('submitted', true)
    }

    
    return (
        <SubscribeContainer>
            <Header>{formHeader}</Header>
            <div style={{position: 'relative'}}>
                {submitted ? 'Signed Up' : <StyledButton 
                    style={{position: 'relative'}}
                    buttonStyle="secondary-light"
                    onClick={() => setOpen(true)}>
                    <MailIcon src="https://imgs.search.brave.com/nVbOVhX8SuPrKrQaa4LNknlnFlXQeER_FPlF0VLZilo/rs:fit:512:512:1/g:ce/aHR0cHM6Ly93d3cu/aWNvbnNkYi5jb20v/aWNvbnMvZG93bmxv/YWQvd2hpdGUvZW52/ZWxvcGUtY2xvc2Vk/LTUxMi5wbmc" />
                    Newsletter Signup
                </StyledButton>}
            </div>
            {open && <>
                        <Modal onClick={() => setOpen(false)}></Modal>
                        <ModalContent>
                            <ModalIcon src={modalImg} />
                            <h3>V School Newsletter</h3>
                            <h2>Sign Up</h2>
                            <Form onSubmit={handleSubmit}>
                                <div>
                                    <Label style={{display: 'block'}}>First Name</Label>
                                    <Input
                                        name="FNAME"
                                        value={inputs.FNAME}
                                        onChange={handleChange}
                                        placeholder='Enter First Name'
                                    />
                                </div>
                                <div>
                                    <Label style={{display: 'block'}}>Last Name</Label>
                                    <Input
                                        name="LNAME"
                                        value={inputs.LNAME}
                                        onChange={handleChange}
                                        placeholder='Enter Last Name'
                                    />
                                </div>
                                <div>
                                    <Label style={{display: 'block'}}>Email</Label>
                                    <Input
                                        name="EMAIL"
                                        value={inputs.EMAIL}
                                        onChange={handleChange}
                                        placeholder='Enter Valid Email Address'
                                    />
                                </div>
                                <Button>
                                    Complete Sign Up
                                </Button>
                            </Form>
                        </ModalContent>
                    </>
            }
        </SubscribeContainer>
    )
}

        