import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import { InlineWidget, CalendlyEventListener } from "react-calendly"
import { gray } from "@vschool/lotus"


const WidgetContainer = styled.div`
    width: 100%;
    background-color: ${gray.lighter};
`

export default function Calendly(props) {
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
        props.submit && props.submit()
        navigate(props.link)
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
