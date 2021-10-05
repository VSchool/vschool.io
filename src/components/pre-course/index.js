import React from "react"
import Hero from "./Hero"
import Info from "./Info"
import Career from "./Career"
import Start from "./Start"
import Partners from "./Partners"
import styled from "styled-components"
import { gray } from "@vschool/lotus"
import { navigate } from "gatsby"
import { Helmet } from "react-helmet"

const PageContainer = styled.div`
    background: ${gray.lighter};
`

export default function PreCourse({ data, uid }) {
    const submitButton = () => {
        /* Pass the UID via state to the registration form so we can
        pass that along to Zapier when submitting the form */
        navigate("/pre-course-communities/registration-form", {
            state: { uid, convertKitTag: data.convertkit_subscribe_tag },
        })
    }
    return (
        <PageContainer>
            <Hero submit={submitButton} {...data} />
            <Info />
            <Career submit={submitButton} />
            <Start submit={submitButton} />
            {
                uid !== 'intro-to-tech-course' &&
                <Partners {...data} />
            }
            { 
            uid === 'apartment-housing-rentals-foundation' &&
                <Helmet>  
                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-197348191-1">
                    </script>
                    <script>
                    {`window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'UA-197348191-1');`}
                    </script>
                </Helmet>
            }
        </PageContainer>
    )
}
