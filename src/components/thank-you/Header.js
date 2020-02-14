import React from "react"
import styled from "styled-components"
import { gray, black, blue } from "@vschool/lotus"
import { Link } from "gatsby"

const Container = styled.div`
    background-color: ${gray.light};
    padding-top: 64px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 64px;

    @media (min-width: 600px){
        padding-left: 32px; 
        padding-right: 32px;
    }

    @media (min-width: 840px){
        padding-left: 40px;
        padding-right: 40px;
        padding-bottom: 96px;
        padding-top: 96px;
    }

    @media (min-width: 1200px){
        padding-left: 88px;
        padding-right: 88px;
    }
`

const Title = styled.h6`
    color: ${black};
    font-family: "aktiv-grotesk-extended";
    font-size: 14px;
    letter-spacing: 0.25px;
    line-height: 24px;
    margin-bottom: 16px;
    text-align: center;
    font-weight: 800;

    @media(max-width: 400px){
        font-size: 12px;
    }

    @media(min-width: 1200px){
        font-size: 16px;
    }
`

const H1 = styled.h1`
    font-family: "aktiv-grotesk";
    font-size: 36px;
    font-weight: 900;
    line-height: 40px;
    text-align: center;
    color: ${black};
    margin-bottom: 16px;

    @media (min-width: 600px) {
        font-size: 40px;
    }

    @media (min-width: 840px) {
        font-size: 48px;
        line-height: 48px;
    }

    @media (min-width: 1200px) {
        font-size: 56px;
        padding-left: 160px;
        padding-right: 160px;
        line-height: 56px;
    }
`

const P = styled.p`
    color: ${gray.darker};
    font-family: "aktiv-grotesk";
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
    margin-bottom: 24px;
    width: 320px;


    @media (min-width: 840px) {
        font-size: 18px;
        line-height: 26px;
        width: 350px;
    }

    @media (min-width: 1200px) {
        font-size: 20px;
        line-height: 28px;
        width: 400px;
    }
`

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
`

const LinksContainer = styled.div`
    display: flex;
    width: 377px;
    justify-content: space-between;

    @media(max-width: 425px){
        flex-direction: column;
        align-items: center;
    }
`

const SLink = styled(Link)`
    text-decoration: none;
    color: ${blue.base};	
    font-family: "aktiv-grotesk";	
    font-size: 16px;	
    font-weight: 500;	
    line-height: 24px;

    @media(max-width: 425px){
        margin: 8px 0;
    }
`   

export default function Header(props) {
    const {
        title,
        header,
        sub,
        link1Text,
        link2Text,
        link3Text,
        link2,
        link3
    } = props

    return (
        <Container>
            <Title>
                {title}
            </Title>
            <FlexContainer>
                <H1>{header}</H1>
            </FlexContainer>
            <FlexContainer>
                <P>{sub}</P>
            </FlexContainer>
            <FlexContainer>
                <LinksContainer>
                    <SLink to="/">{link1Text}</SLink>
                    <SLink to={link2}>{link2Text}</SLink>
                    <SLink to={link3}>{link3Text}</SLink>
                </LinksContainer>
            </FlexContainer>
        </Container>
    )
}

