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
    border: 2px solid black;

    & > .first-name {
        grid-column: line1 / line4;
        grid-row: 1 / 2;
        // background: red;
    }

    & > .last-name {
        grid-column: line4 / end;
        grid-row: 1 / 2;
        // background: blue;
    }

    & > .email {
        grid-column: line1 / end;
        grid-row: 2 / 2;
        // background: green;
    }

    & > .phone {
        grid-column: line1 / end;
        grid-row: 3 / 3;
        // background: gray;
    }

    & > .button-wrapper {
        margin-top: 8px;
        grid-column: line1 / end;
        grid-row: 4 / 4;
        // background: lightgray;

        & > .form-button {

        }
    }
`

export default function Form(props) {
    const { className, formData, buttonText } = props
    // console.log(formData[0].hero_form_label[0].text)
    // console.log(formData)

    // const inputsArr = [...formData.inputs.form]
    // console.log(formData)

    
    // let input1Placeholder = inputsArr[0].hero_form_placeholder[0].text

    // let input2Label = inputsArr[1].hero_form_label[0].text
    // let input2Placeholder = inputsArr[1].hero_form_placeholder[0].text

    // let input3Label = inputsArr[2].hero_form_label[0].text
    // let input3Placeholder = inputsArr[2].hero_form_placeholder[0].text

    // let input4Label = inputsArr[3].hero_form_label[0].text
    // let input4Placeholder = inputsArr[3].hero_form_placeholder[0].text

    // let buttonText = formData.button.text[0].text

    return (
        <StyledForm className={className}>
            <FormInput 
                className={'first-name'}
                name={'firstName'}
                label={'input1Label'}
                placeholder={'input1Placeholder'}
                required={true}
            />

            <FormInput 
                className={'last-name'}
                name={'lastName'}
                label={'input2Label'}
                placeholder={'input2Placeholder'}
                required={true}
            />

            <FormInput 
                className={'email'}
                name={'email'}
                label={'input3Label'}
                placeholder={'input3Placeholder'}
                required={true}
            />

            <FormInput 
                className={'phone'}
                name={'phone'}
                label={'input4Label'}
                placeholder={'input4Placeholder'}
                required={true}
            />
            <div className={'button-wrapper'}>
                <Button buttonText={buttonText} className={'form-button'} />
            </div>
        </StyledForm>
    )
}
