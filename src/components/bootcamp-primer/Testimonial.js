import React from "react"
import styled from "styled-components"
import { gray, orange, blue } from "@vschool/lotus"

const Container = styled.div`
    width: 100%;
`

const WhiteBlock = styled.div`
    background-color: ${gray.lighter};
    height: 136px;

    @media (min-width: 960px) {
        height: 102px;
    }
`

const OrangeBlock = styled.div`
    background-color: ${orange.light};
    padding: 16px;
    width: 100%;
    height: 776px;

    @media (min-width: 960px) {
        height: 700px;
    }
`

const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    @media (min-width: 960px) {
        flex-direction: row;
        justify-content: center;
    }
`

const Image = styled.img`
    margin-top: -76px;
    z-index: 5;
    border-bottom: 20px solid ${blue.base};
    width: 320px;

    @media (max-width: 360px) {
        width: 302px;
    }

    @media (min-width: 960px) {
        margin-top: 10px;
        margin-left: 32px;
        height: 357px;
        width: 320px;
    }

    @media (min-width: 1200px) {
        margin-top: -55px;
    }
`

const TestimonialContainer = styled.div`
    height: 434px;
    border: 2px solid ${orange.base};
    background-color: ${orange.lightest};
    margin-top: -68px;
    flex-direction: column;
    width: 360px;

    @media (max-width: 360px) {
        width: 302px;
    }

    @media (min-width: 600px) {
        width: 400px;
    }

    @media (min-width: 960px) {
        width: 520px;
        margin-left: -80px;
        height: 392px;
        margin-top: 180px;
    }
`

const H1 = styled.h1`
    color: ${orange.darkest};
    height: 216px;
    width: 310px;
    font-family: "aktiv-grotesk-extended";
    font-size: 32px;
    font-weight: bold;
    line-height: 36px;
    margin: 104px 32px 0 32px;

    @media (max-width: 360px) {
        font-size: 24px;
        margin: 104px 16px 0 16px;
        width: 280px;
    }

    @media (min-width: 600px) {
        width: 320px;
        font-size: 32px;
        margin-bottom: 32px;
    }

    @media (min-width: 960px) {
        width: 360px;
        font-size: 32px;
        margin-top: 48px;
        margin-left: 110px;
        margin-bottom: 0;
        height: 190px;
    }

    @media (min-width: 960px) {
        font-size: 32px;
        margin-bottom: 17px;
        margin-top: 56px;
        margin-left: 120px;
    }
`

const P = styled.p`
    color: ${orange.dark};
    font-family: "aktiv-grotesk-extended";
    font-size: 20px;
    font-weight: bold;
    line-height: 24px;
    margin: 32px 32px 48px 32px;

    @media (max-width: 360px) {
        margin-left: 16px;
    }

    @media (min-width: 600px) {
        font-size: 22px;
    }

    @media (min-width: 960px) {
        margin-top: 0;
        margin-left: 110px;
    }

    @media (min-width: 960px) {
        margin-top: 50px;
        margin-left: 120px;
    }
`

function Testimonial(props) {
    const { testimonial, cite, testimonialImg } = props
    return (
        <Container>
            <WhiteBlock />
            <OrangeBlock>
                <FlexContainer>
                    <Image
                        src={testimonialImg}
                        alt="V School Grad Kevin Bowen"
                    />
                    <TestimonialContainer>
                        <H1>"{testimonial}"</H1>
                        <P>{cite}</P>
                    </TestimonialContainer>
                </FlexContainer>
            </OrangeBlock>
        </Container>
    )
}

export default Testimonial
