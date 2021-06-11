import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { gray } from "@vschool/lotus"
import tempCalendarImg from '../../images/slider-schedule-mobile-1.svg'

const StyledSection = styled.section`
    background-color: ${gray.lighter};
    border:2px solid lightcoral;
`
const Title = styled.h3`
    border: 1px dashed dodgerblue;
`

const Body = styled.p`
    border: 1px dashed dodgerblue;
`

const Image = styled.div`
    width: 100%;
    height: 212px;
    border: 1px dashed dodgerblue;
`

const ComponentName = () => {
    const data = useStaticQuery(graphql`
        {
            prismicCoursePageSharedData {
                data {
                    schedule_carousel_images {
                        carousel_image {
                            url
                            alt
                        }
                    }
                    schedule_images_caption {
                        text
                    }
                    schedule_subtitle {
                        text
                    }
                    schedule_subtitle_paragraph {
                        text
                    }
                    schedule_text {
                        html
                    }
                    schedule_title {
                        text
                    }
                }
            }
        }
    `)

    const {
        schedule_carousel_images,
        schedule_images_caption: { text: schedImgCap },
        schedule_subtitle: { text: schedSubTitle },
        schedule_subtitle_paragraph: { text: schedPara },
        schedule_text: { html: schedText },
        schedule_title: { text: schedTitle },
    } = data.prismicCoursePageSharedData.data

    const tempObj = {
        title: 'Title',
        body: 'Body',
        image: 'Image',
        caption: 'Captions'
    }

    console.log(555, tempCalendarImg)

    return (
        <StyledSection>
            <Title>{tempObj.title}</Title>
            <Body>{tempObj.body}</Body>
            <Image />
        </StyledSection>
    )
}

export default ComponentName
