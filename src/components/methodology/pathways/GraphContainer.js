import React, { useRef } from "react"
import styled, { keyframes } from "styled-components"
import { gray, black } from "@vschool/lotus"

const BarAnimation1 = keyframes`
  0% {
    width: 3%;
  }
  100% {
    width: 100%;
  }
`
const BarAnimation2 = keyframes`
  0% {
    width: 3%;
  }
  100% {
    width: 70%;
  }
`
const BarAnimation3 = keyframes`
  0% {
    width: 3%;
  }
  100% {
    width: 45%;
  }
`

const BarAnimation4 = keyframes`
  0% {
    width: 3%;
  }
  100% {
    width: 30%;
  }
`

const EndTextAnimation = keyframes`
  0% {
    bottom: -20px;
  }
  100% {
    bottom: 0;
  }
`

const OpacityAnimation = keyframes`
  0% {
    opacity: 0;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Container = styled.div`
    margin: 0px 16px 24px 16px;
    width: 100%;
    max-width: 380px;

    border-bottom: 2px solid ${gray.darker};
    padding-bottom: 42px;

    @media (min-width: 1200px) {
        max-width: 600px;
        border-bottom: none;
    }
`

const SectionContainer = styled.div`
    width: 100%;
    cursor: pointer;
`

const TextContainer = styled.div`
    margin-bottom: 8px;
    height: 16px;
    margin-top: 16px;
    width: 100%;
    position: relative;

    @media (min-width: 1200px) {
        margin-top: 48px;
    }
`

const BarTitle = styled.p`
    font-size: 12px;
    font-family: "aktiv-grotesk-extended";
    letter-spacing: 0.5px;
    color: ${black};
    font-weight: 700;
    display: inline-block;

    @media (max-width: 1200px) {
        font-size: 9px;
    }
`

const BarEndText = styled.p`
    font-size: 10px;
    font-family: "aktiv-grotesk";
    color: ${gray.darker};
    position: absolute;
    width: fit-content;
    opacity: 0;
    animation: ${EndTextAnimation} 750ms cubic-bezier(0.97, -0.03, 0.14, 1.12)
            500ms,
        ${OpacityAnimation} 500ms ease-in-out 300ms forwards;
    z-index: 1;
    left: ${({ end }) => end + "%"};
    bottom: 0;

    @media (max-width: 500px) {
        left: ${({ end, num }) => (num === 0 ? end - 16 + "%" : end + "%")};
    }

    @media (min-width: 1200px) {
        min-width: 100px;
        font-size: 12px;
    }
`

const BarEndText2 = styled(BarEndText)``
const BarEndText3 = styled(BarEndText)``
const BarEndText4 = styled(BarEndText)``

const CompletedBarEndText = styled.p`
    font-size: 10px;
    font-family: "aktiv-grotesk";
    color: ${gray.darker};
    justify-self: flex-end;
    position: absolute;
    display: inline-block;
    width: fit-content;
    left: ${({ end }) => end + "%"};
    bottom: 0;

    @media (max-width: 500px) {
        left: ${({ end, num }) => (num === 0 ? end - 16 + "%" : end + "%")};
    }

    @media (min-width: 1200px) {
        width: fit-content;
        font-size: 12px;
    }
`

const EndTextLine = styled.span`
    position: relative;
    display: inline-block;
    width: 1px;
    height: 6px;
    background-color: ${gray.dark};
    bottom: -8px;

    @media (max-width: 500px) {
        left: ${({ num }) => (num === 0 ? 45 + "px" : 0)};
    }
`

const Bar = styled.div`
    height: 32px;
    background-color: ${({ bgColor }) => bgColor};
    max-width: 100%;
    animation: ${BarAnimation1} 700ms ease-in;
    position: relative;
    z-index: 2;

    @media (max-width: 500px) {
        height: 16px;
    }
`

const InvisibleBar = styled(Bar)`
  width: 3%;
  animation: none;
`

const Bar2 = styled.div`
    height: 32px;
    background-color: ${({ bgColor }) => bgColor};
    max-width: 70%;
    animation: ${BarAnimation2} 700ms ease-in;
    position: relative;
    z-index: 2;

    @media (max-width: 500px) {
        height: 16px;
    }
`
const Bar3 = styled.div`
    height: 32px;
    background-color: ${({ bgColor }) => bgColor};
    max-width: 45%;
    animation: ${BarAnimation3} 700ms ease-in;
    position: relative;
    z-index: 2;

    @media (max-width: 500px) {
        height: 16px;
    }
`
const Bar4 = styled.div`
    height: 32px;
    background-color: ${({ bgColor }) => bgColor};
    max-width: 30%;
    animation: ${BarAnimation4} 700ms ease-in;
    position: relative;
    z-index: 2;

    @media (max-width: 500px) {
        height: 16px;
    }
`

const CompletedBar = styled.div`
    height: 32px;
    width: ${({ end }) => end + "%"};
    background-color: ${({ bgColor }) => bgColor};

    @media (max-width: 500px) {
        height: 16px;
    }
`

const UnvisitedBar = styled.div`
    height: 32px;
    width: ${({ start }) => start + "%"};

    @media (max-width: 500px) {
        height: 16px;
    }
    background-color: ${({ bgColor }) => bgColor};
`

export default function GraphContainer(props) {
    const { currentBar, completedBars, additionalBars } = props.info
    const { changeView, selectedBar, startAnimation } = props

    let CurrentBar, CurrentEndText
    if (selectedBar === 0) {
        CurrentBar = Bar
        CurrentEndText = BarEndText
    } else if (selectedBar === 1) {
        CurrentBar = Bar2
        CurrentEndText = BarEndText2
    } else if (selectedBar === 2) {
        CurrentBar = Bar3
        CurrentEndText = BarEndText3
    } else if (selectedBar === 3) {
        CurrentBar = Bar4
        CurrentEndText = BarEndText4
    }

    return (
        <Container>
            {completedBars.map((item, i) => (
                <SectionContainer
                    key={item.title + i}
                    onClick={() => changeView(item.barNum)}
                >
                    <TextContainer width={item.barEnd}>
                        <BarTitle>{item.title}</BarTitle>
                        <CompletedBarEndText
                            end={item.barEnd}
                            num={item.barNum}
                        >
                            <EndTextLine num={item.barNum} />
                            {item.endText}
                        </CompletedBarEndText>
                    </TextContainer>
                    <CompletedBar
                        start={item.barStart}
                        end={item.barEnd}
                        bgColor={item.color}
                    />
                </SectionContainer>
            ))}
            <SectionContainer onClick={() => changeView(currentBar.barNum)}>
                <TextContainer width={currentBar.barEnd}>
                    <BarTitle>{currentBar.title}</BarTitle>
                    {startAnimation && (
                        <>
                            <CurrentEndText
                                end={currentBar.barEnd}
                                num={currentBar.barNum}
                            >
                                <EndTextLine num={currentBar.barNum} />
                                {currentBar.endText}
                            </CurrentEndText>
                        </>
                    )}
                </TextContainer>
                { !startAnimation && <InvisibleBar bgColor={currentBar.color}/> }
                { startAnimation && <CurrentBar bgColor={currentBar.color} /> }
            </SectionContainer>
            {additionalBars.map((item, i) => (
                <SectionContainer
                    key={item.title + i}
                    onClick={() => changeView(item.barNum)}
                >
                    <TextContainer width={item.barEnd}>
                        <BarTitle>{item.title}</BarTitle>
                        <BarEndText>{item.endText}</BarEndText>
                    </TextContainer>
                    <UnvisitedBar start={item.barStart} bgColor={item.color} />
                </SectionContainer>
            ))}
        </Container>
    )
}
