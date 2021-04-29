import React from 'react'
import HeroLayout from '../shared/HeroLayout';
import styled from 'styled-components'
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

    & > div > .first-name {
        margin-right: 10px;
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

const FormInputContainer = styled.div`
    // border: 2px solid orange;
    
    & > .label-container {
        display: flex;
        column-gap: 4px;
        // border: 1px solid orange;

        & > p {
            // display: none;
            // display: ${props => props.display};
            font-family: Aktiv Grotesk Ex;
            font-style: normal;
            font-weight: bold;
            font-size: 12px;
            line-height: 16px;
            text-align: right;
            letter-spacing: 0.5px;
            color: ${red.base};
        }

        & > label {
            margin-bottom: 8px;
            font-family: Aktiv Grotesk Ex;
            font-style: normal;
            font-weight: bold;
            font-size: 12px;
            line-height: 16px;
            display: flex;
            align-items: center;
            letter-spacing: 0.5px;
            color: ${gray.darkest};
        }
    }

    & > input {
        padding: 10px 16px 10px 16px;
        width: 100%;
        background: ${gray.lightest};
        border: 2px solid #514F4B;
        box-sizing: border-box;
        font-family: Aktiv Grotesk;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: ${gray.darker};

        &::placeholder {
            font-family: Aktiv Grotesk;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 24px;
            color: ${gray.dark};
        }

        &:empty {
            border: 2px solid ${gray.base};
        }

        &:hover {
            border: 2px solid ${blue.light};
        }

        &:active {
            border: 2px solid ${blue.dark};
        }
    }
`

export default function index(props) {
    return (
        <Container>
            <HeroLayout
                text={
                    <StyledForm className='hero-form'>
                        <div style={{display: 'flex'}}>
                            <FormInputContainer className='first-name'>
                                <div className='label-container'>
                                    <label>* First Name</label>
                                </div>
                                <input name="firstName" placeholder="John" />
                            </FormInputContainer>

                            <FormInputContainer className='last-name'>
                                <div className='label-container'>
                                    <label>* Last Name</label>
                                </div>
                                <input name="lastName" placeholder="Doe" />
                            </FormInputContainer>
                        </div>

                        <FormInputContainer className='email'>
                            <div className='label-container'>
                                <label>* Email</label>
                            </div>
                            <input name="email" placeholder="john@email.com" />
                        </FormInputContainer>

                        <FormInputContainer className='phone'>
                            <div className='label-container'>
                                <label>* Phone</label>
                            </div>
                            <input name="phone" placeholder="555-555-5555" />
                        </FormInputContainer>

                        <div className='button-wrapper'>
                            <button className='form-button'>Download Syllabus</button>
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









    


