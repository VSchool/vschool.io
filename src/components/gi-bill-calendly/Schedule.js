import React, { useState, useEffect } from "react"
import styled from "styled-components"
import queryString from "query-string"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql, navigate } from "gatsby"
import { InlineWidget, CalendlyEventListener } from "react-calendly"
import { blue, gray } from "@vschool/lotus"

const Container = styled.section`
    padding-top: 64px;
    @media (min-width: 800px) {
        padding-top: 96px;
    }
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 672px;
`

const Subtitle = styled.h6`
    text-align: center;
    max-width: 850px;
    margin-bottom: 8px;
    color: ${blue.dark};

    @media (min-width: 800px) {
        margin-bottom: 16px;
    }
`

const Title = styled.h2`
    text-align: center;
    max-width: 850px;
    margin-bottom: 16px;

    @media (min-width: 800px) {
        margin-bottom: 24px;
        font-size: 56px;
    }
`

const Text = styled.p`
    text-align: center;
    max-width: 850px;
    color: ${gray.darker};
    margin-bottom: 64px;
`

const WidgetContainer = styled.div`
    width: 100%;
`

export default function Scheduler() {
    const location = useLocation()
    const [queryData, setQueryData] = useState({})
    const [utmObj, setUtmObj] = useState({})
    const data = useStaticQuery(graphql`
        {
            prismicScholarshipApplicationForms {
                data {
                    form_subtitle {
                        text
                    }
                    scheduler_title {
                        text
                    }
                    scheduler_text {
                        text
                    }
                }
            }
        }
    `)

    const {
        form_subtitle: { text: subtitle },
        scheduler_title: { text: title },
        scheduler_text: { text },
    } = data.prismicScholarshipApplicationForms.data

    useEffect(() => {
        let data
        
        if (location.state?.email) {
            data = { email: location.state.email }
        } else if (location.search) {
            const query = location.search.replace(/\+/gi, "%2B")
            data = queryString.parse(query) // {email: bob@example.com}
        } else {
            data = {}
        }
        setQueryData(data)
    }, [location.search, location.state])

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

    async function handleEventScheduled(e) {
        navigate("/gi-bill/success")
    }

    return (
        <>
            <Container>
                <TextContainer>
                    <Subtitle>Veterans at V School</Subtitle>
                    <Title>Schedule A Call With Admissions</Title>
                </TextContainer>
                <WidgetContainer>
                    <CalendlyEventListener
                        onEventScheduled={handleEventScheduled}
                    >
                        <InlineWidget
                            url="https://calendly.com/v-school/apply"
                            styles={{ height: 700 }}
                            prefill={{
                                email: queryData.email || "",
                            }}
                            utm={utmObj}
                        />
                    </CalendlyEventListener>
                </WidgetContainer>
            </Container>
        </>
    )
}
