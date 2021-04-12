import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { blue, gray } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.lighter};
    padding-top: 0;
    padding-bottom: 74px;

    @media (min-width: 800px) {
        padding-top: 0;
    }
`

const Title = styled.h1`
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    color: ${gray.darkest};
`

const Image = styled.img`
    width: 100%;
    padding-top: 60px;
`

const SubTitle = styled.h4`
    font-size: 24px;
    line-height: 32px;
    color: ${gray.darkest};
    font-weight: 800;
    padding: 30px 0 20px;
`

const Text = styled.p`
    & > p {
        font-size: 16px;
        line-height: 24px;
        color: ${gray.darker};
        padding-bottom: 30px;
    }
    padding-bottom: 50px;
`

const PhilTitle = styled.h5`
    font-size: 20px;
    line-height: 24px;
    color: ${gray.darkest};
    font-weight: 800;
    padding-bottom: 18px;
`

const PhilText = styled.p`
    font-size: 16px;
    line-height: 24px;
    color: ${gray.darker};
    padding-bottom: 32px;
`

const Description = props => {
    // const data = useStaticQuery(graphql`
    //     {
    //         prismicCoursePage {
    //             data {
    //                 body {
    //                     ... on PrismicCoursePageBodySkillsSection {
    //                         primary {
    //                             skill_name {
    //                                 text
    //                             }
    //                         }
    //                         items {
    //                             skill_text {
    //                                 text
    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // `)
    const data = useStaticQuery(graphql`
        {
            prismicCoursePageBodySkillsSection {
                items {
                    skill_text {
                        text
                    }
                }
                primary {
                    skill_name {
                        text
                    }
                }
            }
        }
    `)

    console.log(data)
    const {
        description_image: { alt: descAlt, url: descUrl },
        description_philosophies,
        description_subtitle: { text: descSub },
        description_text: { html: descText },
        description_title: { text: descTitle },
    } = props
    return (
        <Container>
            <Title>{descTitle}</Title>
            <Image src={descUrl} alt={descAlt} />
            <SubTitle>{descSub}</SubTitle>
            <Text dangerouslySetInnerHTML={{ __html: descText }}></Text>
            {description_philosophies.map(
                ({
                    philosophy_description: { text: philDesc },
                    philosophy_title: { text: philTitle },
                }) => (
                    <div>
                        <PhilTitle>{philTitle}</PhilTitle>
                        <PhilText>{philDesc}</PhilText>
                    </div>
                )
            )}
        </Container>
    )
}

export default Description
