import React from "react"
import styled from "styled-components"
import { gray, black } from "@vschool/lotus"

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 34px;
    padding-bottom: 96px;
    background-color: ${gray.lighter};

    @media (min-width: 1200px) {
        padding-bottom: 160px;
    }
`

const Button = styled.button`
    height: 48px;
    width: 256px;
    color: ${black};
    font-family: "aktiv-grotesk-extended";
    font-size: 14px;
    font-weight: 800;
    letter-spacing: 1px;
    line-height: 16px;
    text-align: center;
    border: 2px solid ${black};
    background-color: ${gray.lighter};
    margin: 0 auto;
    box-shadow: 4px 4px 0 0 rgba(0, 0, 0, 0.2);
    outline: none;

    :hover {
        transform: translate(2px, 2px);
        box-shadow: 2px 2px 0 0 rgba(100, 100, 100, 0.5);
    }

    :active {
        transform: translate(4px, 4px);
        box-shadow: inset 1px 1px #eee9;
        border-top: 1px solid #eee9;
        border-left: 1px solid #eee9;
    }
`

function DownloadSyllabus(props) {
    return (
        <FlexContainer>
            <Button>Download Full Syllabus</Button>
        </FlexContainer>
    )
}

export default DownloadSyllabus
