import React from 'react'
import styled from 'styled-components'
import { gray } from '@vschool/lotus'

const StyledButton = styled.button`
    padding: 16px 44px 16px 44px;
    background: ${gray.darker};
    font-family: Aktiv Grotesk Ex;
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 1px;
    color: ${gray.lightest};
    border: 2px solid ${gray.darkest};
    box-sizing: border-box;
    box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.25);
`

export default function Button(props) {
    const { buttonText, className } = props
    
    return <StyledButton className={className}>{buttonText}</StyledButton>
}
