import React from "react"
import styled from "styled-components"
import Bullet from "./Bullet.js"
import { gray } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.lighter};
    padding: 24px 24px 96px 24px;
    justify-content: space-between;

    @media (max-width: 360px) {
        padding-left: 0px;
        padding-right: 0px;
    }

    @media (min-width: 1200px) {
        padding-top: 48px;
        padding-bottom: 160px;
    }
`

// This will max width at 850px;
const BulletsContainer = styled.div`
    align-items: center;
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    max-width: 1200px;
    border: 2px solid ${gray.dark};
    padding: 48px 16px 0 16px;
    background-color: ${gray.lightest};

    @media (max-width: 360px) {
        padding-left: 4px;
        padding-right: 4px;
    }
    @media (min-width: 600px) {
        padding-left: 48px;
        padding-right: 48px;
    }

    @media (min-width: 1200px) {
        flex-direction: row;
        align-items: flex-start;
        padding: 24px 16px;
    }
`

export default function CourseBullets(props) {
    const { bullets } = props
    return (
        <Container>
            <BulletsContainer>
                {bullets.map(item => (
                    <Bullet {...item} key={item.bullet_title.text} />
                ))}
            </BulletsContainer>
        </Container>
    )
}
