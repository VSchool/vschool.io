import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { blue } from "@vschool/lotus"
import Testimonial from "../shared/Testimonial"

const Container = styled.section`
    padding-top: 96px;
    padding-bottom: 160px;

    @media (min-width: 800px) {
        padding-top: 160px;
        padding-bottom: 208px;
    }
`

const Title = styled.h2`
    text-align: center;
    max-width: 850px;
`
const Subtitle = styled.h6`
    text-align: center;
    color: ${blue.base};
    margin-top: 24px;

    @media (min-width: 800px) {
        margin-top: 32px;
    }
`

const TestimonialsContainer = styled.div`
    margin-top: 64px;

    @media (min-width: 800px) {
        margin-top: 96px;
    }
`

const StyledTestimonial = styled(Testimonial)`
    margin-top: 64px;

    @media (min-width: 800px) {
        margin-top: 96px;
    }
`

export default function Testimonials() {
    const data = useStaticQuery(graphql`
        {
            prismicWomensHistoryMonthPage {
                data {
                    testimonials_title {
                        text
                    }
                    testimonials_subtitle {
                        text
                    }
                    testimonials {
                        photo {
                            alt
                            url
                        }
                        name {
                            text
                        }
                        info {
                            text
                        }
                        quote {
                            text
                        }
                    }
                }
            }
        }
    `)
    const {
        testimonials_title: { text: title },
        testimonials_subtitle: { text: subtitle },
        testimonials,
    } = data.prismicWomensHistoryMonthPage.data

    const testimonialComponents = testimonials.map((test, i) => {
        const {
            info: { text: info },
            name: { text: name },
            photo: { alt: photoAlt, url: photoUrl },
            quote: { text: quote },
        } = test

        return (
            <StyledTestimonial
                key={photoUrl}
                quote={quote}
                source={name}
                sourceTitle={info}
                imgSrc={photoUrl}
                imgAlt={photoAlt}
                primaryColor="pink"
                secondaryColor="blue"
            />
        )
    })

    return (
        <Container>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <TestimonialsContainer>
                {testimonialComponents}
            </TestimonialsContainer>
        </Container>
    )
}
