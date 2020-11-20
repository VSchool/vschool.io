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
    margin-bottom: 160px;

    @media (min-width: 800px) {
        padding: 64px 88px 88px;
        margin-bottom: 208px;
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
            formiumForm(slug: { eq: "scholarship-background-info" }) {
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
            data = location.state
        } else if (location.search) {
            // change plus sign to "%2B" so when it gets parsed
            // by query-string, it correctly keeps it as a plus
            const query = location.search.replace(/\+/gi, "%2B")
            data = queryString.parse(query) // {email: bob@example.com}
        } else if (storageValue && Object.keys(storageValue).length >= 1) {
            storageValue.email = decodeURIComponent(storageValue.email)
            data = storageValue
        } else {
            setError(
                "Couldn't find an associated email address. Please click the link you received in your email."
            )
            data = {}
        }
        setQueryData(data)
        localStorage.setItem("scholarshipApplicationInfo", JSON.stringify(data))
    }, [location.search, location.state])

    useEffect(() => {
        const nextStep = localStorage.getItem("scholarshipAppNextStep")
        /**
        In case someone accidentally clicks an old email's link to a past step in the
        process, they'll automatically be redirected to their current step in the process
        */
        if (location.search.includes("email=")) {
            if (nextStep === "schedule") {
                navigate(
                    `/scholarships/application/schedule${
                        location.search ? location.search : ""
                    }`
                )
            } else if (nextStep === "essay") {
                navigate(
                    `/scholarships/application/essay-questions${
                        location.search ? location.search : ""
                    }`
                )
            }
        }
    }, [])

    async function handleSubmit(e) {
        e.preventDefault()
        setSubmitting(true)
        const nextStep = ""
        const data = { ...queryData, ...formData }
        const fullTuitionOnlySelected =
            formData.financingOptionsConsidered.length === 1 &&
            formData.financingOptionsConsidered[0].includes(
                "Full Tuition Scholarship"
            )
        if (fullTuitionOnlySelected) {
            data.nextStep = "essay"
        } else {
            data.nextStep = "schedule"
        }

        const options = {
            method: "POST",
            body: JSON.stringify(data),
        }

        try {
            await fetch(process.env.SCHOLARSHIP_APP_ZAPIER_WEBHOOK_URL, options)

            setSubmitting(false)
            if (fullTuitionOnlySelected) {
                localStorage.setItem("scholarshipAppNextStep", data.nextStep)
                navigate("/scholarships/application/essay-questions", {
                    state: { email: queryData.email },
                })
            } else {
                localStorage.setItem("scholarshipAppNextStep", data.nextStep)
                navigate("/scholarships/application/schedule", {
                    state: { email: queryData.email },
                })
            }
        } catch (err) {
            setSubmitting(false)
            setError(
                "Something went wrong. Please refresh the page and try again."
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
                    Something went wrong when submitting the form to Zapier
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
