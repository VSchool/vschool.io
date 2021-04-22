import React from 'react'
import styled from 'styled-components'
import { gray, red } from '@vschool/lotus'

const InputContainer = styled.div`
    min-width: ${props => props.width};
    margin-bottom: 16px;
    // border: 1px dashed blue;

    & > .label-container {
        display: flex;
        // border: 1px solid darkblue;

        & > .input-label {
            width: 100%;
            // border: 1px dashed orange;
            color: ${gray.darkest};
            font-family: Aktiv Grotesk Ex;
            font-style: normal;
            font-weight: bold;
            font-size: 12px;
            line-height: 16px;
            letter-spacing: 0.5px;
        }

        & > span {
            // display: none;
            width: 6px;
            height: 16px;
            margin-right: 4px;
            color: ${red.base};
            // border: 1px dashed red;
        }
    }

    & > input {
        box-sizing: border-box;
        width: 100%;
        height: 48px;
        margin-top: 8px;
        padding: 12px 16px;
        border: 2px solid ${gray.base};
        outline: none;
        color: ${gray.dark};
        background: ${gray.lightest};
        font-family: 'Aktiv Grotesk';
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
    }
`

export default function FormInput(props) {
    const { 
        label,
        required,
        placeholder,
        width
    } = props

    return (
        <InputContainer width={width}>
            <div className={'label-container'}>
                <span>{'*'}</span>
                <p>{label}</p>
            </div>
            <input placeholder={placeholder} />
        </InputContainer>
    )
}
