import React from "react"
import styled, { keyframes } from "styled-components"
import { gray } from "@vschool/lotus"

const Float = keyframes`
  0% {
    top: 350px;
    opacity: 0;
  }
  100% {
    top: 0px;
    opacity: 1;
  }
`

const Container = styled.div`
    padding: 24px 16px;
    width: 100%;
    max-width: 380px;
    position: relative;
    overflow: hidden;

    @media(min-width: 1200px){
      border-left: 2px solid ${gray.darker};
      height: 400px;
      display: flex;
      align-items: center;
      padding-top: 56px;
      margin-left: 44px;
      padding-bottom: 0;
      padding-left: 24px;
    }
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

const AnimatedContainer1 = styled.div`
    position: relative;
    width: 100%;
    animation: ${Float} 1s linear;
`

const AnimatedContainer2 = styled.div`
    position: relative;
    width: 100%;
    animation: ${Float} 1s linear;
`

const AnimatedContainer3 = styled.div`
    position: relative;
    width: 100%;
    animation: ${Float} 1s linear;
`

const AnimatedContainer4 = styled.div`
    position: relative;
    width: 100%;
    animation: ${Float} 1s linear;
`

export default function Information(props) {
    const { title, highlight, info, bullets } = props.info
    const { selectedInfo } = props

    let CurrentContainer
    if (selectedInfo === 0) {
        CurrentContainer = AnimatedContainer1
    } else if (selectedInfo === 1) {
        CurrentContainer = AnimatedContainer2
    } else if (selectedInfo === 2) {
        CurrentContainer = AnimatedContainer3
    } else if (selectedInfo === 3) {
        CurrentContainer = AnimatedContainer4
    }

    return (
        <Container>
            <CurrentContainer>
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
            </CurrentContainer>
        </Container>
    )
}
