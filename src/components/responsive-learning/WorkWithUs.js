import React from "react"
import styled from "styled-components"
import { gray, black, purple, Button } from "@vschool/lotus"
import QueryLink from "../shared/QueryLink.js"

const Container = styled.div`
    background-color: ${gray.lightest};
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 160px;
    padding-top: 96px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media(max-width: 370px){
      padding-top: 8px;
    }

    @media (min-width: 600px) {
        padding-left: 32px;
        padding-right: 32px;
    }

    @media (min-width: 840px) {
        padding-left: 40px;
        padding-right: 40px;
    }

    @media (min-width: 1200px) {
        padding-left: 88px;
        padding-right: 88px;
        padding-bottom: 208px;
    }
`

const FixedContainer = styled.div`
    width: 100%;
    max-width: 366px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media(min-width: 1200px){
        max-width: 100%;
    }
`

const Header = styled.h2`
    font-family: "aktiv-grotesk";
    font-weight: 900;
    font-size: 44px;
    line-height: 48px;
    text-align: center;
    width: 100%;
    max-width: 300px;
    color: ${black};

    @media(min-width: 1200px){
        max-width: 840px;
        font-size: 56px;
        line-height: 56px;
    }   
`

const SubHeader = styled.p`
    font-family: "aktiv-grotesk-extended";
    color: ${purple.darker};
    font-weight: 800;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.25px;
    margin-top: 16px;

    @media(min-width: 1200px){
        margin-top: 32px;
        
    }
`

const Info = styled.p`
    margin-top: 16px;
    font-family: "aktiv-grotesk";
    color: ${gray.darker};
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    @media(min-width: 1200px){
        max-width: 840px;
        font-size: 20px;
        line-height: 28px;
        margin-top: 32px;
    }
`

const Invite = styled.h5`
    margin-top: 48px;
    font-family: "aktiv-grotesk";
    font-weight: 900;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
    width: 250px;

    @media(min-width: 1200px){
        font-size: 32px;
        width: 100%;
        line-height: 38px;
        margin-top: 96px;
    }
`

const StyledButton = styled(Button)`
    margin-top: 48px;
    width: 203px;
    max-width: 203px;
    height: 56px;
    font-family: "aktiv-grotesk-extended";
`

const StyledLink = styled(QueryLink)`
    display: flex;
    justify-content: center;
    text-decoration: none;
`

export default function WorkWithUs(props) {
    const { header, subHeader, btnText, link, info, invite } = props
    return (
        <Container>
            <FixedContainer>
                <Header>{header}</Header>
                <SubHeader>{subHeader}</SubHeader>
                <Info>{info}</Info>
                <Invite>{invite}</Invite>
                <StyledLink to={link}>
                    <StyledButton>{btnText}</StyledButton>
                </StyledLink>
            </FixedContainer>
        </Container>
    )
}
