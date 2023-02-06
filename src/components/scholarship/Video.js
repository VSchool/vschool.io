import React from "react"
import styled from "styled-components"

const Container = styled.section`
    @media (min-width: 800px) {
        flex-direction: row;
    }
`

const IFrame = styled.iframe`
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    width: 300px;
    height: 215px;

    @media (min-width: 800px) {
        width: 420px;
        height: 315px;
    }

    @media (min-width: 1200px) {
        width: 840px;
        height: 630px;
    }
`

export default function Video(props) {
    return (
        <Container>
            <IFrame src="https://www.youtube.com/embed/FltrmEIURXM"></IFrame>
        </Container>
    )
}
