import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { gray } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.lighter};
    padding-top: 0;
    padding-bottom: 74px;

    @media (min-width: 800px) {
        padding-top: 0;
    }
`

const WidthContainer = styled.div`
    max-width: 1200px;
    width: 100%;
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
    }

    @media (min-width: 1000px){
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

const Text = styled.div`
    & > p {
        font-size: 16px;
        line-height: 24px;
        color: ${gray.darker};
        padding-bottom: 30px;
    }
    padding-bottom: 50px;
`

const PhilContainer = styled.div`
    @media (min-width: 800px) {
        max-width: 320px;
    }
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

const FlexContainer2 = styled.div`
    display: block;
    width: 100%;
    @media (min-width: 800px) {
        display: flex;
        justify-content: space-evenly;
        padding-top: 64px;
    }
`

const SkillContainer = styled.div`
    width: 100%;
    margin-bottom: 30px;

    @media (min-width: 800px) {
        width: 320px;
    }
`

const SkillTitle = styled.h4`
    font-size: 20px;
    line-height: 24px;
    color: #21201f;
`

const SkillTextContainer = styled.ul`
    list-style-type: none;
`

const SkillText = styled.li`
    font-size: 16px;
    line-height: 24px;
    color: #514f4b;
    text-indent: -5px;

    &:before {
        content: "—";
        text-indent: -5px;
        color: #859eec;
        margin: 10px;
    }
`

const Logo = styled.img`
    max-width: 80px;
    display: block;
    margin: 50px auto;
    @media (min-width: 800px) {
        max-width: 320px;
        padding: 0 90px 80px;
        margin: 0;
    }
`

const Description = props => {
    const data = useStaticQuery(graphql`
        {
            prismicCoursePage(uid: { eq: "design" }) {
                data {
                    body {
                        ... on PrismicCoursePageBodySkillsSection {
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
                }
            }
        }
    `)

    const mappedSkills = data.prismicCoursePage.data.body.map(
        ({
            items,
            primary: {
                skill_name: { text: skillName },
            },
        }) => {
            return (
                <SkillContainer>
                    <SkillTitle>{skillName}</SkillTitle>
                    <SkillTextContainer>
                        {items.map(({ skill_text: { text: skillDesc } }) => (
                            <SkillText>{skillDesc}</SkillText>
                        ))}
                    </SkillTextContainer>
                </SkillContainer>
            )
        }
    )

    const {
        description_image: { alt: descAlt, url: descUrl },
        description_philosophies,
        description_subtitle: { text: descSub },
        description_text: { html: descText },
        description_title: { text: descTitle },
        description_logo: { alt: logoAlt, url: logoUrl },
    } = props
    return (
        <Container>
            <WidthContainer>
                <Title>{descTitle}</Title>
                <FlexContainer>
                    <Image src={descUrl} alt={descAlt} />
                    <IndustryDetails>
                        <SubTitle>{descSub}</SubTitle>
                        <Text
                            dangerouslySetInnerHTML={{ __html: descText }}
                        ></Text>
                    </IndustryDetails>
                </FlexContainer>
                <FlexContainer2>
                    {description_philosophies.map(
                        ({
                            philosophy_description: { text: philDesc },
                            philosophy_title: { text: philTitle },
                        }) => (
                            <PhilContainer>
                                <PhilTitle>{philTitle}</PhilTitle>
                                <PhilText>{philDesc} </PhilText>
                            </PhilContainer>
                        )
                    )}
                </FlexContainer2>
                <FlexContainer2>
                    {mappedSkills}
                    <Logo src={logoUrl} alt={logoAlt} />
                </FlexContainer2>
            </WidthContainer>
        </Container>
    )
}

export default Description
