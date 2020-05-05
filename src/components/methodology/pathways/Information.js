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
const OpacityAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Container = styled.div`
    padding: 24px 16px;
    width: 100%;
    max-width: 380px;
    position: relative;
    height: 400px;
    /* overflow: hidden; */

    @media (min-width: 1200px) {
        border-left: 2px solid ${gray.darker};
        height: 400px;
        display: flex;
        align-items: center;
        padding-top: 8px;
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
    opacity: 0;
    animation: ${Float} 400ms cubic-bezier(0.97, -0.03, 0.14, 1.12) 850ms
            forwards,
        ${OpacityAnimation} 700ms linear 700ms forwards;
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
    position: relative;
    opacity: 0;
    animation: ${Float} 400ms cubic-bezier(0.97, -0.03, 0.14, 1.12) 900ms
            forwards,
        ${OpacityAnimation} 700ms linear 700ms forwards;
`

const BulletsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 32px;
    position: relative;
    opacity: 0;
    animation: ${Float} 400ms cubic-bezier(0.97, -0.03, 0.14, 1.12) 900ms
            forwards,
        ${OpacityAnimation} 700ms linear 700ms forwards;
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
    animation: ${Float} 200ms linear;
    overflow: hidden;
`

const AnimatedContainer2 = styled.div`
    position: relative;
    width: 100%;
    animation: ${Float} 200ms linear;
    overflow: hidden;
`

const AnimatedContainer3 = styled.div`
    position: relative;
    width: 100%;
    animation: ${Float} 200ms linear;
    overflow: hidden;
`

const AnimatedContainer4 = styled.div`
    position: relative;
    width: 100%;
    animation: ${Float} 200ms linear;
    overflow: hidden;
`


export default function Information(props) {
    const { title, highlight, info, bullets } = props.info
    const { selectedInfo, startAnimation } = props

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
            {startAnimation && (
                <>
                    <CurrentContainer>
                        <HeaderContainer>
                            <Header>{title}</Header>
                            <Underline bgColor={highlight} />
                        </HeaderContainer>
                        <Info>{info}</Info>
                        <BulletsContainer>
                            {bullets.map((text, i) => (
                                <Bullet key={i + text}>
                                    <BulletDot bgColor={highlight} />
                                    <BulletText key={text}>{text}</BulletText>
                                </Bullet>
                            ))}
                        </BulletsContainer>
                    </CurrentContainer>
                </>
            )}
        </Container>
    )
}
