import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { gray } from "@vschool/lotus"

// All this will come from prismic
import indicatorActive from '../../images/slider-indicator-active.svg'
import indicatorInactive from '../../images/slider-indicator-inactive.svg'
import previousInactiveMobile from '../../images/slider-previous-inactive-mobile.svg'
import nextInactiveMobile from '../../images/slider-next-inactive-mobile.svg'
import tempCalendarImg1 from '../../images/slider-schedule-mobile-1.svg'
import tempCalendarImg2 from '../../images/slider-schedule-mobile-2.svg'
import tempCalendarImg3 from '../../images/slider-schedule-mobile-3.svg'
import tempCalendarImg4 from '../../images/slider-schedule-mobile-4.svg'
import tempCalendarImg5 from '../../images/slider-schedule-mobile-5.svg'
import tempCalendarImg6 from '../../images/slider-schedule-mobile-6.svg'

// This will also come from prismic
const tempArr = [
    {
        title: 'Learning That Fits With Your Schedule',
        body: 'Students will work directly with their student success mentor to set realistic goals based on their life schedule and the time that they have available to work on curriculum.',
        image: tempCalendarImg1
    },
    {
        title: 'Full Time Schedule And Commitment',
        body: 'This is an example schedule that demonstrates what a student’s schedule could look like if they have 40 hours available each week and structure their schedule as if they were at their new full-time job.',
        image: tempCalendarImg2
    },
    {
        title: 'Part Time Job And Commitment',
        body: 'This is an example schedule that demonstrates what a student’s schedule could look like if they have 20 hours available each week and structure their schedule and are working a part-time job.',
        image: tempCalendarImg3
    },
    {
        title: 'Full-Time Job - Weekend Warrior',
        body: 'This is an example schedule that demonstrates what a student’s schedule could look like if they have a commitment to work a full-time job and only have time available for the course on weekends.',
        image: tempCalendarImg4
    },
    {
        title: 'Life Restrictions - The Night Owl',
        body: 'This is an example schedule that demonstrates what a student’s schedule could look like if they have a commitment to watch kids or something during the day and only have the night availalbe to work.',
        image: tempCalendarImg5
    },
    {
        title: 'Our Model Works With Any Schedule',
        body: 'Work with your student success mentor to configure your schedule to your life situation.',
        image: tempCalendarImg6
    }
]


const StyledSection = styled.section`
    padding-bottom: 72px;
    position: relative;
    background-color: ${gray.lighter};
    // border: 2px solid lightcoral;

    @media (min-width: 800px) {
        padding: 0px 136px 42px 136px;
    }
`


const WidthWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
`

const SectionTitle = styled.h2`
    margin-bottom: 20px;
    width: 100%; 
    font-style: normal; 
    font-weight: 800;
    font-size: 24px;
    line-height: 32px;
    color: ${gray.darkest};

    @media (min-width: 800px) {
        margin-bottom: 30px;
        font-weight: 900;
        font-size: 32px;
        line-height: 40px;
    }
`


const SectionSubtitle = styled.p`
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;

    color: ${gray.darker};
    padding: 20px 0 60px;

    @media (min-width: 800px) {
        font-size: 20px;
        line-height: 32px;
    }
`



const Title = styled.h4`
    text-align: center;
    font-weight: 800;
    
    font-size: 17px;
    line-height: 24px;
    color: ${gray.darkest};
`

const Body = styled.p`
    margin-bottom: 48px;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    height: 92px;

    @media (min-width: 800px) {
        margin-bottom: 76px;
        width: 848px;
        height: auto;
        font-size: 16px;
        line-height: 24px;
    }
`

const ImageWrapper = styled.div`
    margin-bottom: 32px;
    position: relative;
    width: 100%;
`

const Image = styled.img`
    width: 100%;
    filter: drop-shadow(0px 0.818966px 1.63793px rgba(0, 0, 0, 0.14)) drop-shadow(0px 1.22845px 1.63793px rgba(0, 0, 0, 0.12)) drop-shadow(0px 0.409483px 2.04741px rgba(0, 0, 0, 0.2));

    @media (min-width: 800px) {
        width: 100%;
    }
`

const SubText = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    text-align: center;

    @media (min-width: 800px) {
        width: 848px;
        height: auto;
        font-size: 14px;
        line-height: 18px;
    }
`

const IndicatorWrapper = styled.div`
    margin-bottom: 32px;
    display: flex;
    gap: 16px;
    height: 20px;

    @media (min-width: 800px) {
        // top: 688px;
    }
`

const SliderIndicator = styled.img`
    width: 20px;
    height: 20px;
`

const PreviousButton = styled.img`
    position: absolute;
    top: 66px;
    left: -8px;
    width: 48px;
    height: 48px;
    filter: drop-shadow(0px 8px 10px rgba(0, 0, 0, 0.14)) drop-shadow(0px 3px 14px rgba(0, 0, 0, 0.12)) drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.2));

    @media (min-width: 800px) {
        width: 72px;
        height: 72px;
        top: 288px;
        left: -40px;
    }
`

const NextButton = styled.img`
    position: absolute;
    top: 0px;
    right: -8px;
    top: 66px;
    width: 48px;
    height: 48px;
    filter: drop-shadow(0px 8px 10px rgba(0, 0, 0, 0.14)) drop-shadow(0px 3px 14px rgba(0, 0, 0, 0.12)) drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.2));

    @media (min-width: 800px) {
        width: 72px;
        height: 72px;
        top: 288px;
        right: -40px;
        // right: 268px;
    }
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
                    # schedule_subtitle {
                    #     text
                    # }
                    # schedule_subtitle_paragraph {
                    #     text
                    # }
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
        // schedule_subtitle: { text: schedSubTitle },
        // schedule_subtitle_paragraph: { text: schedPara },
        schedule_text: { html: schedText },
        schedule_title: { text: schedTitle },
    } = data.prismicCoursePageSharedData.data

    const [displayNumber, setDisplayNumber] = useState(0)

    let displayObj = tempArr[displayNumber]
    const {
        title,
        body,
        image
    } = displayObj

    function handleNextClick(display, setter) {
        if (display <= tempArr.length - 1) {
            setter(() => display + 1)
        } if (display === undefined) {
            console.log(`It is about to be undefined`)
        }
    }

    function handlePreviousClick(display, setter) {
        if (display > 0) {
            setter(() => display - 1)
        }
    }

    return (
        <StyledSection>
            <WidthWrapper>
                <SectionTitle>{schedTitle}</SectionTitle>
                <SectionSubtitle>
                    {'It’s not always realistic to drop everything to go back to school and we understand that. We also don’t think that a busy schedule should delay you from the career you want.'}
                    <br />
                    <br />
                    {'We will work with you to customize your class schedule so you move at a pace that is beneficial and realistic to your current situation.'}
                </SectionSubtitle>
                <Title>{title}</Title>
                <Body>{body}</Body>
                <ImageWrapper>
                    <Image src={image} alt={'some text'} />
                    <NextButton 
                        src={nextInactiveMobile} 
                        alt={'next image'} 
                        onClick={() => handleNextClick(displayNumber, setDisplayNumber)}
                    />

                    <PreviousButton 
                        src={previousInactiveMobile} 
                        alt={' previous image'} 
                        onClick={() => handlePreviousClick(displayNumber, setDisplayNumber)}
                    />
                </ImageWrapper>
                <IndicatorWrapper>
                    {
                        tempArr.map((obj, idx) => {
                            if (idx === displayNumber) {
                                return <SliderIndicator key={idx} src={indicatorActive} alt={'active icon'} />
                            } else {
                                return <SliderIndicator key={idx} src={indicatorInactive} alt={'inactive icon'} />
                            }
                        })
                    }
                </IndicatorWrapper>
                <SubText>{'** Each students schedule will vary depending on their availability and time commitment.'}</SubText>
            </WidthWrapper>
        </StyledSection>
    )
}

export default ComponentName










// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import styled from "styled-components"
// import { gray } from "@vschool/lotus"

// const Container = styled.section`
//     background-color: ${gray.lighter};
//     padding-top: 0;
//     padding-bottom: 74px;

//     @media (min-width: 800px) {
//         padding-top: 0;
//     }
// `

// const WidthContainer = styled.section`
//     max-width: 1200px;
// `

// const Title = styled.h1`
//     font-size: 24px;
//     line-height: 32px;
//     color: ${gray.darkest};
// `

// const Text = styled.p`
//     & > p {
//         font-size: 16px;
//         line-height: 24px;
//         color: ${gray.darker};
//         padding: 20px 0 60px;
//     }
// `

// const Subtitle = styled.h3`
//     font-size: 17px;
//     line-height: 24px;
//     text-align: center;
//     font-weight: 800;
//     color: ${gray.darkest};
// `

// const SubText = styled.p`
//     font-size: 14px;
//     line-height: 18px;
//     text-align: center;
//     color: ${gray.darker};
//     padding: 18px 0 48px;
// `

// const Image = styled.img`
//     width: 100%;
// `

// const ImageText = styled.p`
//     font-size: 12px;
//     line-height: 16px;
//     text-align: center;
//     color: ${gray.darker};
//     padding-top: 30px;
// `

// const Schedule = () => {
//     const data = useStaticQuery(graphql`
//         {
//             prismicCoursePageSharedData {
//                 data {
//                     schedule_carousel_images {
//                         carousel_image {
//                             url
//                             alt
//                         }
//                     }
//                     schedule_images_caption {
//                         text
//                     }
//                     schedule_subtitle {
//                         text
//                     }
//                     schedule_subtitle_paragraph {
//                         text
//                     }
//                     schedule_text {
//                         html
//                     }
//                     schedule_title {
//                         text
//                     }
//                 }
//             }
//         }
//     `)

//     const {
//         schedule_carousel_images,
//         schedule_images_caption: { text: schedImgCap },
//         schedule_subtitle: { text: schedSubTitle },
//         schedule_subtitle_paragraph: { text: schedPara },
//         schedule_text: { html: schedText },
//         schedule_title: { text: schedTitle },
//     } = data.prismicCoursePageSharedData.data
//     return (
//         <Container>
//             <WidthContainer>
//                 <Title>{schedTitle}</Title>
//                 <Text dangerouslySetInnerHTML={{ __html: schedText }}></Text>
//                 <Subtitle>{schedSubTitle}</Subtitle>
//                 <SubText>{schedPara}</SubText>
//                 {schedule_carousel_images.map(
//                     ({ carousel_image: { url: ImgUrl, alt: ImgAlt } }) => (
//                         <Image src={ImgUrl} alt={ImgAlt} />
//                     )
//                 )}
//                 <ImageText>{schedImgCap}</ImageText>
//             </WidthContainer>
//         </Container>
//     )
// }

// export default Schedule
