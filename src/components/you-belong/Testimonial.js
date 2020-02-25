import React from "react"
import styled from "styled-components"
import { gray, yellow, orange, blue, pink} from "@vschool/lotus"

const Container = styled.div`
  background-color: ${pink.lightest};
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 64px;

  @media (min-width: 600px){
    padding-left: 32px; 
    padding-right: 32px;
  }

  @media (min-width: 840px){
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 96px;
  }

  @media (min-width: 1200px){
    padding-left: 88px;
    padding-right: 88px;
  }
`


const GraySection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 840px) {
        flex-direction: row-reverse;
        justify-content: center;
    }
`

const WhiteSection = styled.div`

    background-color: ${gray.lighter};

    @media (min-width: 840px) {
        height: 120px;
    }
`

const Image = styled.img`
    width: 232px;
    border-bottom: 20px solid ${blue.base};
    margin-top: -24px;

    @media (min-width: 400px) {
        margin-top: -32px;
    }

    @media (min-width: 840px) {
        margin-bottom: -235px;
        margin-right: -24px;
        width: 320px;
    }
`

const TestimonialContainer = styled.div`
    width: 100%;
    max-width: 350px;
    border: 2px solid ${pink.base};
    background-color: ${pink.lighter};
    padding: 24px;
    padding-bottom: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 840px) {
        max-width: 616px;
        padding-left: 64px;
        padding-top: 44px;
        padding-bottom: 44px;
        margin-bottom: -186px;
    }

    @media (min-width: 1000px) {
        padding-top: 62px;
        padding-bottom: 72px;
    }
`

const TestimonialText = styled.h2`
    color: ${pink.darkest};
    font-family: "aktiv-grotesk-extended";
    font-size: 20px;
    font-weight: 700;
    line-height: 32px;
    width: 100%;
    max-width: 300px;
    max-width: 320px;

    @media (min-width: 840px) {
        max-width: 390px;
        align-self: flex-start;
    }

    @media (min-width: 1000px) {
        width: 100%;
        font-size: 24px;
        max-width: 580px;
    }
`

const Cite = styled.h5`
    color: ${blue.dark};
    font-family: "aktiv-grotesk-extended";
    font-weight: 800;
    font-size: 18px;
    margin-top: 24px;
    max-width: 300px;
    align-self: center;

    @media (max-width: 500px) {
        font-size: 16px;
        max-width: 320px;
    }

    @media (min-width: 840px) {
        font-size: 20px;
        align-self: flex-start;
        max-width: 100%;
        margin-top: 32px;
    }
`

export default function Testimonial(props) {
    const { testimonial, cite, testimonialImg } = props
    return (
        <>
            <Container>
                <GraySection>
                    <TestimonialContainer>
                        <TestimonialText>"{testimonial}"</TestimonialText>
                        <Cite>{cite}</Cite>
                    </TestimonialContainer>
                    <Image src={testimonialImg} />
                </GraySection>
            </Container>
            <WhiteSection></WhiteSection>
        </>
    )
}