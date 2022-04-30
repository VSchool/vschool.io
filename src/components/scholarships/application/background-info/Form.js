import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, navigate } from "gatsby"
import { useLocation } from "@reach/router"
import queryString from "query-string"
import { blue, red, Button } from "@vschool/lotus"
import { useFormium } from "../../../../hooks/useFormium"
import Airtable from "airtable"

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
    const base = new Airtable({
        apiKey: process.env.GATSBY_AIRTABLE_API_KEY,
    }).base("appDtw82NJafLsLdO")

    const location = useLocation()
    const [queryData, setQueryData] = useState({})
    const [utmObj, setUtmObj] = useState({})
    const [error, setError] = useState()
    const [submitting, setSubmitting] = useState(false)
    const [eligible, setEligible] = useState(true)
    const data = useStaticQuery(graphql`
        {
            form1: formiumForm(slug: { eq: "scholarship-background-info" }) {
                name
                schema
            }
            form2: formiumForm(slug: { eq: "gowinn-scholarship-background" }) {
                name
                schema
            }
        }
    `)
    
    const { formComponents, formData } = useFormium(location.state.scholarshipName === 'DWSS Full-Ride Scholarship to V School' ? data.form2 : data.form1)

    useEffect(() => {
        base("Scholarship Application")
            .select({
                // Selecting the first 3 records in All Records:
                maxRecords: 100,
                filterByFormula: `{Email} = "${localStorage.getItem(
                    "application-email"
                )}"`,
            })
            .eachPage(
                function page(records, fetchNextPage) {
                    let date = records[0].fields["Date Applied"]
                    let first = date.indexOf("-")
                    let last = date.lastIndexOf("-")
                    let six = add6Months(
                        +date.slice(0, first),
                        date.slice(first + 1, last),
                        date.slice(last + 1)
                    )
                    let now = new Date().toISOString().split("T")[0]

                    if (now.slice(0, first) > six.slice(0, first)) {
                        setEligible(true)
                    } else if (
                        now.slice(first + 1, last) >
                            six.slice(first + 1, last) &&
                        now.slice(0, first) >= six.slice(0, first)
                    ) {
                        setEligible(true)
                    } else {
                        setEligible(false)
                    }
                    fetchNextPage()
                },
                function done(err) {
                    if (err) {
                        console.error(err)
                        return
                    }
                }
            )
    }, [])
    function add6Months(year, month, day) {
        if (month > 6) {
            year++
            month -= 6
        } else {
            month += 6
        }
        return `${year}-${month}-${day}`
    }
    // Save the name/email either from state (from the scholarship page) or from a querystring (from email link)
    useEffect(() => {
        let data
        const storageValue = JSON.parse(
            localStorage.getItem("scholarshipApplicationInfo")
        )
        if (location.state) {
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
            } else if (nextStep === "complete") {
                navigate("/scholarships/application/complete")
            }
        }
    }, [location.search])

    useEffect(() => {
        const utmString = localStorage.getItem("query")
        const searchParams = new URLSearchParams(utmString)
        const obj = {}
        searchParams.forEach((value, key) => {
            if (key.startsWith("utm")) {
                const keyParts = key.split("_")
                const newKey =
                    keyParts[0] +
                    keyParts[1][0].toUpperCase() +
                    keyParts[1].slice(1)
                obj[newKey] = value
            }
        })
        setUtmObj(obj)
    }, [])

    async function handleSubmit(e) {
        e.preventDefault()

        if (!formComponents[0].props.children[1].props.checked) {
            setSubmitting(true)
            // replace a "...formData" below after "...queryData"
            const data = {
                ...queryData,
                ...formData,
                completedStep: "background",
                utm: utmObj,
            }
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
                await fetch(
                    process.env.GATSBY_SCHOLARSHIP_APP_ZAPIER_WEBHOOK_URL,
                    options
                )

                setSubmitting(false)
                if (fullTuitionOnlySelected) {
                    localStorage.setItem(
                        "scholarshipAppNextStep",
                        data.nextStep
                    )
                    navigate("/scholarships/application/essay-questions", {
                        state: { email: queryData.email },
                    })
                } else if (eligible == false) {
                    localStorage.setItem("status", "applied")
                    navigate("/scholarships/application/unavailable")
                } else {
                    localStorage.setItem(
                        "scholarshipAppNextStep",
                        data.nextStep
                    )
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
        } else {
            localStorage.setItem("status", "foreign")
            navigate("/scholarships/application/unavailable")
        }
    }

    /* 
        This error should only display if:
        1. The person isn't coming to this form directly from the scholarship page, AND
        2. the person didn't use the link from the email to get to this form, AND
        3. the person had cleared their localStorage or was browsing privately when they first started their application
        OR
        Something went wrong when submitting the form to Zapier
    */


    return (
        <section>
            <Form onSubmit={handleSubmit}>
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
