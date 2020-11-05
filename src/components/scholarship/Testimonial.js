import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Testimonial from "../shared/Testimonial"
import { pink } from "@vschool/lotus"

const Container = styled.section`
    padding-bottom: 160px;
`

export default function TestimonialSection(props) {
    const {
        testimonial_image: { url: imgSrc, alt: imgAlt },
        testimonial_quote: { text: quote },
        testimonial_name: { text: source },
        testimonial_status: { text: sourceTitle },
        primary_theme_color: primaryThemeColor,
        secondary_theme_color: secondaryThemeColor,
    } = props
    return (
        <Container>
            <Testimonial
                quote={quote}
                source={source}
                sourceTitle={sourceTitle}
                primaryColor={primaryThemeColor}
                secondaryColor={secondaryThemeColor}
                imgSrc={imgSrc}
            />
        </Container>
    )
}
