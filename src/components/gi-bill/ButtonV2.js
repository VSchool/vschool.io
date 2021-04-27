import React from 'react'
import styled from 'styled-components'
import { gray, blue } from '@vschool/lotus'

const StyledButton = styled.button`
    padding: ${props => props.padding};
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border: ${props => props.border};
    box-shadow: ${props => props.boxShadow};
    color: ${props => props.color};
    background: ${props => props.backgroundColor};
    font-family: Aktiv Grotesk Ex;
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 1px;
    text-underline-offset: 4px;
`

export default function ButtonV2(props) {

    const { 
        buttonText, 
        buttonType,
        className,
        onClick
    } = props

    const {
        padding,
        border,
        backgroundColor,
        textDecoration,
        color,
        boxShadow
    } = setButtonType(buttonType)

    function setButtonType(type) {
        if (type === 'primary') {
            return {
                padding: `18px 44px 18px 44px`,
                border: `2px solid ${gray.darkest}`,
                backgroundColor: `${gray.darker}`,
                textDecoration: `none`,
                color: `${gray.lightest}`,
                boxShadow: `4px 4px 0px rgba(0, 0, 0, 0.25)`
            }
        } else if (type === 'text') {
            return {
                padding: `4px 0px 4px 0px`,
                border: `none`,
                backgroundColor: `none`,
                textDecoration: `underline`,
                color: `${blue.base}`,
                boxShadow: `none`
            }
        }
    }

    // console.log(setButtonType(buttonType).color)

    return  <StyledButton
                className={className}
                padding={padding}
                border={border}
                backgroundColor={backgroundColor}
                textDecoration={textDecoration}
                color={color}
                boxShadow={boxShadow}
            >{buttonText}</StyledButton>
}
