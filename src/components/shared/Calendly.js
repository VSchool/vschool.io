import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import { InlineWidget, useCalendlyEventListener } from "react-calendly"
import { gray } from "@vschool/lotus"

const WidgetContainer = styled.div`
    width: 100%;
    height: 920px;
    background-color: ${gray.lighter};
`

export default function Calendly(props) {
    const [searchParams, setSearchParams] = useState()
    const [content, setContent] = useState("")

    useEffect(() => {
        const utmString = localStorage.getItem("query")?.slice(1) // Remove the ? from the string if it exists
        const searchParams = new URLSearchParams(utmString)
        setSearchParams(searchParams)
        setContent(localStorage.getItem("courseName"))
    }, [])

    async function handleEventScheduled(e) {
        props.submit && props.submit()
        navigate(props.link)
    }

    useCalendlyEventListener({
        onEventScheduled: handleEventScheduled,
    })

    return (
        <WidgetContainer>
            <InlineWidget
                url="https://calendly.com/v-school/apply"
                prefill={{
                    email: "",
                }}
                styles={{ height: 900 }}
                utm={{
                    utmCampaign: searchParams?.get("utm_campaign") ?? "",
                    utmMedium: searchParams?.get("utm_medium") ?? "",
                    utmContent: content ?? "", // We don't currently use this, but may in the future
                    utmSource: searchParams?.get("utm_source") ?? "",
                    utmTerm: searchParams?.get("utm_term") ?? "", // We don't currently use this, but may in the future
                }}
            />
        </WidgetContainer>
    )
}
