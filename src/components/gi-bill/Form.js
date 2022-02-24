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
    font-size: 14px;
    @media (max-width: 800px) {
        width: 100%;
        margin-bottom: 48px;
    }
`

const StyledIcon = styled.img`
    position: relative;
    left: 10px;
    top: 2px;
`


export default function Form(props) {

    return (
        <StyledForm>
            <div>
                <StyledButton to="https://calendly.com/v-school/apply">
                    Schedule a Call
                    <StyledIcon
                        src={props.icon.iconUrl}
                        alt={props.icon.iconAlt}
                    />
                </StyledButton>
            </div>
        </StyledForm>
    )
}
