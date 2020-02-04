import React from "react"
import styled from "styled-components"
import { black, gray, Button } from "@vschool/lotus"

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${gray.base};
    padding-top: 24px;
    padding-bottom: 24px;

    @media (min-width: 900px) {
        flex-direction: row;
        justify-content: center;
    }
`

const H5 = styled.h5`
    color: ${black};
    font-family: "aktiv-grotesk";
    font-size: 20px;
    font-weight: 800;
    line-height: 26px;
    padding-bottom: 16px;

    @media (min-width: 320px) and (max-width: 400px) {
        font-size: 16px;
    }

    @media (min-width: 900px) {
        margin-right: 16px;
        padding-bottom: 0;
    }
`

const StyledButton = styled(Button)`
    height: 32px;
    outline: none;
`

export default function ContactUs(props) {
    const { title, link, btnText } = props
    return (
        <FlexContainer>
            <H5>{title}</H5>
            <a href={link}>
                <StyledButton buttonStyle="primary-light" buttonSize="sm">
                    {btnText}
                </StyledButton>
            </a>
        </FlexContainer>
    )
}
