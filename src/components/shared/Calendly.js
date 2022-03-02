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
    height: 920px;
    background-color: ${gray.lighter};
`

export default function Calendly(props) {
    // const location = useLocation()
    const [searchParams, setSearchParams] = useState()
    // const [queryData, setQueryData] = useState({})
    // const [utmObj, setUtmObj] = useState({})
    useEffect(() => {
        const utmString = localStorage.getItem("query")?.slice(1) // Remove the ? from the string if it exists
        const searchParams = new URLSearchParams(utmString)
        setSearchParams(searchParams)
        // const obj = {}
        // searchParams.forEach((value, key) => {
        //     if (key.startsWith("utm")) {
        //         const keyParts = key.split("_")
        //         const newKey =
        //             keyParts[0] +
        //             keyParts[1][0].toUpperCase() +
        //             keyParts[1].slice(1)
        //         obj[newKey] = value
        //     }
        // })
        // setUtmObj(obj)
    }, [])

    async function handleEventScheduled(e) {
        // const data = { ...queryData }
        // const options = {
        //     method: "POST",
        //     body: JSON.stringify(data),
        // }
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
            <CalendlyEventListener onEventScheduled={handleEventScheduled}>
                <InlineWidget
                    url="https://calendly.com/v-school/apply"
                    prefill={{
                        email: "",
                    }}
                    styles={{ height: 900 }}
                    utm={{
                        utmCampaign: searchParams?.get("utm_campaign") ?? "",
                        utmMedium: searchParams?.get("utm_medium") ?? "",
                        utmContent: searchParams?.get("utm_content") ?? "", // We don't currently use this, but may in the future
                        utmSource: searchParams?.get("utm_source") ?? "",
                        utmTerm: searchParams?.get("utm_term") ?? "", // We don't currently use this, but may in the future
                    }}
                />
            </CalendlyEventListener>
        </WidgetContainer>
    )
}
