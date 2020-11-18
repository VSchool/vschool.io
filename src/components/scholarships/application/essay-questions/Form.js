import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, navigate } from "gatsby"
import { useLocation } from "@reach/router"
import queryString from "query-string"
import { blue, red, Button } from "@vschool/lotus"
import { formium } from "../../../../lib/formium"

import { useFormium } from "../../../../hooks/useFormium"

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

const ErrorMessage = styled.h5`
    color: ${red.dark};
`

export default function BackgroundForm() {
    const location = useLocation()
    const [queryData, setQueryData] = useState({})
    const [error, setError] = useState()
    const [submitting, setSubmitting] = useState(false)
    const data = useStaticQuery(graphql`
        {
            formiumForm(slug: { eq: "scholarship-essay-questions" }) {
                name
                schema
            }
        }
    `)

    const { formComponents, formData } = useFormium(data.formiumForm)

    // Save the name/email either from state (from the scholarship page) or from a querystring (from email link)
    useEffect(() => {
        let data
        const storageValue = JSON.parse(
            localStorage.getItem("scholarshipApplicationInfo")
        )
        if (location.state?.email) {
            data = { email: location.state.email }
        } else if (location.search) {
            // change plus sign to "%2B" so when it gets parsed
            // by query-string, it correctly keeps it as a plus
            const query = location.search.replace(/\+/gi, "%2B")
            data = queryString.parse(query) // {email: bob@example.com}
        } else if (storageValue && Object.keys(storageValue).length >= 1) {
            storageValue.email = decodeURIComponent(storageValue.email)
            data = storageValue
        } else {
            console.error(
                "Couldn't find associated email address. Please click the link you received in your email."
            )
            setError(
                "Couldn't find an associated email address. Please click the link you received in your email."
            )
            data = {}
        }
        setQueryData(data)
        localStorage.setItem("scholarshipApplicationInfo", JSON.stringify(data))
    }, [location.search, location.state])

    async function handleSubmit(e) {
        e.preventDefault()
        setSubmitting(true)
        const data = { ...queryData, ...formData }
        try {
            await formium.submitForm("scholarship-essay-questions", data)
            setSubmitting(false)
            if (
                formData.financingOptionsConsidered.length === 1 &&
                formData.financingOptionsConsidered[0].includes(
                    "Full Tuition Scholarship"
                )
            ) {
                console.log("Full Tuition only")
                // navigate to the essay questions page
            } else {
                console.log("Other options considered")
                // navigate to the embedded calendly booking page
            }
        } catch (err) {
            setSubmitting(false)
            setError(
                "Something went wrong. Please refresh the form and try again."
            )
        }
    }

    return (
        <section>
            <Form onSubmit={handleSubmit}>
                {/*
                This error should only display if:
                    1. The person isn't coming to this form directly from the scholarship page, AND
                    2. the person didn't use the link from the email to get to this form, AND
                    3. the person had cleared their localStorage or was browsing privately when they first started their application
                    OR
                    Something went wrong when submitting the form to Formium
                */}
                {error ? (
                    <ErrorMessage>{error}</ErrorMessage>
                ) : (
                    <>
                        {formComponents}
                        <Button disabled={submitting}>
                            {submitting ? "Sending..." : "Submit"}
                        </Button>
                    </>
                )}
            </Form>
        </section>
    )
}
