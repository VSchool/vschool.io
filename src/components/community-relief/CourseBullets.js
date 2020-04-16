import React from "react"
import styled from "styled-components"
import Bullet from "./Bullet.js"
import { gray, black } from "@vschool/lotus"

const Container = styled.div`
    background-color: ${gray.lightest};
    padding: 48px 24px;
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
        padding: 96px;
    }
`

// Can use this for a header of this section if one is added
// const H3 = styled.h3`
//     color: ${black};
//     font-family: "aktiv-grotesk";
//     font-size: 32px;
//     font-weight: 900;
//     text-align: center;
//     width: 320px;
//     margin-left: auto;
//     margin-right: auto;

//     @media (min-width: 320px) and (max-width: 400px) {
//         font-size: 28px;
//         width: 286px;
//     }

//     @media (min-width: 840px) {
//         width: 628px;
//         font-size: 40px;
//     }

//     @media (min-width: 1200px) {
//         margin-left: auto;
//         margin-right: auto;
//         font-size: 48px;
//     }
// `

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
