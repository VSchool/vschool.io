import React from "react"
import styled from "styled-components"

const BulletContainer = styled.div`
    @media (min-width: 1200px) {
        width: 287px;
    }
`

const H5 = styled.h3`
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
    const { bullet_title, bullet_info } = props
    return (
        <BulletContainer>
            <H5>{bullet_title.text}</H5>
            <P>{bullet_info.text}</P>
        </BulletContainer>
    )
}

export default Bullet
