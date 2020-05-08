import React from "react"
import styled from "styled-components"
import { black } from "@vschool/lotus"

const Container = styled.div`
    display: flex;
    margin-top: 16px;
`

const Image = styled.img`
    width: 32px;
    height: 32px;
`

const Name = styled.p`
    font-size: 12px;
    line-height: 16px;
    font-family: "aktiv-grotesk-extended";
    font-weight: 500;
    letter-spacing: 0.5px;
    margin-left: 8px;
    color: ${black};
`

export default function AuthorBox(props) {
    const { name, profileImg } = props

    return (
        <Container>
            <Image src={profileImg && profileImg} />
            <Name>{name}</Name>
        </Container>
    )
}
