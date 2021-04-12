import React from "react"
import styled from "styled-components"
import { blue, gray } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.lighter};
    padding-top: 74px;
    padding-bottom: 74px;

    @media (min-width: 800px) {
        padding-top: 96px;
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

    @media (min-width: 800px) {
        position: relative;
    }
`

const ImageTextContainer = styled.div`
    background: ${blue.darker};
    border: 2px solid ${blue.base};
    box-sizing: border-box;
    position: absolute;
    height: 316px;
    bottom: 0;
    width: 100%;

    @media (min-width: 800px) {
        position: relative;
        height: 588px;
    }
`

const ImageText = styled.p`
    font-size: 18px;
    line-height: 24px;
    color: ${gray.base};
    width: 100%;
    max-width: 400px;
    padding: 24px;

    @media (min-width: 800px) {
        font-size: 24px;
        line-height: 32px;
        padding: 64px 24px;
    }
`

const Title = styled.h1`
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    color: ${gray.darkest};
    padding: 20px 0 30px;

    @media (min-width: 800px) {
        
    }
`

const StatBox = styled.div`
    margin: 20px 0px;
    padding: 0 20px;
    border-top: 2px ${blue.base} solid;
    border-bottom: 2px ${blue.base} solid;

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
    color: ${blue.darker};
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
                            style={
                                i === 0
                                    ? {
                                          borderRight: `.5px solid ${blue.base}`,
                                      }
                                    : {
                                          borderLeft: `.5px solid ${blue.base}`,
                                      }
                            }
                        >
                            <StatText>{stat_text.text}</StatText>
                            <StatNum>{stat_number.text}</StatNum>
                        </StatBox>
                    ))}
                </div>
                <Text>{caption}</Text>

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
                                    <ImageTextContainer>
                                        <ImageText>{testText}</ImageText>
                                        <div
                                            style={{
                                                position: "absolute",
                                                bottom: "22px",
                                            }}
                                        >
                                            <ImageText
                                                style={{
                                                    fontSize: "14px",
                                                    lineHeight: "20px",
                                                    letterSpacing: "0.25px",
                                                    textTransform: "uppercase",
                                                    color: gray.lighter,
                                                    paddingTop: 0,
                                                    paddingBottom: 0,

                                                    
                                                }}
                                            >
                                                {testName}
                                            </ImageText>
                                            <ImageText
                                                style={{
                                                    fontSize: "14px",
                                                    lineHeight: "18px",
                                                    color: gray.dark,
                                                    paddingTop: 0,
                                                    paddingBottom: 0,
                                                }}
                                            >
                                                {testInfo}
                                            </ImageText>
                                        </div>
                                    </ImageTextContainer>
                                </ImageContainer>
                            </>
                        )
                    }
                )}
            </>
        </Container>
    )
}

export default Outcomes
