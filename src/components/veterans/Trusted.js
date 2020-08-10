import React from "react"
import styled from "styled-components"
import { gray, black } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.lighter};
    padding-top: 64px;
    padding-bottom: 128px;

    @media (min-width: 840px) {
        padding-bottom: 192px;
        padding-top: 96px;
    }

    @media (min-width: 1200px) {
        padding-top: 160px;
        padding-bottom: 320px;
    }
`

const H3 = styled.h3`
    color: ${black};
    font-size: 32px;
    font-weight: 900;
    line-height: 40px;
    text-align: center;
    margin-bottom: 56px;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 320px) and (max-width: 414px) {
        font-size: 28px;
    }

    @media (min-width: 420px) {
        width: 380px;
    }

    @media (min-width: 840px) {
        font-size: 38px;
        width: 500px;
        line-height: 44px;
    }

    @media (min-width: 1200px) {
        width: 584px;
        margin-left: auto;
        margin-right: auto;
        font-size: 44px;
        line-height: 48px;
        margin-bottom: 72px;
    }
`

const BulletsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1100px) {
        flex-direction: row;
        justify-content: center;
    }
`

const Bullet = styled.div`
    width: 100%;
    max-width: 320px;
    margin: 16px 0;

    @media (min-width: 1100px) {
        margin: 0 16px;
    }
`

const BulletHeader = styled.h3`
    color: ${black};
    line-height: 30px;
    font-weight: 800;
    margin-bottom: 16px;
    font-size: 24px;
`

const BulletText = styled.p`
    color: #514f4b;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
`

export default function Trusted(props) {
    const { header, bullets } = props
    return (
        <Container>
            <H3>{header}</H3>
            <BulletsContainer>
                {bullets.map((b, i) => (
                    <Bullet key={b.bullet_header.text + i}>
                        <BulletHeader>{b.bullet_header.text}</BulletHeader>
                        <BulletText>{b.bullet_info.text}</BulletText>
                    </Bullet>
                ))}
            </BulletsContainer>
        </Container>
    )
}
