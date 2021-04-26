import React from 'react'
import styled from 'styled-components'
import { red, gray } from '@vschool/lotus'

const FormInputContainer = styled.div`
    background: lightblue;
    
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
        color: #514F4B;
    }
`

export default function FormInput(props) {
    const {className, label } = props
    console.log(gray)
    return (
        <FormInputContainer className={className}>
            <div className={'label-container'}>
                <p className={'asterisks'}>{'*'}</p>
                <label>{label}</label>
            </div>
            <input />
        </FormInputContainer>
    )
}
