import React from "react"
import styled from "styled-components"

const Svg = styled.svg`
    height: 20px;
    width: 20px;
`

export default function Arrow({ className, fill, location }) {
    return (
        <Svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox={location === "precourse" ? "10 10 10 10" : "0 0 24 24"}
            width="24"
            height="24"
        >
            <path fill="none" d="M0 0h24v24H0z" />
            <path fill={fill} d="M12 16l-6-6h12z" />
        </Svg>
    )
}
