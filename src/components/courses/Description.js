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

    @media (min-width: 800px) {
        font-size: 44px;
        line-height: 48px;
    }
`

const Image = styled.img`
    width: 100%;
    padding-top: 60px;

    @media (min-width: 800px) {
        width: 50%;
        padding: 50px 60px;
    }
`

const IndustryDetails = styled.div`
    @media (min-width: 800px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 40px;
        width: 50%;
    }
`

const SubTitle = styled.h4`
    font-size: 24px;
    line-height: 32px;
    color: ${gray.darkest};
    font-weight: 800;
    padding: 30px 0 20px;

    @media (min-width: 800px) {
        font-size: 32px;
        line-height: 40px;
    }
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

    @media (min-width: 800px) {
        font-size: 24px;
        line-height: 32px;
        padding: 0 20px 18px;
    }
`

const PhilText = styled.p`
    font-size: 16px;
    line-height: 24px;
    color: ${gray.darker};
    padding-bottom: 32px;

    @media (min-width: 800px) {
        font-size: 16px;
        line-height: 24px;
        padding: 0 20px 32px;
    }
`

const FlexContainer = styled.div`
    @media (min-width: 800px) {
        display: flex;
        flex-direction: row-reverse;
        padding-top: 64px;
    }
`

const Description = props => {
    const newData = useStaticQuery(graphql`
    {
      prismicCoursePageBody1TeamIndividuals {
        items 
      }
    }
  `)
  console.log(newData)
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
    // const data = useStaticQuery(graphql`
    //     {
    //         prismicCoursePageBodySkillsSection {
    //             items {
    //                 skill_text {
    //                     text
    //                 }
    //             }
    //             primary {
    //                 skill_name {
    //                     text
    //                 }
    //             }
    //         }
    //     }
    // `)

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
            <FlexContainer>
                <Image src={descUrl} alt={descAlt} />
                <IndustryDetails>
                    <SubTitle>{descSub}</SubTitle>
                    <Text dangerouslySetInnerHTML={{ __html: descText }}></Text>
                </IndustryDetails>
            </FlexContainer>
            <FlexContainer>
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
            </FlexContainer>
        </Container>
    )
}

export default Description
