import React from "react"
import styled from "styled-components"
import Bullet from "./Bullet.js"
import { gray, purple } from "@vschool/lotus"

const Container = styled.div`
    padding-top: 56px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    background-color: ${gray.lighter};

    @media (min-width: 840px) {
        padding-left: 44px;
        padding-right: 44px;
    }

    @media (min-width: 1200px) {
        padding-left: 88px;
        padding-right: 88px;
    }
`

const BulletsContainer = styled.div`
    background-color: ${purple.lightest};
    padding-top: 56px;
    padding-left: 32px;
    padding-right: 32px;

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

const PurpleBar = styled.div`
    height: 24px;
    background-color: ${purple.lighter};
    background-image: url(${props => props.linesImg});
    background-position: center;
    background-repeat: no-repeat;

    @media (min-width: 900px) {
        width: 770px;
        margin-right: auto;
        margin-left: auto;
    }

    @media (min-width: 1200px) {
        width: 1024px;
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
