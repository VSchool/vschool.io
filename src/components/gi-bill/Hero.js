import React from "react"
import styled from "styled-components"
import HeroLayout from "../shared/HeroLayout"
import Form from "./Form"
import { gray, red, blue } from "@vschool/lotus"

const HeroContainer = styled.div`
    padding-top: 112px;
    padding-bottom: 112px;
    background: ${blue.lightest};
    // border: 2px dashed black;

    // @media (max-width: 800px) {
    //     grid-template-columns: 18px [col1-start] 1fr [col1-end col2-start] 1fr [col2-end col3-start] 1fr [col3-end col4-start] 1fr 18px
    //     background: red;
    // }
`

const ContentContainer = styled.div`
    max-width: 1200px;
    margin: auto;
    & > .title {
        width: fit-content;
        h3 {
            font-weight: 900;
            font-size: 56px;
            line-height: 56px;
            color: ${gray.darkest};
            display: block;
        }

        p {
            font-weight: 800;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0.25px;
            text-transform: uppercase;
            color: ${red.dark};
        }
    }

    & > .wrapper {
        margin-top: 48px;

        & > div {
            justify-content: normal;
        }

        & > .hero-form {
            grid-column-start: c1-start;
            grid-column-end: span c6-end;
            grid-row-start: 2;
            // border: 2px dotted orange;
        }

        & > .content-image {
            grid-column: c8-start / c12-end;
            grid-row-start: 1;
            grid-row-end: 3;
            // background: dodgerblue;

            & > .image-background {
                position: relative;
                top: -8px;
                left: 8px;
                width: 413px;
                height: 528px;
                background: ${blue.base};

                & > img {
                    position: absolute;
                    top: 8px;
                    left: -8px;
                    height: 100%;

                    // height: 100%;
                }
            }
        }
    }
`

const HeroDescription = styled.p`
    margin-bottom: 24px;
    font-size: 20px;
    line-height: 32px;
    color: ${gray.darker};
`

export default function Hero(props) {
    const { prismicData } = props

    let heroImageUrl = prismicData.hero_image.url
    let heroImageAlt = prismicData.hero_image.alt

    let heroTitle = prismicData.hero_title.text
    let heroSubtitle = prismicData.hero_subtitle.text
    let heroDescription = prismicData.hero_description.text
    let buttonText = prismicData.hero_form_button.text

    let input1Label = prismicData.hero_form[0].hero_form_label.text
    let input1Placeholder = prismicData.hero_form[0].hero_form_placeholder.text
    const input1 = { label: input1Label, placeholder: input1Placeholder }

    let input2Label = prismicData.hero_form[1].hero_form_label.text
    let input2Placeholder = prismicData.hero_form[1].hero_form_placeholder.text
    const input2 = { label: input2Label, placeholder: input2Placeholder }

    let input3Label = prismicData.hero_form[2].hero_form_label.text
    let input3Placeholder = prismicData.hero_form[2].hero_form_placeholder.text
    const input3 = { label: input3Label, placeholder: input3Placeholder }

    let input4Label = prismicData.hero_form[3].hero_form_label.text
    let input4Placeholder = prismicData.hero_form[3].hero_form_placeholder.text
    const input4 = { label: input4Label, placeholder: input4Placeholder }

    return (
        <HeroContainer>
            <ContentContainer>
                <div className="title">
                    <p>{heroSubtitle}</p>
                    <h3>{heroTitle}</h3>
                </div>
                <div className={"wrapper"}>
                    <HeroLayout
                        text={
                            <>
                                <HeroDescription>
                                    {heroDescription}
                                </HeroDescription>
                                <Form
                                    className={"hero-form"}
                                    buttonText={buttonText}
                                    input1={input1}
                                    input2={input2}
                                    input3={input3}
                                    input4={input4}
                                />
                            </>
                        }
                        image={
                            <div className={"content-image"}>
                                <div className={"image-background"}>
                                    <img
                                        src={heroImageUrl}
                                        alt={heroImageAlt}
                                    />
                                </div>
                            </div>
                        }
                    />
                </div>
            </ContentContainer>
        </HeroContainer>
    )
}
