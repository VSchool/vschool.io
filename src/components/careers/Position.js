import { blue, gray } from "@vschool/lotus"
import React from "react"
import QueryLink from "../shared/QueryLink.js"
import styled from "styled-components"

const PositionContainer = styled.div`
    padding: 24px;
    max-width: 672px;
    width: 100%;
    border-top: 2px solid ${gray.base};
    border-bottom: ${props =>
        props.borderBottom ? "2px solid " + gray.base : "none"};

    @media (min-width: 600px) {
        margin-left: 32px;
        margin-right: 32px;
    }

    @media (min-width: 840px) {
        line-height: 46px;
    }

    @media (min-width: 960px) {
        margin-left: 80px;
        margin-right: 80px;
    }

    @media (min-width: 1200px) {
        margin-left: 100px;
        margin-right: 100px;
    }
`

const Anchor = styled(QueryLink)`
    /* TEMPORARY COLOR */
    color: ${blue.base};
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    text-decoration: none;
`

export default function Position(props) {
    const { position_title, borderBottom, position_link } = props
    return (
        <PositionContainer borderBottom={borderBottom}>
            <Anchor to={position_link.url}>{position_title.text}</Anchor>
        </PositionContainer>
    )
}
