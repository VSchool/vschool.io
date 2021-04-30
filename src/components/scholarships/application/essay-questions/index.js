import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"
import querystring from "query-string"
import { blue, gray, Button } from "@vschool/lotus"
import Form from "./Form"

const TextContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 64px;
    padding-top: 64px;

    @media (min-width: 800px) {
        padding-top: 96px;
        margin-bottom: 96px;
    }
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

const Title = styled.h1`
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
`

const StyledButton = styled(Button)`
    &&& {
        margin-top: 48px;
        margin-bottom: 14px;
        @media (min-width: 800px) {
            margin-bottom: 24px;
        }
    }
`

const Footnote = styled.p`
    color: ${gray.darker};
    font-size: 12px;
    line-height: 16px;

    @media (min-width: 800px) {
        font-size: 14px;
        line-height: 18px;
    }
`

export default function BackgroundInfoForm() {
    const [showPreEssay, setShowPreEssay] = useState()
    const location = useLocation()
    useEffect(() => {
        fetch(process.env.SCHOLARSHIP_APP_ESSAY_QUESTIONS_ZAPIER_WEBHOOK_URL)

        const query = querystring.parse(location.search)
        if (query.showpreessay === "false") {
            setShowPreEssay(false)
        } else {
            setShowPreEssay(true)
        }
    }, [location.search])
    const data = useStaticQuery(graphql`
        {
            prismicScholarshipApplicationForms {
                data {
                    form_subtitle {
                        text
                    }
                    essay_form_text {
                        text
                    }
                    essay_form_title {
                        text
                    }
                    pre_essay_title {
                        text
                    }
                    pre_essay_text {
                        text
                    }
                    pre_essay_button_text {
                        text
                    }
                    pre_essay_footnote {
                        text
                    }
                }
            }
        }
    `)

    const {
        form_subtitle: { text: subtitle },
        essay_form_text: { text },
        essay_form_title: { text: title },
        pre_essay_title: { text: preEssayTitle },
        pre_essay_text: { text: preEssayText },
        pre_essay_button_text: { text: preEssayButtonText },
        pre_essay_footnote: { text: preEssayFootnote },
    } = data.prismicScholarshipApplicationForms.data
    return (
        <>
            <TextContainer>
                <Subtitle>{subtitle}</Subtitle>
                <Title>{showPreEssay ? preEssayTitle : title}</Title>
                <Text>{showPreEssay ? preEssayText : text}</Text>
                {showPreEssay && (
                    <>
                        <StyledButton
                            size="lg"
                            onClick={() => setShowPreEssay(false)}
                        >
                            {preEssayButtonText}
                        </StyledButton>
                        <Footnote>{preEssayFootnote}</Footnote>
                    </>
                )}
            </TextContainer>
            {!showPreEssay && <Form />}
        </>
    )
}
