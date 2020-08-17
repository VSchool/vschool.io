import React from "react"
import styled from "styled-components"
import { black } from "@vschool/lotus"

const Container = styled.div`
    display: flex;
    margin-top: 16px;
`

const Image = styled.div`
    background-image: url(${({ src }) => src});
    width: 32px;
    height: 32px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
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
    const { name, profile_image } = props
    return (
        <Container>
            <Image src={profile_image && profile_image} />
            <Name>{name}</Name>
        </Container>
    )
}
