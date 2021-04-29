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

export default function Index(props) {
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    return (
        <Container>
            <HeroLayout
                text={
                    <StyledForm className='hero-form'>
                        <div className={'wrapper'} >
                            <StyledInput
                                type="text"
                                label="First Name"
                                name="fName"
                                placeholder="Your First Name"
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
                                placeholder="Your Last Name"
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
                                // placeholder="555-555-5555"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                required={false}
                                validationText="Required"
                                className={'phone'}
                            />
                        <div className='button-wrapper'>
                            <Button buttonStyle={'primary-dark'} type={'button'} size={'xl'}>{'Download Syllabus'}</Button>
                        </div>
                    </StyledForm>
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









    


