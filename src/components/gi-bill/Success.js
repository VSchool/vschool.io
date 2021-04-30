import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { blue, gray } from "@vschool/lotus"

const SuccessContainer = styled.section`
    max-width: 1200px;
    margin: 0 auto;

    & > div {
        margin-top: 48px;
    }
`

const SuccessTitle = styled.h1`
    margin-bottom: 16px;
    font-weight: 900;
    font-size: 32px;
    text-align: center;
    color: #21201F;


    @media (min-width: 800px){
        margin-bottom: 32px;
        font-size: 44px;
        line-height: 48px;
    }
`

const SuccessDescription = styled.p`
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #514F4B;
    margin-bottom: 96px;
    max-width: 850px;

    @media (min-width: 800px){
        font-size: 20px;
        line-height: 32px;
        margin-bottom: 160px;
    }
`

const TestimonialContainer = styled.div`
    position: relative;
    padding: 48px 24px;
    background: ${blue.lightest};
    border: 2px solid ${blue.base};

    @media (min-width: 800px){
        max-width: 640px;
        padding: 64px;
        left: 15%;
    }
`

const TestimonialBody = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: ${gray.darker};

    @media (min-width: 800px){
        font-size: 24px;
        line-height: 32px;
        font-weight: bold;
    }
`

const TestimonialAuthor = styled.p`
    margin-top: 32px;
    font-weight: 800;
    font-size: 16px;
    line-height: 24px;
    color: ${blue.darkest};

    @media (min-width: 800px){
        font-size: 20px;
    }
`

const TestimonialImage = styled.img`
    position: absolute;
    top: 310px;
    width: 337px;

    @media (min-width: 800px){
        top: 50px;
        left: -195px;
        width: 232px;
    }
`

export default function Success(props) {
    const data = useStaticQuery(graphql`
    {
      prismicVeteransLandingPage {
        data {
            success_description {
                text
            }
            success_testimonial_author {
                text
            }
            success_testimonial_body {
                text
            }
            success_testimonial_image {
                url
            }
            success_title {
                text
            }
        }
      }
    }
  `)

    const {
        success_description: {text: successDescription},
        success_testimonial_author: {text: successTestimonialAuthor},
        success_testimonial_body: {text: successTestimonialBody},
        success_testimonial_image: {url: successTestUrl, alt: successTestAlt},
        success_title: {text: successTitle},
    } = {...data.prismicVeteransLandingPage.data}

    return (
        <SuccessContainer>
            <SuccessTitle>{successTitle}</SuccessTitle>
            <SuccessDescription>{successDescription}</SuccessDescription>
            <div>
                <TestimonialContainer>
                    <TestimonialBody>
                        {successTestimonialBody}
                    </TestimonialBody>
                    <TestimonialAuthor>
                        {successTestimonialAuthor}
                    </TestimonialAuthor>
                    <TestimonialImage
                        src={successTestUrl}
                        alt={successTestAlt}
                    />
                </TestimonialContainer>
            </div>
        </SuccessContainer>
    )
}
