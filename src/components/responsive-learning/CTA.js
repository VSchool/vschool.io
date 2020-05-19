import React from "react"
import styled from "styled-components"
import QueryLink from "../shared/QueryLink.js"
import { black, green, purple, white, Button } from "@vschool/lotus"

const Container = styled.div`
    background-color: ${green.lightest};
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 380px; /* 284 + 96 */
    padding-top: 96px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 600px) {
        padding-left: 32px;
        padding-right: 32px;
    }

    @media (min-width: 840px) {
        padding-left: 40px;
        padding-right: 40px;
        padding-bottom: 96px;
    }

    @media (min-width: 1200px) {
        padding-left: 88px;
        padding-right: 88px;
    }
`

const Header = styled.h2`
    font-weight: 800;
    font-size: 32px;
    line-height: 38px;
    font-family: "aktiv-grotesk";
    color: black;
    text-align: center;
    width: 240px;
    margin-bottom: 16px;
`

const CoursesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    font-family: "aktiv-grotesk";
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
`

const StyledButton = styled(Button)`
    max-width: 314px;
    width: 100%;
    margin-top: 32px;
    font-family: "aktiv-grotesk-extended";
`

const StyledLink = styled(QueryLink)`
  width: 100%;
  display: flex;
  justify-content: center;
  text-decoration: none;
`

export default function CTA(props) {
    const { header, subHeader, btnText, link, courses } = props
    return (
        <Container>
            <Header>{header}</Header>
            <CoursesContainer>
                {courses.map(({ bg_image, next_session, session_date }) => (
                    <CourseContainer
                        key={next_session.text}
                        bgImg={bg_image.url}
                    >
                        <CourseInfoContainer>
                            <NextSession>{next_session.text}</NextSession>
                            <CourseDate>
                                {session_date.document[0].data.start_date}
                            </CourseDate>
                        </CourseInfoContainer>
                    </CourseContainer>
                ))}
            </CoursesContainer>
            <SubHeader>{subHeader}</SubHeader>
            <StyledLink to={link}>
                <StyledButton>{btnText}</StyledButton>
            </StyledLink>
        </Container>
    )
}
