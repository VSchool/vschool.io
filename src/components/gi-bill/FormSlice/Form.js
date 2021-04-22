import React from 'react'
import styled from 'styled-components'
import FormInput from './FormInput'
import Button from '../Button'
import { gray } from '@vschool/lotus'

const FormContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 500px;
    margin-top: 32px;
    // border: 2px dashed white;

    & > p {
        margin-bottom: 24px;
        color: ${gray.darker};
        font-family: 'Aktiv Grotesk';
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 32px;
    }

    & > .form-button {
        margin-top: 16px;
    }
`

export default function Form(props) {
    const { heading, buttonText } = props
    console.log(buttonText)

    return (
        <FormContainer>
            <p>{heading}</p>
            <FormInput 
                label={'First name'}
                placeholder={''}
                width={'240px'}
                required={false}
            />

            <FormInput 
                label={'First name'}
                placeholder={''}
                width={'240px'}
                required={false}
            />

            <FormInput 
                label={'Email'}
                placeholder={''}
                width={'500px'}
                required={false}
            />

            <FormInput 
                label={'Phone'}
                placeholder={''}
                width={'240px'}
                required={false}
            />

            <FormInput 
                label={'Zipcode'}
                placeholder={'placeholder 5'}
                width={'240px'}
                required={false}
            />

            <Button className={'form-button'} buttonText={buttonText} />
        </FormContainer>
    )
}
