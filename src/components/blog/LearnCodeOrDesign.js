import React from "react"
import styled from "styled-components"
import { Button, black, green, gray, white } from "@vschool/lotus"
import QueryLink from "../shared/QueryLink.js"

const Container = styled.div`
    width: 100%;
    background-color: ${black};
    padding: 32px 18px;
    margin-top: 64px;

    @media (min-width: 500px) {
        padding: 32px;
        display: flex;
        flex-direction: column;
    }

    @media (min-width: 1000px) {
        flex-direction: row;
        justify-content: center;
        padding: 32px 88px 0px 88px;
    }
`

const Header = styled.h2`
    font-size: 32px;
    font-weight: 600;
    line-height: 38px;
    font-family: "aktiv-grotesk";
    width: 100%;
    max-width: 360px;
    color: ${gray.lightest};
    margin-bottom: 32px;

    @media (min-width: 500px) {
    }
`

const FixedContainer = styled.div`
    @media (min-width: 1000px) {
        display: flex;
        width: 1050px;
        justify-content: space-between;
    }
`

const FlexContainer = styled.div`
    width: 100%;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1000px) {
        flex-direction: row;
        max-width: 514px;
    }
`

const InfoContainer = styled.div`
    border: 2px solid ${white};
    padding: 16px;
    margin-bottom: 32px;
    width: 100%;

    @media (min-width: 1000px) {
        max-width: 514px;
        justify-self: flex-end;
    }
`

const Info = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const TextContainer = styled.div``

const NextSession = styled.p`
    color: ${gray.lightest};
    font-family: "aktiv-grotesk-extended";
    font-size: 12px;
    letter-spacing: 0.5px;
    line-height: 16px;
`

const CourseDate = styled.h4`
    font-family: "aktiv-grotesk-extended";
    font-size: 20px;
    line-height: 26px;
    color: ${green.lighter};

    @media (max-width: 350px) {
        font-size: 18px;
    }
`

const StyledButton = styled(Button)`
    box-shadow: 4px 4px 0px rgba(255, 255, 255, 0.2);
    width: 141px;
    min-width: 0;
`

export default function LearnCodeOrDesign(props) {
    return (
        <Container>
            <FixedContainer>
                <Header>Learn code or design. Change your life.</Header>
                <FlexContainer>
                    <InfoContainer>
                        <Info>
                            <TextContainer>
                                <NextSession>Next Code Session:</NextSession>
                                <CourseDate>January 2, 2020</CourseDate>
                            </TextContainer>
                            <QueryLink to={"/hi"}>
                                <StyledButton buttonStyle="secondary-light">
                                    Apply
                                </StyledButton>
                            </QueryLink>
                        </Info>
                    </InfoContainer>
                    <InfoContainer>
                        <Info>
                            <TextContainer>
                                <NextSession>Next Design Session:</NextSession>
                                <CourseDate>January 2, 2020</CourseDate>
                            </TextContainer>
                            <QueryLink to={"/hi"}>
                                <StyledButton buttonStyle="secondary-light">
                                    Apply
                                </StyledButton>
                            </QueryLink>
                        </Info>
                    </InfoContainer>
                </FlexContainer>
            </FixedContainer>
        </Container>
    )
}
