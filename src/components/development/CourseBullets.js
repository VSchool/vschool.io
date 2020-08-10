import React from "react"
import styled from "styled-components"
import Bullet from "./Bullet.js"
import { gray, blue } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.lighter};
    padding-top: 56px;

    @media (min-width: 600px) {
        padding-top: 96px;
    }
`

const BulletsContainer = styled.div`
    background-color: ${blue.lightest};
    padding-top: 56px;
    padding-left: 32px;
    padding-right: 32px;
    bottom: -24px;
    position: relative;
    z-index: 3;

    @media (min-width: 900px) {
        width: 770px;
        margin-right: auto;
        margin-left: auto;
    }

    @media (min-width: 1200px) {
        display: flex;
        justify-content: space-evenly;
        width: 1024px;
    }
`

const BlueBar = styled.div`
    height: 24px;
    background-color: ${blue.lighter};
    background-image: url(${props => props.linesImg});
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    z-index: 3;
    bottom: -24px;
    width: 100%;
    max-width: 770px;

    @media (min-width: 900px) {
        margin-right: auto;
        margin-left: auto;
    }

    @media (min-width: 1200px) {
        max-width: 1024px;
    }
`

function CourseBullets(props) {
    const { bullets } = props
    return (
        <Container>
            <BulletsContainer>
                {bullets.map((bullet, i) => (
                    <Bullet {...bullet} key={i} />
                ))}
            </BulletsContainer>
            <BlueBar></BlueBar>
        </Container>
    )
}

export default CourseBullets
