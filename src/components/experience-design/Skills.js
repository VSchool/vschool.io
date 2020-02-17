import React from "react"
import styled from "styled-components"
import { gray, black } from "@vschool/lotus"

const Container = styled.div`
    padding: 0 24px;
    background-color: ${gray.lighter};
    z-index: 1;

    @media (min-width: 600px) {
        padding: 0 44px;
    }

    @media (min-width: 1200px) {
        padding: 0 88px;
    }
`

const GridContainer = styled.div`
    @media (min-width: 840px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-right: auto;
        margin-left: auto;
        width: 770px;
    }

    @media (min-width: 860px) {
        padding-bottom: 24px;
    }

    @media (min-width: 1200px) {
        width: 1024px;
    }
`

const GridItem = styled.div`
    @media (min-width: 840px) {
        width: 385px;
    }

    @media (min-width: 1200px) {
        width: 512px;
    }
`

const H4 = styled.h4`
    color: ${black};
    font-family: "aktiv-grotesk";
    font-size: 24px;
    font-weight: 800;
    line-height: 30px;
    margin-top: 56px;
    position: relative;
    z-index: 3;

    @media (min-width: 860px) {
        font-size: 28px;
        line-height: 34px;
    }

    @media (min-width: 1200px) {
        font-size: 32px;
        font-weight: 900;
        line-height: 40px;
    }
`

const H5 = styled.h5`
    color: ${black};
    font-family: "aktiv-grotesk";
    font-size: 20px;
    font-weight: bold;
    line-height: 26px;
    padding: 16px 0px;
    border-bottom: 2px solid #ebc9f1;
    margin: 0;
`

const OrangeUnderline = styled.div`
    display: inline-block;
    position: relative;
    top: 86px;
    width: 132px;
    height: 8px;
    background-color: #ffd7b3;
    z-index: 2;

    @media (min-width: 860px) {
        top: 90px;
    }

    @media (min-width: 1200px) {
        top: 95px;
        width: 180px;
    }
`

function Skills(props) {
    const { hardSkillsHeader, softSkillsHeader, hardSkills, softSkills } = props
    return (
        <Container>
            <GridContainer>
                <GridItem>
                    <OrangeUnderline></OrangeUnderline>
                    <H4>{hardSkillsHeader}</H4>
                    {hardSkills.map(({ hard_skill }, i) => (
                        <H5 key={hard_skill + i}>{hard_skill.text}</H5>
                    ))}
                </GridItem>
                <GridItem>
                    <OrangeUnderline />
                    <H4>{softSkillsHeader}</H4>
                    {softSkills.map(({ soft_skill }, i) => (
                        <H5 key={soft_skill + i}>{soft_skill.text}</H5>
                    ))}
                </GridItem>
            </GridContainer>
        </Container>
    )
}

export default Skills
