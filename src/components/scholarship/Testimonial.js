import React from "react"
import styled from "styled-components"
import Testimonial from "../shared/Testimonial"

const Container = styled.section`
    padding-bottom: 160px;
`

export default function TestimonialSection(props) {
    const {
        testimonial_image: { url: imgSrc, alt: imgAlt },
        testimonial_quote: { text: quote },
        testimonial_name: { text: source },
        testimonial_status: { text: sourceTitle },
    } = props
    return (
        <Container>
            <Testimonial
                quote={quote}
                source={source}
                sourceTitle={sourceTitle}
                imgSrc={imgSrc}
                imgAlt={imgAlt}
            />
        </Container>
    )
}
