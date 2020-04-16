import React from "react"
import styled from "styled-components"
import Bullet from "./Bullet.js"
import { gray, black } from "@vschool/lotus"

const Container = styled.div`
    background-color: ${gray.lighter};
    padding: 24px 24px 48px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 400px) {
        padding-left: 16px;
        padding-right: 16px;
    }

    @media (min-width: 600px) {
        padding-left: 48px;
        padding-right: 48px;
    }

    @media (min-width: 1200px) {
        padding: 48px;
    }
`

// This will max width at 850px;
const BulletsContainer = styled.div`
    align-items: center;
    margin-top: 56px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    max-width: 1200px;

    @media (min-width: 1200px) {
      flex-direction: row;
      align-items: flex-start;
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
