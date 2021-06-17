import React from "react"
import styled from "styled-components"
import { AccordionGroup, Accordion, gray, black, blue } from "@vschool/lotus"

const Container = styled.div`
    background-color: ${gray.lighter};
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 96px;
    padding-top: 96px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 600px) {
        padding-left: 44px;
        padding-right: 44px;
    }

    @media (min-width: 1200px) {
        padding-top: 160px;
        padding-bottom: 160px;
    }
`

const P = styled.p`
    color: ${gray.darker};
    font-family: "aktiv-grotesk";
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    padding-bottom: 24px;
`

const H3 = styled.h3`
    color: ${black};
    font-family: "aktiv-grotesk";
    font-size: 32px;
    font-weight: 900;
    line-height: 38px;
    padding-bottom: 40px;
`

// const H4 = styled.h3`
//     color: ${blue.base};
//     font-family: "aktiv-grotesk";
//     font-size: 20px;
//     font-weight: 400;
//     line-height: 28px;
//     padding-right: 24px;
// `

const StyledAccordion = styled(Accordion)`
    & > div {

        & > h5 {
            color: ${blue.base};
        }
    }
`

function FAQ(props) {
    const styles = {
        color: blue.base,
        fontSize: 20,
        fontWeight: 400,
        lineHeight: 28,
        paddingRight: 24,
        whiteSpace: "pre-wrap",
        backgroundColor: gray.lighter,
        width: "100%",
        maxWidth: 672,
    }

    const {
        faq_title: {
            text: title
        },
        faq_questions
    } = props
    
    return (
        <Container>
            <H3>{title}</H3>
            <AccordionGroup>
                {faq_questions.map(({
                   faq_answer: {
                        text: answer
                    },
                    faq_question: {
                        text: question
                    }
                }, i) => {
                    return (
                        <StyledAccordion
                            key={answer + i}
                            style={styles}
                            title={question}
                        >
                            <P>{answer}</P>
                        </StyledAccordion>
                    )
                })}
            </AccordionGroup>
        </Container>
    )
}

export default FAQ
