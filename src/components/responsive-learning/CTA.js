import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import QueryLink from "../shared/QueryLink.js"
import { black, green, purple, white, Button } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${green.lightest};
    padding-bottom: 380px; /* 284 + 96 */
    padding-top: 96px;
    justify-content: center;

    @media (min-width: 1200px) {
        padding-top: 160px;
        padding-bottom: 480px;
    }
`

const Header = styled.h2`
    font-weight: 800;
    font-size: 32px;
    line-height: 38px;
    color: black;
    text-align: center;
    width: 240px;
    margin-bottom: 16px;

    @media (min-width: 1200px) {
        font-size: 56px;
        line-height: 56px;
        width: 100%;
        margin-bottom: 48px;
    }
`

const CoursesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 1200px) {
        & div:nth-child(2) {
            margin-top: 24px;
        }
    }
`

const CourseContainer = styled.div`
    width: 100%;
    max-width: 380px;
    height: 108px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
    padding: 0 16px;

    background-image: url(${({ bgImg }) => bgImg});
    background-size: cover;

    @media (min-width: 1200px) {
        max-width: 642px;
        margin-top: 0;
    }
`

const CourseInfoContainer = styled.div`
    background-color: ${white};
    padding: 15px 0;
    width: 100%;
`

const NextSession = styled.p`
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    font-family: "aktiv-grotesk-extended";
    color: ${black};
    text-align: center;
    letter-spacing: 0.5px;

    @media (max-width: 350px) {
        font-size: 10px;
    }
`

const CourseDate = styled.p`
    font-weight: 800;
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    color: ${purple.dark};
    margin-top: 4px;
`

const SubHeader = styled.p`
    text-align: center;
    letter-spacing: 0.25px;
    font-family: "aktiv-grotesk-extended";
    color: ${purple.darker};
    font-weight: 800;
    font-size: 14px;
    line-height: 20px;
    width: 270px;
    margin-top: 32px;

    @media (min-width: 1200px) {
        font-size: 16px;
        line-height: 24px;
        width: 100%;
    }
`

const StyledButton = styled(Button)`
    max-width: 314px;
    width: 100%;
    font-family: "aktiv-grotesk-extended";
`

const StyledLink = styled(QueryLink)`
    margin-top: 32px;
    width: 100%;
    display: flex;
    justify-content: center;
    text-decoration: none;

    @media (min-width: 1200px) {
        margin-top: 48px;
    }
`

export default function CTA(props) {
    const data = useStaticQuery(graphql`
        {
            prismicResponsiveLearning {
                data {
                    cta_btn {
                        text
                    }
                    cta_btn_link {
                        url
                    }
                    cta_courses {
                        session_date {
                            document {
                                ... on PrismicStartDate {
                                    id
                                    data {
                                        course_name {
                                            text
                                        }
                                        start_date(formatString: "MMMM Do, YYYY")
                                    }
                                }
                            }
                        }
                        next_session {
                            text
                        }
                        bg_image {
                            url
                        }
                    }
                    cta_header {
                        text
                    }
                    cta_subheader {
                        text
                    }
                }
            }
        }
    `)

    const {
        cta_btn: { text: ctaBtnText },
        cta_btn_link: { url: ctaLink },
        cta_courses,
        cta_header: { text: ctaHeader },
        cta_subheader: { text: ctaSubheader }
    } = data.prismicResponsiveLearning.data

    return (
        <Container>
            <Header>{ctaHeader}</Header>
            <CoursesContainer>
                {cta_courses.map(({ bg_image, next_session, session_date }) => (
                    <CourseContainer
                        key={next_session.text}
                        bgImg={bg_image.url}
                    >
                        <CourseInfoContainer>
                            <NextSession>{next_session.text}</NextSession>
                            <CourseDate>
                                {session_date.document.data.start_date}
                            </CourseDate>
                        </CourseInfoContainer>
                    </CourseContainer>
                ))}
            </CoursesContainer>
            <SubHeader>{ctaSubheader}</SubHeader>
            <StyledLink to={ctaLink}>
                <StyledButton>{ctaBtnText}</StyledButton>
            </StyledLink>
        </Container>
    )
}
