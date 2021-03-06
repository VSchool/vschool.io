import React from "react"
import styled from "styled-components"
import { green, black } from "@vschool/lotus"

const BulletsContainer = styled.div`
    margin-top: 48px;

    & div:nth-child(6) {
        border-bottom: 2px solid ${green.light};
    }

    @media (min-width: 1200px) {
        display: grid;
        grid-template-columns: 408px 408px;

        & div:nth-child(odd) {
            margin-right: 34px;
        }

        & div:nth-child(5) {
            border-bottom: 2px solid ${green.light};
        }
    }
`

const Bullet = styled.div`
    border-top: 2px solid ${green.light};
    padding: 8px 0;

    @media (min-width: 1200px) {
    }
`

const BulletText = styled.p`
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
