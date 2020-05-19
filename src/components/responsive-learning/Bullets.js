import React from "react"
import styled from "styled-components"
import { green, black, gray } from "@vschool/lotus"

const BulletsContainer = styled.div`
    margin-top: 48px;

    & div:nth-child(6) {
        border-bottom: 2px solid ${green.light};
    }
`

const Bullet = styled.div`
    border-top: 2px solid ${green.light};
    padding: 8px 0;
`

const BulletText = styled.p`
    font-family: "aktiv-grotesk";
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    color: ${black};
`

export default function Bullets(props) {
    const { bullets } = props
    return (
        <BulletsContainer>
            {bullets.map(({ bullet }) => (
                <Bullet key={bullet.text ? bullet.text : bullet}>
                    <BulletText>
                        {bullet.text ? bullet.text : bullet}
                    </BulletText>
                </Bullet>
            ))}
        </BulletsContainer>
    )
}
