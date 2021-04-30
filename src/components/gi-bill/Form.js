import React, {useState} from 'react'
import styled from 'styled-components'
import FormInput from './FormInput'
import ButtonV2 from './ButtonV2'
import { gray } from '@vschool/lotus'
import {navigate} from 'gatsby'

const StyledForm = styled.form`
    display: grid;
    grid-template-columns: [line1] 1fr [line2] 1fr [line3] 1fr [line4] 1fr [line5] 1fr [line6] 1fr [end];
    grid-column-gap: 24px;
    grid-row-gap: 16px;
    grid-template-rows: repeat(4, auto);
    // border: 2px solid black;

    & > .first-name {
        grid-column: line1 / line4;
        grid-row: 1 / 2;
    }

    & > .last-name {
        grid-column: line4 / end;
        grid-row: 1 / 2;
    }

    & > .email {
        grid-column: line1 / end;
        grid-row: 2 / 2;
    }

    & > .phone {
        grid-column: line1 / end;
        grid-row: 3 / 3;
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

export default function Form(props) {
    const { 
        className, 
        buttonText,
        input1,
        input2,
        input3,
        input4
    } = props

    const [inputs, setInputs] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    })

    function handleChange({target: {name, value}}) {
        setInputs(prev => ({...prev, [name]: value}))
    }

    async function handleSubmit(e) {
        e.preventDefault()
        let {firstName, lastName, email, phone} = inputs
        const formData = {
            firstName,
            lastName,
            email,
            phone,
            convertKitTag: 'vet landing page lead'
        }

        const options = {
            method: "POST",
            body: JSON.stringify(formData)
        }

        await fetch(process.env.GATSBY_VET_LANDING_PAGE_ZAPIER_WEBHOOK_URL, options)
        navigate("/gi-bill/success")
    }

    return (
        <StyledForm className={className} onSubmit={handleSubmit}>
            <FormInput 
                className={'first-name'}
                name={'firstName'}
                label={input1.label}
                value={inputs.firstName}
                placeholder={input1.placeholder}
                required={false}
                handleChange={handleChange}
            />

            <FormInput 
                className={'last-name'}
                name={'lastName'}
                label={input2.label}
                value={inputs.lastName}
                placeholder={input2.placeholder}
                required={false}
                handleChange={handleChange}
            />

            <FormInput 
                className={'email'}
                name={'email'}
                label={input3.label}
                value={inputs.label}
                placeholder={input3.placeholder}
                required={true}
                handleChange={handleChange}
            />

            <FormInput 
                className={'phone'}
                name={'phone'}
                label={input4.label}
                value={inputs.phone}
                placeholder={input4.placeholder}
                required={true}
                handleChange={handleChange}
            />

            <div className={'button-wrapper'}>
                <ButtonV2 
                    buttonText={buttonText} 
                    className={'form-button'} 
                    buttonType={'primary'}
                />
            </div>
        </StyledForm>
    )
}
