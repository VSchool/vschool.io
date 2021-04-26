import React from 'react'
import FormInput from './FormInput'
import styled from 'styled-components'

const StyledForm = styled.form`
    display: grid;
    grid-template-columns: [left-margin col1-start] 1fr [col1-end col2-start] 1fr [col2-end col3-start] 1fr [col3-end col4-start] 1fr [col4-end col5-start] 1fr [col5-end col6-start] 1fr [col6-end right-margin];
    grid-column-gap: 24px;
    grid-row-gap: 16px;
    grid-template-rows: auto;
    border: 2px solid black;

    & > .first-name {
        grid-column-start: col1-start;
        grid-column-end: col3-end;
        grid-row-start: 1;
        // background: red;
    }

    & > .last-name {
        grid-column-start: col1-start;
        grid-column-end: col3-end;
        grid-row-start: 2;
        // background: blue;
    }
`

export default function Form(props) {
    const { className } = props 

    return (
        <StyledForm className={className}>
            <FormInput 
                className={'first-name'}
                label={'Label 1'}
            />

            <FormInput 
                className={'last-name'}
                label={'Label 2'}
            />
        </StyledForm>
    )
}
