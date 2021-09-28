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
    background-color: ${gray.lighter};
`

export default function Calendly(props) {
    const location = useLocation()
    const [queryData, setQueryData] = useState({})
    const [utmObj, setUtmObj] = useState({})


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
        // const data = { ...queryData }
        // const options = {
        //     method: "POST",
        //     body: JSON.stringify(data),
        // }
        // console.log(options)
        // try {
        //     await fetch(
        //         process.env.GATSBY_SCHOLARSHIP_APP_ZAPIER_WEBHOOK_URL,
        //         options
        //     )
        //     localStorage.setItem("scholarshipAppNextStep", "essay")
        props.submit && props.submit()
        navigate(props.link)
        // } catch (e) {
        //     console.error(e.message)
        // }
    }

    return (
        <WidgetContainer>
            <CalendlyEventListener
                onEventScheduled={handleEventScheduled}
                >
                <InlineWidget
                    url="https://calendly.com/v-school/apply"
                    styles={{ height: 700 }}
                    prefill={{
                        email: "",
                    }}
                />
            </CalendlyEventListener>
        </WidgetContainer>
    )
}
