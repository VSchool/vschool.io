import React, { useEffect } from "react"
import styled from "styled-components"
import { gray } from "@vschool/lotus"

const Container = styled.div`
    padding: 24px 16px;
    width: 100%;
    max-width: 380px;
`

const HeaderContainer = styled.div`
    position: relative;
    z-index: 3;
    display: inline-block;
    margin-bottom: 32px;
`

const Header = styled.h3`
    display: inline-block;
    font-size: 24px;
    line-height: 30px;
    font-weight: 800;
    font-family: "aktiv-grotesk";
    position: relative;
    z-index: 3;
`

const Underline = styled.div`
    width: 103%;
    background-color: ${({ bgColor }) => bgColor};
    position: absolute;
    z-index: 2;
    height: 8px;
    bottom: 2px;
`

const Info = styled.p`
    font-family: "aktiv-grotesk";
    font-size: 16px;
    line-height: 24px;
    color: ${gray.darker};
`

const BulletsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 32px;
`

const Bullet = styled.div`
    display: flex;
    align-items: center;
    padding-left: 32px;
    margin-bottom: 8px;
`

const BulletDot = styled.div`
    width: 8px;
    height: 8px;
    min-width: 8px;
    background-color: ${({ bgColor }) => bgColor};
`

const BulletText = styled.p`
    font-family: "aktiv-grotesk";
    font-size: 14px;
    line-height: 18px;
    color: ${gray.darker};
    margin-left: 16px;
`

export default function Information(props) {
    const { title, highlight, info, bullets } = props.info

    useEffect(() => {
      // trigger animation for float from side/bottom on new info
    }, [title])

    return (
        <Container>
            <HeaderContainer>
                <Header>{title}</Header>
                <Underline bgColor={highlight} />
            </HeaderContainer>
            <Info>{info}</Info>
            <BulletsContainer>
                {bullets.map(text => (
                    <Bullet>
                        <BulletDot bgColor={highlight} />
                        <BulletText key={text}>{text}</BulletText>
                    </Bullet>
                ))}
            </BulletsContainer>
        </Container>
    )
}
