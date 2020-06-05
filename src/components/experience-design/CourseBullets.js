import React from "react"
import styled from "styled-components"
import Bullet from "./Bullet.js"
import { gray, purple } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.lighter};
    padding-top: 56px;
    padding-bottom: 24px;
`

const BulletsContainer = styled.div`
    background-color: ${purple.lightest};
    padding-top: 56px;
    padding-left: 32px;
    padding-right: 32px;
    width: 100%;
    max-width: 770px;

    @media (min-width: 900px) {
        margin-right: auto;
        margin-left: auto;
    }

    @media (min-width: 1200px) {
        display: flex;
        justify-content: space-evenly;
        max-width: 1024px;
    }
`

const PurpleBar = styled.div`
    height: 24px;
    background-color: ${purple.lighter};
    background-image: url(${props => props.linesImg});
    background-position: center;
    background-repeat: no-repeat;
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
    const { bullets, img } = props
    return (
        <Container>
            <BulletsContainer>
                {bullets.map((bullet, i) => (
                    <Bullet {...bullet} key={i} />
                ))}
            </BulletsContainer>
            <PurpleBar linesImg={img} />
        </Container>
    )
}

export default CourseBullets
