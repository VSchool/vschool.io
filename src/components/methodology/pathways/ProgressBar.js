import React from "react"
import styled from "styled-components"
import leftArrow from "../../../images/icons/left_arrow.png"
import rightArrow from "../../../images/icons/right_arrow.png"
import { gray } from "@vschool/lotus"

const Container = styled.div`
    display: flex;
    transform: translateY(-0px);

    @media (min-width: 365px) {
        transform: translateY(-55px);
    }

    @media (min-width: 1200px) {
        transform: translateY(0px);
    }
`
const DotContainer = styled.div`
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Dot = styled.div`
    width: ${({ dotNum, selected }) => (dotNum === selected ? "24px" : "16px")};
    height: ${({ dotNum, selected }) =>
        dotNum === selected ? "24px" : "16px"};
    background-color: ${({ dotNum, selected }) =>
        dotNum === selected ? gray.darker : gray.dark};
    transition: all 200ms linear;
    border-radius: 50%;
    cursor: pointer;
`

const LeftArrow = styled.button`
    border: none;
    outline: none;
    background-color: ${gray.lighter};
    background-image: url(${leftArrow});
    width: 24px;
    height: 24px;
    background-size: cover;
    margin: 0 16px;
    cursor: pointer;
`

const RightArrow = styled(LeftArrow)`
    background-image: url(${rightArrow});
`

export default function ProgressBar(props) {
    const { selectedInfo, setSelectedInfo } = props
    return (
        <Container>
            <LeftArrow
                onClick={() =>
                    selectedInfo > 0
                        ? setSelectedInfo(selectedInfo - 1)
                        : setSelectedInfo(0)
                }
            />
            {[0, 1, 2, 3].map((num, i) => (
                <DotContainer
                    key={num + i}
                    onClick={() => setSelectedInfo(num)}
                >
                    <Dot selected={selectedInfo} dotNum={num} />
                </DotContainer>
            ))}
            <RightArrow
                onClick={() =>
                    selectedInfo < 3
                        ? setSelectedInfo(selectedInfo + 1)
                        : setSelectedInfo(3)
                }
            />
        </Container>
    )
}
