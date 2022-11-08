import React from "react"
import styled from "styled-components"

const Container = styled.section`
    padding-bottom: 96px;

    @media (min-width: 800px) {
        flex-direction: row;
        padding-bottom: 160px;
    }
`

export default function Video(props) {
    console.log(props)

    return (
        <Container>
        <iframe 
            width="420" 
            height="315"
            src="https://www.youtube.com/embed/FltrmEIURXM">
        </iframe>
        </Container>
    )
}
