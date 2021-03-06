import React from "react"
import styled from "styled-components"
import { blue, gray, green } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.lighter};
    padding-top: 74px;
    padding-bottom: 74px;

    @media (min-width: 800px) {
        padding-top: 96px;
    }
`

const TestimonialContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-columns: 350px 350px;
    width: 390px;
    overflow-x: scroll;
    

    @media (min-width: 800px){
        grid-template-columns: 848px 848px;
        width: 100vw;
        position: relative;
        padding-left: 14%;
    }
`

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 400px;
    margin-top: 32px;
    height: 588px;
    
    @media (min-width: 800px) {
        display: flex;
        max-width: 848px;
    }
`

const Image = styled.img`
    position: absolute;
    width: 100%;
    max-width: 400px;
    object-fit: cover;

    @media (min-width: 800px) {
        position: relative;
    }
`

const ImageTextContainer = styled.div`
    background: ${props => props.color.bgColor};
    border: 2px solid ${props => props.color.border};
    box-sizing: border-box;
    position: absolute;
    height: 316px;
    bottom: 0;
    width: 100%;

    & > div {
        position: absolute;
        bottom: 22px;
        margin: 24px;
    }

    @media (min-width: 800px) {
        position: relative;
        height: 588px;

        & > div {
            padding: 64px 0 64px 27px;
        }
    }
`

const ImageText = styled.p`
    font-family: "aktiv-grotesk-extended";
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: ${gray.base};
    width: 100%;
    max-width: 400px;
    padding: 24px;

    @media (min-width: 800px) {
        font-size: 24px;
        line-height: 32px;
        padding: 64px 0px 64px 47px;
    }
`

const ImageName = styled.p`
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: ${gray.lighter};
    width: 100%;
    max-width: 400px;
    padding: 0px;

    @media (min-width: 800px) {
        font-size: 16px;
        line-height: 24px;
    }
`

const ImageRole = styled.p`
    font-size: 14px;
    line-height: 18px;
    color: ${gray.dark};
    width: 100%;
    max-width: 400px;
    padding: 0;

    @media (min-width: 800px) {
        font-size: 16px;
        line-height: 24px;
    }
`

const Title = styled.h1`
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    color: ${gray.darkest};
    padding: 20px 0 30px;

    @media (min-width: 800px) {
        font-size: 44px;
        line-height: 48px;
    }
`

const StatBox = styled.div`
    margin: 20px 0px;
    padding: 0 20px;
    border-top: 2px ${props => props.color} solid;
    border-bottom: 2px ${props => props.color} solid;

    @media (min-width: 800px) {
        margin: 10px 0px;
        padding: 0px 140px;
    }
`

const Text = styled.p`
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: ${gray.darker};
`

const StatText = styled.p`
    font-size: 10px;
    line-height: 12px;
    text-align: center;
    letter-spacing: 0.5px;
    padding: 11px;
    color: ${gray.darker};

    @media (min-width: 800px) {
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        letter-spacing: 0.25px;
    }
`

const StatNum = styled.p`
    font-size: 44px;
    font-weight: 900;
    line-height: 48px;
    text-align: center;
    color: ${props => props.color};
    padding: 0px 10px 10px 10px;

    @media (min-width: 800px) {
        font-size: 56px;
        line-height: 56px;
    }
`



const Outcomes = props => {
    const {
        outcomes_title: { text: title },
        outcomes_stats,
        outcomes_stats_caption: { text: caption },
        outcomes_testimonials,
    } = props

    
    return (
        <Container>
            <>
                <Title>{title}</Title>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        height: 140,
                    }}
                >
                    {outcomes_stats.map(({ stat_text, stat_number }, i) => (
                        <StatBox 
                            color={props.course_name.text === "UX/UI Design" ? blue.base : green.base}
                            style={
                                i === 0
                                    ? {
                                          borderRight: `.5px solid ${props.course_name.text === "UX/UI Design" ? blue.base : green.base}`,
                                      }
                                    : {
                                          borderLeft: `.5px solid ${props.course_name.text === "UX/UI Design" ? blue.base : green.base}`,
                                      }
                            }
                        >
                            <StatText>{stat_text.text}</StatText>
                            <StatNum color={props.course_name.text === "UX/UI Design" ? blue.darker : green.darker}>{stat_number.text}</StatNum>
                        </StatBox>
                    ))}
                </div>
                <Text>{caption}</Text>

                <TestimonialContainer>
                    {outcomes_testimonials.map(
                        ({
                            testimonial_image: { url: testURL, alt: testAlt },
                            testimonial_text: { text: testText },
                            testimonial_name: { text: testName },
                            testimonial_name_info: { text: testInfo },
                        }) => {
                            return (
                                <>
                                    <ImageContainer>
                                        <Image src={testURL} alt={testAlt} />
                                        <ImageTextContainer color={props.course_name.text === "UX/UI Design" ? {border: blue.base, bgColor: blue.darker} : {border: green.base, bgColor: green.darker}}>
                                            <ImageText>{testText}</ImageText>
                                            <div>
                                                <ImageName>
                                                    {testName}
                                                </ImageName>
                                                <ImageRole>
                                                    {testInfo}
                                                </ImageRole>
                                            </div>
                                        </ImageTextContainer>
                                    </ImageContainer>
                                </>
                            )
                        }
                    )}
                </TestimonialContainer>

            </>
        </Container>
    )
}

export default Outcomes
