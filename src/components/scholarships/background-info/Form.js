import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"
import { useStaticQuery, graphql, navigate } from "gatsby"
import { useLocation } from "@reach/router"
import queryString from "query-string"
import { createClient } from "@formium/client"
import {
    blue,
    Button,
    TextInput,
    Textarea,
    CheckboxRadioGroup,
    Checkbox,
    Radio,
} from "@vschool/lotus"

import { useFormium } from "../../shared/CustomForms/useFormium"

const Form = styled.form`
    background-color: ${blue.lightest};
    border: 2px solid ${blue.base};
    width: 100%;
    max-width: 674px;
    padding: 56px 24px 88px;

    @media (min-width: 800px) {
        padding: 64px 88px 88px;
    }
`

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

export default function BackgroundForm() {
    const location = useLocation()
    const [queryData, setQueryData] = useState({})
    const [formData, setFormData] = useState({})
    const data = useStaticQuery(graphql`
        {
            formiumForm(slug: { eq: "scholarship-background-info" }) {
                name
                schema
            }
        }
    `)
    const formiumData = data.formiumForm.schema
    const formiumPageId = formiumData.pageIds[0]
    const formiumFields = formiumData.fields
    const formiumQuestionIds = formiumFields[formiumPageId].items
    const formiumQuestions = formiumQuestionIds
        .map(q => formiumFields[q])
        .filter(q => !q.hidden) // Don't display any questions marked as hidden

    // TODO: Look into Formium's React SDK: https://formium.io/docs/react
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
    }, [data])

    // Save the name/email either from state (from the scholarship page) or from a querystring (from email link)
    useEffect(() => {
        let data
        if (location.state?.name && location.state?.email) {
            const { name, email } = location.state
            data = { name, email }
        } else if (location.search) {
            data = queryString.parse(location.search)
        } else if (
            Object.keys(JSON.parse(localStorage.getItem("backgroundInfoForm")))
                .length >= 2
        ) {
            data = JSON.parse(localStorage.getItem("backgroundInfoForm"))
        }
        setQueryData(data)
        localStorage.setItem("backgroundInfoForm", JSON.stringify(data))
    }, [location.search, location.state])

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

    async function handleSubmit(e) {
        e.preventDefault()
        const data = { ...queryData, ...formData }
        // const formium = createClient(process.env.GATSBY_FORMIUM_PROJECTID)
        // await formium.submitForm("scholarship-background-info", data)
        // console.log(data)
        const options = {
            method: "POST",
            body: JSON.stringify(data),
        }
        const res = await fetch(
            "https://hooks.zapier.com/hooks/catch/666916/ol5gwcd/",
            options
        )
        const response = await res.json()
        console.log(response)
    }

    const formComponents = formiumQuestions.map(question => {
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
                            checked={formData[question.slug] === choice.title}
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
                    <p>There's a question type you haven't accounted for yet</p>
                )
        }
    })

    return (
        <section>
            <Form onSubmit={handleSubmit}>
                {formComponents}
                <Button>Submit</Button>
            </Form>
        </section>
    )
}
