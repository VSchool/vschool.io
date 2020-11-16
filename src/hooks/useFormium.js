import React, { useState, useEffect } from "react"
import { useLocation } from "@reach/router"
import styled, { css } from "styled-components"

import {
    blue,
    Button,
    TextInput,
    Textarea,
    CheckboxRadioGroup,
    Checkbox,
    Radio,
} from "@vschool/lotus"

const sharedStyles = css`
    margin-bottom: 64px;
`

const StyledTextInput = styled(TextInput)`
    ${sharedStyles}
`
const StyledTextarea = styled(Textarea)`
    ${sharedStyles}
`
const StyledCheckboxRadioGroup = styled(CheckboxRadioGroup)`
    ${sharedStyles}
`

export function useFormium(formiumForm) {
    const [formData, setFormData] = useState({})
    const [formComponents, setFormComponents] = useState()

    const formiumPageId = formiumForm.schema.pageIds[0]
    const formiumFields = formiumForm.schema.fields
    const formiumQuestions = formiumFields[formiumPageId].items
        .map(q => formiumFields[q])
        // Don't display any questions marked as hidden
        .filter(q => !q.hidden)

    function handleChange(e) {
        const { name, value, type } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]:
                type === "checkbox"
                    ? prevData[name].includes(value)
                        ? prevData[name].filter(val => val !== value)
                        : [...prevData[name], value]
                    : value,
        }))
    }

    useEffect(() => {
        // Set the initial data from the formium questions
        const initialData = formiumQuestions.reduce((acc, curr) => {
            if (Object.keys(acc).length === 0) {
                return { [curr.slug]: curr.type === "CHECKBOX" ? [] : "" }
            }
            return {
                ...acc,
                [curr.slug]: curr.type === "CHECKBOX" ? [] : "",
            }
        }, {})
        setFormData(initialData)
    }, [formiumForm])

    useEffect(() => {
        const components = formiumQuestions.map(question => {
            switch (question.type) {
                case "SHORT_TEXT":
                    return (
                        <StyledTextInput
                            key={question.id}
                            type="text"
                            label={question.title}
                            required={question.required}
                            name={question.slug}
                            placeholder={question.placeholder}
                            value={formData[question.slug] || ""}
                            onChange={handleChange}
                            validationText={
                                question.requiredText || "auto-generate"
                            }
                        />
                    )
                case "LONG_TEXT":
                    return (
                        <StyledTextarea
                            key={question.id}
                            label={question.title}
                            required={question.required}
                            name={question.slug}
                            placeholder={question.placeholder}
                            value={formData[question.slug] || ""}
                            onChange={handleChange}
                            validationText={
                                question.requiredText || "auto-generate"
                            }
                        />
                    )

                // Surrounded the case in curlybraces so I could use `const choices...` again
                case "RADIO": {
                    const choices = question.items
                        .map(choice => formiumFields[choice])
                        .map(choice => (
                            <Radio
                                key={choice.id}
                                value={choice.title}
                                onChange={handleChange}
                                name={question.slug}
                                checked={
                                    formData[question.slug] === choice.title
                                }
                            >
                                {choice.title}
                            </Radio>
                        ))
                    return (
                        <StyledCheckboxRadioGroup
                            key={question.id}
                            label={question.title}
                            required={question.required}
                            validationText={
                                question.requiredText || "auto-generate"
                            }
                        >
                            {choices}
                        </StyledCheckboxRadioGroup>
                    )
                }
                // Surrounded the case in curlybraces so I could use `const choices...` again
                case "CHECKBOX": {
                    const choices = question.items
                        .map(choice => formiumFields[choice])
                        .map(choice => (
                            <Checkbox
                                key={choice.id}
                                value={choice.title}
                                onChange={handleChange}
                                name={question.slug}
                                checked={
                                    formData[question.slug]?.includes(
                                        choice.title
                                    ) || false
                                }
                            >
                                {choice.title}
                            </Checkbox>
                        ))
                    return (
                        <StyledCheckboxRadioGroup
                            key={question.id}
                            label={question.title}
                            required={question.required}
                            validationText={
                                question.requiredText || "auto-generate"
                            }
                        >
                            {choices}
                        </StyledCheckboxRadioGroup>
                    )
                }
                default:
                    return (
                        <p>
                            There's a question type you haven't accounted for
                            yet
                        </p>
                    )
            }
        })
        setFormComponents(components)
    }, [formData])

    return { formComponents, formData }
}
