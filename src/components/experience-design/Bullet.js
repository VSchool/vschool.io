import React from "react"
import styled from "styled-components"

const BulletContainer = styled.div`
    @media (min-width: 1200px) {
        width: 287px;
    }
`

const H3 = styled.h3`
    color: #21201f;
    font-family: "aktiv-grotesk";
    font-size: 20px;
    line-height: 26px;
    margin: 0;
    padding: 0;
`

const P = styled.p`
    color: #33312e;
    font-family: "aktiv-grotesk";
    font-size: 14px;
    line-height: 22px;
    padding-top: 16px;
    padding-bottom: 32px;
    margin: 0;
`

function Bullet(props) {
    return (
        <BulletContainer>
            <H3>{props.bullet_title.text}</H3>
            <P>{props.bullet_description.text}</P>
        </BulletContainer>
    )
}

export default Bullet
