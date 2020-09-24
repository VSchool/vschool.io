import React from "react"
import styled from "styled-components"
import Link from "../QueryLink"
import { black, gray, orange, Button, white } from "@vschool/lotus"

const CourseContainer = styled.div`
    margin: 24px 0;
    width: 100%;
    max-width: 438px;
    padding: 24px;
    background-color: ${white};
    border: 2px solid ${gray.base};

    @media (min-width: 500px) {
        padding: 32px;
        width: 438px;
    }
`

const H3 = styled.h3`
    color: ${black};
    font-size: 20px;
    font-weight: 900;
    line-height: 26px;
    margin-bottom: 16px;

    @media (max-width: 400px) {
        font-size: 18px;
    }
`

const P = styled.p`
    color: ${gray.darker};
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    height: 64px;
    margin-bottom: 32px;

    @media (max-width: 460px) {
        font-size: 14px;
        height: 80px;
    }

    @media (min-width: 960px) {
    }
`

const H4 = styled.h3`
    color: ${orange.dark};
    font-size: 16px;
    font-family: "aktiv-grotesk-extended";
    font-weight: 800;
    line-height: 24px;
    margin-top: 8px;
    margin-bottom: 24px;

    @media (max-width: 400px) {
        font-size: 14px;
    }
`

const StyledButton = styled(Button)`
    height: 42px;
    width: 138px;
    font-family: "aktiv-grotesk-extended";
    font-weight: 800;
    outline: none;
`

function Course({ name, info, link, start_date }) {
    return (
        <CourseContainer>
            <H3>{name.text}</H3>
            <P>{info.text}</P>
            <H4>{start_date}</H4>
            <Link to={link.url}>
                <StyledButton buttonStyle="primary-light" buttonSize="sm">
                    Learn More
                </StyledButton>
            </Link>
        </CourseContainer>
    )
}

export default Course
