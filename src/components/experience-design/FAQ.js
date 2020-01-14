import React from "react"
import styled from "styled-components"
import { AccordionGroup, Accordion, blue, gray, black } from "@vschool/lotus"
import { graphql, useStaticQuery } from "gatsby"

const Container = styled.div`
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 56px;

    @media (min-width: 600px) {
        padding: 0 44px;
        padding-bottom: 56px;
    }

    @media (min-width: 900px) {
        width: 672px;
        margin-right: auto;
        margin-left: auto;
        padding-bottom: 56px;
    }

    @media (min-width: 1200px) {
        padding: 0 88px;
        padding-bottom: 56px;
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

const H4 = styled.h3`
    color: ${blue.base};
    font-family: "aktiv-grotesk";
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    padding-right: 24px;
`

function FAQ(props) {
    const styles = {
        color: "#456AE2",
        fontFamily: "aktiv-grotesk",
        fontSize: 20,
        fontWeight: 400,
        lineHeight: 28,
        paddingRight: 24,
        whiteSpace: "pre-wrap"
    }
    const { 
      prismicXdPage: {
        data: {
          faq
        }
      }
    } = useStaticQuery(graphql`
      {
        prismicXdPage {
          data {
            faq {
              faq_info {
                text
              }
              faq_title {
                text
              }
            }
          }
        }
      }
    `)
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