import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"
import Link from "../shared/QueryLink"
import { blue, black, green, gray } from "@vschool/lotus"

const Container = styled.div`
    margin-bottom: 56px;
    width: 100%;
    max-width: 392px;

    position: relative;

    @media (max-width: 370px) {
    }
`

const Tag = styled.div`
    color: ${green.base};
    font-family: "aktiv-grotesk-extended";
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.25px;
    margin-bottom: 8px;
`

const Header = styled.h3`
    color: ${black};
    font-family: "aktiv-grotesk";
    font-size: 24px;
    font-weight: 800;
    margin-bottom: 16px;

    @media (max-width: 400px) {
        font-size: 22px;
    }
`

const Info = styled.p`
    color: ${gray.darker};
    font-family: "aktiv-grotesk";
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    margin-bottom: 16px;

    @media (max-width: 400px) {
        font-size: 15px;
    }
`

const Links = styled.div`
    display: flex;
    width: 75%;
    justify-content: space-between;

    @media (max-width: 360px) {
        width: 90%;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${blue.base};
    font-family: "aktiv-grotesk-extended";
    font-size: 14px;
    letter-spacing: 1px;
    font-weight: 800;
`

export default function TalkingPoint(props) {
    const {
        header,
        info,
        link,
        link2,
        link_text,
        link2_text,
        sub_header,
    } = props
    return (
        <Container>
            <Tag>{sub_header.text}</Tag>
            <Header>{header.text}</Header>
            <Info>{info.text}</Info>
            <Links>
                <StyledLink to={link.url}>{link_text.text}</StyledLink>
                <StyledLink to={link2 ? link2.url : ""}>
                    {link2_text.text}
                </StyledLink>
            </Links>
        </Container>
    )
}
