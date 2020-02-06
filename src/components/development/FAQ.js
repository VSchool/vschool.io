import React from "react"
import styled from "styled-components"
import { AccordionGroup, Accordion, gray, black } from "@vschool/lotus"
import { graphql, useStaticQuery } from "gatsby"

const Container = styled.div`
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 96px;
    padding-top: 96px;

    @media (min-width: 600px) {
        padding-left: 44px;
        padding-right: 44px;
    }

    @media (min-width: 900px) {
        width: 672px;
        margin-right: auto;
        margin-left: auto;
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

function FAQ(props) {
    const {faq} = props
    const styles = {
        color: "#456AE2",
        fontFamily: "aktiv-grotesk",
        fontSize: 20,
        fontWeight: 400,
        lineHeight: 28,
        paddingRight: 24,
        whiteSpace: "pre-wrap",
    }
    return (
        <Container>
            <H3>Frequently Asked Questions</H3>
            <AccordionGroup>
                {faq.map(faq => {
                    return (
                        <Accordion
                            key={faq.faq_title.text}
                            style={styles}
                            title={faq.faq_title.text}
                        >
                            <P>{faq.faq_info.text}</P>
                        </Accordion>
                    )
                })}
            </AccordionGroup>
        </Container>
    )
}

export default FAQ
