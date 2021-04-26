import React from 'react'
import styled from 'styled-components'
import { red, gray } from '@vschool/lotus'

const FormInputContainer = styled.div`
    // border: 2px solid orange;
    
    & > .label-container {
        display: flex;
        column-gap: 4px;
        // border: 1px solid orange;

        & > .asterisks {
            // display: none;
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
        border: 2px solid ${gray.base};
        box-sizing: border-box;
        font-family: Aktiv Grotesk;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: ${gray.darker};
    }
`

export default function FormInput(props) {
    const {
        className, 
        name,
        label,
        placeholder,
        required
    } = props

    return (
        <FormInputContainer className={className}>
            <div className={'label-container'}>
                <p className={'asterisks'}>{'*'}</p>
                <label>{label}</label>
            </div>
            <input name={name} placeholder={placeholder} />
        </FormInputContainer>
    )
}
