import React from "react"
import styled from "styled-components"
import { AccordionGroup, Accordion, gray, black } from "@vschool/lotus"

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
            color: ${props => props.style.color || gray.darker};
        }
    }
`

function Faq(props) {
    const styles = props.styles || {
        color: "#456AE2",
        fontFamily: "aktiv-grotesk",
        fontSize: 20,
        fontWeight: 400,
        lineHeight: 28,
        paddingRight: 24,
        whiteSpace: "pre-wrap",
        backgroundColor: gray.lighter,
        width: "100%",
        maxWidth: 672,
    }
    const { faq } = props
    return (
        <Container>
            <H3>Frequently Asked Questions</H3>
            <AccordionGroup>
                {faq.map(faq => {
                    return (
                        <StyledAccordion
                            key={faq.faq_title.text}
                            style={styles}
                            title={faq.faq_title.text}
                        >
                            <P>{faq.faq_info.text}</P>
                        </StyledAccordion>
                    )
                })}
            </AccordionGroup>
        </Container>
    )
}

export default Faq
