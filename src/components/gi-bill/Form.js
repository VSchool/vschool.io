import React, {useState} from 'react'
import styled from 'styled-components'
import { TextInput, Button } from '@vschool/lotus'
import {navigate} from 'gatsby'

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`

const InputsDiv = styled.div`
    display: block;
    gap: 24px;

    @media (min-width: 800px){
        display: flex;
    }
`

const StyledTextInput = styled(TextInput)`
    margin-bottom: 24px;

    & > input {
        background: #FFFFFF;
        border: 2px solid #D8D4CF;
        box-sizing: border-box;
    }
`

const StyledButton = styled(Button)`
     @media (max-width: 800px){
        width: 100%;
        margin-bottom: 48px;
    }
`

export default function Form(props) {

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

    const stringifyInputs = input => {
        return input[0].toLowerCase() + input.slice(1).split(' ').join('')
    }
    
    const mappedInputs = props.formInfo.map(
        ({
            [`${props.type}_form_label`]:{text: label}, 
            [`${props.type}_form_placeholder`]: {text: placeholder}
        }, i) => {
            if(i === 0){
                const {
                    [`${props.type}_form_label`]:{text: label2}, 
                    [`${props.type}_form_placeholder`]: {text: placeholder2}
                } = props.formInfo[i + 1]
                return <InputsDiv>
                            <StyledTextInput 
                                className={stringifyInputs(label)}
                                name={stringifyInputs(label)}
                                label={label}
                                value={inputs[stringifyInputs(label)]}
                                placeholder={placeholder}
                                required={true}
                                onChange={handleChange} />
                            <StyledTextInput 
                                className={stringifyInputs(label2)}
                                name={stringifyInputs(label2)}
                                label={label2}
                                value={inputs[stringifyInputs(label2)]}
                                placeholder={placeholder2}
                                required={true}
                                onChange={handleChange} />
                        </InputsDiv>
            }else if (i !== 1) {
                return <StyledTextInput 
                    className={stringifyInputs(label)}
                    name={stringifyInputs(label)}
                    label={label}
                    value={inputs[stringifyInputs(label)]}
                    placeholder={placeholder}
                    required={true}
                    onChange={handleChange} />
            }
        })

    return (
        <StyledForm onSubmit={handleSubmit}>
            {mappedInputs}
            <div>
                <StyledButton size="lg">{props.buttonText}</StyledButton>
            </div>
        </StyledForm>
    )
}
