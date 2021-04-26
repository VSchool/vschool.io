import React from 'react'
import styled from 'styled-components'
import FormInput from './FormInput'
import Button from './AdditionalResources/Button'

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

    return (
        <StyledForm className={className}>
            <FormInput 
                className={'first-name'}
                name={'firstName'}
                label={input1.label}
                placeholder={input1.placeholder}
                required={true}
            />

            <FormInput 
                className={'last-name'}
                name={'lastName'}
                label={input2.label}
                placeholder={input2.placeholder}
                required={true}
            />

            <FormInput 
                className={'email'}
                name={'email'}
                label={input3.label}
                placeholder={input3.placeholder}
                required={true}
            />

            <FormInput 
                className={'phone'}
                name={'phone'}
                label={input4.label}
                placeholder={input4.placeholder}
                required={true}
            />

            <div className={'button-wrapper'}>
                <Button buttonText={buttonText} className={'form-button'} />
            </div>
        </StyledForm>
    )
}
