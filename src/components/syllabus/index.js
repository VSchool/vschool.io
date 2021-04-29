import React, { useState } from 'react'
import HeroLayout from '../shared/HeroLayout';
import styled from 'styled-components'
import { TextInput, Button } from '@vschool/lotus'
import { red, blue, gray } from '@vschool/lotus'

const Container = styled.section`
    background-color: ${gray.lighter};
    padding-top: 65px;
    padding-bottom: 357px;

    @media (min-width: 1024px) {
        padding-top: 100px;
    }
`

const Title = styled.h1`
    font-weight: 900;
    font-size: 56px;
    line-height: 56px;
    color: ${gray.darkest};
    margin-bottom: 32px;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    // height: auto;
    // border: 2px dashed blue;

    & > .wrapper {
        display: flex;
        // border: 1px solid black;

        & > .first-name {
            margin: 0px;
            margin-right: 12px;
        }
    
        & > .last-name {
            margin-left: 12px;
        }
    }

    & > .button-wrapper {
        margin-top: 8px;
        grid-column: line1 / end;
        grid-row: 4 / 4;

        & > .form-button {

            &:hover {
                box-shadow: none;
            }
    
            &:active {
                border: 2px solid ${gray.dark};
            }
        }
    }
`

const StyledInput = styled(TextInput)`

    margin: 0px;
`

const StyledPhoneInput = styled(TextInput)`
    margin-bottom: 10px;
`

const StyledButton = styled(Button)`
    @media (max-width: 800px){
        margin: 40px auto 80px;
        width: 100%;
    }
`

export default function Index(props) {
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()

        const formData = {
            name: fName + ' ' + lName,
            email,
            phone,
            convertKitTag: props.convertKitTag
        }

        const options = {
            method: "POST",
            body: JSON.stringify(formData)
        }

        await fetch(process.env.GATSBY_CONVERTKIT_SIGNUP_ZAPIER_WEBHOOK_URL, options)

        

        console.log('worked')
    }

    return (
        <Container>
            <HeroLayout
                text={
                    <>
                        <Title>Download the Syllabus</Title>
                        <StyledForm className='hero-form' onSubmit={handleSubmit}>
                            <div className={'wrapper'} >
                                <StyledInput
                                    type="text"
                                    label="First Name"
                                    name="fName"
                                    placeholder="John"
                                    value={fName}
                                    onChange={e => setFName(e.target.value)}
                                    required={true}
                                    validationText="Required"
                                    className={'first-name'}
                                />
                                <StyledInput
                                    type="text"
                                    label="Last Name"
                                    name="lName"
                                    placeholder="Doe"
                                    value={lName}
                                    onChange={e => setLName(e.target.value)}
                                    required
                                    validationText="Required"
                                    className={'last-name'}
                                />
                            </div>
                                <StyledInput
                                    type="text"
                                    label="Email"
                                    name="email"
                                    placeholder="john@email.com"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required={true}
                                    validationText="Required"
                                    className={'email'}
                                />

                                <StyledPhoneInput
                                    type="text"
                                    label="Phone"
                                    name="phone"
                                    placeholder="555-555-5555"
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                    required={false}
                                    validationText="Required"
                                    className={'phone'}
                                />
                            <div className='button-wrapper'>
                                <StyledButton buttonStyle={'primary-dark'} size={'xl'}>{'Download Syllabus'}</StyledButton>
                                <a href="https://drive.google.com/file/d/1TkmbmHhJXIyvH8rRr2UeIe7KhD14d1nz/view" download>Download it</a>
                            </div>
                        </StyledForm>
                
                    </>
                }
                image={
                    <>
                        <img src={props.image} alt=""/>
                    </>
                }>       
            </HeroLayout>
        </Container>
    )
}









    


