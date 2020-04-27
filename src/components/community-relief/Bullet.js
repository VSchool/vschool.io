import React from "react"
import styled from "styled-components"
import { black, green } from "@vschool/lotus"

const Container = styled.div`
    margin-bottom: 32px;
    max-width: 500px;
    position: relative;
    margin-left: 16px;
    margin-right: 16px;
    height: 200px;

    @media(max-width: 360px){
        margin-left: 8px;
        margin-right: 8px;
    }   

    @media(max-width: 420px){
        height: 250px;
    }

    @media (min-width: 350px) {
        width: 100%;
    }

    @media (min-width: 1200px) {
        height: 250px;
        margin: 8px 16px;
    }
`

const HeaderContainer = styled.div`
    height: 80px;
`

const Header = styled.h3`
    color: ${green.darkest};
    font-family: "aktiv-grotesk";
    font-size: 24px;
    font-weight: 800;
    margin-bottom: 8px;

    @media (max-width: 400px) {
        font-size: 22px;
    }
`

const Info = styled.p`
    color: ${black};
    font-family: "aktiv-grotesk";
    font-size: 16px;
    font-weight: 800;
    line-height: 24px;

    @media (max-width: 400px) {
        font-size: 15px;
    }
`

const P = styled.p`
    color: #514f4b;
    font-family: "aktiv-grotesk";
    font-size: 16px;
    font-weight: 500;
    margin: 8px 0;
    line-height: 24px;

    @media (min-width: 320px) and (max-width: 414px) {
        width: 280px;
    }

    @media (min-width: 415px) {
        width: 360px;
    }

    @media (min-width: 1000px) {
        text-align: left;
        width: 100%;
    }
`

export default function Bullet(props) {
    const {
        bullet_title,
        bullet_point3,
        bullet_point2,
        bullet_point1,
        bullet_info,
    } = props
    return (
        <Container>
            <HeaderContainer>
                <Header>{bullet_title.text}</Header>
                <Info>{bullet_info.text}</Info>
            </HeaderContainer>
            <P>• {bullet_point1.text}</P>
            <P>• {bullet_point2.text}</P>
            <P>• {bullet_point3.text}</P>
        </Container>
    )
}
