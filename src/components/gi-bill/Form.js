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
    @media (max-width: 800px) {
        width: 100%;
        margin-bottom: 48px;
    }
`

const StyledLink = styled(Link)`
    display: block;
    margin: 20px 0;
`

const StyledIcon = styled.img`
    position: relative;
    top: 5px;
`

export default function Form(props) {
    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    })

    function handleChange({ target: { name, value } }) {
        setInputs(prev => ({ ...prev, [name]: value }))
    }

    async function handleSubmit(e, type) {
        e.preventDefault()
        let { firstName, lastName, email, phone } = inputs
        // Get the UTM parameters if they exist to add to the POST URL below
        const query = localStorage.getItem("query") || ""
        const formData = {
            firstName,
            lastName,
            email,
            phone,
            convertKitTag: "vet landing page lead",
        }

        const options = {
            method: "POST",
            body: JSON.stringify(formData),
        }

        await fetch(
            process.env.GATSBY_VET_LANDING_PAGE_ZAPIER_WEBHOOK_URL + query,
            options
        )
        navigate("/gi-bill/success")
    }

    const stringifyInputs = input => {
        return (
            input[0].toLowerCase() +
            input
                .slice(1)
                .split(" ")
                .join("")
        )
    }

    const mappedInputs = props.formInfo.map(
        (
            {
                [`${props.type}_form_label`]: { text: label },
                [`${props.type}_form_placeholder`]: { text: placeholder },
            },
            i
        ) => {
            if (i === 0) {
                const {
                    [`${props.type}_form_label`]: { text: label2 },
                    [`${props.type}_form_placeholder`]: { text: placeholder2 },
                } = props.formInfo[i + 1]
                return (
                    <InputsDiv>
                        <StyledTextInput
                            className={stringifyInputs(label)}
                            name={stringifyInputs(label)}
                            label={label}
                            value={inputs[stringifyInputs(label)]}
                            placeholder={placeholder}
                            required={true}
                            onChange={handleChange}
                        />
                        <StyledTextInput
                            className={stringifyInputs(label2)}
                            name={stringifyInputs(label2)}
                            label={label2}
                            value={inputs[stringifyInputs(label2)]}
                            placeholder={placeholder2}
                            required={true}
                            onChange={handleChange}
                        />
                    </InputsDiv>
                )
            } else if (i !== 1) {
                return (
                    <StyledTextInput
                        className={stringifyInputs(label)}
                        name={stringifyInputs(label)}
                        label={label}
                        value={inputs[stringifyInputs(label)]}
                        placeholder={placeholder}
                        required={true}
                        onChange={handleChange}
                    />
                )
            } else {
                return null
            }
        }
    )

    return (
        <StyledForm onSubmit={handleSubmit}>
            {mappedInputs}
            <div>
                <StyledButton size="lg">{props.buttonText}</StyledButton>
                <StyledLink to="https://calendly.com/v-school/apply">
                    <StyledIcon
                        src={props.icon.iconUrl}
                        alt={props.icon.iconAlt}
                    />{" "}
                    or schedule a time to talk
                </StyledLink>
            </div>
        </StyledForm>
    )
}
