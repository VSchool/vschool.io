import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, navigate } from "gatsby"
import { useLocation } from "@reach/router"
import queryString from "query-string"
import { blue, Button } from "@vschool/lotus"

import { useFormium } from "../../../hooks/useFormium"

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

export default function BackgroundForm() {
    const location = useLocation()
    const [queryData, setQueryData] = useState({})
    // const [formData, setFormData] = useState({})
    const data = useStaticQuery(graphql`
        {
            formiumForm(slug: { eq: "scholarship-background-info" }) {
                name
                schema
            }
        }
    `)

    const { formComponents, formData } = useFormium(data)

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

    async function handleSubmit(e) {
        e.preventDefault()
        const data = { ...queryData, ...formData }
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

    return (
        <section>
            <Form onSubmit={handleSubmit}>
                {formComponents}
                <Button>Submit</Button>
            </Form>
        </section>
    )
}
