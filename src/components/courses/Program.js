import React from "react"
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

const WidthContainer = styled.div`
    max-width: 1200px;
    width: 100%;
`

const Header = styled.h1`
    font-size: 32px;
    line-height: 40px;
    text-align: left;
    color: ${gray.darkest};
    margin-bottom: 65px;

    @media (min-width: 800px) {
        font-size: 44px;
        line-height: 48px;
    }
`

const ProgramContainer = styled.div`
    width: 100%;
    margin-bottom: 30px;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 30px;

    @media (min-width: 800px) {
        grid-template-columns: 1fr 1fr;
    }
`

const SkillContainer = styled.div`
    width: 100%;
    margin-bottom: 30px;
`

const SkillTitle = styled.h4`
    font-size: 20px;
    line-height: 24px;
    color: ${blue.base};
    margin-bottom: 20px;
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
        content: "•";
        text-indent: -5px;
        color: #000000;
        margin: 10px;
    }
`


const Program = () => {
    const program = [
        {
            title: 'MASTERY-BASED LEARNING MODEL',
            description: `Our program allows students to progress at their own pace,
            ensuring they have a profound understanding of cybersecurity
            concepts and are well-equipped to tackle real-world
            challenges.`
        },{
            title: `UP-TO-DATE CURRICULUM`,
            description: `We continually update our curriculum to keep pace with the
            rapidly evolving cybersecurity landscape, preparing students
            to face new threats and challenges.`   
        },{
            title: 'MULTIPLE CERTIFICATIONS',
            description: `Our program covers a range of globally-recognized
            certifications, such as A+, Network+, and Security+, providing
            students with a comprehensive cybersecurity education and
            opening the door to a multitude of career opportunities.`
        },{
            title: 'CAREER SUPPORT AND JOB PLACEMENT ASSISTANCE',
            description: `With lifetime career and curriculum support, job placement
            assistance, and networking opportunities, we prepare
            students to enter the workforce and secure rewarding
            careers in cybersecurity.`
        },{
            title: 'COMPTIA INTEGRATION',
            description: `Our partnership with CompTIA, a leading provider of
            cybersecurity certifications and training resources, grants
            students access to an extensive array of resources and
            offers instructors valuable insights into student progress and
            performance.`
        },{
            title: 'CAREER FOCUS',
            description: `Our program is designed with a strong emphasis on career outcomes, striving to help students secure a position in the cybersecurity field upon graduation. This focus highlights our dedication to our students' success and prepares them for navigating the competitive job market.`
        }
    ]

    const mappedProgram = program.map(
        ({ title, description }) => {
            return (
                    <SkillContainer>
                        <SkillTitle>{title}</SkillTitle>
                        <SkillTextContainer>
                            <SkillText>{description}</SkillText>
                        </SkillTextContainer>
                    </SkillContainer>
            )
        }
    )

    return (
        <Container>
            <WidthContainer>
                <Header>V School Cyber Security Program</Header>
                <ProgramContainer>
                    {mappedProgram}
                </ProgramContainer>
            </WidthContainer>
        </Container>
    )
}

export default Program
