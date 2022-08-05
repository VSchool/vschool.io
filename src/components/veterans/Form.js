import React, { useState } from "react"
import styled from "styled-components"
import { TextInput, Button } from "@vschool/lotus"
import Link from "../shared/QueryLink"
import { navigate } from "gatsby"

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`

const InputsDiv = styled.div`
    display: block;
    gap: 24px;

    @media (min-width: 800px) {
        display: flex;
    }
`

const StyledTextInput = styled(TextInput)`
    margin-bottom: 24px;

    & > input {
        background: #ffffff;
        border: 2px solid #d8d4cf;
        box-sizing: border-box;
    }
`

const StyledButton = styled(Button)`
    width: 267px;
    height: 56px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 800px) {
        width: 100%;
    }
`

const StyledIcon = styled.img`
    position: relative;
    left: 10px;
`


export default function Form(props) {

    const handleClick = e => {
        navigate('/gi-bill/schedule')
    }

    return (
        <div>
            <StyledButton onClick={handleClick}>
                Schedule a Call
                <StyledIcon
                    src={props.icon.iconUrl}
                    alt={props.icon.iconAlt}
                />
            </StyledButton>
        </div>
    )
}


