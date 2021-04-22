import React from 'react'
import styled from 'styled-components'
import { gray } from '@vschool/lotus'

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    padding: 20px 44px 20px 44px;
    height: 56px;
    border: 2px solid ${gray.darkest};
    color: ${gray.lightest};
    background: ${gray.darker};
    font-family: Aktiv Grotesk Ex;
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 1px;
`

export default function Button(props) {
    const { buttonText, className } = props

    return <StyledButton className={className}>{buttonText}</StyledButton>
}
