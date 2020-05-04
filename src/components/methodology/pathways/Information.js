import React from "react"
import styled, { keyframes } from "styled-components"
import { gray } from "@vschool/lotus"
import arrow from "../../../images/icons/arrow.png"

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
const ArrowBounce = keyframes`
  0% {
    top: 150px;
  }
  30% {
    top: 145px;
  }
  70% {
    top: 150px;
  }
  100% {
    top: 150px;
  }
`
const LeftArrowBounce = keyframes`
  0% {
    top: 155px;
  }
  30% {
    top: 150px;
  }
  70% {
    top: 155px;
  }
  100% {
    top: 155px;
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
const LeftArrow = styled.button`
    font-size: 32px;
    left: -16px;
    width: 24px;
    height: 24px;
    position: absolute;
    transform: translateY(0px) rotate(90deg);
    animation: ${ArrowBounce} 1s linear infinite;
    background-image: url(${arrow});
    background-size: contain;
    background-repeat: no-repeat;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: ${gray.lightest};

    @media (min-width: 500px) {
        left: -24px;
    }

    @media (min-width: 700px) {
        height: 32px;
        width: 32px;
        left: -40px;
    }

    @media (min-width: 1200px) {
        transform: translateY(50px) rotate(90deg);
        left: -750px;
        width: 40px;
        height: 40px;
        animation: ${LeftArrowBounce} 1s linear infinite;
    }
`
const RightArrow = styled.button`
    font-size: 32px;
    color: black;
    right: -16px;
    width: 24px;
    height: 24px;
    transform: translateY(0px) rotate(-90deg);
    position: absolute;
    animation: ${ArrowBounce} 1s linear infinite;
    background-image: url(${arrow});
    background-size: contain;
    background-repeat: no-repeat;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: ${gray.lightest};

    @media (min-width: 500px) {
        right: -24px;
    }

    @media (min-width: 700px) {
        height: 32px;
        width: 32px;
        right: -40px;
    }

    @media (min-width: 1200px) {
        transform: translateY(50px) rotate(-90deg);
        width: 40px;
        height: 40px;
    }
`

export default function Information(props) {
    const { title, highlight, info, bullets } = props.info
    const { selectedInfo, setSelectedInfo, startAnimation } = props

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
                    {selectedInfo > 0 && (
                        <LeftArrow
                            onClick={() =>
                                selectedInfo > 0
                                    ? setSelectedInfo(selectedInfo - 1)
                                    : setSelectedInfo(0)
                            }
                        ></LeftArrow>
                    )}
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
                    {selectedInfo < 3 && (
                        <RightArrow
                            onClick={() =>
                                selectedInfo < 3
                                    ? setSelectedInfo(selectedInfo + 1)
                                    : setSelectedInfo(3)
                            }
                        ></RightArrow>
                    )}
                </>
            )}
        </Container>
    )
}
