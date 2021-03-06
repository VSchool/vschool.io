import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { blue, black, gray } from "@vschool/lotus"

const FlexContainer = styled.div`
    background-color: ${blue.lightest};
    display: flex;
    justify-content: center;
    padding-top: 24px;
`

const TextContainer = styled.div`
    border: 2px solid ${blue.lighter};
    margin: 0 24px;

    @media (max-width: 360px) {
        width: 286px;
        margin-right: 4px;
        margin-left: 4px;
    }

    @media (min-width: 600px) {
        width: 480px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (min-width: 840px) {
        width: 700px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 100px 120px 120px;
    }

    @media (min-width: 960px) {
        width: 800px;
        height: 315px;
        grid-template-rows: repeat(3, 90px);
    }

    @media (min-width: 1200px) {
        width: 1026px;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 90px);
        height: 220px;
    }
`

const H2 = styled.h2`
    width: 320px;
    color: ${black};
    font-size: 20px;
    line-height: 26px;
    margin: 16px;

    @media (max-width: 360px) {
        font-size: 16px;
        width: 100%;
    }

    @media (min-width: 600px) {
        width: 400px;
        margin-top: 24px;
        font-size: 22px;
    }

    @media (min-width: 840px) {
        width: 666px;
        padding-left: 24px;
        padding-right: 24px;
        grid-column: 1 / -1;
    }

    @media (min-width: 960px) {
        width: 750px;
        margin-top: 40px;
        font-weight: 800;
    }
`

const Bullet = styled.p`
    width: 318px;
    color: ${gray.darker};
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    margin: 16px 16px;

    @media (max-width: 360px) {
        font-size: 12px;
        width: 260px;
    }

    @media (min-width: 600px) {
        width: 400px;
        margin: 12px 16px;
    }

    @media (min-width: 840px) {
        width: 320px;
        padding: 0 24px;
        margin: 8px 12px;
    }
`

const BulletText = styled.span`
    padding-left: 8px;
`

function CourseBullets() {
    const data = useStaticQuery(graphql`
        {
            prismicBootcampPrimer {
                data {
                    course_bullets {
                        bullet {
                            text
                        }
                    }
                    course_bullets_title {
                        text
                    }
                }
            }
        }
    `)

    const {
        course_bullets: bullets,
        course_bullets_title: { text: bulletsTitle },
    } = data.prismicBootcampPrimer.data
    return (
        <FlexContainer>
            <TextContainer>
                <H2>{bulletsTitle}</H2>
                {bullets.map(({ bullet }, i) => (
                    <Bullet key={i}>
                        •<BulletText>{bullet.text}</BulletText>
                    </Bullet>
                ))}
            </TextContainer>
        </FlexContainer>
    )
}

export default CourseBullets
