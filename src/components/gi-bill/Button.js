import React from 'react'
import styled from 'styled-components'
import { gray, blue } from '@vschool/lotus'

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    padding: ${props => props.padding};
    height: 56px;
    border-top: ${props => props.borderTop};
    border-right: ${props => props.borderRight};
    border-bottom: ${props => props.borderBottom};
    border-left: ${props => props.borderLeft};
    color: ${props => props.color};
    background: ${props => props.backgroundColor};
    font-family: Aktiv Grotesk Ex;
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 1px;
    border: 1px dotted orange;
`

export default function Button(props) {
    const { buttonText, className, buttonType } = props

    function setButtonType(type) {
        if (type === 'text') {
            return {
                padding: `4px 4px 4px 4px`,
                backgroundColor: `none`,
                borderTop: `none`,
                borderRight: `none`,
                borderBottom: `1px solid ${blue.base}`,
                borderLeft: `none`,
                color: `${blue.base}`
            }
        } else if (type === 'primary') {
            return {
                padding: `20px 44px 20px 44px`,
                backgroundColor: `${gray.darker}`,
                borderTop: `2px solid ${gray.darkest}`,
                borderRight: `2px solid ${gray.darkest}`,
                borderBottom: `2px solid ${gray.darkest}`,
                borderLeft: `2px solid ${gray.darkest}`,
                color: `${gray.lightest}`
            }
        }
    }

    const { 
        color,
        backgroundColor,
        borderTop,
        borderRight,
        borderBottom,
        borderLeft,
        padding
    } = setButtonType(buttonType)

    return  <StyledButton 
                className={className}
                color={color}
                backgroundColor={backgroundColor}
                borderTop={borderTop}
                borderRight={borderRight}
                borderBottom={borderBottom}
                borderLeft={borderLeft}
                padding={padding}
            >{buttonText}</StyledButton>
}
