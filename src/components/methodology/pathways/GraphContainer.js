import React from "react"
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

const Container = styled.div`
    margin: 24px 16px;

    max-width: 380px;
    height: 300px;
    border-bottom: 2px solid ${gray.darker};
`

const SectionContainer = styled.div`
    width: 100%;
    cursor: pointer;
`

const TextContainer = styled.div`
    display: flex;
    margin-bottom: 8px;
    margin-top: 16px;
    width: 100%;
    justify-content: space-between;
`

const BarTitle = styled.p`
    font-size: 12px;
    font-family: "aktiv-grotesk-extended";
    letter-spacing: 0.5px;
    color: ${black};
    font-weight: 700;

    @media (max-width: 1200px) {
        font-size: 10px;
    }
`

const BarEndText = styled.p`
    font-size: 14px;
    font-family: "aktiv-grotesk";
    color: ${gray.darker};
    justify-self: flex-end;

    @media (max-width: 1200px) {
        font-size: 10px;
    }
`

const Bar = styled.div`
    height: 32px;
    background-color: ${({ bgColor }) => bgColor};
    max-width: 100%;
    animation: ${BarAnimation1} 2s linear;
`

const Bar2 = styled.div`
    height: 32px;
    background-color: ${({ bgColor }) => bgColor};
    max-width: 70%;
    animation: ${BarAnimation2} 2s linear;
`
const Bar3 = styled.div`
    height: 32px;
    background-color: ${({ bgColor }) => bgColor};
    max-width: 45%;
    animation: ${BarAnimation3} 2s linear;
`
const Bar4 = styled.div`
    height: 32px;
    background-color: ${({ bgColor }) => bgColor};
    max-width: 30%;
    animation: ${BarAnimation4} 2s linear;
`

const CompletedBar = styled.div`
    height: 32px;
    width: ${({ end }) => end + "%"};
    background-color: ${({ bgColor }) => bgColor};
`

const UnvisitedBar = styled.div`
    height: 32px;
    width: ${({ start }) => start + "%"};
    background-color: ${({ bgColor }) => bgColor};
`

export default function GraphContainer(props) {
    const { currentBar, completedBars, additionalBars } = props.info
    const { changeView, selectedBar } = props
    let CurrentBar
    if (selectedBar === 0) {
        CurrentBar = Bar
    } else if (selectedBar === 1) {
        CurrentBar = Bar2
    } else if (selectedBar === 2) {
        CurrentBar = Bar3
    } else if (selectedBar === 3) {
        CurrentBar = Bar4
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
                        <BarEndText>{item.endText}</BarEndText>
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
                    <BarEndText>{currentBar.endText}</BarEndText>
                </TextContainer>
                <CurrentBar bgColor={currentBar.color} />
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
                    <UnvisitedBar
                        start={item.barStart}
                        bgColor={item.color}
                    />
                </SectionContainer>
            ))}
        </Container>
    )
}
